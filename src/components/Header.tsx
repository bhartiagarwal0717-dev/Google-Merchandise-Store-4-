import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingBag, Heart, SlidersHorizontal, BarChart3, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { CATEGORIES } from '../data/products';

export const Header: React.FC = () => {
  const {
    cartCount,
    setIsCartOpen,
    wishlist,
    filterState,
    setSearchQuery,
    setCategory,
    setIsAnalyticsOpen,
    trackEvent,
  } = useStore();

  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchExpanded]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filterState.searchQuery.trim()) {
      trackEvent('search', `Executed query: ${filterState.searchQuery}`);
    }
  };

  const popularKeywords = ['Hoodie', 'Tumbler', 'Backpack', 'Notebook', 'T-shirt', 'Gifts'];

  return (
    <>
      {/* Slim, dismissible promo announcement banner (< 40px) */}
      <div className="bg-[#0F172A] text-slate-200 text-xs py-2 px-4 flex items-center justify-between border-b border-slate-800">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium tracking-tight mx-auto sm:mx-0">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Free carbon-neutral delivery on all orders over $60</span>
            <span className="text-slate-500 hidden sm:inline">·</span>
            <span className="text-slate-400 hidden sm:inline">Use code <strong className="text-white font-mono">GOOGLE10</strong> for 15% off</span>
          </div>

          <button
            onClick={() => setIsAnalyticsOpen(true)}
            className="hidden md:flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 transition-colors font-medium cursor-pointer"
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>GA Problem vs UX Solution</span>
          </button>
        </div>
      </div>

      {/* Main Header complying with Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCategory('All');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-lg font-bold tracking-tight text-slate-900 flex items-center gap-2"
            >
              <div className="flex items-center gap-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC04]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></span>
              </div>
              <span className="whitespace-nowrap">Google Merch</span>
            </a>
          </div>

          {/* Zone 2: 4–6 nav links, 1–2 word labels, single-line text */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button
              onClick={() => {
                setCategory('All');
                window.scrollTo({ top: 580, behavior: 'smooth' });
              }}
              className="hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer"
            >
              Shop All
            </button>
            <button
              onClick={() => {
                setCategory('Apparel');
                window.scrollTo({ top: 580, behavior: 'smooth' });
              }}
              className="hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer"
            >
              Apparel
            </button>
            <button
              onClick={() => {
                setCategory('Drinkware');
                window.scrollTo({ top: 580, behavior: 'smooth' });
              }}
              className="hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer"
            >
              Drinkware
            </button>
            <button
              onClick={() => {
                setCategory('Bags');
                window.scrollTo({ top: 580, behavior: 'smooth' });
              }}
              className="hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer"
            >
              Bags
            </button>
            <button
              onClick={() => {
                setCategory('Stationery');
                window.scrollTo({ top: 580, behavior: 'smooth' });
              }}
              className="hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer"
            >
              Stationery
            </button>
            <button
              onClick={() => {
                setCategory('Gifts');
                window.scrollTo({ top: 580, behavior: 'smooth' });
              }}
              className="hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer"
            >
              Gifts
            </button>
          </nav>

          {/* Zone 3: 1–2 primary actions + functional search affordance */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Prominent Quick Search Trigger / Input */}
            <div className="relative hidden md:block">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  value={filterState.searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search hoodie, tumbler, bag..."
                  className="w-56 lg:w-64 pl-9 pr-8 py-2 text-xs bg-slate-100/90 border border-slate-200/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                />
                {filterState.searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </form>
            </div>

            {/* Mobile search toggle */}
            <button
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              aria-label="Toggle search"
              className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* UX Solution badge for mobile / header */}
            <button
              onClick={() => setIsAnalyticsOpen(true)}
              aria-label="View UX and Analytics audit"
              className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
            >
              <BarChart3 className="w-5 h-5" />
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={() => {
                setCategory('All');
                window.scrollTo({ top: 580, behavior: 'smooth' });
              }}
              aria-label="Saved items"
              className="relative min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'text-rose-600 fill-rose-100' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute top-2 right-2 text-[10px] font-bold text-rose-600 w-4 h-4 flex items-center justify-center rounded-full bg-rose-50 border border-rose-200">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Open cart bag"
              className="relative min-w-[44px] min-h-[44px] px-3 py-2 flex items-center gap-2 text-slate-900 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-transform active:scale-95 cursor-pointer shadow-xs"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs font-semibold tabular-nums">{cartCount}</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Input Drawer (Expands smoothly when search icon clicked) */}
        {isSearchExpanded && (
          <div className="md:hidden px-4 pb-3 pt-1 border-t border-slate-100 bg-white">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={filterState.searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, materials..."
                className="w-full pl-9 pr-9 py-2.5 text-sm bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-900"
              />
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setIsSearchExpanded(false);
                }}
                className="absolute right-3 text-slate-400 hover:text-slate-600 cursor-pointer min-h-[32px] min-w-[32px] flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </form>

            {/* Quick autocomplete keywords */}
            <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-1 text-xs text-slate-500">
              <span className="shrink-0 text-[11px] text-slate-400">Trending:</span>
              {popularKeywords.map((kw) => (
                <button
                  key={kw}
                  type="button"
                  onClick={() => {
                    setSearchQuery(kw);
                    setIsSearchExpanded(false);
                  }}
                  className="shrink-0 px-2.5 py-1 bg-slate-100 rounded-md text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
