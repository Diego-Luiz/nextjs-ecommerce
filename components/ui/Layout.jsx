import Header from './Header';
import Footer from './Footer';

const Layout = ({ productsCategory, children }) => {
  return (
    <>
      <Header 
        productsCategory={productsCategory}
      />
      {children}
      <Footer /> 
    </>
  );
}

export default Layout;