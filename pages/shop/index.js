import { useRouter } from "next/router";

import { BASE_PRODUCTS_API_URL } from "utils/constants";
import { Capitalize } from "utils/stringFunctions";
import { ShopPageLayout } from "components/pages/shop";

const Shop = ({ data, query, brands, filters }) => {
  const router = useRouter();
  const { total:resultsQuantity, products } = data;

  return (
    <ShopPageLayout 
      key={router.asPath}
      infoSectionTitle={`Results for: ${query}`}
      resultsQuantity={resultsQuantity}
      products={products}
      brands={brands}
      filters={filters}
    />
  );
}

export async function getServerSideProps({ res, query }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, state-while-revalidate=120'
  );
  const response = await fetch(`${BASE_PRODUCTS_API_URL}/search?q=${query.q}&limit=100`);
  let data = await response.json();
  console.log(data.products[0]);
  let maxPrice = 1;
  let brands = new Set();
  data.products.forEach(product => {
    let { brand, price } = product;
    price = Number(price);
    if(price > maxPrice) maxPrice = price;
    brands.add(Capitalize(brand));
  });
  brands = [...brands];
  console.log('=====================here');
  console.log(query);
  let filters = {};
  if(query.brands) {
    let tempBrands = query.brands.split(' ')
                    .map(item => item.replace(/-/g, ' '));
    filters.brands = tempBrands;
  }
  filters.sort = query.sort ? query.sort : '';
  filters['min-price'] = query['min-price'] ? Number(query['min-price']) : 1;
  if(query['max-price']) maxPrice = Number(query['max-price']);
  filters['max-price'] = maxPrice;
  
  console.log('HERE   ==>> ', filters);
  return ({
    props: {
      data,
      brands, 
      filters,
      query: query.q
    }
  });
}

export default Shop;