import { useRouter } from "next/router";

import { BASE_PRODUCTS_API_URL } from "utils/constants";
import { Capitalize } from "utils/stringFunctions";
import { ShopPageLayout } from "components/pages/shop";

const Shop = ({ data, query, maxPrice, brands }) => {
  const router = useRouter();
  const { total:resultsQuantity, products } = data;
  return (
    <ShopPageLayout 
      key={router.asPath}
      infoSectionTitle={`Results for: ${query}`}
      resultsQuantity={resultsQuantity}
      products={products}
      brands={brands}
      maxPrice={maxPrice}
    />
  );
}

export async function getServerSideProps({ res, query }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, state-while-revalidate=120'
  );
  const response = await fetch(`${BASE_PRODUCTS_API_URL}/search?q=${query.q}&limit=100`);
  const data = await response.json();
  let maxPrice = 1;
  let brands = new Set();
  data.products.forEach(product => {
    let { brand, price } = product;
    price = Number(price);
    if(price > maxPrice) maxPrice = price;
    brands.add(Capitalize(brand));
  });
  brands = [...brands];
  return ({
    props: {
      data,
      brands, 
      maxPrice,
      query: query.q
    }
  });
}

export default Shop;