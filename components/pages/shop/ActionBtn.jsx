import styles from './actionBtn.module.scss';

const ActionBtn = ({icon:Icon, text, ariaControls=''}) => {
  console.log('icon: ', Icon);
  return (
    <button
      type='button'
      className={styles['btn']}
      aria-controls={ariaControls}
    >
      {Icon}
      <span>{text}</span>
    </button>
  )
}

export default ActionBtn;