import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Truck, RefreshCw } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductVisual } from './ProductVisual';

export const Hero: React.FC = () => {
  const { products, openProductDetail, setCategory, trackEvent } = useStore();

  const heroFeaturedProduct = products[0]; // Minimalist Organic Cotton Heavy Hoodie

  const handleShopNow = () => {
    trackEvent('cta_click', 'Clicked Hero "Shop Now" primary CTA');
    const catalogElement = document.getElementById('catalog-section');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200/80 pt-8 pb-12 lg:pt-14 lg:pb-16">
      {/* Subtle architectural background ambiance */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50/60 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Quiet 1-line text kicker (NO pill badge!) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
              <span>Fall 2026 Collection</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal">Sustainably Crafted</span>
            </div>

            {/* Main Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-4 [text-wrap:balance]">
              Official Google Merchandise, Made for Your Everyday
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Discover apparel, accessories, drinkware and more. Engineered with high-grade organic materials, minimal branding, and timeless tech utility.
            </p>

            {/* CTA Group with high-intent primary button */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={handleShopNow}
                className="h-12 px-7 rounded-xl bg-slate-900 text-white font-medium text-sm flex items-center justify-center gap-2.5 hover:bg-slate-800 transition-transform active:scale-[0.98] shadow-sm cursor-pointer whitespace-nowrap"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  trackEvent('cta_click', 'Clicked Hero "Explore Best Sellers"');
                  setCategory('Apparel');
                  const catalogElement = document.getElementById('catalog-section');
                  if (catalogElement) catalogElement.scrollIntoView({ behavior: 'smooth' });
                }}
                className="h-12 px-6 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-medium text-sm flex items-center justify-center transition-colors cursor-pointer whitespace-nowrap"
              >
                Explore Apparel
              </button>
            </div>

            {/* Proof Points / Value Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 text-slate-600">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 mb-1">
                  <Truck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Free Shipping</span>
                </div>
                <span className="text-[12px] text-slate-500">Orders over $60</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 mb-1">
                  <RefreshCw className="w-3.5 h-3.5 text-emerald-600" />
                  <span>30-Day Returns</span>
                </div>
                <span className="text-[12px] text-slate-500">Hassle-free guarantee</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>100% Authentic</span>
                </div>
                <span className="text-[12px] text-slate-500">Verified official gear</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Showcase Card */}
          <div className="lg:col-span-5">
            <div
              onClick={() => openProductDetail(heroFeaturedProduct)}
              className="group relative bg-[#F9F9F8] border border-slate-200/90 rounded-2xl p-5 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Product Visual */}
              <div className="relative overflow-hidden rounded-xl bg-white/70">
                <ProductVisual
                  product={heroFeaturedProduct}
                  isHovered={false}
                  className="transition-transform duration-500 group-hover:scale-102"
                />
                
                {/* Floating Quick Feature Tag */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-xs flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-medium text-slate-800">Staff Pick of the Week</span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="mt-4 flex items-start justify-between gap-2">
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    {heroFeaturedProduct.category}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mt-0.5 group-hover:text-blue-600 transition-colors">
                    {heroFeaturedProduct.name}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-base font-bold text-slate-900 tabular-nums">
                    ${heroFeaturedProduct.price.toFixed(2)}
                  </div>
                  {heroFeaturedProduct.originalPrice && (
                    <div className="text-xs text-slate-400 line-through tabular-nums">
                      ${heroFeaturedProduct.originalPrice.toFixed(2)}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span>★ {heroFeaturedProduct.rating} ({heroFeaturedProduct.reviewsCount} reviews)</span>
                <span className="text-blue-600 font-medium group-hover:underline flex items-center gap-1">
                  View Product Details &rarr;
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
