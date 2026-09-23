import React from 'react';
import { Home, Search, Grid, Heart, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const MobileBottomNav: React.FC = () => {
  const {
    cartCount,
    setIsCartOpen,
    wishlist,
    filterState,
    setCategory,
  } = useStore();

  const handleScrollToTop = () => {
    setCategory('All');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToCategories = () => {
    const el = document.getElementById('catalog-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 safe-bottom">
      <div className="grid grid-cols-5 h-16 items-center px-1">
        
        {/* Home */}
        <button
          onClick={handleScrollToTop}
          className="flex flex-col items-center justify-center min-h-[44px] text-slate-700 hover:text-slate-900 transition-colors"
          aria-label="Home"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight mt-1">Home</span>
        </button>

        {/* Search */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col items-center justify-center min-h-[44px] text-slate-700 hover:text-slate-900 transition-colors"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight mt-1">Search</span>
        </button>

        {/* Categories */}
        <button
          onClick={handleScrollToCategories}
          className="flex flex-col items-center justify-center min-h-[44px] text-slate-700 hover:text-slate-900 transition-colors"
          aria-label="Categories"
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight mt-1">Categories</span>
        </button>

        {/* Wishlist */}
        <button
          onClick={() => {
            handleScrollToCategories();
          }}
          className="relative flex flex-col items-center justify-center min-h-[44px] text-slate-700 hover:text-slate-900 transition-colors"
          aria-label="Saved"
        >
          <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'text-rose-600 fill-rose-100' : ''}`} />
          {wishlist.length > 0 && (
            <span className="absolute top-1 right-3 text-[9px] font-bold text-rose-600 w-3.5 h-3.5 rounded-full bg-rose-50 flex items-center justify-center border border-rose-200">
              {wishlist.length}
            </span>
          )}
          <span className="text-[10px] font-medium tracking-tight mt-1">Saved</span>
        </button>

        {/* Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center justify-center min-h-[44px] text-slate-900 transition-colors"
          aria-label="Cart"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute top-1 right-3 text-[9px] font-bold text-white w-3.5 h-3.5 rounded-full bg-slate-900 flex items-center justify-center">
              {cartCount}
            </span>
          )}
          <span className="text-[10px] font-bold tracking-tight mt-1">Bag</span>
        </button>

      </div>
    </div>
  );
};
