import Link from 'next/link';
import { BiUser } from 'react-icons/bi';

import { 
  useState,
  useEffect,
  useRef
} from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

import Cart from '../Cart';
import BurguerMenu from '../BurguerMenu';
import Logo from '../Logo';
import LinksDropdown from './LinksDropdown';
import styles from './navbar.module.scss';

const Navbar = ({ productsCategory }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const pCategories = useRef(Object.keys(productsCategory));

  const handleUserClick = () => {
    console.log('handling click');
  };
  const toggleDropdown = () => {
    setIsDropdownOpened(prevState => !prevState);
  };
  return (
    <nav className={styles['nav']}>
      <div className={styles['menu-container']}>
        <BurguerMenu
          isMenuOpened={isMenuOpened}
          setIsMenuOpened={setIsMenuOpened}
        />
        <ul 
          className={[
            styles['links-list'],
            `${isMenuOpened ? styles['--active']: ''}`
          ].join(' ')}
        >
          <li
            className={styles['links-list__li']}
          >
            <button
              type='button'
              className={[
                styles['links-list__item'],
                styles['btn-dropdown']
              ].join(' ')}
              aria-controls='shop-dropdownMenu'
              aria-expanded={isDropdownOpened}
              onClick={toggleDropdown}
            >
              Shop
              <span 
                className={[
                  styles['icon'],
                  `${isDropdownOpened ? styles['--active']: ''}`
                ].join(' ')}>
                <RiArrowDownSLine />
              </span>
            </button>
            <LinksDropdown 
              id='shop-dropdownMenu'
              opened={isDropdownOpened}
            >
              {pCategories.current.map((category, index) => (
                <Link 
                  href={`/shop/category/${productsCategory[category]}`}
                  key={index}
                >
                  <a>{category}</a>
                </Link>
              ))}
            </LinksDropdown>
          </li>
          <li
            className={styles['links-list__li']}
          >
            <Link href='/about'>
              <a className={styles['links-list__item']}>About NextECom</a>
            </Link>
          </li>
        </ul>
      </div>
      <Logo TitleLevel={'h1'}/>
      <div className={styles['user-container']}>
        <button
          type='button'
          onClick={handleUserClick}
          className={styles['user-section']}
        >
          <span className='sr-only'>Toggle user login</span>
          <BiUser />
        </button>
        <Link href='/cart' passHref>
          <Cart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;