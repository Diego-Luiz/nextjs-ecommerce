import styles from './logo.module.scss';

const Logo = ({ TitleLevel }) => {
  return (
    <TitleLevel
      className={styles['logo']}
    >
      NextECom
    </TitleLevel>
  );
}

export default Logo;