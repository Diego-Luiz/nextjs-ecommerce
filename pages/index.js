import Head from 'next/head';

import { 
  Carousel,
  ContentSlider,
  ImpactTitle
} from 'components';
import dataCarousel from 'data/contentsCarousel';
import dataSectionsSlider from 'data/contentHomePageSlider';
import { ECOMMERCE_NAME } from 'utils/constants';
import styles from 'styles/homepage/homepage.module.scss';

const Home = ({ dataCarousel, dataSectionsSlider }) => {
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
          data={dataSectionsSlider}
        />
      </section>
    </>
  );
};
export async function getStaticProps() {
  return ({
    props: {
      dataCarousel,
      dataSectionsSlider
    }
  });
}
export default Home;
