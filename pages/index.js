import Head from 'next/head';

import { Carousel } from '../components';
import dataCarousel from '../data/contentsCarousel';

const Home = ({ dataCarousel }) => {
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
    </>
  );
};
export async function getStaticProps() {
  return ({
    props: {
      dataCarousel
    }
  });
}
export default Home;
