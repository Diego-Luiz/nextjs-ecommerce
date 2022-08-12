import Link from 'next/link';

import { ECOMMERCE_NAME } from 'utils/constants';
import styles from './logo.module.scss';

const Logo = ({ TitleLevel }) => {
  return (
    <Link href='/'>
      <a className={styles['container']}>
        <TitleLevel
          className={styles['logo']}
        >
          { ECOMMERCE_NAME }
        </TitleLevel>
      </a>
    </Link>
  );
}

export default Logo;