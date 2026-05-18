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
    "title": "Buy & Trade Bitcoin, Ethereum & 100+ Cryptos | BitZup",
    "description": "Trade Bitcoin, Ethereum, and 100+ digital assets on BitZup. Tight spreads, low fees, high-APY earn products, and bank-grade security. Sign up in minutes."
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
    console.log(`📝 Pre-rendering route: "${route}"`);

    // Build the dynamic SEO, Open Graph and Twitter tags block
    const seoTags = `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://bitzup.com${route}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="https://bitzup.com/Bitzup.png" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://bitzup.com${route}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="https://bitzup.com/Bitzup.png" />
    `;

    // First, remove any existing description tag from the base template to avoid duplicates
    let modifiedHtml = baseHtml.replace(/<meta[^>]*?name="description"[^>]*?>/gi, '');
    // Then, replace the title tag with our dynamic SEO tags block
    modifiedHtml = modifiedHtml.replace(/<title>[\s\S]*?<\/title>/i, seoTags.trim());

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
