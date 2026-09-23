export type Category = 'All' | 'Apparel' | 'Accessories' | 'Drinkware' | 'Bags' | 'Stationery' | 'Gifts';

export interface ProductVariant {
  id: string;
  name: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: Exclude<Category, 'All'>;
  brand?: string;
  shopUrl?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  description: string;
  highlights: string[];
  materials?: string;
  deliveryTime: string;
  returnPolicy: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  colors: string[];
  sizes?: string[];
  colorHexes: string[];
  image: string;
  secondaryImage?: string;
  visualTheme: {
    bg: string;
    accent: string;
    icon: string;
  };
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize?: string;
}

export interface FilterState {
  category: Category;
  searchQuery: string;
  minPrice: number;
  maxPrice: number;
  selectedColors: string[];
  selectedSizes: string[];
  sortBy: 'popularity' | 'price-asc' | 'price-desc' | 'newest' | 'rating';
  inStockOnly: boolean;
}

export interface AnalyticsEvent {
  id: string;
  timestamp: string;
  eventName: 'page_view' | 'product_view' | 'search' | 'category_click' | 'add_to_cart' | 'remove_from_cart' | 'begin_checkout' | 'purchase' | 'cta_click' | 'recommendation_click';
  details: string;
  page?: string;
}

export interface CheckoutFormState {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  apt: string;
  city: string;
  postalCode: string;
  country: string;
  deliveryMethod: 'standard' | 'express' | 'eco';
  paymentMethod: 'google_pay' | 'card' | 'cod';
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}
