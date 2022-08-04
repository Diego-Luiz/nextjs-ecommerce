import Link from 'next/link';
import { BiUser } from 'react-icons/bi';

import { useState } from 'react';

import Cart from '../Cart';
import MenuHamburguer from '../MenuHamburguer';
import Logo from '../Logo';
import styles from './navbar.module.scss';

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const handleUserClick = () => {
    console.log('handling click');
  };
  
  return (
    <nav className={styles['nav']}>
      <div className={styles['menu-container']}>
        <MenuHamburguer 
          isMenuOpened={isMenuOpened}
          setIsMenuOpened={setIsMenuOpened}
        />
        <ul 
          className={[
            styles['links-list'],
            `${isMenuOpened ? styles['--active']: ''}`
          ].join(' ')}
        >
          <li>
            <Link href='/shop'>
              <a className={styles['links-list__link']}>Shop</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className={styles['links-list__link']}>About NextECom</a>
            </Link>
          </li>
        </ul>
      </div>
      <Logo TitleLevel={'h1'}/>
      <div>
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
}

export default Navbar;