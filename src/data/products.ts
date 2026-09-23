import { Product } from '../types';

export const CATEGORIES = [
  {
    "id": "All",
    "label": "All Gear",
    "count": 92
  },
  {
    "id": "Apparel",
    "label": "Apparel",
    "count": 16
  },
  {
    "id": "Drinkware",
    "label": "Drinkware",
    "count": 16
  },
  {
    "id": "Bags",
    "label": "Bags",
    "count": 14
  },
  {
    "id": "Stationery",
    "label": "Stationery",
    "count": 16
  },
  {
    "id": "Accessories",
    "label": "Accessories",
    "count": 14
  },
  {
    "id": "Gifts",
    "label": "Gifts & Tech",
    "count": 16
  }
] as const;

export const BRANDS = [
  {
    "id": "Google",
    "name": "Google",
    "count": 48
  },
  {
    "id": "YouTube",
    "name": "YouTube",
    "count": 13
  },
  {
    "id": "Google Cloud",
    "name": "Google Cloud",
    "count": 4
  },
  {
    "id": "Super G",
    "name": "Super G",
    "count": 4
  },
  {
    "id": "Chrome Dino",
    "name": "Chrome Dino",
    "count": 10
  },
  {
    "id": "Android",
    "name": "Android",
    "count": 9
  },
  {
    "id": "Gemini",
    "name": "Gemini",
    "count": 2
  },
  {
    "id": "Google Maps",
    "name": "Google Maps",
    "count": 2
  }
] as const;

