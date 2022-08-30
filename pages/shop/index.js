import { BASE_PRODUCTS_API_URL } from "utils/constants";
import { ShopPageLayout } from "components/pages/shop";

const Shop = ({ data, query }) => {
  const { total:resultsQuantity, products } = data;
  return (
    <ShopPageLayout 
      infoSectionTitle={`Results for: ${query}`}
      resultsQuantity={resultsQuantity}
      products={products}
    />
  );
}

export async function getServerSideProps({ res, query }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, state-while-revalidate=120'
  );
  const response = await fetch(`${BASE_PRODUCTS_API_URL}/search?q=${query.q}`);
  const data = await response.json();
  return ({
    props: {
      data,
      query: query.q
    }
  });
}

export default Shop;