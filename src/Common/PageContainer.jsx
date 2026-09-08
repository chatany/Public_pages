/**
 * PageContainer — Shared layout wrapper for consistent max-width + responsive padding.
 *
 * Tokens:
 *   max-w-7xl  = 1280px
 *   px-5       = 20px  (mobile)
 *   md:px-8    = 32px  (768px+)
 *   lg:px-12   = 48px  (1024px+)
 *   xl:px-16   = 64px  (1280px+)
 *
 * Usage:
 *   <PageContainer>…content…</PageContainer>
 *   <PageContainer className="mt-20" as="section">…</PageContainer>
 */
export default function PageContainer({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag
      className={`w-full mx-auto px-5 md:px-8 lg:px-12 xl:px-16 ${className}`}
    >
      {children}
    </Tag>
  );
}
