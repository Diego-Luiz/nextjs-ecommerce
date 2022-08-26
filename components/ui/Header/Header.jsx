import Navbar from '../Navbar';
import Logo from '../Logo';
import styles from './header.module.scss';

const Header = ({ productsCategory }) => {
  return (
    <header className={styles['header']}>
      <Logo TitleLevel={'h1'}/>
      <Navbar productsCategory={productsCategory}/>
    </header>
  );
}

export default Header;
