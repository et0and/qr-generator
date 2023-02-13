/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  defaultTitle: "QR Generator",
  description: "A simple web app to generate the QR Code.",
  canonical: "https://qr.tewahi.com",
  openGraph: {
    url: "https://qr.tewahi.com",
    title: "QR Generator",
    description: "A simple web app to generate the QR Code.",
    type: "website",
    images: [
      {
        url: "https://cdn.tewahi.me/qr.png",
        alt: "qr-code",
        width: 1200,
        height: 630,
      },
    ],
    site_name: "qr-code",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://cdn.tewahi.me/qrfav.png",
    },
  ],
};

export default defaultSEOConfig;
