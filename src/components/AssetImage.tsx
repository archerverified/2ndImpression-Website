import { useState } from 'react';

interface AssetImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

/**
 * A reusable image component with fallback placeholder handling.
 * Matches the reference app behavior to avoid broken logo/avatar rendering.
 */
export function AssetImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  width,
  height,
  style,
}: AssetImageProps) {
  const [hasError, setHasError] = useState(false);

  const placeholderSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width || 200}' height='${height || 100}' viewBox='0 0 ${width || 200} ${height || 100}' fill='none'%3E%3Crect width='100%25' height='100%25' fill='%23E5E7EB'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236B7280' font-family='sans-serif' font-size='12'%3E${encodeURIComponent(
    alt
  )}%3C/text%3E%3C/svg%3E`;

  return (
    <img
      src={hasError ? placeholderSvg : src}
      alt={alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
      style={style}
      onError={() => setHasError(true)}
    />
  );
}

