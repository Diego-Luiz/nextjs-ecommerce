import styles from './burguerMenu.module.scss';

const BurguerMenu = ({ isMenuOpened, setIsMenuOpened }) => {
 
  return (
    <button
      type='button'
      onClick={() => { setIsMenuOpened((prevState) => !prevState) }}
      className={styles['btn']}
    >
      <span className='sr-only'>Toggle navigation bar</span>
      <div className={[
        styles['bars-container'],
        `${isMenuOpened ? styles['--active']: ''}`
      ].join(' ')}
        role="presentation"
      >
        <div className={styles['bars-container__left']}></div>
        <div className={styles['bars-container__right']}></div>
      </div>
      
    </button>
  );
};

export default BurguerMenu;