import Link from "next/link";

import styles from './impactCard.module.scss';
import ImpactTitle from '../ImpactTitle';

const ImpactCard = ({ category: { category, image } }) => {
  return (
    <section
      className={styles['container']}
      style={{
        backgroundImage: `url("${image}")`
      }}
    >
      <ImpactTitle 
        TitleLevel={'h3'}
        opStyles={{
          color: 'var(--white-clr)',
          marginTop: '4em'
        }}
      >
        {category}
      </ImpactTitle>
      <Link href='/'>
        <a className={styles['see-more-btn']}>
          Find out more
        </a>
      </Link>
    </section>
  );
}

export default ImpactCard;