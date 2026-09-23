import React, { useState } from 'react';
import { Product } from '../types';
import { Sparkles, ImageOff } from 'lucide-react';

interface ProductVisualProps {
  product: Product;
  isHovered?: boolean;
  activeColorIndex?: number;
  className?: string;
  isDetailView?: boolean;
}

export const ProductVisual: React.FC<ProductVisualProps> = ({
  product,
  isHovered = false,
  activeColorIndex = 0,
  className = '',
  isDetailView = false,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const currentColor = product.colorHexes[activeColorIndex] || product.colorHexes[0] || '#334155';

  const isRealPhoto = product.image && (product.image.startsWith('http://') || product.image.startsWith('https://'));

  // SVG Fallback Graphic renderer if image is SVG or fails to load
  const renderFallbackSvg = () => {
    switch (product.image) {
      case 'hoodie':
      case 'pullover':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-w-[220px] drop-shadow-md transition-all duration-300">
            <defs>
              <linearGradient id={`grad-hoodie-${product.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={currentColor} stopOpacity="0.95" />
                <stop offset="100%" stopColor={currentColor} stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <g className={`transition-transform duration-500 origin-center ${isHovered ? 'scale-105' : 'scale-100'}`}>
              <path d="M 50 65 L 75 45 L 125 45 L 150 65 L 140 160 L 60 160 Z" fill={`url(#grad-hoodie-${product.id})`} rx="8" />
              <path d="M 72 45 C 72 30 128 30 128 45 C 120 70 80 70 72 45 Z" fill={currentColor} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
              <path d="M 68 115 L 132 115 L 124 148 L 76 148 Z" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="2" strokeDasharray="2,2" />
              <circle cx="130" cy="95" r="4.5" fill="#4285F4" opacity="0.9" />
              <path d="M 50 65 L 35 125 L 48 132 L 60 90" fill={currentColor} opacity="0.9" />
              <path d="M 150 65 L 165 125 L 152 132 L 140 90" fill={currentColor} opacity="0.9" />
              <rect x="58" y="152" width="84" height="10" rx="3" fill="rgba(0,0,0,0.1)" />
            </g>
          </svg>
        );

      case 'tumbler':
      case 'bottle':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-w-[190px] drop-shadow-md">
            <defs>
              <linearGradient id={`grad-tumbler-${product.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={currentColor} stopOpacity="0.9" />
                <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.25" />
                <stop offset="70%" stopColor={currentColor} stopOpacity="1" />
                <stop offset="100%" stopColor={currentColor} stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <g className={`transition-transform duration-500 origin-center ${isHovered ? 'scale-105 -rotate-2' : 'scale-100'}`}>
              <ellipse cx="100" cy="175" rx="36" ry="7" fill="rgba(0,0,0,0.08)" />
              <path d="M 72 55 L 77 165 C 78 171 122 171 123 165 L 128 55 Z" fill={`url(#grad-tumbler-${product.id})`} rx="6" />
              <rect x="70" y="48" width="60" height="9" rx="3" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
              <rect x="74" y="38" width="52" height="11" rx="4" fill="#334155" />
              <text x="100" y="125" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8" fontWeight="600" letterSpacing="3">
                GOOGLE
              </text>
            </g>
          </svg>
        );

      default:
        return (
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-xs border border-slate-200/80 flex items-center justify-center mb-3">
              <Sparkles className="w-7 h-7 text-blue-600" />
            </div>
            <span className="text-xs font-semibold text-slate-700">{product.name}</span>
            <span className="text-[10px] text-slate-400 mt-0.5">Google Merchandise Official</span>
          </div>
        );
    }
  };

  return (
    <div
      className={`relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${
        product.visualTheme?.bg || 'from-slate-50 to-slate-100'
      } ${className}`}
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Brand Pill badge if brand is special */}
      {product.brand && product.brand !== 'Google' && !isDetailView && (
        <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
          <span className="text-[10px] font-semibold tracking-tight px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-slate-700 shadow-xs border border-slate-200/60">
            {product.brand}
          </span>
        </div>
      )}

      {/* Real Product Photo from shop.merch.google */}
      {isRealPhoto && !imgError ? (
        <div className="relative w-full h-full flex items-center justify-center p-4">
          {/* Skeleton Shimmer while loading */}
          {!imgLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100/70 animate-pulse">
              <div className="w-24 h-24 rounded-full bg-slate-200/80" />
            </div>
          )}

          <img
            src={product.image}
            alt={product.name}
            loading={isDetailView ? 'eager' : 'lazy'}
            onLoad={() => setImgLoaded(true)}
            onError={() => {
              setImgError(true);
              setImgLoaded(true);
            }}
            className={`w-full h-full object-contain transition-all duration-500 origin-center drop-shadow-sm ${
              isHovered ? 'scale-105' : 'scale-100'
            } ${imgLoaded ? 'opacity-100' : 'opacity-0'} ${
              isDetailView ? 'max-h-[380px]' : 'max-h-[220px]'
            }`}
          />
        </div>
      ) : (
        /* Fallback Graphic */
        renderFallbackSvg()
      )}
    </div>
  );
};
