import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';

import styles from './cart.module.scss';

const Cart = ({ onClick, href }, ref) => {
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref} 
      className={styles['container']}
    >
      <span className='sr-only'>Go to cart</span>
      <BiShoppingBag />
    </a>
  )
}

export default React.forwardRef(Cart);