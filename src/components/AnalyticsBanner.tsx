import React from 'react';
import { X, TrendingUp, Smartphone, ArrowRight, Eye, ShoppingBag, CreditCard, CheckCircle, Activity } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const AnalyticsDrawer: React.FC = () => {
  const {
    isAnalyticsOpen,
    setIsAnalyticsOpen,
    analyticsEvents,
    funnelMetrics,
  } = useStore();

  if (!isAnalyticsOpen) return null;

  const problemSolutions = [
    {
      problem: 'High Purchase Drop-off',
      gaEvidence: 'Steep drop-off between PDP visits and checkout completion in original GA data.',
      uxSolution: 'Added 1-Tap "Buy Now" CTA directly on PDPs and Quick Add buttons on cards, cutting 3 navigation hops. Introduced frictionless 4-step modal with Google Pay.',
      metric: `${funnelMetrics.conversionRate} Conversion Rate`,
    },
    {
      problem: 'Low Android Engagement',
      gaEvidence: 'Android visitors showed below-average session time and higher bounce.',
      uxSolution: 'Enforced mobile thumb-zone layout, large 44px touch targets, horizontal category scroller, native-feel responsive drawers, and zero heavy asset latency.',
      metric: 'Fast 60fps Mobile Performance',
    },
    {
      problem: 'Low Engagement From Key Traffic Sources',
      gaEvidence: 'Direct/referral campaigns bounced without exploring deep categories.',
      uxSolution: 'Created clear editorial hero with instant campaign anchors, staff picks, and personalized recommendation sections ("Complete the Look", "Bought Together").',
      metric: 'Instant Discovery Anchors',
    },
    {
      problem: 'Catalog Overwhelm & Discovery Friction',
      gaEvidence: 'Large catalog led to search abandonment.',
      uxSolution: 'Introduced instant autocomplete, real-time category chips, multi-facet sorting (price, popularity, rating), and clean unboxed metadata without pill fatigue.',
      metric: `${funnelMetrics.addToCartRate} Add-to-Bag Rate`,
    },
    {
      problem: 'Mobile Users Representing Majority Traffic',
      gaEvidence: 'Over 65% of sessions on smartphones with fragile connectivity.',
      uxSolution: 'Zero-broken-image SVG graphics, sticky mobile bottom navigation, persistent cart indicators, and strict <15% viewport sticky cap.',
      metric: '100% Responsive Touch-First',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={() => setIsAnalyticsOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-xl bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-200 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <TrendingUp className="w-5 h-5 text-amber-400" />
              <div>
                <h2 className="text-sm font-bold tracking-tight">
                  Google Analytics Problem vs UX Solution Audit
                </h2>
                <p className="text-[11px] text-slate-400">
                  Live tracking & conversion funnel validation
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsAnalyticsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            
            {/* Live Funnel Tracker Section */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-blue-600" />
                  <span>Live Funnel Tracking</span>
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                  Active Session
                </span>
              </div>

              {/* 4-Step Funnel visualization */}
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                  <Eye className="w-4 h-4 text-slate-500 mx-auto mb-1" />
                  <div className="font-bold text-slate-900 tabular-nums">{funnelMetrics.productViews}</div>
                  <div className="text-[10px] text-slate-400">Product Views</div>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                  <ShoppingBag className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                  <div className="font-bold text-slate-900 tabular-nums">{funnelMetrics.cartAdds}</div>
                  <div className="text-[10px] text-slate-400">Add to Cart</div>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                  <CreditCard className="w-4 h-4 text-indigo-600 mx-auto mb-1" />
                  <div className="font-bold text-slate-900 tabular-nums">{funnelMetrics.checkouts}</div>
                  <div className="text-[10px] text-slate-400">Checkouts</div>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                  <div className="font-bold text-slate-900 tabular-nums">{funnelMetrics.purchases}</div>
                  <div className="text-[10px] text-slate-400">Purchases</div>
                </div>
              </div>

              {/* Conversion Ratios */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-200 text-center text-[11px]">
                <div>
                  <span className="text-slate-400 block text-[10px]">Add-to-Cart Rate</span>
                  <span className="font-bold text-slate-800">{funnelMetrics.addToCartRate}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Checkout Initiation</span>
                  <span className="font-bold text-slate-800">{funnelMetrics.checkoutRate}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Purchase Conversion</span>
                  <span className="font-bold text-emerald-700">{funnelMetrics.conversionRate}</span>
                </div>
              </div>
            </div>

            {/* 5 Key PRD Problems & UX Implementations */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Key UX Solutions Implemented
              </h3>

              <div className="space-y-3">
                {problemSolutions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors shadow-2xs"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        <span>{item.problem}</span>
                      </h4>
                      <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        {item.metric}
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-500 mb-2 leading-relaxed">
                      <strong className="text-slate-600">GA Insight: </strong>
                      {item.gaEvidence}
                    </div>

                    <div className="text-xs text-slate-800 bg-blue-50/50 p-2.5 rounded-lg border border-blue-100/60 leading-relaxed">
                      <strong className="text-blue-900 font-semibold">UX Implementation: </strong>
                      {item.uxSolution}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Event Stream */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center justify-between">
                <span>Recent Event Stream</span>
                <span className="text-[10px] text-slate-400 font-normal">Auto-logged</span>
              </h3>

              <div className="space-y-1.5 max-h-48 overflow-y-auto font-mono text-[11px] bg-slate-900 text-slate-300 p-3 rounded-xl">
                {analyticsEvents.map((evt) => (
                  <div key={evt.id} className="flex items-start gap-2 border-b border-slate-800 pb-1">
                    <span className="text-slate-500 shrink-0">{evt.timestamp}</span>
                    <span className="text-amber-400 font-bold shrink-0">[{evt.eventName}]</span>
                    <span className="text-slate-200 truncate">{evt.details}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="p-4 border-t border-slate-200 bg-slate-50 text-center">
            <button
              onClick={() => setIsAnalyticsOpen(false)}
              className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Close Audit Panel
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
