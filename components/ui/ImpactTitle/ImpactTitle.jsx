import styles from './impactTitle.module.scss';

const ImpactTitle = ({ TitleLevel, opStyles={}, children }) => {
  return (
    <TitleLevel
      className={styles['impact-title']}
      style={opStyles}
    >
      {children}
    </TitleLevel>
  );
}

export default ImpactTitle;