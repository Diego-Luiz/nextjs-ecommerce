import { AiOutlineSearch } from 'react-icons/ai';

import styles from './searchInputProduct.module.scss';

const SearchInputProduct = ({ searchInput, setSearchInput, handleClick }) => {
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
        onChange={(event) => { setSearchInput(event.target.value); }}
        value={searchInput}
      />
      <button 
        type='button'
        className={styles['search-btn']}
        onClick={handleClick}
      >
        <AiOutlineSearch />
        <span className='sr-only'>Search</span>
      </button>
    </div>
  )
}

export default SearchInputProduct;