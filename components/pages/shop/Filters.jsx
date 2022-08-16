import { useState } from 'react';
import { Checkbox } from 'components/ui';
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
  const getChkboxStatus = (filterField, filterElement) => checkBoxFiltersStatus.get(filterField)[filterElement];
  const handleChkboxFiltersChange = (filterField, filterElement) => {
    const fieldObject = { ...checkBoxFiltersStatus.get(filterField) };
    fieldObject[filterElement] = !fieldObject[filterElement];
    setCheckBoxFiltersStatus(prevState => new Map([...prevState, [filterField, fieldObject]]));
  };
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
        <h4 className={styles['brand-section__title']}>Price</h4>
        <label htmlFor="">Min</label>
        <input type="number" name="" id="" />
        <label htmlFor="">Max</label>
        <input type="number" name="" id="" />
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
      <section className={styles['rating-section']}>
        <h4 className={styles['brand-section__title']}>Rating</h4>
        <ul>
          <li>Tech</li>
          <li>Self-care</li>
          <li>Home</li>
        </ul>
      </section>

    </section>
  )
}

export default Filters;