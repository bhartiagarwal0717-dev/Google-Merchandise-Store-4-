import React, { useState } from 'react';
import { Heart, Plus, Star, Check } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';
import { ProductVisual } from './ProductVisual';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { openProductDetail, addToCart, toggleWishlist, isWishlisted } = useStore();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  const wishlisted = isWishlisted(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1, product.colors[selectedColorIndex]);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const handleCardClick = () => {
    openProductDetail(product);
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-white border border-slate-200/90 rounded-2xl p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
    >
      {/* Visual Image Container */}
      <div className="relative rounded-xl overflow-hidden mb-3.5 bg-slate-50">
        <ProductVisual
          product={product}
          isHovered={isHovered}
          activeColorIndex={selectedColorIndex}
        />

        {/* Top Badges / Indicators */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10 pointer-events-none">
          {product.isBestSeller && (
            <span className="text-[11px] font-semibold text-slate-800 bg-white/95 backdrop-blur px-2 py-0.5 rounded shadow-xs">
              Best Seller
            </span>
          )}
          {product.isNew && (
            <span className="text-[11px] font-semibold text-blue-700 bg-blue-50/95 backdrop-blur px-2 py-0.5 rounded shadow-xs">
              New Arrival
            </span>
          )}
        </div>

        {/* Wishlist Button (Min 44x44px hitbox) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute top-2 right-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/90 backdrop-blur hover:bg-white text-slate-600 hover:text-slate-900 transition-colors shadow-xs z-10 cursor-pointer"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              wishlisted ? 'text-rose-600 fill-rose-600' : 'text-slate-500'
            }`}
          />
        </button>

        {/* Desktop Hover Quick Add overlay */}
        <div className="hidden lg:block absolute bottom-3 left-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={handleQuickAdd}
            className={`w-full h-10 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer ${
              justAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Quick Add</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="flex flex-col flex-1">
        {/* Category & Rating */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
          <span className="text-[11px] font-medium tracking-wide uppercase text-slate-500 truncate max-w-[170px]">
            {product.brand && product.brand !== 'Google' ? `${product.brand} · ${product.category}` : product.category}
          </span>
          <div className="flex items-center gap-1 text-slate-700 shrink-0">
            <Star className="w-3 h-3 text-amber-500 fill-amber-400" />
            <span className="font-semibold text-xs tabular-nums">{product.rating}</span>
            <span className="text-slate-400 text-[11px]">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="text-sm font-semibold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors mb-2">
          {product.name}
        </h3>

        {/* Color swatches preview */}
        {product.colorHexes.length > 1 && (
          <div
            className="flex items-center gap-1.5 mb-3"
            onClick={(e) => e.stopPropagation()}
          >
            {product.colorHexes.map((hex, idx) => (
              <button
                key={hex + idx}
                onClick={() => setSelectedColorIndex(idx)}
                aria-label={`Select color ${product.colors[idx]}`}
                className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                  selectedColorIndex === idx
                    ? 'ring-2 ring-blue-500 ring-offset-1 border-transparent scale-110'
                    : 'border-slate-300 hover:scale-105'
                }`}
                style={{ backgroundColor: hex }}
              />
            ))}
            <span className="text-[11px] text-slate-400 ml-1">
              {product.colors.length} shades
            </span>
          </div>
        )}

        {/* Bottom Row: Price & Mobile Touch Add Button */}
        <div className="mt-auto pt-2 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-slate-900 tabular-nums">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through tabular-nums">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Mobile visible Quick Add trigger (min 44x44px hitbox) */}
          <button
            onClick={handleQuickAdd}
            aria-label={`Add ${product.name} to cart`}
            className={`lg:hidden min-w-[44px] min-h-[44px] -mr-1 flex items-center justify-center rounded-xl transition-all cursor-pointer ${
              justAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
            }`}
          >
            {justAdded ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
