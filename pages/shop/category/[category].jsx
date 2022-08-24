import { productsSlugCategory } from 'data/productsCategory';

import { ShopPageLayout } from "components/pages/shop";

const ProductsByCategory = ({ category }) => {
  console.log(category);
  return (
    <ShopPageLayout 
      infoSectionTitle={category}
      resultsQuantity={60}
    />
  );
}
export async function getStaticPaths() {
  const productsSlug = Object.keys(productsSlugCategory);
  const paths = productsSlug.map(element => (
    { params: { category: element } }
  ));
  return ({
    paths,
    fallback: false
  });
}
export async function getStaticProps(context) {
  let { params:{ category } } = context;
  category = productsSlugCategory[category];
  return ({
    props: {
      category
    }
  });
}

export default ProductsByCategory;