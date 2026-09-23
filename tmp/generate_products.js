const products = require('/tmp/formatted_products.json');
const fs = require('fs');

// Count items per category
const counts = {};
products.forEach(p => counts[p.category] = (counts[p.category] || 0) + 1);

const categoryDefs = [
  { id: 'All', label: 'All Gear', count: products.length },
  { id: 'Apparel', label: 'Apparel', count: counts['Apparel'] || 0 },
  { id: 'Drinkware', label: 'Drinkware', count: counts['Drinkware'] || 0 },
  { id: 'Bags', label: 'Bags', count: counts['Bags'] || 0 },
  { id: 'Stationery', label: 'Stationery', count: counts['Stationery'] || 0 },
  { id: 'Accessories', label: 'Accessories', count: counts['Accessories'] || 0 },
  { id: 'Gifts', label: 'Gifts & Tech', count: counts['Gifts'] || 0 },
];

const brandCounts = {};
products.forEach(p => {
  if (p.brand) brandCounts[p.brand] = (brandCounts[p.brand] || 0) + 1;
});

const brandDefs = Object.keys(brandCounts).map(b => ({
  id: b,
  name: b,
  count: brandCounts[b]
}));

const header = `import { Product } from '../types';\n\n`;
const cats = `export const CATEGORIES = ` + JSON.stringify(categoryDefs, null, 2) + ` as const;\n\n`;
const brands = `export const BRANDS = ` + JSON.stringify(brandDefs, null, 2) + ` as const;\n\n`;
const prods = `export const PRODUCTS: Product[] = ` + JSON.stringify(products, null, 2) + `;\n`;

fs.writeFileSync('/src/data/products.ts', header + cats + brands + prods);
console.log('Successfully generated /src/data/products.ts with', products.length, 'products');
