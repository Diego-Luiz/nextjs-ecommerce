import Link from "next/link";

import styles from './impactCard.module.scss';
import ImpactTitle from '../ImpactTitle';

const ImpactCard = ({ data, dataSchema, opStyles }) => {
  const { title, description='', image } = dataSchema;
  return (
    <section
      className={styles['container']}
      style={{
        backgroundImage: `url("${data[image]}")`,
        ...opStyles
      }}
    >
      <ImpactTitle 
        TitleLevel={'h3'}
        opStyles={{
          color: 'var(--white-clr)',
          marginTop: '2em',
          zIndex: 2
        }}
      >
        {data[title]}
      </ImpactTitle>
      {description && (
        <p className={styles['description']}>
          {data[description]}
        </p>
      )}
      <Link href='/'>
        <a className={styles['see-more-btn']}>
          Find out more
        </a>
      </Link>
    </section>
  );
}

export default ImpactCard;