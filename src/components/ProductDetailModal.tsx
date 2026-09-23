import React, { useState } from 'react';
import { X, Star, Truck, ShieldCheck, RefreshCw, ShoppingBag, Zap, Heart, Check, ChevronRight, ExternalLink } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductVisual } from './ProductVisual';

export const ProductDetailModal: React.FC = () => {
  const {
    selectedProduct,
    closeProductDetail,
    addToCart,
    toggleWishlist,
    isWishlisted,
    setIsCartOpen,
    setIsCheckoutOpen,
    products,
    openProductDetail,
    trackEvent,
  } = useStore();

  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'materials' | 'shipping'>('overview');
  const [isAddedAnimation, setIsAddedAnimation] = useState(false);

  if (!selectedProduct) return null;

  const product = selectedProduct;
  const wishlisted = isWishlisted(product.id);

  // Recommendations: Similar products & Complete the look
  const recommendations = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.isFeatured))
    .slice(0, 3);

  const handleAddToCart = () => {
    const chosenSize = selectedSize || (product.sizes ? product.sizes[0] : undefined);
    addToCart(product, quantity, product.colors[selectedColorIdx], chosenSize);
    setIsAddedAnimation(true);
    setTimeout(() => setIsAddedAnimation(false), 1500);
  };

  const handleBuyNow = () => {
    const chosenSize = selectedSize || (product.sizes ? product.sizes[0] : undefined);
    addToCart(product, quantity, product.colors[selectedColorIdx], chosenSize);
    trackEvent('begin_checkout', `Direct 1-Tap "Buy Now" for: ${product.name}`);
    closeProductDetail();
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white sticky top-0 z-20">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Shop</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-800 font-medium">{product.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleWishlist(product.id)}
              aria-label="Wishlist"
              className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
            >
              <Heart
                className={`w-4 h-4 ${wishlisted ? 'text-rose-600 fill-rose-600' : ''}`}
              />
            </button>
            <button
              onClick={closeProductDetail}
              aria-label="Close dialog"
              className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-8 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Gallery Column (Sticky left on desktop) */}
            <div className="md:col-span-6 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-xs">
                <ProductVisual
                  product={product}
                  isHovered={false}
                  activeColorIndex={selectedColorIdx}
                  isDetailView={true}
                  className="!aspect-[4/3]"
                />
              </div>

              {/* Multiple Product View Angles thumbnail preview */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="border-2 border-slate-900 rounded-xl p-1 bg-white text-center text-[10px] font-semibold text-slate-800 cursor-pointer">
                  Angle 01: Front
                </div>
                <div className="border border-slate-200 hover:border-slate-400 rounded-xl p-1 bg-slate-50 text-center text-[10px] font-medium text-slate-600 cursor-pointer">
                  Angle 02: Macro Detail
                </div>
                <div className="border border-slate-200 hover:border-slate-400 rounded-xl p-1 bg-slate-50 text-center text-[10px] font-medium text-slate-600 cursor-pointer">
                  Angle 03: In Use
                </div>
              </div>

              {/* Trust Badge Bar */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-center text-slate-600 border-t border-slate-100">
                <div className="flex flex-col items-center p-2 rounded-lg bg-slate-50">
                  <Truck className="w-4 h-4 text-blue-600 mb-1" />
                  <span className="text-[11px] font-semibold text-slate-800">Carbon Neutral</span>
                  <span className="text-[10px] text-slate-500">2-3 day shipping</span>
                </div>
                <div className="flex flex-col items-center p-2 rounded-lg bg-slate-50">
                  <RefreshCw className="w-4 h-4 text-emerald-600 mb-1" />
                  <span className="text-[11px] font-semibold text-slate-800">30-Day Returns</span>
                  <span className="text-[10px] text-slate-500">Free exchange</span>
                </div>
                <div className="flex flex-col items-center p-2 rounded-lg bg-slate-50">
                  <ShieldCheck className="w-4 h-4 text-amber-600 mb-1" />
                  <span className="text-[11px] font-semibold text-slate-800">Authentic</span>
                  <span className="text-[10px] text-slate-500">Official Google gear</span>
                </div>
              </div>
            </div>

            {/* Contiguous Purchase Module Column */}
            <div className="md:col-span-6 flex flex-col">
              
              {/* Reviews & Availability */}
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1 text-slate-700">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <span className="text-xs font-semibold tabular-nums">{product.rating}</span>
                  <span className="text-xs text-slate-400">· {product.reviewsCount} customer reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  {product.brand && (
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      {product.brand}
                    </span>
                  )}
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    In Stock
                  </span>
                </div>
              </div>

              {/* Product Title */}
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-1">
                {product.name}
              </h1>

              {/* SKU & Canonical link */}
              <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                <span>SKU: <strong className="text-slate-600 font-mono">{product.id}</strong></span>
                {product.shopUrl && (
                  <>
                    <span>·</span>
                    <a
                      href={product.shopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1 font-medium"
                    >
                      <span>Official shop.merch.google item</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </>
                )}
              </div>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 mb-5 pb-4 border-b border-slate-100">
                <span className="text-2xl font-extrabold text-slate-900 tabular-nums">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-400 line-through tabular-nums">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-xs text-slate-500 font-medium">
                  Taxes calculated at checkout
                </span>
              </div>

              {/* Color Selection */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-900">
                    Color: <span className="font-normal text-slate-600">{product.colors[selectedColorIdx]}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  {product.colors.map((colorName, idx) => (
                    <button
                      key={colorName}
                      onClick={() => setSelectedColorIdx(idx)}
                      className={`h-9 px-3 rounded-lg border flex items-center gap-2 text-xs font-medium transition-all cursor-pointer ${
                        selectedColorIdx === idx
                          ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-black/10"
                        style={{ backgroundColor: product.colorHexes[idx] || '#333' }}
                      />
                      <span>{colorName}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection if apparel */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-900">
                      Size: <span className="font-normal text-slate-600">{selectedSize || product.sizes[0]}</span>
                    </span>
                    <span className="text-xs text-blue-600 hover:underline cursor-pointer">
                      Size Guide
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => {
                      const isChosen = (selectedSize || product.sizes![0]) === size;
                      return (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`min-w-[44px] h-10 px-3.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                            isChosen
                              ? 'border-slate-900 bg-slate-900 text-white'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Quantity Stepper */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-slate-900 block mb-2">
                  Quantity
                </span>
                <div className="inline-flex items-center border border-slate-200 rounded-lg p-1 bg-slate-50">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="min-w-[36px] min-h-[36px] flex items-center justify-center text-slate-600 hover:text-slate-900 rounded-md hover:bg-white transition-colors cursor-pointer font-bold"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-xs font-bold tabular-nums text-slate-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="min-w-[36px] min-h-[36px] flex items-center justify-center text-slate-600 hover:text-slate-900 rounded-md hover:bg-white transition-colors cursor-pointer font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Primary Dual Actions: Add to Cart & Buy Now */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 h-12 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-xs cursor-pointer ${
                    isAddedAnimation
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {isAddedAnimation ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleBuyNow}
                  className="flex-1 h-12 rounded-xl text-xs font-bold uppercase tracking-wider bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-xs cursor-pointer"
                >
                  <Zap className="w-4 h-4" />
                  <span>Buy Now (1-Tap)</span>
                </button>
              </div>

              {/* Informational Tab System */}
              <div className="border-t border-slate-100 pt-4">
                <div className="flex items-center gap-6 border-b border-slate-100 pb-2 mb-3">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`text-xs font-semibold pb-1 cursor-pointer transition-colors ${
                      activeTab === 'overview'
                        ? 'text-slate-900 border-b-2 border-slate-900'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('materials')}
                    className={`text-xs font-semibold pb-1 cursor-pointer transition-colors ${
                      activeTab === 'materials'
                        ? 'text-slate-900 border-b-2 border-slate-900'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    Materials & Specs
                  </button>
                  <button
                    onClick={() => setActiveTab('shipping')}
                    className={`text-xs font-semibold pb-1 cursor-pointer transition-colors ${
                      activeTab === 'shipping'
                        ? 'text-slate-900 border-b-2 border-slate-900'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    Shipping & Guarantee
                  </button>
                </div>

                <div className="text-xs text-slate-600 leading-relaxed">
                  {activeTab === 'overview' && (
                    <div>
                      <p className="mb-3">{product.description}</p>
                      <ul className="space-y-1.5 list-disc pl-4 text-slate-700">
                        {product.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === 'materials' && (
                    <div className="space-y-2">
                      <p><strong>Composition:</strong> {product.materials || 'Sustainable high-durability composite.'}</p>
                      <p><strong>Care Instructions:</strong> Machine wash cold with like colors. Line dry recommended for longevity.</p>
                    </div>
                  )}

                  {activeTab === 'shipping' && (
                    <div className="space-y-2">
                      <p><strong>Delivery:</strong> {product.deliveryTime}</p>
                      <p><strong>Returns:</strong> {product.returnPolicy}</p>
                      <p><strong>Authenticity:</strong> Guaranteed 100% genuine Google merchandise.</p>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* Section 12: Product Recommendations ("You May Also Like" & "Complete the Look") */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-sm font-bold tracking-tight text-slate-900 mb-4">
              Complete the Look · Recommended Additions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {recommendations.map((rec) => (
                <div
                  key={rec.id}
                  onClick={() => {
                    trackEvent('recommendation_click', `Clicked recommended item: ${rec.name}`);
                    openProductDetail(rec);
                  }}
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-200/70 hover:border-slate-300 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-lg bg-slate-100 overflow-hidden shrink-0 flex items-center justify-center">
                    <ProductVisual product={rec} isHovered={false} className="!p-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold text-slate-900 truncate">
                      {rec.name}
                    </h4>
                    <span className="text-xs font-bold text-slate-700 tabular-nums">
                      ${rec.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile Sticky Add to Cart Bar (complies with 15% sticky cap) */}
        <div className="sm:hidden p-4 bg-white border-t border-slate-200 flex items-center gap-3 z-30">
          <div className="flex flex-col">
            <span className="text-[11px] text-slate-500">Total</span>
            <span className="text-base font-bold text-slate-900 tabular-nums">
              ${(product.price * quantity).toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex-1 h-12 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>

      </div>
    </div>
  );
};
