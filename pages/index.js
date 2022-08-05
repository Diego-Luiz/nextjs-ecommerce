import Head from 'next/head';

import { 
  Carousel,
  ContentSlider,
  ImpactCard,
  ImpactTitle
} from 'components';
import dataCarousel from 'data/contentsCarousel';
// import dataSectionsSlider from 'data/contentHomePageSlider';
import aboutProducts from 'data/aboutProducts';
import { ECOMMERCE_NAME } from 'utils/constants';
import styles from 'styles/homepage/homepage.module.scss';

const Home = ({ dataCarousel, aboutProducts }) => {
  const groupOfProducts = [];
  const productsByGroup = new Map();
  aboutProducts.forEach(item => {
    let itemsToSet = null;
    if(productsByGroup.has(item.group)){
      itemsToSet = [...productsByGroup.get(item.group), item];
    } else {
      itemsToSet = [item];
      groupOfProducts.push(item.group);
    }
    productsByGroup.set(item.group, itemsToSet);
  });
  return (
    <>
      <Head>
        <title>Next JS E-commerce</title>
        <meta name="description" content="The description" />
        <meta name="author" content="Diego Luiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel 
        ContainerTag='section'
        data={dataCarousel}
      />
      <section
        className={styles['products-category-section']}
      >
        <ImpactTitle
          TitleLevel={'h2'}
        >
          Here in {ECOMMERCE_NAME} you will have the best online shopping experience. With thousands of products and the best market prices.
        </ImpactTitle>
        <ContentSlider 
          TagContainer={'div'}
          data={aboutProducts}
        />
      </section>
      <section
        className={styles['featured-sections']}
      >
        <ImpactCard 
          data={
            productsByGroup.get(groupOfProducts[0])[0]
          }
          dataSchema={{
            title: 'group',
            description: 'groupDescription',
            image: 'groupImage'
          }}
          opStyles={{
            justifyContent: 'center'
          }}
        />
        <ImpactCard 
          data={
            productsByGroup.get(groupOfProducts[1])[0]
          }
          dataSchema={{
            title: 'group',
            description: 'groupDescription',
            image: 'groupImage'
          }}
          opStyles={{
            justifyContent: 'center'
          }}
        />
      </section>
      <section
        className={styles['popular-products']}
      > 
        <ImpactTitle
          TitleLevel={'h2'}
        >
          Our most popular products
        </ImpactTitle>
      </section>
    </>
  );
};
export async function getStaticProps() {
  return ({
    props: {
      dataCarousel,
      aboutProducts
    }
  });
}
export default Home;