export const PRODUCTS: Product[] = [
  {
    "id": "GGOEGXXX2631",
    "name": "Google Marine Layer 1998 Pullover",
    "category": "Apparel",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-marine-layer-1998-pullover-ggoegxxx2631",
    "price": 125,
    "originalPrice": 150,
    "rating": 4.8,
    "reviewsCount": 49,
    "description": "The 1998 Pullover brings together heritage Google branding and a signature Marine Layer fit. With bold stripe sleeve details and a refined pullover silhouette, it is a staple piece that feels like an old favorite.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGXXX2631",
      "Premium comfort finish with durable double-stitched hem"
    ],
    "materials": "100% Certified Organic Cotton & Recycled Blends",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": true,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGXXX2631.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GGOEYXXX2512",
    "name": "YouTube Shorts Shorts",
    "category": "Apparel",
    "brand": "YouTube",
    "shopUrl": "https://shop.merch.google/product/youtube-shorts-shorts-ggoeyxxx2512",
    "price": 34,
    "rating": 4.9,
    "reviewsCount": 80,
    "description": "Show off your love for quick content with our fresh YouTube Shorts shorts! These aren't just comfy and cool; they're just as dynamic as the videos you love.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEYXXX2512",
      "Featured in the YouTube Official Collection",
      "Premium comfort finish with durable double-stitched hem"
    ],
    "materials": "100% Certified Organic Cotton & Recycled Blends",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": true,
    "colors": [
      "Classic Red",
      "Black",
      "Heather Grey"
    ],
    "colorHexes": [
      "#FF0000",
      "#18181B",
      "#94A3B8"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEYXXX2512.jpg",
    "visualTheme": {
      "bg": "from-rose-50 to-red-100",
      "accent": "#FF0000",
      "icon": "youtube"
    }
  },
  {
    "id": "GMSSCCXQ112599",
    "name": "Google Cloud Iconic Stripe Socks",
    "category": "Apparel",
    "brand": "Google Cloud",
    "shopUrl": "https://shop.merch.google/product/google-cloud-fiber-iconic-stripe-socks-gmssccxq112599",
    "price": 18,
    "originalPrice": 22,
    "rating": 4.7,
    "reviewsCount": 111,
    "description": "Stay connected from the ground up. These Google Cloud socks feature a crisp white base with fine, iconic striping details.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSCCXQ112599",
      "Featured in the Google Cloud Official Collection",
      "Premium comfort finish with durable double-stitched hem"
    ],
    "materials": "100% Certified Organic Cotton & Recycled Blends",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": true,
    "colors": [
      "Cloud Blue",
      "Deep Navy",
      "Bright White"
    ],
    "colorHexes": [
      "#0284C7",
      "#1E3A8A",
      "#F8FAFC"
    ],
    "sizes": [
      "One Size (Fits 6-12)"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSCCXQ112599.jpg",
    "visualTheme": {
      "bg": "from-sky-50 to-blue-100",
      "accent": "#0284C7",
      "icon": "cloud"
    }
  },
  {
    "id": "GMSSGXXX1112",
    "name": "Google Grey Organic NYC Tee",
    "category": "Apparel",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-grey-organic-nyc-tee-gmssgxxx1112",
    "price": 34,
    "rating": 4.8,
    "reviewsCount": 142,
    "description": "The perfect everyday basic with a New York twist. Keep it casual in this sustainable Google organic cotton grey tee, sporting a subtle NYC on the chest. Simple, soft, and built for city streets.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGXXX1112",
      "Premium comfort finish with durable double-stitched hem"
    ],
    "materials": "100% Certified Organic Cotton & Recycled Blends",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": true,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGXXX1112.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GMSSGHPJ111799",
    "name": "Google NYC Cap",
    "category": "Apparel",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-nyc-cap-gmssghpj111799",
    "price": 27,
    "rating": 4.6,
    "reviewsCount": 173,
    "description": "Two tones, one iconic city. This low profile Google NYC cap is built to keep you cool and shaded from the East River to the Hudson.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGHPJ111799",
      "Premium comfort finish with durable double-stitched hem"
    ],
    "materials": "100% Certified Organic Cotton & Recycled Blends",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": true,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "sizes": [
      "Adjustable (One Size)"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGHPJ111799.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GGOEGXXX2423",
    "name": "Nano Banana Sweatshirt",
    "category": "Apparel",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/shop-by-brand/google/nano-banana-sweatshirt-ggoegxxx2423",
    "price": 82,
    "originalPrice": 98,
    "rating": 4.8,
    "reviewsCount": 24,
    "description": "Go bananas for our limited-edition Nano Banana sweatshirt, celebrating the launch of Google's state-of-the-art image generation and editing model! This relaxed sweatshirt arrives in a soft butter yellow, features \"Gemini\" embroidery and a signature banana patch on the back (imagined by Nano Banana). It's the perfect way to stay cozy while creating with the model.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGXXX2423",
      "Premium comfort finish with durable double-stitched hem"
    ],
    "materials": "100% Certified Organic Cotton & Recycled Blends",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": true,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGXXX2423.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GMSSGXXX1063",
    "name": "Nano Banana Tee",
    "category": "Apparel",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/nano-banana-tee-gmssgxxx1063",
    "price": 34,
    "rating": 4.9,
    "reviewsCount": 55,
    "description": "Go bananas for our Nano Banana tee, celebrating Google's state-of-the art image generation and editing model. This pale yellow shirt features the Gemini logo on the front and a signature banana on the back. It's the perfect look to celebrate your innovative spirit.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGXXX1063",
      "Premium comfort finish with durable double-stitched hem"
    ],
    "materials": "100% Certified Organic Cotton & Recycled Blends",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": true,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGXXX1063.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GMSSGXXX1069",
    "name": "Super G Gradient Tee",
    "category": "Apparel",
    "brand": "Super G",
    "shopUrl": "https://shop.merch.google/product/super-g-gradient-tee-gmssgxxx1069",
    "price": 30,
    "rating": 4.7,
    "reviewsCount": 86,
    "description": "Sustainable style at its finest. Crafted from soft organic cotton, this premium tee features a beautifully subtle Super G gradient logo on the left chest for a clean, mindful look.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGXXX1069",
      "Featured in the Super G Official Collection",
      "Premium comfort finish with durable double-stitched hem"
    ],
    "materials": "100% Certified Organic Cotton & Recycled Blends",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGXXX1069.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-indigo-100",
      "accent": "#2563EB",
      "icon": "super_g"
    }
  },
  {
    "id": "GGOEGXXX2634",
    "name": "Chrome Dino Encore Sweatshirt",
    "category": "Apparel",
    "brand": "Chrome Dino",
    "shopUrl": "https://shop.merch.google/product/chrome-dino-encore-sweatshirt-ggoegxxx2634",
    "price": 58,
    "originalPrice": 70,
    "rating": 4.8,
    "reviewsCount": 117,
    "description": "Front: A legend. Back: The obstacles. This embroidered Chrome Dino sweatshirt tracks the ultimate desert run. Stay cozy while you jump those cacti—no Wi-Fi required for this high-score look.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGXXX2634",
      "Featured in the Chrome Dino Official Collection",
      "Premium comfort finish with durable double-stitched hem"
    ],
    "materials": "100% Certified Organic Cotton & Recycled Blends",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": true,
    "colors": [
      "Pixel Charcoal",
      "Retro Sand",
      "Dino Green"
    ],
    "colorHexes": [
      "#44403C",
      "#E7E5E4",
      "#15803D"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGXXX2634.jpg",
    "visualTheme": {
      "bg": "from-stone-100 to-amber-100",
      "accent": "#57534E",
      "icon": "dino"
    }
  },
  {
    "id": "GGOEGXXX2635",
    "name": "Google Bike Encore Sweatshirt",
    "category": "Apparel",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-bike-encore-sweatshirt-ggoegxxx2635",
    "price": 58,
    "originalPrice": 70,
    "rating": 4.6,
    "reviewsCount": 148,
    "description": "Life is better in the bike lane.  Featuring an embroidered Google bike on the front and a helmet on the back, this sweatshirt is geared for the ultimate campus cruise. Pedal on!",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGXXX2635",
      "Premium comfort finish with durable double-stitched hem"
    ],
    "materials": "100% Certified Organic Cotton & Recycled Blends",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGXXX2635.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GGOEGXXX2637",
    "name": "Google Nantucket Sweatshirt",
    "category": "Apparel",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-nantucket-sweatshirt-ggoegxxx2637",
    "price": 69,
    "originalPrice": 83,
    "rating": 4.8,
    "reviewsCount": 179,
    "description": "Meet the Google Nantucket.  A deep, salt-washed red inspired by the Atlantic coast. High-quality fleece for those who prefer their adventures with a side of coastal charm.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGXXX2637",
      "Premium comfort finish with durable double-stitched hem"
    ],
    "materials": "100% Certified Organic Cotton & Recycled Blends",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGXXX2637.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GGOEGXXX2645",
    "name": "Google Nantucket Tee",
    "category": "Apparel",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-nantucket-tee-ggoegxxx2645",
    "price": 33,
    "originalPrice": 40,
    "rating": 4.9,
    "reviewsCount": 30,
    "description": "The Google Nantucket Tee in our signature sunset red is built for dockside mornings and bonfire nights. Weather-washed comfort that feels like a classic from day one.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGXXX2645",
      "Premium comfort finish with durable double-stitched hem"
    ],
    "materials": "100% Certified Organic Cotton & Recycled Blends",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGXXX2645.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GGOEYXXX2636",
    "name": "YouTube Encore Sweatshirt",
    "category": "Apparel",
    "brand": "YouTube",
    "shopUrl": "https://shop.merch.google/product/youtube-encore-sweatshirt-ggoeyxxx2636",
    "price": 58,
    "originalPrice": 70,
    "rating": 4.7,
    "reviewsCount": 61,
    "description": "Business in the front, engagement in the back.  Stay cozy in the YouTube Encore Sweatshirt. Featuring the classic red logo and a built-in \"Like\" button for your exit.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEYXXX2636",
      "Featured in the YouTube Official Collection",
      "Premium comfort finish with durable double-stitched hem"
    ],
    "materials": "100% Certified Organic Cotton & Recycled Blends",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Classic Red",
      "Black",
      "Heather Grey"
    ],
    "colorHexes": [
      "#FF0000",
      "#18181B",
      "#94A3B8"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEYXXX2636.jpg",
    "visualTheme": {
      "bg": "from-rose-50 to-red-100",
      "accent": "#FF0000",
      "icon": "youtube"
    }
  },
  {
    "id": "GGOEGXXX2647",
    "name": "Google Brant Point Pullover",
    "category": "Apparel",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-brant-point-pullover-ggoegxxx2647",
    "price": 79,
    "originalPrice": 95,
    "rating": 4.8,
    "reviewsCount": 92,
    "description": "Inspired by morning mist on the harbor.  The Google Brant Point Pullover in pale silver grey offers a refined, airy look for those who prefer the scenic route.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGXXX2647",
      "Premium comfort finish with durable double-stitched hem"
    ],
    "materials": "100% Certified Organic Cotton & Recycled Blends",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGXXX2647.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GGOEGXXX2646",
    "name": "Google Yarmouth Heavyweight Tee",
    "category": "Apparel",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-yarmouth-heavyweight-tee-ggoegxxx2646",
    "price": 40,
    "originalPrice": 48,
    "rating": 4.6,
    "reviewsCount": 123,
    "description": "The Google Yarmouth heavyweight tee in a misty cape hue. Rugged construction meets a refined, soft finish. A coastal essential that holds its own.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGXXX2646",
      "Premium comfort finish with durable double-stitched hem"
    ],
    "materials": "100% Certified Organic Cotton & Recycled Blends",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGXXX2646.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GGOEGXXX2632",
    "name": "Google Wellfleet 1/2 Zip",
    "category": "Apparel",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-wellfleet-1-2-zip-ggoegxxx2632",
    "price": 79,
    "originalPrice": 95,
    "rating": 4.8,
    "reviewsCount": 154,
    "description": "From office to off-the-clock adventures, the Google Wellfleet 1/2 zip features premium spacer yarn for soft structure and light insulation. With UV protection and odor control, stay polished and protected all day long.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGXXX2632",
      "Premium comfort finish with durable double-stitched hem"
    ],
    "materials": "100% Certified Organic Cotton & Recycled Blends",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGXXX2632.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GMSSGDNB106899",
    "name": "Google New York City Icon Tumbler",
    "category": "Drinkware",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-new-york-city-icon-tumbler-gmssgdnb106899",
    "price": 30,
    "rating": 4.9,
    "reviewsCount": 185,
    "description": "Built to handle the fast pace of New York. Whether you are catching the train or heading to a meeting, this insulated Google tumbler keeps your drinks hot or cold while bringing a subtle bit of city character to your day.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGDNB106899",
      "Insulated construction designed for everyday hot & cold beverages"
    ],
    "materials": "18/8 Food-Grade Stainless Steel & BPA-Free Cap",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Matte Black",
      "Stainless Silver",
      "Google Blue"
    ],
    "colorHexes": [
      "#1C1917",
      "#E2E8F0",
      "#2563EB"
    ],
    "sizes": [
      "16 oz",
      "20 oz"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGDNB106899.jpg",
    "visualTheme": {
      "bg": "from-amber-50 to-orange-100",
      "accent": "#D97706",
      "icon": "cup"
    }
  },
  {
    "id": "GMSSGBBB101799",
    "name": "Google Water Bottle Sling",
    "category": "Drinkware",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-water-bottle-sling-gmssgbbb101799",
    "price": 20,
    "originalPrice": 24,
    "rating": 4.7,
    "reviewsCount": 36,
    "description": "Stay hydrated on the go with our Google water bottle sling. The sleek black design features a front pocket for essentials. The adjustable strap ensures a comfortable fit, whether hiking or running errands.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGBBB101799",
      "Insulated construction designed for everyday hot & cold beverages"
    ],
    "materials": "18/8 Food-Grade Stainless Steel & BPA-Free Cap",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Matte Black",
      "Stainless Silver",
      "Google Blue"
    ],
    "colorHexes": [
      "#1C1917",
      "#E2E8F0",
      "#2563EB"
    ],
    "sizes": [
      "24 oz",
      "32 oz"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGBBB101799.jpg",
    "visualTheme": {
      "bg": "from-amber-50 to-orange-100",
      "accent": "#D97706",
      "icon": "cup"
    }
  },
  {
    "id": "GGOEGDHQ264999",
    "name": "Google Gravity Super G Bottle",
    "category": "Drinkware",
    "brand": "Super G",
    "shopUrl": "https://shop.merch.google/product/google-gravity-super-g-bottle-ggoegdhq264999",
    "price": 39,
    "rating": 4.8,
    "reviewsCount": 67,
    "description": "The new center of your daily routine.  The Super G Gravity Bottle pairs a 25 oz capacity with a sleek, integrated handle. A minimalist essential that holds its own, wherever the day pulls you.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGDHQ264999",
      "Featured in the Super G Official Collection",
      "Insulated construction designed for everyday hot & cold beverages"
    ],
    "materials": "18/8 Food-Grade Stainless Steel & BPA-Free Cap",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "colors": [
      "Matte Black",
      "Stainless Silver",
      "Google Blue"
    ],
    "colorHexes": [
      "#1C1917",
      "#E2E8F0",
      "#2563EB"
    ],
    "sizes": [
      "24 oz",
      "32 oz"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGDHQ264999.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-indigo-100",
      "accent": "#2563EB",
      "icon": "super_g"
    }
  },
  {
    "id": "GGOEGDHB163199",
    "name": "Chrome Dino Light-Up Water Bottle",
    "category": "Drinkware",
    "brand": "Chrome Dino",
    "shopUrl": "https://shop.merch.google/product/chrome-dino-light-up-water-bottle-ggoegdhb163199",
    "price": 26,
    "rating": 4.6,
    "reviewsCount": 98,
    "description": "Kids and kids-at-heart will love this new water bottle! The laser engraved Chrome Dino is illuminated at the touch of a button to brighten your day. Plus, it features a convenient wrist strap so you can take it out and show it off!",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGDHB163199",
      "Featured in the Chrome Dino Official Collection",
      "Insulated construction designed for everyday hot & cold beverages"
    ],
    "materials": "18/8 Food-Grade Stainless Steel & BPA-Free Cap",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": true,
    "colors": [
      "Pixel Charcoal",
      "Retro Sand",
      "Dino Green"
    ],
    "colorHexes": [
      "#44403C",
      "#E7E5E4",
      "#15803D"
    ],
    "sizes": [
      "24 oz",
      "32 oz"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGDHB163199.jpg",
    "visualTheme": {
      "bg": "from-stone-100 to-amber-100",
      "accent": "#57534E",
      "icon": "dino"
    }
  },
  {
    "id": "GGOEGDNH262199",
    "name": "Google Lucky Green Straw Tumbler",
    "category": "Drinkware",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-lucky-green-straw-tumbler-ggoegdnh262199",
    "price": 30,
    "originalPrice": 36,
    "rating": 4.8,
    "reviewsCount": 129,
    "description": "Green on the outside, ice-cold on the inside. Our Google Feeling Lucky tumbler is the perfect way to get your daily greens!",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGDNH262199",
      "Insulated construction designed for everyday hot & cold beverages"
    ],
    "materials": "18/8 Food-Grade Stainless Steel & BPA-Free Cap",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Matte Black",
      "Stainless Silver",
      "Google Blue"
    ],
    "colorHexes": [
      "#1C1917",
      "#E2E8F0",
      "#2563EB"
    ],
    "sizes": [
      "16 oz",
      "20 oz"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGDNH262199.jpg",
    "visualTheme": {
      "bg": "from-amber-50 to-orange-100",
      "accent": "#D97706",
      "icon": "cup"
    }
  },
  {
    "id": "GGOEYDNB210499",
    "name": "YouTube Straw Tumbler",
    "category": "Drinkware",
    "brand": "YouTube",
    "shopUrl": "https://shop.merch.google/product/youtube-straw-tumbler-ggoeydnb210499",
    "price": 12,
    "rating": 4.9,
    "reviewsCount": 160,
    "description": "Sip away while creating content in a YouTube tumbler with a smooth rubberized finish and a matching straw.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEYDNB210499",
      "Featured in the YouTube Official Collection",
      "Insulated construction designed for everyday hot & cold beverages"
    ],
    "materials": "18/8 Food-Grade Stainless Steel & BPA-Free Cap",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Classic Red",
      "Black",
      "Heather Grey"
    ],
    "colorHexes": [
      "#FF0000",
      "#18181B",
      "#94A3B8"
    ],
    "sizes": [
      "16 oz",
      "20 oz"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEYDNB210499.jpg",
    "visualTheme": {
      "bg": "from-rose-50 to-red-100",
      "accent": "#FF0000",
      "icon": "youtube"
    }
  },
  {
    "id": "GGOEGDNL258099",
    "name": "Google Inkwell Straw Tumbler",
    "category": "Drinkware",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-inkwell-straw-tumbler-ggoegdnl258099",
    "price": 19,
    "rating": 4.7,
    "reviewsCount": 191,
    "description": "Why buy two when one will do? This intelligent Google tumbler handles hot and cold beverages with superior insulation. Complete with a convenient matching straw, it's the ultimate dual-purpose solution.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGDNL258099",
      "Insulated construction designed for everyday hot & cold beverages"
    ],
    "materials": "18/8 Food-Grade Stainless Steel & BPA-Free Cap",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Matte Black",
      "Stainless Silver",
      "Google Blue"
    ],
    "colorHexes": [
      "#1C1917",
      "#E2E8F0",
      "#2563EB"
    ],
    "sizes": [
      "16 oz",
      "20 oz"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGDNL258099.jpg",
    "visualTheme": {
      "bg": "from-amber-50 to-orange-100",
      "accent": "#D97706",
      "icon": "cup"
    }
  },
  {
    "id": "GGOEGDWB211499",
    "name": "Chrome Dino Game Over Mug",
    "category": "Drinkware",
    "brand": "Chrome Dino",
    "shopUrl": "https://shop.merch.google/product/chrome-dino-game-over-mug-ggoegdwb211499",
    "price": 14,
    "originalPrice": 17,
    "rating": 4.8,
    "reviewsCount": 42,
    "description": "Start your morning off with a jolt of energy with this playful Chrome Dino mug  caffeine not needed!",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGDWB211499",
      "Featured in the Chrome Dino Official Collection",
      "Insulated construction designed for everyday hot & cold beverages"
    ],
    "materials": "18/8 Food-Grade Stainless Steel & BPA-Free Cap",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": true,
    "colors": [
      "Pixel Charcoal",
      "Retro Sand",
      "Dino Green"
    ],
    "colorHexes": [
      "#44403C",
      "#E7E5E4",
      "#15803D"
    ],
    "sizes": [
      "Standard 12 oz"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGDWB211499.jpg",
    "visualTheme": {
      "bg": "from-stone-100 to-amber-100",
      "accent": "#57534E",
      "icon": "dino"
    }
  },
  {
    "id": "GGOEGDHB210199",
    "name": "Super G Laser Etched Bottle",
    "category": "Drinkware",
    "brand": "Super G",
    "shopUrl": "https://shop.merch.google/product/super-g-laser-etched-bottle-ggoegdhb210199",
    "price": 19,
    "rating": 4.6,
    "reviewsCount": 73,
    "description": "Stay hydrated with this sleek single wall, laser etched Super G bottle, perfect for cool or ambient drinks.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGDHB210199",
      "Featured in the Super G Official Collection",
      "Insulated construction designed for everyday hot & cold beverages"
    ],
    "materials": "18/8 Food-Grade Stainless Steel & BPA-Free Cap",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": true,
    "colors": [
      "Matte Black",
      "Stainless Silver",
      "Google Blue"
    ],
    "colorHexes": [
      "#1C1917",
      "#E2E8F0",
      "#2563EB"
    ],
    "sizes": [
      "24 oz",
      "32 oz"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGDHB210199.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-indigo-100",
      "accent": "#2563EB",
      "icon": "super_g"
    }
  },
  {
    "id": "GGOEYDWB210799",
    "name": "YouTube Icon Mug",
    "category": "Drinkware",
    "brand": "YouTube",
    "shopUrl": "https://shop.merch.google/product/youtube-icon-mug-ggoeydwb210799",
    "price": 14,
    "rating": 4.8,
    "reviewsCount": 104,
    "description": "When you just want to kick back, get cozy and watch YouTube, our Icon mug will be your tried and true partner.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEYDWB210799",
      "Featured in the YouTube Official Collection",
      "Insulated construction designed for everyday hot & cold beverages"
    ],
    "materials": "18/8 Food-Grade Stainless Steel & BPA-Free Cap",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Classic Red",
      "Black",
      "Heather Grey"
    ],
    "colorHexes": [
      "#FF0000",
      "#18181B",
      "#94A3B8"
    ],
    "sizes": [
      "Standard 12 oz"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEYDWB210799.jpg",
    "visualTheme": {
      "bg": "from-rose-50 to-red-100",
      "accent": "#FF0000",
      "icon": "youtube"
    }
  },
  {
    "id": "GGOEADHB219699",
    "name": "Android Chroma Bottle",
    "category": "Drinkware",
    "brand": "Android",
    "shopUrl": "https://shop.merch.google/product/android-chroma-bottle-ggoeadhb219699",
    "price": 15,
    "originalPrice": 18,
    "rating": 4.9,
    "reviewsCount": 135,
    "description": "Perfect for staying hydrated, this single wall Android bottle is ideal for hikes or travelling. It’s light and portable so it won’t weigh you down while you’re on the go.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEADHB219699",
      "Featured in the Android Official Collection",
      "Insulated construction designed for everyday hot & cold beverages"
    ],
    "materials": "18/8 Food-Grade Stainless Steel & BPA-Free Cap",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Android Green",
      "Charcoal",
      "Pure White"
    ],
    "colorHexes": [
      "#3DDC84",
      "#262626",
      "#FFFFFF"
    ],
    "sizes": [
      "24 oz",
      "32 oz"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEADHB219699.jpg",
    "visualTheme": {
      "bg": "from-emerald-50 to-emerald-100",
      "accent": "#3DDC84",
      "icon": "android"
    }
  },
  {
    "id": "GGOEADWB223299",
    "name": "Android Café Mug",
    "category": "Drinkware",
    "brand": "Android",
    "shopUrl": "https://shop.merch.google/product/android-caf-mug-ggoeadwb223299",
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 166,
    "description": "Would you like a friendly companion with your morning coffee?  Android is here to help and will be by your side with every single sip on this delightful mug.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEADWB223299",
      "Featured in the Android Official Collection",
      "Insulated construction designed for everyday hot & cold beverages"
    ],
    "materials": "18/8 Food-Grade Stainless Steel & BPA-Free Cap",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Android Green",
      "Charcoal",
      "Pure White"
    ],
    "colorHexes": [
      "#3DDC84",
      "#262626",
      "#FFFFFF"
    ],
    "sizes": [
      "Standard 12 oz"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEADWB223299.jpg",
    "visualTheme": {
      "bg": "from-emerald-50 to-emerald-100",
      "accent": "#3DDC84",
      "icon": "android"
    }
  },
  {
    "id": "GGOEYDNB248599",
    "name": "YouTube Etched Handle Tumbler",
    "category": "Drinkware",
    "brand": "YouTube",
    "shopUrl": "https://shop.merch.google/product/youtube-etched-handle-tumbler-ggoeydnb248599",
    "price": 33,
    "rating": 4.8,
    "reviewsCount": 197,
    "description": "Handle it all with this versatile tumbler. Featuring dual drinking options and a comfortable handle, it's the perfect companion for any beverage, any adventure.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEYDNB248599",
      "Featured in the YouTube Official Collection",
      "Insulated construction designed for everyday hot & cold beverages"
    ],
    "materials": "18/8 Food-Grade Stainless Steel & BPA-Free Cap",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Classic Red",
      "Black",
      "Heather Grey"
    ],
    "colorHexes": [
      "#FF0000",
      "#18181B",
      "#94A3B8"
    ],
    "sizes": [
      "16 oz",
      "20 oz"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEYDNB248599.jpg",
    "visualTheme": {
      "bg": "from-rose-50 to-red-100",
      "accent": "#FF0000",
      "icon": "youtube"
    }
  },
  {
    "id": "GGOEGDNC172699",
    "name": "Google Bike Tumbler",
    "category": "Drinkware",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-bike-tumbler-ggoegdnc172699",
    "price": 28,
    "originalPrice": 34,
    "rating": 4.6,
    "reviewsCount": 48,
    "description": "Our Google Bike tumbler is the perfect choice for keeping beverages both hot or cold. Sip easily while on-the-go, it's the ultimate vessel for those on the move.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGDNC172699",
      "Insulated construction designed for everyday hot & cold beverages"
    ],
    "materials": "18/8 Food-Grade Stainless Steel & BPA-Free Cap",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Matte Black",
      "Stainless Silver",
      "Google Blue"
    ],
    "colorHexes": [
      "#1C1917",
      "#E2E8F0",
      "#2563EB"
    ],
    "sizes": [
      "16 oz",
      "20 oz"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGDNC172699.jpg",
    "visualTheme": {
      "bg": "from-amber-50 to-orange-100",
      "accent": "#D97706",
      "icon": "cup"
    }
  },
  {
    "id": "GMSSGDHC107599",
    "name": "Google Berkshires Bottle",
    "category": "Drinkware",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-berkshires-bottle-gmssgdhc107599",
    "price": 38,
    "rating": 4.8,
    "reviewsCount": 79,
    "description": "Stay hydrated wherever you go with this convenient and portable Google water bottle. The sturdy woven handle makes it easy to carry, so you can enjoy your favorite beverage anytime, anywhere.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGDHC107599",
      "Insulated construction designed for everyday hot & cold beverages"
    ],
    "materials": "18/8 Food-Grade Stainless Steel & BPA-Free Cap",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Matte Black",
      "Stainless Silver",
      "Google Blue"
    ],
    "colorHexes": [
      "#1C1917",
      "#E2E8F0",
      "#2563EB"
    ],
    "sizes": [
      "24 oz",
      "32 oz"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGDHC107599.jpg",
    "visualTheme": {
      "bg": "from-amber-50 to-orange-100",
      "accent": "#D97706",
      "icon": "cup"
    }
  },
  {
    "id": "GMSSGDWD107699",
    "name": "Google Café au Lait Mug",
    "category": "Drinkware",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-caf-au-lait-mug-gmssgdwd107699",
    "price": 12,
    "rating": 4.9,
    "reviewsCount": 110,
    "description": "Save space without sacrificing style with our 10oz Google stackable mug. Perfectly sized for your favorite beverages and designed to nest neatly for easy storage.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGDWD107699",
      "Insulated construction designed for everyday hot & cold beverages"
    ],
    "materials": "18/8 Food-Grade Stainless Steel & BPA-Free Cap",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Matte Black",
      "Stainless Silver",
      "Google Blue"
    ],
    "colorHexes": [
      "#1C1917",
      "#E2E8F0",
      "#2563EB"
    ],
    "sizes": [
      "Standard 12 oz"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGDWD107699.jpg",
    "visualTheme": {
      "bg": "from-amber-50 to-orange-100",
      "accent": "#D97706",
      "icon": "cup"
    }
  },
  {
    "id": "GMSSYBJB106499",
    "name": "YouTube Cotton Tote",
    "category": "Bags",
    "brand": "YouTube",
    "shopUrl": "https://shop.merch.google/product/youtube-cotton-tote-gmssybjb106499",
    "price": 16,
    "originalPrice": 19,
    "rating": 4.7,
    "reviewsCount": 141,
    "description": "Your offline bag for online creators. Our sturdy YouTube cotton canvas tote holds your daily gear, production notes, and market hauls without breaking a sweat.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSYBJB106499",
      "Featured in the YouTube Official Collection",
      "Reinforced handles and seams for daily commute durability"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Classic Red",
      "Black",
      "Heather Grey"
    ],
    "colorHexes": [
      "#FF0000",
      "#18181B",
      "#94A3B8"
    ],
    "sizes": [
      "15L Capacity"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSYBJB106499.jpg",
    "visualTheme": {
      "bg": "from-rose-50 to-red-100",
      "accent": "#FF0000",
      "icon": "youtube"
    }
  },
  {
    "id": "GMSSGBBB110899",
    "name": "Google Cyber-Stitch Laptop Case",
    "category": "Bags",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-cyber-stitch-laptop-case-gmssgbbb110899",
    "price": 47,
    "originalPrice": 56,
    "rating": 4.8,
    "reviewsCount": 172,
    "description": "For those who appreciate the little details. This durable black Google neoprene case offers clean, reliable protection with just a whisper of color from its subtle green, yellow, and blue accents.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGBBB110899",
      "Reinforced handles and seams for daily commute durability"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Graphite Black",
      "Slate Grey",
      "Navy"
    ],
    "colorHexes": [
      "#18181B",
      "#475569",
      "#1E293B"
    ],
    "sizes": [
      "Fits 14-16\" Laptops"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGBBB110899.jpg",
    "visualTheme": {
      "bg": "from-slate-100 to-zinc-200",
      "accent": "#334155",
      "icon": "backpack"
    }
  },
  {
    "id": "GGOEGBRB262099",
    "name": "Google Timbuk2 Tuck Backpack",
    "category": "Bags",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-timbuk2-tuck-backpack-ggoegbrb262099",
    "price": 124,
    "originalPrice": 149,
    "rating": 4.6,
    "reviewsCount": 23,
    "description": "Clean lines, zero fuss. This Google Timbuk2 Tuck offers a streamlined silhouette with an easy-access roll-top. Water-resistant and built to last, it’s the high-performance bag that keeps your gear dry and your style on point.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGBRB262099",
      "Reinforced handles and seams for daily commute durability"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Graphite Black",
      "Slate Grey",
      "Navy"
    ],
    "colorHexes": [
      "#18181B",
      "#475569",
      "#1E293B"
    ],
    "sizes": [
      "20L Capacity"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGBRB262099.jpg",
    "visualTheme": {
      "bg": "from-slate-100 to-zinc-200",
      "accent": "#334155",
      "icon": "backpack"
    }
  },
  {
    "id": "GGOEGBJB210899",
    "name": "Google Igloo Recycled Cooler Tote",
    "category": "Bags",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-igloo-recycled-cooler-tote-ggoegbjb210899",
    "price": 60,
    "originalPrice": 72,
    "rating": 4.8,
    "reviewsCount": 54,
    "description": "Perfectly portable for picnics or other outdoor activities, this Google recycled tote by Igloo will keep your goodies chilled for hours.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGBJB210899",
      "Reinforced handles and seams for daily commute durability"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Graphite Black",
      "Slate Grey",
      "Navy"
    ],
    "colorHexes": [
      "#18181B",
      "#475569",
      "#1E293B"
    ],
    "sizes": [
      "15L Capacity"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGBJB210899.jpg",
    "visualTheme": {
      "bg": "from-slate-100 to-zinc-200",
      "accent": "#334155",
      "icon": "backpack"
    }
  },
  {
    "id": "GGOEGBJB254099",
    "name": "Gemini FEED Tote Bag",
    "category": "Bags",
    "brand": "Gemini",
    "shopUrl": "https://shop.merch.google/product/shop-by-brand/gemini/gemini-feed-tote-bag-ggoegbjb254099",
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 85,
    "description": "A bag with a mission. By choosing this Gemini FEED tote, you're not only getting a durable and stylish bag, but you're also providing 3 school meals to children in-need.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGBJB254099",
      "Featured in the Gemini Official Collection",
      "Reinforced handles and seams for daily commute durability"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "colors": [
      "Deep Space Violet",
      "Obsidian Black",
      "Aurora Blue"
    ],
    "colorHexes": [
      "#6366F1",
      "#0F172A",
      "#38BDF8"
    ],
    "sizes": [
      "15L Capacity"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGBJB254099.jpg",
    "visualTheme": {
      "bg": "from-indigo-50 to-purple-100",
      "accent": "#7C3AED",
      "icon": "gemini"
    }
  },
  {
    "id": "GGOEYBMB250399",
    "name": "YouTube Thumbs Up Duffel",
    "category": "Bags",
    "brand": "YouTube",
    "shopUrl": "https://shop.merch.google/product/youtube-thumbs-up-duffel-ggoeybmb250399",
    "price": 44,
    "originalPrice": 53,
    "rating": 4.7,
    "reviewsCount": 116,
    "description": "Gear up with the ultimate YouTube duffel bag. Featuring a bold red interior and awesome thumbs-up zipper pulls, this bag is a statement. It's spacious, durable, and ready for your next adventure – on or offline.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEYBMB250399",
      "Featured in the YouTube Official Collection",
      "Reinforced handles and seams for daily commute durability"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Classic Red",
      "Black",
      "Heather Grey"
    ],
    "colorHexes": [
      "#FF0000",
      "#18181B",
      "#94A3B8"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEYBMB250399.jpg",
    "visualTheme": {
      "bg": "from-rose-50 to-red-100",
      "accent": "#FF0000",
      "icon": "youtube"
    }
  },
  {
    "id": "GMSSGBPH101899",
    "name": "Google Basecamp Duffel",
    "category": "Bags",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-basecamp-duffel-gmssgbph101899",
    "price": 60,
    "originalPrice": 72,
    "rating": 4.8,
    "reviewsCount": 147,
    "description": "Our Google Basecamp duffel is built for the modern journey. Minimalist design meets rugged utility. From the morning commute to the weekend escape—pack light, go far.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGBPH101899",
      "Reinforced handles and seams for daily commute durability"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Graphite Black",
      "Slate Grey",
      "Navy"
    ],
    "colorHexes": [
      "#18181B",
      "#475569",
      "#1E293B"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGBPH101899.jpg",
    "visualTheme": {
      "bg": "from-slate-100 to-zinc-200",
      "accent": "#334155",
      "icon": "backpack"
    }
  },
  {
    "id": "GMSSGBPJ101999",
    "name": "Google Alabaster Duffel",
    "category": "Bags",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-alabaster-duffel-gmssgbpj101999",
    "price": 76,
    "originalPrice": 91,
    "rating": 4.6,
    "reviewsCount": 178,
    "description": "Our sleek Google alabaster duffel bag is a great choice for weekend getaways. It features a spacious main compartment, a detachable shoulder strap, and comfortable handles for easy carrying.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGBPJ101999",
      "Reinforced handles and seams for daily commute durability"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Graphite Black",
      "Slate Grey",
      "Navy"
    ],
    "colorHexes": [
      "#18181B",
      "#475569",
      "#1E293B"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGBPJ101999.jpg",
    "visualTheme": {
      "bg": "from-slate-100 to-zinc-200",
      "accent": "#334155",
      "icon": "backpack"
    }
  },
  {
    "id": "GMSSGBJB102099",
    "name": "Google Recycled Everyday Black Tote",
    "category": "Bags",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-recycled-everyday-black-tote-gmssgbjb102099",
    "price": 29,
    "rating": 4.8,
    "reviewsCount": 29,
    "description": "Zip up your goods in this Google bag made from recycled water bottles.  Lightweight yet durable, this tote features handy pockets for small goods and longer shoulder straps for easy portability.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGBJB102099",
      "Reinforced handles and seams for daily commute durability"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Graphite Black",
      "Slate Grey",
      "Navy"
    ],
    "colorHexes": [
      "#18181B",
      "#475569",
      "#1E293B"
    ],
    "sizes": [
      "15L Capacity"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGBJB102099.jpg",
    "visualTheme": {
      "bg": "from-slate-100 to-zinc-200",
      "accent": "#334155",
      "icon": "backpack"
    }
  },
  {
    "id": "GMSSGBRB102699",
    "name": "Google Recycled Black Backpack",
    "category": "Bags",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-recycled-black-backpack-gmssgbrb102699",
    "price": 94,
    "originalPrice": 113,
    "rating": 4.9,
    "reviewsCount": 60,
    "description": "If you're looking to upgrade your bag, say hello to our new Google Recycled Backpack!  With its thoughtful interior features and eco-friendly fabrication, you'll be set for your daily adventures.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGBRB102699",
      "Reinforced handles and seams for daily commute durability"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Graphite Black",
      "Slate Grey",
      "Navy"
    ],
    "colorHexes": [
      "#18181B",
      "#475569",
      "#1E293B"
    ],
    "sizes": [
      "20L Capacity"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGBRB102699.jpg",
    "visualTheme": {
      "bg": "from-slate-100 to-zinc-200",
      "accent": "#334155",
      "icon": "backpack"
    }
  },
  {
    "id": "GMSSGBJJ102899",
    "name": "Google Recycled Drawstring Handle Bag",
    "category": "Bags",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-recycled-drawstring-handle-bag-gmssgbjj102899",
    "price": 8,
    "rating": 4.7,
    "reviewsCount": 91,
    "description": "Need a handy bag in a cinch? You got it! Our Google drawstring tote, made out of 100% recycled materials will be any easy way to transition out of plastic and paper throwaway bags.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGBJJ102899",
      "Reinforced handles and seams for daily commute durability"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Graphite Black",
      "Slate Grey",
      "Navy"
    ],
    "colorHexes": [
      "#18181B",
      "#475569",
      "#1E293B"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGBJJ102899.jpg",
    "visualTheme": {
      "bg": "from-slate-100 to-zinc-200",
      "accent": "#334155",
      "icon": "backpack"
    }
  },
  {
    "id": "GMSSGBBL103299",
    "name": "Google Recycled Navy Snack Bag",
    "category": "Bags",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-recycled-navy-snack-bag-gmssgbbl103299",
    "price": 8,
    "rating": 4.8,
    "reviewsCount": 122,
    "description": "Take treats on-the-go and ditch zip top plastic bags forever!  This generous sized snack bag holds everything from grapes, carrots to cookies.  What a small way to make a big sustainable change!",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGBBL103299",
      "Reinforced handles and seams for daily commute durability"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Graphite Black",
      "Slate Grey",
      "Navy"
    ],
    "colorHexes": [
      "#18181B",
      "#475569",
      "#1E293B"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGBBL103299.jpg",
    "visualTheme": {
      "bg": "from-slate-100 to-zinc-200",
      "accent": "#334155",
      "icon": "backpack"
    }
  },
  {
    "id": "GMSSGBJK103399",
    "name": "Google FEED Khaki Tote",
    "category": "Bags",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-feed-khaki-tote-gmssgbjk103399",
    "price": 23,
    "originalPrice": 28,
    "rating": 4.6,
    "reviewsCount": 153,
    "description": "A bag that does good and looks good.  This Google organic cotton tote isn't just kind to the planet, it gives back!  Each FEED tote purchased will provide 5 school meals to a child in-need.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGBJK103399",
      "Reinforced handles and seams for daily commute durability"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Graphite Black",
      "Slate Grey",
      "Navy"
    ],
    "colorHexes": [
      "#18181B",
      "#475569",
      "#1E293B"
    ],
    "sizes": [
      "15L Capacity"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGBJK103399.jpg",
    "visualTheme": {
      "bg": "from-slate-100 to-zinc-200",
      "accent": "#334155",
      "icon": "backpack"
    }
  },
  {
    "id": "GMSSGBPC114999",
    "name": "Google Eco-Friendly Blue Duffel",
    "category": "Bags",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-eco-friendly-blue-duffel-gmssgbpc114999",
    "price": 45,
    "originalPrice": 54,
    "rating": 4.8,
    "reviewsCount": 184,
    "description": "Perfect for a weekend getaway or a rewarding trip to the gym,  you'll definitely enjoy this handy Google Duffel bag.  Made with 50% recycled materials and in our favorite colors, it's a win-win!",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGBPC114999",
      "Reinforced handles and seams for daily commute durability"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Graphite Black",
      "Slate Grey",
      "Navy"
    ],
    "colorHexes": [
      "#18181B",
      "#475569",
      "#1E293B"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGBPC114999.jpg",
    "visualTheme": {
      "bg": "from-slate-100 to-zinc-200",
      "accent": "#334155",
      "icon": "backpack"
    }
  },
  {
    "id": "GMSSMOKA111599",
    "name": "Google Maps Pin Reflective Sticker",
    "category": "Stationery",
    "brand": "Google Maps",
    "shopUrl": "https://shop.merch.google/product/google-maps-pin-reflective-sticker-gmssmoka111599",
    "price": 2,
    "rating": 4.9,
    "reviewsCount": 35,
    "description": "Mark your favorite spot on the map. This Google Maps pin sticker features a stunning color gradient and a premium reflective finish that catches the light wherever you go. The perfect reminder of your next destination.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSMOKA111599",
      "Featured in the Google Maps Official Collection",
      "Precision printed with archival vibrant colors"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSMOKA111599.jpg",
    "visualTheme": {
      "bg": "from-teal-50 to-cyan-100",
      "accent": "#0D9488",
      "icon": "maps"
    }
  },
  {
    "id": "GMSSGOKT105999",
    "name": "Nano Banana Cloth Sticker",
    "category": "Stationery",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/nano-banana-cloth-sticker-gmssgokt105999",
    "price": 2,
    "originalPrice": 2,
    "rating": 4.7,
    "reviewsCount": 66,
    "description": "Stick a tiny splash of personality to your tech. This Nano Banana sticker features a unique woven texture that feels as good as it looks. Perfect for your laptop, bottle, or notebook.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGOKT105999",
      "Precision printed with archival vibrant colors"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGOKT105999.jpg",
    "visualTheme": {
      "bg": "from-yellow-50 to-amber-100",
      "accent": "#EAB308",
      "icon": "stationery"
    }
  },
  {
    "id": "GGOEGCBA200499",
    "name": "Google Bike Pennant",
    "category": "Stationery",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-bike-pennant-ggoegcba200499",
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 97,
    "description": "Keep 2 plastic bottles out of a landfill and on your wall instead, repurposed into a super cool Google Bike pennant!",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGCBA200499",
      "Precision printed with archival vibrant colors"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGCBA200499.jpg",
    "visualTheme": {
      "bg": "from-yellow-50 to-amber-100",
      "accent": "#EAB308",
      "icon": "stationery"
    }
  },
  {
    "id": "GGOEGOBA252899",
    "name": "Google Rainbow Pencil Set",
    "category": "Stationery",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-rainbow-pencil-set-ggoegoba252899",
    "price": 9,
    "rating": 4.6,
    "reviewsCount": 128,
    "description": "Experience true eco-magic with our innovative Google pencil set. Each pencil, made from recycled newspaper, holds a hidden secret: as you sharpen it, a beautiful rainbow pattern unfolds, turning a simple task into a colorful moment.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGOBA252899",
      "Precision printed with archival vibrant colors"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGOBA252899.jpg",
    "visualTheme": {
      "bg": "from-yellow-50 to-amber-100",
      "accent": "#EAB308",
      "icon": "stationery"
    }
  },
  {
    "id": "GGOEGOKA248299",
    "name": "Noogler Cloth Sticker",
    "category": "Stationery",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/noogler-cloth-sticker-ggoegoka248299",
    "price": 2,
    "originalPrice": 2,
    "rating": 4.8,
    "reviewsCount": 159,
    "description": "Imagine a sticker that's not just seen, but felt. This fabric Noogler hat sticker offers a soft, textile experience while providing a unique look.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGOKA248299",
      "Precision printed with archival vibrant colors"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGOKA248299.jpg",
    "visualTheme": {
      "bg": "from-yellow-50 to-amber-100",
      "accent": "#EAB308",
      "icon": "stationery"
    }
  },
  {
    "id": "GGOEGOKA235999",
    "name": "Snake Game Sticker",
    "category": "Stationery",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/stationery/stickers/snake-game-sticker-ggoegoka235999",
    "price": 2,
    "rating": 4.9,
    "reviewsCount": 190,
    "description": "Unleash your inner competitor with this epic Snake Game sticker. Rep your high score and show the world you are the best at…eating fruit!",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGOKA235999",
      "Precision printed with archival vibrant colors"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGOKA235999.jpg",
    "visualTheme": {
      "bg": "from-yellow-50 to-amber-100",
      "accent": "#EAB308",
      "icon": "stationery"
    }
  },
  {
    "id": "GGOEGOKA214799",
    "name": "Google Pride Hologram Sticker",
    "category": "Stationery",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-pride-hologram-sticker-ggoegoka214799",
    "price": 2,
    "rating": 4.7,
    "reviewsCount": 41,
    "description": "Double rainbow all the way!  Our Google Pride hologram sticker just makes you feel good.  Trust us, you'll need more than one of these.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGOKA214799",
      "Precision printed with archival vibrant colors"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGOKA214799.jpg",
    "visualTheme": {
      "bg": "from-yellow-50 to-amber-100",
      "accent": "#EAB308",
      "icon": "stationery"
    }
  },
  {
    "id": "GGOEGOKA214999",
    "name": "Noto Emoji Sticker Sheet",
    "category": "Stationery",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/noto-emoji-sticker-sheet-ggoegoka214999",
    "price": 3,
    "originalPrice": 4,
    "rating": 4.8,
    "reviewsCount": 72,
    "description": "With so many fun designs, what won't you put a Noto Emoji sticker on?  The unique clear sticker really pops on lighter colors, but offers a cool, understated look on darker surfaces too.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGOKA214999",
      "Precision printed with archival vibrant colors"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGOKA214999.jpg",
    "visualTheme": {
      "bg": "from-yellow-50 to-amber-100",
      "accent": "#EAB308",
      "icon": "stationery"
    }
  },
  {
    "id": "GGOEGOKA212399",
    "name": "Chrome Dino Glow-in-the-Dark Sticker",
    "category": "Stationery",
    "brand": "Chrome Dino",
    "shopUrl": "https://shop.merch.google/product/chrome-dino-glow-in-the-dark-sticker-ggoegoka212399",
    "price": 2,
    "rating": 4.6,
    "reviewsCount": 103,
    "description": "Turn off the lights!  This Chrome Dino sticker really has it glowin' on, day or night!",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGOKA212399",
      "Featured in the Chrome Dino Official Collection",
      "Precision printed with archival vibrant colors"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": true,
    "colors": [
      "Pixel Charcoal",
      "Retro Sand",
      "Dino Green"
    ],
    "colorHexes": [
      "#44403C",
      "#E7E5E4",
      "#15803D"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGOKA212399.jpg",
    "visualTheme": {
      "bg": "from-stone-100 to-amber-100",
      "accent": "#57534E",
      "icon": "dino"
    }
  },
  {
    "id": "GGOEAOKH217499",
    "name": "Android Solo Sticker",
    "category": "Stationery",
    "brand": "Android",
    "shopUrl": "https://shop.merch.google/product/android-solo-sticker-ggoeaokh217499",
    "price": 2,
    "rating": 4.8,
    "reviewsCount": 134,
    "description": "Our Android sticker has exactly what you need to add a dash of personality to a blank notebook or bottle.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEAOKH217499",
      "Featured in the Android Official Collection",
      "Precision printed with archival vibrant colors"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Android Green",
      "Charcoal",
      "Pure White"
    ],
    "colorHexes": [
      "#3DDC84",
      "#262626",
      "#FFFFFF"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEAOKH217499.jpg",
    "visualTheme": {
      "bg": "from-emerald-50 to-emerald-100",
      "accent": "#3DDC84",
      "icon": "android"
    }
  },
  {
    "id": "GMSSGOKB107099",
    "name": "Google Hologram NYC Campus Sticker",
    "category": "Stationery",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-hologram-nyc-campus-sticker-gmssgokb107099",
    "price": 2,
    "originalPrice": 2,
    "rating": 4.9,
    "reviewsCount": 165,
    "description": "Nostalgic and fun for everyone, our exclusive New York City Campus holographic sticker will definitely catch your eye!",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGOKB107099",
      "Precision printed with archival vibrant colors"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGOKB107099.jpg",
    "visualTheme": {
      "bg": "from-yellow-50 to-amber-100",
      "accent": "#EAB308",
      "icon": "stationery"
    }
  },
  {
    "id": "GMSSGOKH107199",
    "name": "Google Hologram MTV Campus Sticker",
    "category": "Stationery",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-hologram-mtv-campus-sticker-gmssgokh107199",
    "price": 2,
    "rating": 4.7,
    "reviewsCount": 196,
    "description": "Nostalgic and fun for everyone, our exclusive Mountain View Campus holographic sticker will definitely catch your eye!",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGOKH107199",
      "Precision printed with archival vibrant colors"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGOKH107199.jpg",
    "visualTheme": {
      "bg": "from-yellow-50 to-amber-100",
      "accent": "#EAB308",
      "icon": "stationery"
    }
  },
  {
    "id": "GMSSGOKC107299",
    "name": "Google Hologram SVL Campus Sticker",
    "category": "Stationery",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-hologram-svl-campus-sticker-gmssgokc107299",
    "price": 2,
    "rating": 4.8,
    "reviewsCount": 47,
    "description": "Nostalgic and fun for everyone, our exclusive Sunnyvale Campus holographic sticker will definitely catch your eye!",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGOKC107299",
      "Precision printed with archival vibrant colors"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGOKC107299.jpg",
    "visualTheme": {
      "bg": "from-yellow-50 to-amber-100",
      "accent": "#EAB308",
      "icon": "stationery"
    }
  },
  {
    "id": "GMSSGOKQ117399",
    "name": "Google Sticker",
    "category": "Stationery",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-sticker-gmssgokq117399",
    "price": 1.5,
    "originalPrice": 2,
    "rating": 4.6,
    "reviewsCount": 78,
    "description": "Nothing beats a classic!  You can't go wrong with this trusty Google sticker in your life.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGOKQ117399",
      "Precision printed with archival vibrant colors"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGOKQ117399.jpg",
    "visualTheme": {
      "bg": "from-yellow-50 to-amber-100",
      "accent": "#EAB308",
      "icon": "stationery"
    }
  },
  {
    "id": "GGOEAOAB217899",
    "name": "Android Black Pen",
    "category": "Stationery",
    "brand": "Android",
    "shopUrl": "https://shop.merch.google/product/android-black-pen-ggoeaoab217899",
    "price": 2,
    "rating": 4.8,
    "reviewsCount": 109,
    "description": "Add a delightful addition to your writing station with a clickable fine point pen.  Featuring a soft touch matte finish and a bold Android logo.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEAOAB217899",
      "Featured in the Android Official Collection",
      "Precision printed with archival vibrant colors"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Android Green",
      "Charcoal",
      "Pure White"
    ],
    "colorHexes": [
      "#3DDC84",
      "#262626",
      "#FFFFFF"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEAOAB217899.jpg",
    "visualTheme": {
      "bg": "from-emerald-50 to-emerald-100",
      "accent": "#3DDC84",
      "icon": "android"
    }
  },
  {
    "id": "GGOEYOAB250599",
    "name": "YouTube Recycled Clicker Pen",
    "category": "Stationery",
    "brand": "YouTube",
    "shopUrl": "https://shop.merch.google/product/youtube-recycled-clicker-pen-ggoeyoab250599",
    "price": 2,
    "rating": 4.9,
    "reviewsCount": 140,
    "description": "Write green, think big. Our YouTube pen is made from recycled materials and sports a cool red click top. It's the ultimate tool for eco-conscious creators and fans alike. Get yours and start making a difference, one word at a time.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEYOAB250599",
      "Featured in the YouTube Official Collection",
      "Precision printed with archival vibrant colors"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Classic Red",
      "Black",
      "Heather Grey"
    ],
    "colorHexes": [
      "#FF0000",
      "#18181B",
      "#94A3B8"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEYOAB250599.jpg",
    "visualTheme": {
      "bg": "from-rose-50 to-red-100",
      "accent": "#FF0000",
      "icon": "youtube"
    }
  },
  {
    "id": "GGOEGOBB265199",
    "name": "Chrome Dino Magic Umbrella",
    "category": "Accessories",
    "brand": "Chrome Dino",
    "shopUrl": "https://shop.merch.google/product/chrome-dino-magic-umbrella-ggoegobb265199",
    "price": 24,
    "originalPrice": 29,
    "rating": 4.7,
    "reviewsCount": 171,
    "description": "Rainy days just got a lot more interesting.  This umbrella appears solid black when dry, but reveals a cool secret Chrome Dino pattern once it gets wet!  Stay dry while the magic unfolds.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGOBB265199",
      "Featured in the Chrome Dino Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": true,
    "colors": [
      "Pixel Charcoal",
      "Retro Sand",
      "Dino Green"
    ],
    "colorHexes": [
      "#44403C",
      "#E7E5E4",
      "#15803D"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGOBB265199.jpg",
    "visualTheme": {
      "bg": "from-stone-100 to-amber-100",
      "accent": "#57534E",
      "icon": "dino"
    }
  },
  {
    "id": "GMSSGCBA105799",
    "name": "Google Maps Gradient Patch",
    "category": "Accessories",
    "brand": "Google Maps",
    "shopUrl": "https://shop.merch.google/product/google-maps-gradient-patch-gmssgcba105799",
    "price": 6,
    "rating": 4.8,
    "reviewsCount": 22,
    "description": "This durable PVC patch brings the classic Google Maps pin to life with a bold color gradient and a smooth, touchable texture. Perfect for totes, denim jackets, and caps.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGCBA105799",
      "Featured in the Google Maps Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGCBA105799.jpg",
    "visualTheme": {
      "bg": "from-teal-50 to-cyan-100",
      "accent": "#0D9488",
      "icon": "maps"
    }
  },
  {
    "id": "GMSSCCBA110999",
    "name": "Google Cloud Domed Pin",
    "category": "Accessories",
    "brand": "Google Cloud",
    "shopUrl": "https://shop.merch.google/product/google-cloud-domed-pin-gmssccba110999",
    "price": 7,
    "rating": 4.6,
    "reviewsCount": 53,
    "description": "Iconic shape, vibrant gradient, liquid-smooth coat. This Google Cloud pin delivers a high-gloss finish and pure tech energy to your look.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSCCBA110999",
      "Featured in the Google Cloud Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Cloud Blue",
      "Deep Navy",
      "Bright White"
    ],
    "colorHexes": [
      "#0284C7",
      "#1E3A8A",
      "#F8FAFC"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSCCBA110999.jpg",
    "visualTheme": {
      "bg": "from-sky-50 to-blue-100",
      "accent": "#0284C7",
      "icon": "cloud"
    }
  },
  {
    "id": "GGOEYCKR252299",
    "name": "YouTube Plush Keychain",
    "category": "Accessories",
    "brand": "YouTube",
    "shopUrl": "https://shop.merch.google/product/youtube-plush-keychain-ggoeyckr252299",
    "price": 16,
    "originalPrice": 19,
    "rating": 4.8,
    "reviewsCount": 84,
    "description": "Take your love for YouTube on the go! This soft, fuzzy keychain is perfect for adding to your backpack or everyday bag.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEYCKR252299",
      "Featured in the YouTube Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Classic Red",
      "Black",
      "Heather Grey"
    ],
    "colorHexes": [
      "#FF0000",
      "#18181B",
      "#94A3B8"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEYCKR252299.jpg",
    "visualTheme": {
      "bg": "from-rose-50 to-red-100",
      "accent": "#FF0000",
      "icon": "youtube"
    }
  },
  {
    "id": "GGOEACBH252099",
    "name": "Android Pint-sized Keychain",
    "category": "Accessories",
    "brand": "Android",
    "shopUrl": "https://shop.merch.google/product/android-pint-sized-keychain-ggoeacbh252099",
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 115,
    "description": "Attach a little bit of joy to your day with our adorable plush Android keychain! This super soft, squishy, pint-sized bot is ready to be your constant companion, whether hanging on your bag or sitting on your desk.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEACBH252099",
      "Featured in the Android Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Android Green",
      "Charcoal",
      "Pure White"
    ],
    "colorHexes": [
      "#3DDC84",
      "#262626",
      "#FFFFFF"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEACBH252099.jpg",
    "visualTheme": {
      "bg": "from-emerald-50 to-emerald-100",
      "accent": "#3DDC84",
      "icon": "android"
    }
  },
  {
    "id": "GMSSGCBA109399",
    "name": "Google Bike Patch",
    "category": "Accessories",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-bike-patch-gmssgcba109399",
    "price": 5.5,
    "rating": 4.7,
    "reviewsCount": 146,
    "description": "What did the sleepy bicycle say?   I'm two tired!   Wake up a simple backpack or tote with our iconic Google bike patch.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGCBA109399"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGCBA109399.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GMSSGCBA116799",
    "name": "Emoji Kitchen Robot Patch",
    "category": "Accessories",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/emoji-kitchen-robot-patch-gmssgcba116799",
    "price": 6,
    "originalPrice": 7,
    "rating": 4.8,
    "reviewsCount": 177,
    "description": "This limited-edition Robot patch, courtesy of Emoji Kitchen, is ready to add some futuristic vibes to your favorite jacket, bag, or anywhere that needs a dose of emoji magic.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGCBA116799"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGCBA116799.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GMSSACBH109299",
    "name": "Android Sublimated Patch",
    "category": "Accessories",
    "brand": "Android",
    "shopUrl": "https://shop.merch.google/product/android-sublimated-patch-gmssacbh109299",
    "price": 5.5,
    "rating": 4.6,
    "reviewsCount": 28,
    "description": "Perk up your tote bag, lucky hat or jacket with this Android patch.  The sublimated style creates a cool 3D illusion that really pops!",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSACBH109299",
      "Featured in the Android Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Android Green",
      "Charcoal",
      "Pure White"
    ],
    "colorHexes": [
      "#3DDC84",
      "#262626",
      "#FFFFFF"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSACBH109299.jpg",
    "visualTheme": {
      "bg": "from-emerald-50 to-emerald-100",
      "accent": "#3DDC84",
      "icon": "android"
    }
  },
  {
    "id": "GGOEACBH217799",
    "name": "Android Domed Lapel Pin",
    "category": "Accessories",
    "brand": "Android",
    "shopUrl": "https://shop.merch.google/product/android-domed-lapel-pin-ggoeacbh217799",
    "price": 6,
    "rating": 4.8,
    "reviewsCount": 59,
    "description": "Show off your Android appreciation with this fun lapel pin, ready to spruce up your next outfit.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEACBH217799",
      "Featured in the Android Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Android Green",
      "Charcoal",
      "Pure White"
    ],
    "colorHexes": [
      "#3DDC84",
      "#262626",
      "#FFFFFF"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEACBH217799.jpg",
    "visualTheme": {
      "bg": "from-emerald-50 to-emerald-100",
      "accent": "#3DDC84",
      "icon": "android"
    }
  },
  {
    "id": "GGOEGCBC253999",
    "name": "Gemini rPET Rope Lanyard",
    "category": "Accessories",
    "brand": "Gemini",
    "shopUrl": "https://shop.merch.google/product/shop-by-brand/gemini/gemini-rpet-rope-lanyard-ggoegcbc253999",
    "price": 8,
    "originalPrice": 10,
    "rating": 4.9,
    "reviewsCount": 90,
    "description": "Whether you're at work or just out and about, this lanyard is the perfect blend of function and style. The striking blue color and sleek Gemini tag are sure to make a statement.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGCBC253999",
      "Featured in the Gemini Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": true,
    "colors": [
      "Deep Space Violet",
      "Obsidian Black",
      "Aurora Blue"
    ],
    "colorHexes": [
      "#6366F1",
      "#0F172A",
      "#38BDF8"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGCBC253999.jpg",
    "visualTheme": {
      "bg": "from-indigo-50 to-purple-100",
      "accent": "#7C3AED",
      "icon": "gemini"
    }
  },
  {
    "id": "GGOECCBQ208499",
    "name": "Google Cloud Lanyard",
    "category": "Accessories",
    "brand": "Google Cloud",
    "shopUrl": "https://shop.merch.google/product/google-cloud-lanyard-ggoeccbq208499",
    "price": 8,
    "rating": 4.7,
    "reviewsCount": 121,
    "description": "Keep it close with this Google Cloud lanyard, featuring a user-friendly badge reel.  It's sure to be one of your new preferred accessories.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOECCBQ208499",
      "Featured in the Google Cloud Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Cloud Blue",
      "Deep Navy",
      "Bright White"
    ],
    "colorHexes": [
      "#0284C7",
      "#1E3A8A",
      "#F8FAFC"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOECCBQ208499.jpg",
    "visualTheme": {
      "bg": "from-sky-50 to-blue-100",
      "accent": "#0284C7",
      "icon": "cloud"
    }
  },
  {
    "id": "GGOEYCBB219599",
    "name": "YouTube Crossbody Phone Lanyard",
    "category": "Accessories",
    "brand": "YouTube",
    "shopUrl": "https://shop.merch.google/product/youtube-crossbody-phone-lanyard-ggoeycbb219599",
    "price": 8,
    "rating": 4.8,
    "reviewsCount": 152,
    "description": "Always need your phone nearby? This YouTube lanyard was made for you!  You won’t have to worry about digging through your bag or pockets the next time your phone rings.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEYCBB219599",
      "Featured in the YouTube Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Classic Red",
      "Black",
      "Heather Grey"
    ],
    "colorHexes": [
      "#FF0000",
      "#18181B",
      "#94A3B8"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEYCBB219599.jpg",
    "visualTheme": {
      "bg": "from-rose-50 to-red-100",
      "accent": "#FF0000",
      "icon": "youtube"
    }
  },
  {
    "id": "GGOEYCKJ250699",
    "name": "YouTube Double Charm Keychain",
    "category": "Accessories",
    "brand": "YouTube",
    "shopUrl": "https://shop.merch.google/product/youtube-double-charm-keychain-ggoeyckj250699",
    "price": 14,
    "originalPrice": 17,
    "rating": 4.6,
    "reviewsCount": 183,
    "description": "Our enamel keychain proudly displays the YouTube icon alongside the legendary thumbs-up.  Carry your love for the YouTube community wherever you go!",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEYCKJ250699",
      "Featured in the YouTube Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Classic Red",
      "Black",
      "Heather Grey"
    ],
    "colorHexes": [
      "#FF0000",
      "#18181B",
      "#94A3B8"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEYCKJ250699.jpg",
    "visualTheme": {
      "bg": "from-rose-50 to-red-100",
      "accent": "#FF0000",
      "icon": "youtube"
    }
  },
  {
    "id": "GGOEYCBR250799",
    "name": "YouTube Acrylic Pin Set",
    "category": "Accessories",
    "brand": "YouTube",
    "shopUrl": "https://shop.merch.google/product/youtube-acrylic-pin-set-ggoeycbr250799",
    "price": 10,
    "rating": 4.8,
    "reviewsCount": 34,
    "description": "Showcase your passion for all things YouTube with this exclusive pin set.  Whether you're a trend-spotter, a gaming guru, or a music maven, these pins have got you covered.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEYCBR250799",
      "Featured in the YouTube Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Classic Red",
      "Black",
      "Heather Grey"
    ],
    "colorHexes": [
      "#FF0000",
      "#18181B",
      "#94A3B8"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEYCBR250799.jpg",
    "visualTheme": {
      "bg": "from-rose-50 to-red-100",
      "accent": "#FF0000",
      "icon": "youtube"
    }
  },
  {
    "id": "GMSSGCXB111699",
    "name": "Google NYC Sock",
    "category": "Gifts",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-nyc-sock-gmssgcxb111699",
    "price": 18,
    "rating": 4.9,
    "reviewsCount": 65,
    "description": "Pigeons, pretzels, and pizza—oh my! Carry a piece of New York wherever you go with these joyful Google socks. Packed with classic city icons, they bring a fun pop of personality to your day.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSGCXB111699"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSGCXB111699.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GGOEGOBA232499",
    "name": "Google Pride Eco Wood Magnet",
    "category": "Gifts",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/lifestyle/google-pride-eco-wood-magnet-ggoegoba232499",
    "price": 7,
    "originalPrice": 8,
    "rating": 4.7,
    "reviewsCount": 96,
    "description": "Celebrate diversity and show your support for the LGBTQ+ community with this Google Pride heart magnet, made from repurposed wood.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGOBA232499"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGOBA232499.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GMSSCOBA106699",
    "name": "Google Cloud Eco Magnet",
    "category": "Gifts",
    "brand": "Google Cloud",
    "shopUrl": "https://shop.merch.google/product/google-cloud-eco-magnet-gmsscoba106699",
    "price": 7,
    "rating": 4.8,
    "reviewsCount": 127,
    "description": "Display drawings, to-do lists and reminders on your fridge, all with the help of this Google Cloud magnet made from repurposed wood.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GMSSCOBA106699",
      "Featured in the Google Cloud Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Cloud Blue",
      "Deep Navy",
      "Bright White"
    ],
    "colorHexes": [
      "#0284C7",
      "#1E3A8A",
      "#F8FAFC"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GMSSCOBA106699.jpg",
    "visualTheme": {
      "bg": "from-sky-50 to-blue-100",
      "accent": "#0284C7",
      "icon": "cloud"
    }
  },
  {
    "id": "GGOEGOBB216099",
    "name": "Chrome Dino Eco Wood Magnet",
    "category": "Gifts",
    "brand": "Chrome Dino",
    "shopUrl": "https://shop.merch.google/product/chrome-dino-eco-wood-magnet-ggoegobb216099",
    "price": 7,
    "rating": 4.6,
    "reviewsCount": 158,
    "description": "Take your fridge from blah to rahhhrr with a fun Chrome Dino magnet, made out of recycled wood fiber.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGOBB216099",
      "Featured in the Chrome Dino Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": true,
    "colors": [
      "Pixel Charcoal",
      "Retro Sand",
      "Dino Green"
    ],
    "colorHexes": [
      "#44403C",
      "#E7E5E4",
      "#15803D"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGOBB216099.jpg",
    "visualTheme": {
      "bg": "from-stone-100 to-amber-100",
      "accent": "#57534E",
      "icon": "dino"
    }
  },
  {
    "id": "GGOEYOBA215899",
    "name": "YouTube Icon Eco Wood Magnet",
    "category": "Gifts",
    "brand": "YouTube",
    "shopUrl": "https://shop.merch.google/product/youtube-icon-eco-wood-magnet-ggoeyoba215899",
    "price": 7,
    "originalPrice": 8,
    "rating": 4.8,
    "reviewsCount": 189,
    "description": "YouTube enthusiast?  Definitely add this repurposed wood magnet to your collection.  It's bound to make you and your fridge happy.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEYOBA215899",
      "Featured in the YouTube Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Classic Red",
      "Black",
      "Heather Grey"
    ],
    "colorHexes": [
      "#FF0000",
      "#18181B",
      "#94A3B8"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEYOBA215899.jpg",
    "visualTheme": {
      "bg": "from-rose-50 to-red-100",
      "accent": "#FF0000",
      "icon": "youtube"
    }
  },
  {
    "id": "GGOEGOBA219299",
    "name": "For Everyone Eco Magnet",
    "category": "Gifts",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/for-everyone-eco-magnet-ggoegoba219299",
    "price": 7,
    "rating": 4.9,
    "reviewsCount": 40,
    "description": "Place this eco-friendly magnet in the perfect spot For Everyone to see.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGOBA219299"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGOBA219299.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GGOEGCBC166599",
    "name": "Google Utensil Set",
    "category": "Gifts",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/google-utensil-set-ggoegcbc166599",
    "price": 17,
    "rating": 4.7,
    "reviewsCount": 71,
    "description": "Admit it.  No one likes plastic take-out flatware.  Get your own personal Google utensil set, made of sustainably-grown bamboo, in this cool travel case.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGCBC166599"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGCBC166599.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GGOEAFBH247299",
    "name": "Android Googler Figurine",
    "category": "Gifts",
    "brand": "Android",
    "shopUrl": "https://shop.merch.google/product/android-googler-figurine-ggoeafbh247299",
    "price": 24,
    "originalPrice": 29,
    "rating": 4.8,
    "reviewsCount": 102,
    "description": "This Android is ready for a day at the office! Our must-have figurine is dressed in a stylish Super G shirt, Noogler hat, and miniature lanyard and is ready to tackle the next big idea!",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEAFBH247299",
      "Featured in the Android Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Android Green",
      "Charcoal",
      "Pure White"
    ],
    "colorHexes": [
      "#3DDC84",
      "#262626",
      "#FFFFFF"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEAFBH247299.jpg",
    "visualTheme": {
      "bg": "from-emerald-50 to-emerald-100",
      "accent": "#3DDC84",
      "icon": "android"
    }
  },
  {
    "id": "GGOEGABJ125299",
    "name": "Chrome Dino Collectible Figurines",
    "category": "Gifts",
    "brand": "Chrome Dino",
    "shopUrl": "https://shop.merch.google/product/chrome-dino-collectible-figurines-ggoegabj125299",
    "price": 30,
    "rating": 4.6,
    "reviewsCount": 133,
    "description": "Even if you can't play the game at work you can still show your appreciation for it with this fun desk toy.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGABJ125299",
      "Featured in the Chrome Dino Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": false,
    "isFeatured": true,
    "colors": [
      "Pixel Charcoal",
      "Retro Sand",
      "Dino Green"
    ],
    "colorHexes": [
      "#44403C",
      "#E7E5E4",
      "#15803D"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGABJ125299.jpg",
    "visualTheme": {
      "bg": "from-stone-100 to-amber-100",
      "accent": "#57534E",
      "icon": "dino"
    }
  },
  {
    "id": "GGOEGABQ170299",
    "name": "Chrome Dino Dark Mode Collectible",
    "category": "Gifts",
    "brand": "Chrome Dino",
    "shopUrl": "https://shop.merch.google/product/chrome-dino-dark-mode-collectible-ggoegabq170299",
    "price": 30,
    "rating": 4.8,
    "reviewsCount": 164,
    "description": "Our dearest dino is back, this time in a cool  Dark Mode  edition.  Turn off the lights and WHOA, it glows!",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGABQ170299",
      "Featured in the Chrome Dino Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "colors": [
      "Pixel Charcoal",
      "Retro Sand",
      "Dino Green"
    ],
    "colorHexes": [
      "#44403C",
      "#E7E5E4",
      "#15803D"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGABQ170299.jpg",
    "visualTheme": {
      "bg": "from-stone-100 to-amber-100",
      "accent": "#57534E",
      "icon": "dino"
    }
  },
  {
    "id": "GGOEGFBA241499",
    "name": "Chrome Dino Maps Tourist Accessory Pack",
    "category": "Gifts",
    "brand": "Chrome Dino",
    "shopUrl": "https://shop.merch.google/product/chrome-dino-maps-tourist-accessory-pack-ggoegfba241499",
    "price": 16,
    "originalPrice": 19,
    "rating": 4.9,
    "reviewsCount": 195,
    "description": "Meet the ultimate adventure enthusiast! Chrome Dino is determined to see the world. Wearing a cap and trusty camera, this T-rex is trying to find a special spot on this map.  Do you know where they’re headed?",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGFBA241499",
      "Featured in the Chrome Dino Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": true,
    "isFeatured": true,
    "colors": [
      "Pixel Charcoal",
      "Retro Sand",
      "Dino Green"
    ],
    "colorHexes": [
      "#44403C",
      "#E7E5E4",
      "#15803D"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGFBA241499.jpg",
    "visualTheme": {
      "bg": "from-stone-100 to-amber-100",
      "accent": "#57534E",
      "icon": "dino"
    }
  },
  {
    "id": "GGOEGFBA241899",
    "name": "Chrome Dino It's Magic Accessory Pack",
    "category": "Gifts",
    "brand": "Chrome Dino",
    "shopUrl": "https://shop.merch.google/product/chrome-dino-its-magic-accessory-pack-ggoegfba241899",
    "price": 16,
    "rating": 4.7,
    "reviewsCount": 46,
    "description": "Presto!  Grab this magical, limited edition Chrome Dino accessory pack before it disappears before your very eyes.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGFBA241899",
      "Featured in the Chrome Dino Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "colors": [
      "Pixel Charcoal",
      "Retro Sand",
      "Dino Green"
    ],
    "colorHexes": [
      "#44403C",
      "#E7E5E4",
      "#15803D"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGFBA241899.jpg",
    "visualTheme": {
      "bg": "from-stone-100 to-amber-100",
      "accent": "#57534E",
      "icon": "dino"
    }
  },
  {
    "id": "GGOEGFBQ156799",
    "name": "Mommy Works at Google Book",
    "category": "Gifts",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/mommy-works-at-google-book-ggoegfbq156799",
    "price": 20,
    "rating": 4.8,
    "reviewsCount": 77,
    "description": "Mommy Works at Google is a creative story meant to help Googlers returning from parental leave explain to their kids what Google and the Bets are and why the work they do is so important. Authored by Emily Trapani and illustrated by Christina Yeh.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGFBQ156799"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGFBQ156799.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GGOEGFBQ156899",
    "name": "Daddy Works at Google Book",
    "category": "Gifts",
    "brand": "Google",
    "shopUrl": "https://shop.merch.google/product/daddy-works-at-google-book-ggoegfbq156899",
    "price": 20,
    "originalPrice": 24,
    "rating": 4.6,
    "reviewsCount": 108,
    "description": "Daddy Works at Google is a creative story meant to help Googlers returning from parental leave explain to their kids what Google and the Bets are and why the work they do is so important. Authored by Emily Trapani and illustrated by Christina Yeh.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGFBQ156899"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": true,
    "isBestSeller": true,
    "isFeatured": false,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGFBQ156899.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-slate-100",
      "accent": "#4285F4",
      "icon": "apparel"
    }
  },
  {
    "id": "GGOEGFDD202299",
    "name": "Super G Interlocking Puzzle",
    "category": "Gifts",
    "brand": "Super G",
    "shopUrl": "https://shop.merch.google/product/super-g-interlocking-puzzle-ggoegfdd202299",
    "price": 12,
    "rating": 4.8,
    "reviewsCount": 139,
    "description": "Test your puzzle prowess with this Super G puzzle, composed of interlocking wood pieces. Are you up for a fun challenge? It's not as easy as it looks!",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEGFDD202299",
      "Featured in the Super G Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": true,
    "colors": [
      "Google Navy",
      "Natural Sand",
      "Classic Black"
    ],
    "colorHexes": [
      "#1E3A8A",
      "#F5F5F4",
      "#0F172A"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEGFDD202299.jpg",
    "visualTheme": {
      "bg": "from-blue-50 to-indigo-100",
      "accent": "#2563EB",
      "icon": "super_g"
    }
  },
  {
    "id": "GGOEAFDH232399",
    "name": "Android Classic Plushie",
    "category": "Gifts",
    "brand": "Android",
    "shopUrl": "https://shop.merch.google/product/lifestyle/android-classic-plushie-ggoeafdh232399",
    "price": 36,
    "rating": 4.9,
    "reviewsCount": 170,
    "description": "This irresistibly huggable Android plush will be your perfect pal! With big eyes, curious antennas and a cuddly body, this fuzzy friend is ready for endless adventures.",
    "highlights": [
      "Official Google Merchandise Store authentic item",
      "Item SKU: GGOEAFDH232399",
      "Featured in the Android Official Collection"
    ],
    "materials": "Eco-conscious durable materials",
    "deliveryTime": "2-4 Business Days (Carbon Neutral)",
    "returnPolicy": "30-Day Free Returns & Exchanges",
    "isNew": false,
    "isBestSeller": false,
    "isFeatured": false,
    "colors": [
      "Android Green",
      "Charcoal",
      "Pure White"
    ],
    "colorHexes": [
      "#3DDC84",
      "#262626",
      "#FFFFFF"
    ],
    "image": "https://ik.imagekit.io/RM/store/20160512512/assets/items/largeimages/GGOEAFDH232399.jpg",
    "visualTheme": {
      "bg": "from-emerald-50 to-emerald-100",
      "accent": "#3DDC84",
      "icon": "android"
    }
  }
];
