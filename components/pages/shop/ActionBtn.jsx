import styles from './actionBtn.module.scss';

/* 
  - icon: object with all details about the icons, like: source, animation trigger condition
  - text: the button text
  - ariaAttributes: object with all aria attributes content (aria-controls, expanded, etc)
  - handleClick: the function executed when an option is selected
*/
const ActionBtn = ({icon={}, text, ariaAttributes={}, handleClick }) => {
  const animationStyle = icon?.animationTrigger ? icon.animationStyle : {};
  return (
    <button
      type='button'
      className={styles['btn']}
      aria-controls={ariaAttributes?.controls}
      aria-expanded={ariaAttributes?.expanded}
      onClick={handleClick}
    >
      {icon?.position === 'left'  
        && (<div 
            className={[
              styles['icon'],
              styles['--left']
            ].join(' ')}
            style={animationStyle}
            >
              {icon.src}
            </div>)
      }
      <span id="text-sort-section">{text}</span>
      {icon?.position === 'right'  
        && (<div 
            className={[
              styles['icon'],
              styles['--right']
            ].join(' ')}
            style={animationStyle}
            >
              {icon.src}
            </div>)
      }
    </button>
  )
}

export default ActionBtn;