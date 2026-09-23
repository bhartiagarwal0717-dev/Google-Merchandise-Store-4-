import React, { useState } from 'react';
import { SlidersHorizontal, ArrowUpDown, X, Sparkles, Filter } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from './ProductCard';
import { CATEGORIES } from '../data/products';

export const ProductCatalog: React.FC = () => {
  const {
    filteredProducts,
    filterState,
    setCategory,
    setSortBy,
    setPriceRange,
    resetFilters,
    products,
  } = useStore();

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Curated collections for the homepage sections
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <section id="catalog-section" className="py-10 bg-[#FBFBF9]">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Controls Toolbar: Title, Results Count, Filters Toggle, Sort Dropdown */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
              <span>{filterState.category === 'All' ? 'Complete Collection' : `${filterState.category} Gear`}</span>
              <span className="text-sm font-normal text-slate-500 tabular-nums">
                ({filteredProducts.length} items)
              </span>
            </h2>
            {filterState.searchQuery && (
              <p className="text-xs text-slate-500 mt-1">
                Showing results for query: <strong className="text-slate-800">"{filterState.searchQuery}"</strong>
              </p>
            )}
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="lg:hidden h-10 px-3.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-xs font-semibold flex items-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-medium text-slate-700">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-slate-400 hidden sm:inline">Sort:</span>
              <select
                value={filterState.sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent border-none text-xs font-semibold text-slate-900 focus:outline-none cursor-pointer pr-1"
              >
                <option value="popularity">Most Popular</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Active filters clear affordance */}
            {(filterState.category !== 'All' || filterState.searchQuery || filterState.maxPrice < 200) && (
              <button
                onClick={resetFilters}
                className="h-10 px-3 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Catalog Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Filter Sidebar (3 cols) */}
          <aside className={`lg:col-span-3 ${isMobileFilterOpen ? 'block' : 'hidden lg:block'} space-y-6 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs`}>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
                <span>Filter Products</span>
              </h3>
              <button
                onClick={resetFilters}
                className="text-[11px] text-blue-600 hover:underline font-medium cursor-pointer"
              >
                Clear all
              </button>
            </div>

            {/* Category Filter */}
            <div>
              <label className="text-xs font-semibold text-slate-800 block mb-2">
                Category
              </label>
              <div className="space-y-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id as any)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      filterState.category === cat.id
                        ? 'bg-slate-900 text-white font-semibold'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-[10px] tabular-nums ${filterState.category === cat.id ? 'text-slate-300' : 'text-slate-400'}`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-slate-800">
                  Price Limit
                </label>
                <span className="text-xs font-bold text-slate-900 tabular-nums">
                  Up to ${filterState.maxPrice}
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="200"
                step="5"
                value={filterState.maxPrice}
                onChange={(e) => setPriceRange(0, Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>$15</span>
                <span>$200</span>
              </div>
            </div>

            {/* Quick Filter Presets */}
            <div className="pt-4 border-t border-slate-100">
              <label className="text-xs font-semibold text-slate-800 block mb-2">
                Quick Picks
              </label>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setPriceRange(0, 30)}
                  className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium transition-colors"
                >
                  Under $30
                </button>
                <button
                  onClick={() => setPriceRange(0, 60)}
                  className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium transition-colors"
                >
                  Under $60
                </button>
                <button
                  onClick={() => setSortBy('newest')}
                  className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium transition-colors"
                >
                  New Only
                </button>
              </div>
            </div>

            {/* Reassurance in sidebar */}
            <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500 space-y-2">
              <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Google Official Guarantee</span>
              </div>
              <p>Every piece is certified organic or made with recycled composites.</p>
            </div>
          </aside>

          {/* Product Grid Area (9 cols) */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                <p className="text-base font-bold text-slate-800 mb-1">
                  No products match your current filters
                </p>
                <p className="text-xs text-slate-500 mb-6">
                  Try adjusting your price range or clearing search keywords.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>

        </div>

        {/* Section 12: Featured Collections (Best Sellers & New Arrivals) */}
        {filterState.category === 'All' && !filterState.searchQuery && (
          <div className="mt-16 pt-12 border-t border-slate-200/80 space-y-14">
            
            {/* Best Sellers Showcase */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">
                    Community Best Sellers
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Highest rated items chosen by developers and creators worldwide
                  </p>
                </div>
                <button
                  onClick={() => setSortBy('popularity')}
                  className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                >
                  View all popular &rarr;
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {bestSellers.map((product) => (
                  <ProductCard key={`bs-${product.id}`} product={product} />
                ))}
              </div>
            </div>

            {/* Promotional Section: Sustainable Living Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white rounded-2xl p-8 sm:p-10 relative overflow-hidden shadow-lg">
              <div className="relative z-10 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 block">
                  Built For A Better Future
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
                  100% Recycled & Carbon-Neutral Production
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  From GOTS-certified organic cotton hoodies to ocean-bound recycled commuter bags, our official gear leaves zero footprint.
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setCategory('Apparel');
                      window.scrollTo({ top: 580, behavior: 'smooth' });
                    }}
                    className="h-11 px-5 rounded-xl bg-white text-slate-900 font-semibold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Explore Sustainable Apparel
                  </button>
                </div>
              </div>
            </div>

            {/* New Arrivals Showcase */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">
                    Fresh New Arrivals
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Just added to the official catalog this season
                  </p>
                </div>
                <button
                  onClick={() => setSortBy('newest')}
                  className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                >
                  View newest &rarr;
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {newArrivals.map((product) => (
                  <ProductCard key={`new-${product.id}`} product={product} />
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
