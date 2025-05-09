import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  canonical?: string;
  children?: React.ReactNode;
}

const SEO = ({
  title = 'Trusted Secure Crypto Wallet Solution Online | BitNet',
  description = 'Protect your digital assets with a trusted, secure crypto wallet. Access your funds anytime, anywhere with top-tier encryption and user-friendly features.',
  keywords = 'Crypto Wallet Private Key, mobile crypto wallet, crypto wallet for beginners, secure crypto wallet solution, Buy digital collectibles, Create NFT marketplace, NFT collection platform, NFT trading platform, NFT wallet integration',
  image = '/logo.png',
  url = 'https://bitnet.ai',
  type = 'website',
  canonical = 'https://bitnet.ai',
  children,
}: SEOProps) => {
  const siteUrl = 'https://bitnet.ai';
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional meta tags */}
      <meta name="author" content="BitNet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Additional meta tags or structured data provided as children */}
      {children}
    </Helmet>
  );
};

export default SEO;