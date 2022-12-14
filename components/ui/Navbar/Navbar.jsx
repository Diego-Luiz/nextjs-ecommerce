import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  useState,
  useEffect,
  useRef
} from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

import Cart from '../Cart';
import BurguerMenu from '../BurguerMenu';
import LinksDropdown from './LinksDropdown';
import SearchInput from '../SearchInput';
import styles from './navbar.module.scss';

const Navbar = ({ productsCategory }) => {
  const router = useRouter();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [inputSearchValue, setInputSearchValue] = useState('');
  const pCategories = useRef(Object.keys(productsCategory));

  const toggleDropdown = () => {
    setIsDropdownOpened(prevState => !prevState);
  };
  const toggleSearchContainer = (element, value) => {
    if (value) setIsSearchExpanded(value);
    else setIsSearchExpanded(prevState => !prevState);
  };
  const handleSearchBtnClick = () => {
    if(!isSearchExpanded){
      toggleSearchContainer(true);
      return;
    } 
    if(inputSearchValue.length) router.push(`/shop?q=${inputSearchValue}`);
  };
  return (
    <nav className={styles['nav']}>
      <SearchInput 
        searchInput={inputSearchValue}
        setSearchInput={setInputSearchValue}
        isExpanded={isSearchExpanded}
        setIsExpanded={setIsSearchExpanded}
        handleBtnClick={handleSearchBtnClick}
        toggleContainer={toggleSearchContainer}
      />
      <div className={styles['user-container']}>
        <Link href='/cart' passHref>
          <Cart />
        </Link>
      </div>
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
    </nav>
  );
};

export default Navbar;