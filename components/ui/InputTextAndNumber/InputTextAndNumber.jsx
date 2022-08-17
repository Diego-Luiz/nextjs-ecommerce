import styles from './inputTextAndNumber.module.scss';

const InputTextAndNumber = ({ type, id, name, label, placeholder, getValue, handleChange, handleBlur, ...additional }) => {
  
  return (
    <div className={styles['container']}>
      <label 
        htmlFor={id}
        className={styles['label']}
      >
        {label}
      </label>
      <input 
        className={styles['input']}
        type={type} 
        name={name} 
        id={id}
        value={getValue()}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        {...additional}
      />
    </div>
  )
}

export default InputTextAndNumber;