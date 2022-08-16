import styles from './checkbox.module.scss';

const Checkbox = ({ name, id, label, handleChange, getCheckedStatus }) => {
  return (
    <div className={styles['container']}>
      <input 
        type="checkbox" 
        name={name} 
        id={id} 
        className={styles['input']}
        onChange={handleChange}
        checked={getCheckedStatus()}
      />
      <label 
        htmlFor={id}
        className={styles['label']}
      >
        {label}
      </label>
    </div>
  );
}

export default Checkbox;