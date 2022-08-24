const slugify = require('slugify');
const slugifyOptions = { lower: true };
const categories = [
  'Smartphones', 
  'Laptops', 
  'Fragrances',
  'Skincare',
  'Home decoration',
  'Furniture',
  'Tops',
  'Women dresses',
  'Women shoes',
  'Men shirts',
  'Men shoes',
  'Men watches',
  'Women watches',
  'Women bags',
  'Women jewellery',
  'Sunglasses',
  'Automotive',
  'Motorcycle',
  'Lightning'
];
export const productsCategorySlug = {};
export const productsSlugCategory = {};
categories.forEach(category => {
  productsCategorySlug[category] = slugify(category, slugifyOptions);
  productsSlugCategory[slugify(category, slugifyOptions)] = category;
});