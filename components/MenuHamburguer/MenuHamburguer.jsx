import { BiMenu } from 'react-icons/bi';

import styles from './menuhamburguer.module.scss';

const MenuHamburguer = ({ isMenuOpened, setIsMenuOpened }) => {
 
  return (
    <button
      type='button'
      onClick={() => { setIsMenuOpened((prevState) => !prevState) }}
      className={[
        styles['btn'],
        `${isMenuOpened ? styles['--active']: ''}`
      ].join(' ')}
    >
      <span className='sr-only'>Toggle navigation bar</span>
      <BiMenu />
    </button>
  );
};

export default MenuHamburguer;