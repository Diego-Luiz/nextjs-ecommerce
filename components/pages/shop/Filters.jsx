import { useState } from 'react';
import { 
  Checkbox,
  InputTextAndNumber
} from 'components/ui';
import styles from './filters.module.scss';

const Filters = ({ brands=['apple', 'motorola', 'mac'], categories=['category1', 'category2'] }) => {
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
  return (
    <section
      className={styles['container']}
    >
      <section className={styles['brand-section']}>
        <h4 className={styles['brand-section__title']}>Brand</h4>
        <ul className={styles['section__list']}>
          {brands.map(brand => (
            <li key={brand}>
              <Checkbox 
                name="brand-name"
                id={`filters-brand-name__${brand}`}
                label={`${brand.charAt(0).toUpperCase()}${brand.substring(1)}`}
                handleChange={() => { handleChkboxFiltersChange('brands', brand) }}
                getCheckedStatus={() => getChkboxStatus('brands', brand)}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className={styles['price-section']}>
        {/* remember to get the actual MAX value from the props accordingly to the data */}
        <h4 className={styles['price-section__title']}>Price</h4>
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
      </section>
      <section className={styles['category-section']}>
        <h4 className={styles['category-section__title']}>Category</h4>
        <ul className={styles['section__list']}>
          {categories.map(category => (
            <li key={category}>
              <Checkbox 
                name="category-name"
                id={`filters-category-name__${category}`}
                label={`${category.charAt(0).toUpperCase()}${category.substring(1)}`}
                handleChange={() => { handleChkboxFiltersChange('categories', category) }}
                getCheckedStatus={() => getChkboxStatus('categories', category)}
              />
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Filters;