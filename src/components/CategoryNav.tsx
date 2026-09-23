import React from 'react';
import { Shirt, Coffee, Briefcase, Sparkles, BookOpen, Gift, Layers, Tag } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Category } from '../types';
import { CATEGORIES, BRANDS } from '../data/products';

const CATEGORY_ICON_MAP: Record<Category, React.ElementType> = {
  All: Layers,
  Apparel: Shirt,
  Drinkware: Coffee,
  Bags: Briefcase,
  Stationery: BookOpen,
  Accessories: Sparkles,
  Gifts: Gift,
};

export const CategoryNav: React.FC = () => {
  const { filterState, setCategory, setSearchQuery, trackEvent } = useStore();

  const handleBrandClick = (brandName: string) => {
    trackEvent('category_click', `Selected Brand filter: ${brandName}`);
    if (filterState.searchQuery === brandName) {
      setSearchQuery('');
    } else {
      setSearchQuery(brandName);
    }
  };

  return (
    <section className="py-6 bg-white border-b border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6 space-y-4">
        
        {/* Header row */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Shop Official Merchandise
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Official gear from <span className="font-medium text-slate-700">shop.merch.google</span> with live product catalog & authentic photos
            </p>
          </div>
          <span className="hidden sm:inline text-xs text-slate-400">
            {CATEGORIES.find(c => c.id === filterState.category)?.count || 92} items available
          </span>
        </div>

        {/* Primary Categories row */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICON_MAP[cat.id as Category] || Layers;
            const isActive = filterState.category === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id as Category)}
                className={`min-h-[42px] px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono tabular-nums ${
                    isActive ? 'bg-slate-800 text-slate-200' : 'bg-slate-200/80 text-slate-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Official Google Brand Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 text-xs">
          <div className="flex items-center gap-1.5 text-slate-400 shrink-0 font-medium pl-1 pr-1">
            <Tag className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">Brands:</span>
          </div>

          <button
            onClick={() => setSearchQuery('')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 transition-colors cursor-pointer border ${
              !filterState.searchQuery
                ? 'bg-blue-50 text-blue-700 border-blue-200 font-semibold'
                : 'bg-white text-slate-600 border-slate-200/80 hover:border-slate-300'
            }`}
          >
            All Brands
          </button>

          {BRANDS.map((brand) => {
            const isSelected = filterState.searchQuery.toLowerCase() === brand.name.toLowerCase();
            return (
              <button
                key={brand.id}
                onClick={() => handleBrandClick(brand.name)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 transition-colors cursor-pointer border flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-2xs font-semibold'
                    : 'bg-white text-slate-600 border-slate-200/80 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                <span>{brand.name}</span>
                <span className={`text-[10px] opacity-70`}>({brand.count})</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
