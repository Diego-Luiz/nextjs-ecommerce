import '../styles/main.scss';
import { Layout as defaultLayout } from '../components';

function MyApp({ Component, pageProps }) {
  const Layout = Component.getLayout || defaultLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
