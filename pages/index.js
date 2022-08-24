import Head from 'next/head';
import { useRef } from 'react';

import { 
  Carousel,
  ContentSlider,
  ImpactCard,
  ImpactTitle,
  Product
} from 'components/ui';
import dataCarousel from 'data/contentsCarousel';
import aboutProducts from 'data/aboutProducts';
import { ECOMMERCE_NAME } from 'utils/constants';
import testImg from 'public/images/homepage/another.jpg';
import styles from 'styles/pages/homepage.module.scss';

const Home = ({ dataCarousel, aboutProducts }) => {
  const slidersRefs = useRef(new Map());
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
  const getContentWidth = fieldName => {
    const content = slidersRefs.current.get(fieldName);
    return content?.getBoundingClientRect().width || 0;
  };
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
      <main>
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
            ContentTag={'div'}
            getContentWidth={() => getContentWidth('productCategory')}
          >
            {aboutProducts.map((item, index) => {
              if(!index) {
                return (
                  <ImpactCard 
                    key={index}
                    data={item}
                    dataSchema={{
                      title: 'category',
                      image: 'categoryImage'
                    }}
                    refRelatedTo='productCategory'
                    ref={slidersRefs}
                  />
                )
              }  
              return (
                <ImpactCard 
                  key={index}
                  data={item}
                  dataSchema={{
                    title: 'category',
                    image: 'categoryImage'
                  }}
                />
              );
            })}
          </ContentSlider>
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
          <ContentSlider
            TagContainer={'div'}
            ContentTag={'ul'}
            contentStyles={{ listStyle: 'none' }}
            getContentWidth={() => getContentWidth('popularProducts')}
          >
            <li 
              key="1"
              className={styles['popular-products__list-item']}
            >
              <Product 
                product={{
                  title: 'Title product test',
                  image: testImg.src,
                  productDesc: 'This product is the best in terms of cottom quality and also has an elegant design',
                  price: '520.00'
                }}
                TitleTag='h3'
                refRelatedTo='popularProducts'
                ref={slidersRefs}
              />
            </li>
            <li 
              key="2"
              className={styles['popular-products__list-item']}
            >
              <Product 
                product={{
                  title: '2 Title product test',
                  image: testImg.src,
                  productDesc: 'This product is the best in terms of cottom quality and also has an elegant design',
                  price: '520.00'
                }}
                TitleTag='h3'
              />
            </li>
            <li 
              key="3"
              className={styles['popular-products__list-item']}
            >
              <Product 
                product={{
                  title: 'Title product test 3',
                  image: testImg.src,
                  productDesc: 'This product is the best in terms of cottom quality and also has an elegant design',
                  price: '520.00'
                }}
                TitleTag='h3'
              />
            </li>
            <li 
              key="4"
              className={styles['popular-products__list-item']}
            >
              <Product 
                product={{
                  title: 'Title product test 4',
                  image: testImg.src,
                  productDesc: 'This product is the best in terms of cottom quality and also has an elegant design',
                  price: '520.00'
                }}
                TitleTag='h3'
              />
            </li>
          </ContentSlider>
        </section>
      </main>
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
