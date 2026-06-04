// ===== PRODUCT DATA =====
const PRODUCTS = [
  // תיקים גדולים
  { id: 1, name: "Classic Tote Bag", brand: "GUCCI", price: 1290, oldPrice: 1890, category: "big", emoji: "👜", badge: "מבצע", isNew: false },
  { id: 2, name: "Leather Shoulder Bag", brand: "PRADA", price: 2450, oldPrice: null, category: "big", emoji: "👜", badge: "חדש", isNew: true },
  { id: 3, name: "Canvas Shopper XL", brand: "LOUIS VUITTON", price: 3200, oldPrice: 3800, category: "big", emoji: "🛍️", badge: "מבצע", isNew: false },
  { id: 4, name: "Structured Top Handle", brand: "CELINE", price: 2890, oldPrice: null, category: "big", emoji: "👜", badge: null, isNew: false },

  // תיקים קטנים
  { id: 5, name: "Mini Crossbody", brand: "CHANEL", price: 1850, oldPrice: 2200, category: "small", emoji: "👛", badge: "מבצע", isNew: false },
  { id: 6, name: "Chain Shoulder Bag", brand: "DIOR", price: 2100, oldPrice: null, category: "small", emoji: "👛", badge: "חדש", isNew: true },
  { id: 7, name: "Flap Bag Mini", brand: "SAINT LAURENT", price: 1650, oldPrice: null, category: "small", emoji: "💼", badge: null, isNew: false },
  { id: 8, name: "Baguette Bag", brand: "FENDI", price: 1980, oldPrice: 2400, category: "small", emoji: "👛", badge: "מבצע", isNew: false },

  // ארנקים
  { id: 9, name: "Zip Around Wallet", brand: "MICHAEL KORS", price: 390, oldPrice: 490, category: "wallet", emoji: "💳", badge: "מבצע", isNew: false },
  { id: 10, name: "Card Holder Slim", brand: "COACH", price: 250, oldPrice: null, category: "wallet", emoji: "💳", badge: null, isNew: false },
  { id: 11, name: "Long Wallet", brand: "LOUIS VUITTON", price: 680, oldPrice: null, category: "wallet", emoji: "💰", badge: "חדש", isNew: true },
  { id: 12, name: "Compact Bifold", brand: "PRADA", price: 520, oldPrice: 650, category: "wallet", emoji: "💳", badge: "מבצע", isNew: false },

  // אביזרים
  { id: 13, name: "Silk Scarf", brand: "HERMÈS", price: 890, oldPrice: null, category: "accessories", emoji: "🧣", badge: "חדש", isNew: true },
  { id: 14, name: "Belt 85cm", brand: "GUCCI", price: 450, oldPrice: 590, category: "accessories", emoji: "👜", badge: "מבצע", isNew: false },
  { id: 15, name: "Sunglasses", brand: "DIOR", price: 760, oldPrice: null, category: "accessories", emoji: "🕶️", badge: null, isNew: false },
  { id: 16, name: "Key Chain Charm", brand: "LOEWE", price: 310, oldPrice: null, category: "accessories", emoji: "🔑", badge: "חדש", isNew: true },

  // שעונים
  { id: 17, name: "Classic Gold Watch", brand: "MICHAEL KORS", price: 990, oldPrice: 1290, category: "watches", emoji: "⌚", badge: "מבצע", isNew: false },
  { id: 18, name: "Rose Gold Bracelet Watch", brand: "TOMMY HILFIGER", price: 750, oldPrice: null, category: "watches", emoji: "⌚", badge: null, isNew: false },
  { id: 19, name: "Chronograph Watch", brand: "GUESS", price: 880, oldPrice: 1100, category: "watches", emoji: "⌚", badge: "מבצע", isNew: false },
  { id: 20, name: "Minimalist Leather Strap", brand: "CALVIN KLEIN", price: 620, oldPrice: null, category: "watches", emoji: "⌚", badge: "חדש", isNew: true },

  // מבצעים
  { id: 21, name: "Woven Tote Summer", brand: "MIU MIU", price: 980, oldPrice: 1600, category: "sale", emoji: "🛍️", badge: "מבצע", isNew: false },
  { id: 22, name: "Logo Backpack", brand: "BURBERRY", price: 1200, oldPrice: 1950, category: "sale", emoji: "🎒", badge: "מבצע", isNew: false },
];

const CATEGORIES = {
  all: "הכל",
  big: "תיקים גדולים",
  small: "תיקים קטנים",
  wallet: "ארנקים",
  accessories: "אביזרים",
  watches: "שעונים",
  sale: "מבצעים"
};
