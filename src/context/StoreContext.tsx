import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { Product, CartItem, Category, FilterState, AnalyticsEvent, CheckoutFormState } from '../types';
import { PRODUCTS } from '../data/products';

interface StoreContextType {
  products: Product[];
  filteredProducts: Product[];
  filterState: FilterState;
  setCategory: (category: Category) => void;
  setSearchQuery: (query: string) => void;
  setSortBy: (sort: FilterState['sortBy']) => void;
  setPriceRange: (min: number, max: number) => void;
  toggleColorFilter: (color: string) => void;
  resetFilters: () => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, color?: string, size?: string) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQty: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  discount: number;
  promoCode: string;
  applyPromoCode: (code: string) => boolean;
  shippingFee: number;
  total: number;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;

  // Modals & Navigation
  selectedProduct: Product | null;
  openProductDetail: (product: Product) => void;
  closeProductDetail: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isAnalyticsOpen: boolean;
  setIsAnalyticsOpen: (open: boolean) => void;

  // Checkout Flow
  checkoutStep: number;
  setCheckoutStep: (step: number) => void;
  checkoutForm: CheckoutFormState;
  updateCheckoutForm: (updates: Partial<CheckoutFormState>) => void;
  completedOrderNumber: string | null;
  completeOrder: () => void;

  // Analytics & Tracking
  analyticsEvents: AnalyticsEvent[];
  trackEvent: (eventName: AnalyticsEvent['eventName'], details: string) => void;
  funnelMetrics: {
    productViews: number;
    cartAdds: number;
    checkouts: number;
    purchases: number;
    addToCartRate: string;
    checkoutRate: string;
    conversionRate: string;
  };
}

const StoreContext = createContext<StoreContextType | null>(null);

const initialFilters: FilterState = {
  category: 'All',
  searchQuery: '',
  minPrice: 0,
  maxPrice: 200,
  selectedColors: [],
  selectedSizes: [],
  sortBy: 'popularity',
  inStockOnly: false,
};

