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
  'Womens dresses',
  'Womens shoes',
  'Mens shirts',
  'Mens shoes',
  'Mens watches',
  'Womens watches',
  'Womens bags',
  'Womens jewellery',
  'Sunglasses',
  'Automotive',
  'Motorcycle',
  'Lightning'
];
const data = {};
categories.forEach(category => {
  data[category] = slugify(category, slugifyOptions);
});
export default data;