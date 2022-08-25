import Link from 'next/link';

import styles from './linksdropdown.module.scss';

const LinksDropdown = ({ children, opened, ...otherAttributes }) => {
  return (
    <ul 
      className={[
        styles['container'],
        `${opened ? styles['--active']: ''}`
      ].join(' ')}
      {...otherAttributes}
    >
      {children.map((child, index) => (
        <li
          key={index} 
          className={styles['item']}
        >
          {child}
        </li>
      ))}
    </ul>
  );
}

export default LinksDropdown;