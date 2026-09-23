import React from 'react';
import { useStore } from '../context/StoreContext';
import { BarChart3 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCategory, setIsAnalyticsOpen } = useStore();

  const handleNav = (cat: any) => {
    setCategory(cat);
    const el = document.getElementById('catalog-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs pt-16 pb-24 lg:pb-16 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base tracking-tight">
              <div className="flex items-center gap-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC04]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></span>
              </div>
              <span>Google Merch Store</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-[12px]">
              An improved e-commerce prototype redesigned to solve real Google Analytics drop-off pain points with mobile-first performance, instant discovery, and frictionless checkout.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsAnalyticsOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 font-medium transition-colors cursor-pointer"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Open GA Problem vs UX Solution Audit</span>
              </button>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-3 tracking-wide uppercase text-[11px]">
              Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('Apparel')} className="hover:text-white transition-colors cursor-pointer">
                  Apparel
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('Accessories')} className="hover:text-white transition-colors cursor-pointer">
                  Accessories
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('Drinkware')} className="hover:text-white transition-colors cursor-pointer">
                  Drinkware
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('Bags')} className="hover:text-white transition-colors cursor-pointer">
                  Bags & Backpacks
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('Stationery')} className="hover:text-white transition-colors cursor-pointer">
                  Stationery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('Gifts')} className="hover:text-white transition-colors cursor-pointer">
                  Curated Gifts
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-3 tracking-wide uppercase text-[11px]">
              Customer Service
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-white transition-colors cursor-pointer">Track Your Package</li>
              <li className="hover:text-white transition-colors cursor-pointer">Shipping Rates & Policy</li>
              <li className="hover:text-white transition-colors cursor-pointer">30-Day Hassle-Free Returns</li>
              <li className="hover:text-white transition-colors cursor-pointer">Size & Fit Guide</li>
              <li className="hover:text-white transition-colors cursor-pointer">Product Care Instructions</li>
            </ul>
          </div>

          {/* Sustainability & Trust */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-3 tracking-wide uppercase text-[11px]">
              Sustainability
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-white transition-colors cursor-pointer">GOTS Certified Organic</li>
              <li className="hover:text-white transition-colors cursor-pointer">Carbon-Neutral Shipping</li>
              <li className="hover:text-white transition-colors cursor-pointer">Recycled Ocean Polymers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Fair Labor Partnerships</li>
              <li className="hover:text-white transition-colors cursor-pointer">Zero Plastic Packaging</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Google Merchandise Store Concept Prototype · All product designs, SVG renders & UX benchmarks created for e-commerce evaluation.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Security Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
