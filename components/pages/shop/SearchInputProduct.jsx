import { AiOutlineSearch } from 'react-icons/ai';

import styles from './searchInputProduct.module.scss';

const SearchInputProduct = () => {
  return (
    <div className={styles['container']}>
      <label 
        htmlFor="product-name"
        className='sr-only'
      >
        Type the product name
      </label>
      <input 
        type="text" 
        name="product-name" 
        id={styles['product-name']} 
        placeholder='Product name'
      />
      <button 
        type='button'
        className={styles['search-btn']}
      >
        <AiOutlineSearch />
        <span className='sr-only'>Search</span>
      </button>
    </div>
  )
}

export default SearchInputProduct;