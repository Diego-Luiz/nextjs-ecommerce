import Link from 'next/link';

import { ECOMMERCE_NAME } from 'utils/constants';
import styles from './logo.module.scss';

const Logo = ({ TitleLevel }) => {
  return (
    <Link href='/'>
      <a className={styles['container']}>
        <TitleLevel
          className={`${styles['logo']} sr-only`}
        >
          { ECOMMERCE_NAME }
        </TitleLevel>
        NEC
      </a>
    </Link>
  );
}

export default Logo;