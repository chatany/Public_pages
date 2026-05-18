import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, 'dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

// Exact SEO metadata mapping extracted from components
const seoData = {
  "/": {
    "title": "BitZup — Crypto exchange for serious traders",
    "description": "Trade Bitcoin, Ethereum, and 100+ digital assets on BitZup. Low fees, deep liquidity, built for VIP and institutional traders.",
    "ogDescription": "Trade Bitcoin, Ethereum, and 100+ digital assets on BitZup."
  },
  "/aml-policy": {
    "title": "BitZup AML & CFT Policy",
    "description": "Read BitZup's Anti-Money Laundering and Counter-Financing of Terrorism policy. How we screen users, monitor activity, and comply with FIU regulations."
  },
  "/referral": {
    "title": "Refer Friends to BitZup — Earn Up to 30% Commission",
    "description": "Refer friends to BitZup and earn up to 30% of their trading fees. Share your link, track rewards in real time, and build passive crypto income."
  },
  "/careers": {
    "title": "Careers at BitZup — Build Your Future in Crypto",
    "description": "Explore open roles at BitZup. Join a global team building the next generation of crypto trading, earn, and Web3 products — with competitive pay and flexible hours."
  },
  "/vip": {
    "title": "BitZup VIP — Lower Fees, Higher Limits, Elite Perks",
    "description": "Become a BitZup VIP. Unlock the lowest trading fees, higher withdrawal limits, priority support, and exclusive rewards built for high-volume traders."
  },
  "/invest": {
    "title": "Auto Invest Crypto on BitZup — DCA Made Simple",
    "description": "Set recurring buys for Bitcoin, Ethereum, and more on BitZup. Dollar-cost average into crypto on your schedule — daily, weekly, or monthly. Start from any amount."
  },
  "/verification": {
    "title": "BitZup KYC Verification — Secure Your Account",
    "description": "Complete your BitZup KYC in minutes. Upload your ID and selfie to unlock trading, higher withdrawal limits, and a fully secured account."
  },
  "/request": {
    "title": "Submit a Request - BitZup",
    "description": "Need help? Submit a request to BitZup support. Our team is here to assist you with any questions or issues you may have."
  },
  "/risk-disclosure": {
    "title": "Risk Disclosure - BitZup",
    "description": "Understand the risks associated with trading digital assets. Read our comprehensive risk disclosure statement before you start trading."
  },
  "/trading-policy": {
    "title": "BitZup Trading Policy",
    "description": "Read the BitZup Trading Policy. Permitted activities, fees, compliance checks, market integrity rules, and the standards that govern every trade."
  },
  "/cookies-policy": {
    "title": "Cookie Policy - BitZup",
    "description": "Learn how we use cookies to improve your experience, analyze site traffic, and provide personalized content."
  },
  "/privacy-policy": {
    "title": "Privacy Policy - BitZup",
    "description": "Read our privacy policy to learn how we collect, use, and protect your personal information on the BitZup platform."
  },
  "/user-agreement": {
    "title": "User Agreement - BitZup",
    "description": "Read the BitZup User Agreement to understand the terms and conditions for using our platform and services."
  },
  "/terms-of-use": {
    "title": "Terms of Use - BitZup",
    "description": "Read the BitZup Terms of Use to understand the legal agreement between you and BitZup regarding your use of our platform."
  }
};

function run() {
  console.log('🚀 Starting SEO Pre-renderer post-build process...');

  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`❌ Build template not found at ${TEMPLATE_PATH}. Please run "npm run build" first.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

  Object.entries(seoData).forEach(([route, meta]) => {
    const { title, description } = meta;
    const ogDesc = meta.ogDescription || description;
    const themeColor = meta.themeColor || '#0B0E11';
    console.log(`📝 Pre-rendering route: "${route}"`);

    // Build the dynamic SEO, Open Graph and Twitter tags block
    const seoTags = `
    <title>${title}</title>
    <meta name="title" content="${title}" />
    <meta name="description" content="${description}" />
    <meta name="theme-color" content="${themeColor}" />
    
    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://bitzup.com${route}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${ogDesc}" />
    <meta property="og:image" content="https://bitzup.com/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://bitzup.com${route}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${ogDesc}" />
    <meta name="twitter:image" content="https://bitzup.com/og-image.png" />

    <!-- Canonical Link -->
    <link rel="canonical" href="https://bitzup.com${route === '/' ? '' : route}" />`;

    // Strip out all pre-existing SEO, Open Graph, Twitter and title tags from base template to avoid duplicates
    let modifiedHtml = baseHtml;
    modifiedHtml = modifiedHtml.replace(/<title>[\s\S]*?<\/title>/gi, '');
    modifiedHtml = modifiedHtml.replace(/<meta[^>]*?(name|property)="(title|description|theme-color|og:type|og:url|og:title|og:description|og:image|og:image:width|og:image:height|twitter:card|twitter:url|twitter:title|twitter:description|twitter:image)"[^>]*?>/gi, '');
    modifiedHtml = modifiedHtml.replace(/<link[^>]*?rel="canonical"[^>]*?>/gi, '');

    // Insert the dynamic SEO tags right after the <meta charset="UTF-8" /> tag
    modifiedHtml = modifiedHtml.replace(/<meta charset="UTF-8" \/>/i, `<meta charset="UTF-8" />\n${seoTags.trim()}`);

    if (route === '/') {
      // For home page, overwrite the main index.html file in dist/
      fs.writeFileSync(TEMPLATE_PATH, modifiedHtml, 'utf-8');
      console.log(`✅ Successfully updated home route "/" -> dist/index.html`);
    } else {
      // For sub-routes, create a nested folder and write index.html inside it
      const targetDir = path.join(DIST_DIR, route);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      const targetFile = path.join(targetDir, 'index.html');
      fs.writeFileSync(targetFile, modifiedHtml, 'utf-8');
      console.log(`✅ Successfully generated sub-route "${route}" -> dist${route}/index.html`);
    }
  });

  console.log('🎉 Static SEO pre-rendering process completed successfully!');
}

run();
