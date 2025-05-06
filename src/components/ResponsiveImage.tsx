import React from 'react';
import LazyImage from './LazyImage';

interface ResponsiveImageProps {
  src: {
    small: string;
    medium?: string;
    large?: string;
    default: string;
  };
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
}

/**
 * ResponsiveImage component that provides proper responsive image loading
 * with different image sizes for different screen sizes
 */
const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  style = {},
  sizes = '(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw'
}) => {
  // Default image path for browsers that don't support srcSet
  const defaultSrc = src.default;

  // Generate srcset string for different image sizes
  const srcSet = [
    src.small && `${src.small} 480w`,
    src.medium && `${src.medium} 768w`,
    src.large && `${src.large} 1280w`,
    `${src.default} 1920w`
  ].filter(Boolean).join(', ');

  return (
    <LazyImage
      src={defaultSrc}
      alt={alt}
      className={className}
      style={{
        ...style,
        // Add additional styles for responsive images
        maxWidth: '100%',
        height: 'auto',
        ...style
      }}
      data-srcset={srcSet}
      data-sizes={sizes}
    />
  );
};

export default ResponsiveImage;