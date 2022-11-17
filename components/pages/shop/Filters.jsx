import { 
  useState,
  useEffect
} from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

import { 
  Checkbox,
  InputTextAndNumber
} from 'components/ui';
import { TOGGLE_PORTAL_ANIMATION_TIME } from 'utils/constants';
import styles from './filters.module.scss';

const Filters = ({ toggleFilterSection, chkBoxesFilters, setChkBoxesFilters, priceFilters, setPriceFilters, maxPrice, handleFormSubmit }) => {
  const [isMounted, setIsMounted] = useState(false);
  const chkBoxesEntries = Object.entries(chkBoxesFilters);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, TOGGLE_PORTAL_ANIMATION_TIME);
    return () => setIsMounted(false);
  }, []);

  const handleChkBoxStatusChange = brand => {
    setChkBoxesFilters(prevState => ({ ...prevState, [brand]: !prevState[brand] }));
  }
  const getPriceValue = field => priceFilters[field];
  const handlePriceChanges = (event, field) => {
    let elementValue = event.target.value;
    setPriceFilters(prevState => ({ ...prevState, [field]: elementValue }));
  };
  const handlePriceBlur = (field) => {
    const elementValue = getPriceValue(field);
    const validateExp = /^([1-9])+|^\1+.\1+$/;
    if(!(validateExp.test(elementValue) && elementValue <= maxPrice)){
      //throw an error
      alert('The value in price in invalid');
      const resetedValue = field === 'min' ? '1' : maxPrice;
      console.log('resetedValue: ', resetedValue);
      setPriceFilters(prevState => ({ ...prevState, [field]: resetedValue }));
    } 
  }
  const handleFormReset = (event) => {
    event.preventDefault();
    setPriceFilters(({ min: '1', max: maxPrice }));
  }
  const closeContainerAnimation = () => {
    setIsMounted(false);
    setTimeout(() => {
      toggleFilterSection();
    }, TOGGLE_PORTAL_ANIMATION_TIME + 500);
    // +500 is the slide animation time
  }

  return (
    <section
      className={[
        styles['container'],
        `${isMounted ? styles['--active']: ''}`
      ].join(' ')}
      id="filters-container-id"
    >
      <button 
        type='button'
        className={styles['close-btn']}
        onClick={closeContainerAnimation}
      >
        <span className='sr-only'>Close filters</span>
        <IoIosCloseCircle />
      </button>
      <h2 className={styles['container__title']}>Filters</h2>
      <form 
        className={styles['form']}
        onSubmit={(event) => {
          event.preventDefault(); 
          handleFormSubmit();
        }}
      >
        <fieldset className={styles['form__fieldset']}>
          <legend className={styles['fieldset__title']}>Brands</legend>
          {chkBoxesEntries.map(([brand, value]) => (
            <Checkbox 
              key={brand}
              name="brand-name"
              id={`filters-brand-name__${brand}`}
              label={`${brand.charAt(0).toUpperCase()}${brand.substring(1)}`}
              handleChange={() => { handleChkBoxStatusChange(brand) }}
              getCheckedStatus={() => value}
            />
          ))}
        </fieldset>
        <fieldset className={styles['form__fieldset']}>
          <legend className={styles['fieldset__title']}>Price</legend>
          <div className={styles['price-inputs-container']}>
            <InputTextAndNumber 
              type='number'
              id='filters-price__min'
              name='filters-price__min'
              label='Min:'
              getValue={() => getPriceValue('min')}
              min={1}
              max={maxPrice}
              handleChange={(event) => { handlePriceChanges(event, 'min') }}
              handleBlur={() => { handlePriceBlur('min') }}
            />
            <InputTextAndNumber 
              type='number'
              id='filters-price__max'
              name='filters-price__max'
              label='Max:'
              getValue={() => getPriceValue('max')}
              min={1}
              max={maxPrice}
              handleChange={(event) => { handlePriceChanges(event, 'max') }}
              handleBlur={() => { handlePriceBlur('max') }}
            />
          </div>
        </fieldset>
        
        <div className={styles['buttons-container']}>
          <button 
            type="reset"
            onClick={(event) => { handleFormReset(event); }}
            className={styles['reset-btn']}
          >
            Clear
          </button>
          <button 
            type="submit"
            className={styles['submit-btn']}
          >
            Apply
          </button>
        </div>
      </form>
    </section>
  )
}

export default Filters;