const initialCheckout: CheckoutFormState = {
  email: 'alex.chen@androiddev.io',
  firstName: 'Alex',
  lastName: 'Chen',
  phone: '+1 (555) 019-2834',
  address: '1600 Amphitheatre Parkway',
  apt: 'Suite 400',
  city: 'Mountain View',
  postalCode: '94043',
  country: 'United States',
  deliveryMethod: 'eco',
  paymentMethod: 'google_pay',
  cardNumber: '•••• •••• •••• 4242',
  cardExpiry: '10/28',
  cardCvc: '882',
};

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filterState, setFilterState] = useState<FilterState>(initialFilters);
  const [cart, setCart] = useState<CartItem[]>(() => [
    // Pre-populate with 1 item for immediate engaging experience
    {
      id: 'cart-sample-1',
      productId: PRODUCTS[0]?.id || 'item-1',
      product: PRODUCTS[0],
      quantity: 1,
      selectedColor: PRODUCTS[0]?.colors[0] || 'Default',
      selectedSize: PRODUCTS[0]?.sizes ? PRODUCTS[0].sizes[0] : undefined,
    },
  ]);
  const [wishlist, setWishlist] = useState<string[]>([PRODUCTS[1]?.id || 'item-2']);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState<boolean>(false);
  const [checkoutStep, setCheckoutStep] = useState<number>(1);
  const [checkoutForm, setCheckoutForm] = useState<CheckoutFormState>(initialCheckout);
  const [completedOrderNumber, setCompletedOrderNumber] = useState<string | null>(null);
  const [promoCode, setPromoCode] = useState<string>('');
  const [promoDiscountRate, setPromoDiscountRate] = useState<number>(0);

  // Analytics logging
  const [analyticsEvents, setAnalyticsEvents] = useState<AnalyticsEvent[]>([
    {
      id: 'evt-init',
      timestamp: new Date().toLocaleTimeString(),
      eventName: 'page_view',
      details: 'Homepage loaded with mobile-first viewport optimization',
    },
  ]);

  const trackEvent = (eventName: AnalyticsEvent['eventName'], details: string) => {
    const newEvent: AnalyticsEvent = {
      id: `evt-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      eventName,
      details,
    };
    setAnalyticsEvents((prev) => [newEvent, ...prev.slice(0, 39)]);
  };

  // Funnel calculation
  const funnelMetrics = useMemo(() => {
    const productViews = analyticsEvents.filter((e) => e.eventName === 'product_view').length || 12;
    const cartAdds = analyticsEvents.filter((e) => e.eventName === 'add_to_cart').length || 6;
    const checkouts = analyticsEvents.filter((e) => e.eventName === 'begin_checkout').length || 3;
    const purchases = analyticsEvents.filter((e) => e.eventName === 'purchase').length || 1;

    const addToCartRate = `${Math.round((cartAdds / Math.max(productViews, 1)) * 100)}%`;
    const checkoutRate = `${Math.round((checkouts / Math.max(cartAdds, 1)) * 100)}%`;
    const conversionRate = `${Math.round((purchases / Math.max(productViews, 1)) * 100)}%`;

    return {
      productViews,
      cartAdds,
      checkouts,
      purchases,
      addToCartRate,
      checkoutRate,
      conversionRate,
    };
  }, [analyticsEvents]);

  // Filtering products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (filterState.category !== 'All' && product.category !== filterState.category) {
        return false;
      }

      // Search query
      if (filterState.searchQuery.trim()) {
        const query = filterState.searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCat = product.category.toLowerCase().includes(query);
        const matchesBrand = product.brand ? product.brand.toLowerCase().includes(query) : false;
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesColor = product.colors.some((c) => c.toLowerCase().includes(query));
        if (!matchesName && !matchesCat && !matchesBrand && !matchesDesc && !matchesColor) {
          return false;
        }
      }

      // Price filter
      if (product.price < filterState.minPrice || product.price > filterState.maxPrice) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filterState.sortBy === 'price-asc') return a.price - b.price;
      if (filterState.sortBy === 'price-desc') return b.price - a.price;
      if (filterState.sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      if (filterState.sortBy === 'rating') return b.rating - a.rating;
      // Popularity default
      return b.reviewsCount - a.reviewsCount;
    });
  }, [filterState]);

  const setCategory = (category: Category) => {
    setFilterState((prev) => ({ ...prev, category }));
    trackEvent('category_click', `Browsed category: ${category}`);
  };

  const setSearchQuery = (query: string) => {
    setFilterState((prev) => ({ ...prev, searchQuery: query }));
    if (query.length > 2) {
      trackEvent('search', `Searched term: "${query}"`);
    }
  };

  const setSortBy = (sortBy: FilterState['sortBy']) => {
    setFilterState((prev) => ({ ...prev, sortBy }));
    trackEvent('cta_click', `Sorted products by: ${sortBy}`);
  };

  const setPriceRange = (minPrice: number, maxPrice: number) => {
    setFilterState((prev) => ({ ...prev, minPrice, maxPrice }));
  };

  const toggleColorFilter = (color: string) => {
    setFilterState((prev) => {
      const exists = prev.selectedColors.includes(color);
      return {
        ...prev,
        selectedColors: exists
          ? prev.selectedColors.filter((c) => c !== color)
          : [...prev.selectedColors, color],
      };
    });
  };

  const resetFilters = () => {
    setFilterState(initialFilters);
  };

  // Cart operations
  const addToCart = (product: Product, quantity = 1, color?: string, size?: string) => {
    const selectedColor = color || product.colors[0];
    const selectedSize = size || (product.sizes ? product.sizes[0] : undefined);
    const cartItemId = `${product.id}-${selectedColor}-${selectedSize || 'standard'}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          productId: product.id,
          product,
          quantity,
          selectedColor,
          selectedSize,
        },
      ];
    });

    trackEvent('add_to_cart', `Added ${quantity}x "${product.name}" (${selectedColor})`);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    const item = cart.find((i) => i.id === cartItemId);
    setCart((prev) => prev.filter((i) => i.id !== cartItemId));
    if (item) {
      trackEvent('remove_from_cart', `Removed "${item.product.name}" from cart`);
    }
  };

  const updateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQty } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, [cart]);

  const discount = useMemo(() => {
    return subtotal * promoDiscountRate;
  }, [subtotal, promoDiscountRate]);

  const shippingFee = useMemo(() => {
    if (cart.length === 0) return 0;
    return subtotal >= 60 ? 0 : 5.0;
  }, [subtotal, cart.length]);

  const total = useMemo(() => {
    return Math.max(0, subtotal - discount + shippingFee);
  }, [subtotal, discount, shippingFee]);

  const applyPromoCode = (code: string) => {
    const trimmed = code.trim().toUpperCase();
    if (trimmed === 'GOOGLE10' || trimmed === 'ANDROIDX') {
      setPromoCode(trimmed);
      setPromoDiscountRate(0.15); // 15% discount for engagement
      trackEvent('cta_click', `Applied promo coupon: ${trimmed} (15% off)`);
      return true;
    }
    return false;
  };

  // Wishlist
  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      const updated = exists ? prev.filter((id) => id !== productId) : [...prev, productId];
      const prod = PRODUCTS.find((p) => p.id === productId);
      trackEvent('cta_click', `${exists ? 'Removed from' : 'Saved to'} wishlist: ${prod?.name || productId}`);
      return updated;
    });
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  // Detail Modal
  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    trackEvent('product_view', `Viewed detail page for: "${product.name}"`);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  const updateCheckoutForm = (updates: Partial<CheckoutFormState>) => {
    setCheckoutForm((prev) => ({ ...prev, ...updates }));
  };

  const completeOrder = () => {
    const orderNum = `G-${Math.floor(100000 + Math.random() * 900000)}`;
    setCompletedOrderNumber(orderNum);
    trackEvent('purchase', `Order confirmed: ${orderNum} (Total: $${total.toFixed(2)})`);
    clearCart();
    setCheckoutStep(4);
  };

  return (
    <StoreContext.Provider
      value={{
        products: PRODUCTS,
        filteredProducts,
        filterState,
        setCategory,
        setSearchQuery,
        setSortBy,
        setPriceRange,
        toggleColorFilter,
        resetFilters,

        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        discount,
        promoCode,
        applyPromoCode,
        shippingFee,
        total,

        wishlist,
        toggleWishlist,
        isWishlisted,

        selectedProduct,
        openProductDetail,
        closeProductDetail,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isAnalyticsOpen,
        setIsAnalyticsOpen,

        checkoutStep,
        setCheckoutStep,
        checkoutForm,
        updateCheckoutForm,
        completedOrderNumber,
        completeOrder,

        analyticsEvents,
        trackEvent,
        funnelMetrics,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
