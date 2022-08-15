import styles from './selectElement.module.scss';

const SelectElement = ({ handleOptionClick, selectValue, ariaLabelledBy, boxStatus }) => {
 
  return (
    <div 
      className={[
        styles['select'],
        `${boxStatus ? styles['--active']: ''}`
      ].join(' ')}
      id="select-sort"
      role='listbox'
      value={selectValue}
      aria-labelledby={ariaLabelledBy}
      onClick={handleOptionClick}
    >
      <div
        role='option'
        aria-selected={false}
        value='lowestPrice'
        tabIndex={0}
        className={styles['select__option']}
      > 
        Lowest price
      </div>
      <div
        role='option'
        aria-selected={false}
        value='highestPrice'
        tabIndex={-1}
        className={styles['select__option']}
      > 
        Highest price
      </div>
      <div
        role='option'
        aria-selected={false}
        value='lowestRating'
        tabIndex={-1}
        className={styles['select__option']}
      > 
        Lowest rating
      </div>
      <div
        role='option'
        aria-selected={false}
        value='highestRating'
        tabIndex={-1}
        className={styles['select__option']}
      > 
        Highest rating
      </div>
    </div>
  );
}

export default SelectElement;