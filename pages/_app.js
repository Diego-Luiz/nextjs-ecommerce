import 'styles/main.scss';
import { Layout as defaultLayout } from 'components/ui';
import { productsCategorySlug } from 'data/productsCategory';
function MyApp({ Component, pageProps, productsCategory }) {
  const Layout = Component.getLayout || defaultLayout;
  return (
    <Layout
      productsCategory={productsCategory}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async () => {
  return ({
    productsCategory: productsCategorySlug
  });
};

export default MyApp;
