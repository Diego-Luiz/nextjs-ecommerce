import Navbar from '../Navbar';
import styles from './header.module.scss';

const Header = ({ productsCategory }) => {
  return (
    <header className={styles['header']}>
      <Navbar productsCategory={productsCategory}/>
    </header>
  );
}

export default Header;
