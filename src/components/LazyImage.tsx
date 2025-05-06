import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  placeholderColor?: string;
  'data-srcset'?: string;
  'data-sizes'?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  style = {},
  placeholderColor = '#1c1c24',
  'data-srcset': srcSet,
  'data-sizes': sizes
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create IntersectionObserver to detect when the image is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        // Start loading when the image is 200px before it comes into view
        rootMargin: '200px',
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  // Combine provided styles with default styles
  const combinedStyles = {
    ...style,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    objectFit: 'cover' as const, // TypeScript needs this type assertion
    backgroundColor: placeholderColor,
  };

  // Create a containerStyle that includes position properties and margin/padding from style
  const containerStyle = {
    position: 'relative' as const,
    overflow: 'hidden' as const,
    height: style.height,
    width: style.width,
    margin: style.margin,
    marginTop: style.marginTop,
    marginRight: style.marginRight,
    marginBottom: style.marginBottom,
    marginLeft: style.marginLeft,
    padding: style.padding,
    paddingTop: style.paddingTop,
    paddingRight: style.paddingRight,
    paddingBottom: style.paddingBottom,
    paddingLeft: style.paddingLeft,
  };

  // Remove margin and padding from the image style to avoid duplication
  const imageStyle = { ...combinedStyles };
  delete imageStyle.margin;
  delete imageStyle.marginTop;
  delete imageStyle.marginRight;
  delete imageStyle.marginBottom;
  delete imageStyle.marginLeft;
  delete imageStyle.padding;
  delete imageStyle.paddingTop;
  delete imageStyle.paddingRight;
  delete imageStyle.paddingBottom;
  delete imageStyle.paddingLeft;

  return (
    <div ref={imgRef} style={containerStyle}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={className}
          style={imageStyle}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          srcSet={srcSet}
          sizes={sizes}
        />
      )}
    </div>
  );
};

export default LazyImage;