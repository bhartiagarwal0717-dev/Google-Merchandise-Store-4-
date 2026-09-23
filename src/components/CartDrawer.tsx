import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Tag, ShoppingBag, Plus } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductVisual } from './ProductVisual';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    shippingFee,
    total,
    promoCode,
    applyPromoCode,
    setIsCheckoutOpen,
    products,
    addToCart,
    trackEvent,
  } = useStore();

  const [inputPromo, setInputPromo] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputPromo.trim()) return;
    const success = applyPromoCode(inputPromo);
    if (success) {
      setPromoMessage({ text: 'Promo code applied: 15% discount!', isError: false });
    } else {
      setPromoMessage({ text: 'Invalid code. Try "GOOGLE10"', isError: true });
    }
  };

  const handleProceedToCheckout = () => {
    trackEvent('begin_checkout', `Initiated checkout with ${cart.length} items (Total: $${total.toFixed(2)})`);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const freeShippingThreshold = 60;
  const progressToFreeShip = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const remainingForFreeShip = Math.max(0, freeShippingThreshold - subtotal);

  // Frequently bought together recommendation
  const cartProductIds = cart.map((i) => i.productId);
  const recommendedAddon = products.find((p) => !cartProductIds.includes(p.id) && p.category === 'Accessories') || products[4];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Cart Header */}
          <div className="p-5 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-slate-900" />
              <h2 className="text-base font-bold text-slate-900">
                Your Shopping Bag ({cart.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart"
              className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3 bg-slate-50 border-b border-slate-200/80">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
              {remainingForFreeShip === 0 ? (
                <span className="text-emerald-700 flex items-center gap-1">
                  ✓ You've unlocked Free Carbon-Neutral Shipping!
                </span>
              ) : (
                <span>
                  Add <strong className="text-slate-900 font-bold">${remainingForFreeShip.toFixed(2)}</strong> more for Free Shipping
                </span>
              )}
              <span className="tabular-nums text-[11px] text-slate-500">{progressToFreeShip}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${progressToFreeShip}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-slate-100">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-base font-semibold text-slate-800 mb-1">Your bag is empty</p>
                <p className="text-xs text-slate-500 mb-6">Explore our latest merch and sustainable tech gear.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Start Browsing
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="py-4 flex gap-3.5 items-start">
                  {/* Thumbnail */}
                  <div className="w-18 h-18 rounded-xl bg-slate-50 border border-slate-100 shrink-0 overflow-hidden flex items-center justify-center p-1">
                    <ProductVisual product={item.product} className="!p-1 !aspect-square" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h3 className="text-xs font-semibold text-slate-900 line-clamp-1">
                        {item.product.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-500 mt-0.5 space-x-2">
                      <span>Color: {item.selectedColor}</span>
                      {item.selectedSize && <span>· Size: {item.selectedSize}</span>}
                    </div>

                    <div className="flex items-center justify-between mt-2.5">
                      {/* Stepper */}
                      <div className="flex items-center border border-slate-200 rounded-md bg-slate-50 text-xs font-semibold">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-slate-900"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-slate-900 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-slate-900"
                        >
                          +
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <span className="text-xs font-bold text-slate-900 tabular-nums">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* In-Cart Recommendation ("Frequently Bought Together") */}
            {recommendedAddon && cart.length > 0 && (
              <div className="pt-4 mt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Frequently Bought Together
                </span>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg bg-white overflow-hidden shrink-0 flex items-center justify-center">
                      <ProductVisual product={recommendedAddon} className="!p-0.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-900 truncate max-w-[170px]">
                        {recommendedAddon.name}
                      </h4>
                      <span className="text-xs font-bold text-slate-700 tabular-nums">
                        ${recommendedAddon.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(recommendedAddon, 1);
                      trackEvent('recommendation_click', `Added in-cart recommended: ${recommendedAddon.name}`);
                    }}
                    className="h-8 px-2.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer shadow-2xs"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-slate-200 bg-white space-y-3">
              
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    value={inputPromo}
                    onChange={(e) => setInputPromo(e.target.value)}
                    placeholder="Coupon code (try GOOGLE10)"
                    className="w-full pl-8 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg uppercase tracking-wider text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>

              {promoMessage && (
                <div className={`text-[11px] font-medium ${promoMessage.isError ? 'text-rose-600' : 'text-emerald-600'}`}>
                  {promoMessage.text}
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900 tabular-nums">${subtotal.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Discount (15% promo)</span>
                    <span className="tabular-nums">-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-slate-900 tabular-nums">
                    {shippingFee === 0 ? <span className="text-emerald-600">FREE</span> : `$${shippingFee.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-100">
                  <span>Estimated Total</span>
                  <span className="text-base tabular-nums">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* High-Intent Checkout CTA */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full h-12 rounded-xl bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-800 transition-transform active:scale-[0.98] shadow-md cursor-pointer"
              >
                <span>Continue to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-bit SSL encrypted & Google Pay enabled</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
