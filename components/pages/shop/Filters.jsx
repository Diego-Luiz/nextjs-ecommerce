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

const Filters = ({ brands=['apple', 'motorola', 'mac'], categories=['category1', 'category2'], toggleFilterSection }) => {
  const [checkBoxFiltersStatus, setCheckBoxFiltersStatus] = useState(() => {
    const brandsObj = {};
    const categoriesObj = {};
    brands.forEach(brand => { brandsObj[brand] = false; });
    categories.forEach(category => { categoriesObj[category] = false; });
    return new Map([
      ['brands', brandsObj], 
      ['categories', categoriesObj]
    ]);
  });
  const [priceFilters, setPriceFilters] = useState({ min: '1', max: '1000' });
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, TOGGLE_PORTAL_ANIMATION_TIME);
    return () => setIsMounted(false);
  }, []);

  const resetMap = mapElement => {
    const resetedMap = new Map();
    for(let [key, value] of mapElement) {
      let auxArr = ['', null];
      auxArr[0] = key;
      auxArr[1] = {...value};
      for(let indexInValue in auxArr[1]){
        auxArr[1][indexInValue] = false;
      }
      resetedMap.set(auxArr[0], auxArr[1]);
    }
    return resetedMap;
  };
  const getChkboxStatus = (filterField, filterElement) => checkBoxFiltersStatus.get(filterField)[filterElement];
  const handleChkboxFiltersChange = (filterField, filterElement) => {
    const fieldObject = { ...checkBoxFiltersStatus.get(filterField) };
    fieldObject[filterElement] = !fieldObject[filterElement];
    setCheckBoxFiltersStatus(prevState => new Map([...prevState, [filterField, fieldObject]]));
  };
  const getPriceValue = field => priceFilters[field];
  const handlePriceChanges = (event, field) => {
    let elementValue = event.target.value;
    setPriceFilters(prevState => ({ ...prevState, [field]: elementValue }));
  };
  const handlePriceBlur = (field) => {
    const elementValue = getPriceValue(field);
    const validateExp = /^([1-9])+|^\1+.\1+$/;
    // elementValue <= 1000 change by the maximum value
    if(!(validateExp.test(elementValue) && elementValue <= 1000)){
      //throw an error
      alert('The value in price in invalid');
      const resetedValue = field === 'min' ? '1' : '1000';
      console.log('resetedValue: ', resetedValue);
      setPriceFilters(prevState => ({ ...prevState, [field]: resetedValue}));
    } 
  }
  const handleFormReset = (event) => {
    event.preventDefault();
    setCheckBoxFiltersStatus(prevState => resetMap(prevState));
    setPriceFilters(({ min: '1', max: '1000' })); //replace the 1000 by the maximum according to the data via props.
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('handle the form submit...');
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
        onSubmit={(event) => { handleFormSubmit(event); }}
      >
        <fieldset className={styles['form__fieldset']}>
          <legend className={styles['fieldset__title']}>Brand</legend>
          {brands.map(brand => (
            <Checkbox 
              key={brand}
              name="brand-name"
              id={`filters-brand-name__${brand}`}
              label={`${brand.charAt(0).toUpperCase()}${brand.substring(1)}`}
              handleChange={() => { handleChkboxFiltersChange('brands', brand) }}
              getCheckedStatus={() => getChkboxStatus('brands', brand)}
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
              max={1000}
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
              max={1000}
              handleChange={(event) => { handlePriceChanges(event, 'max') }}
              handleBlur={() => { handlePriceBlur('max') }}
            />
          </div>
        </fieldset>
        <fieldset className={styles['form__fieldset']}>
          <legend className={styles['fieldset__title']}>Category</legend>
          {categories.map(category => (
            <Checkbox 
              key={category}
              name="category-name"
              id={`filters-category-name__${category}`}
              label={`${category.charAt(0).toUpperCase()}${category.substring(1)}`}
              handleChange={() => { handleChkboxFiltersChange('categories', category) }}
              getCheckedStatus={() => getChkboxStatus('categories', category)}
            />
          ))}
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