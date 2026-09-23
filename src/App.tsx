/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { StoreProvider } from './context/StoreContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { ProductCatalog } from './components/ProductCatalog';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AnalyticsDrawer } from './components/AnalyticsBanner';

export default function App() {
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
        
        {/* Navigation & Header */}
        <Header />

        {/* Hero Section */}
        <Hero />

        {/* Shop by Category Navigation */}
        <CategoryNav />

        {/* Product Catalog & Curated Collections */}
        <ProductCatalog />

        {/* Site Footer */}
        <Footer />

        {/* Mobile Ergonomic Bottom Navigation Bar */}
        <MobileBottomNav />

        {/* Interactive Modals & Drawers */}
        <ProductDetailModal />
        <CartDrawer />
        <CheckoutModal />
        <AnalyticsDrawer />

      </div>
    </StoreProvider>
  );
}
