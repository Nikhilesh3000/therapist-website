export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://therapist-website-alpha-pied.vercel.app/#/sitemap.xml',
  }
}