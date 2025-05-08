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
  title = 'BitNet - Complete Bitcoin Ecosystem in One Wallet',
  description = 'BitNet - Your Complete Bitcoin Ecosystem in One Wallet. Self-Custody, Lightning-Fast, and Community-Driven Bitcoin Solutions for Web3.',
  keywords = 'bitcoin wallet, web3, self-custody, bitcoin ecosystem, lightning network, bitcoin payments, blockchain, digital collectibles',
  image = '/logo.png',
  url = 'https://www.bitnet.com',
  type = 'website',
  canonical = 'https://www.bitnet.com',
  children,
}: SEOProps) => {
  const siteUrl = 'https://www.bitnet.com';
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