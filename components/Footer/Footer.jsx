import React from 'react';
import { 
  FaLinkedin,
  FaGithub,
  FaPaypal,
  FaCcVisa,
  FaCcMastercard
} from 'react-icons/fa';

import { ECOMMERCE_NAME } from 'utils/constants';
import ListOfItems from './ListOfItems';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles['container']}>
      <section>
        <h2 className={styles['section-title']}>About {ECOMMERCE_NAME}</h2>
        <p>{ECOMMERCE_NAME} is a fake e-commerce built for learning and skills demonstration purposes. {ECOMMERCE_NAME} is one of the projects part of a front-end web developer portfolio.</p>
        <a
          href='https://github.com/Diego-Luiz/nextjs-ecommerce'
          className={styles['more-about-link']}
        >
          More about {ECOMMERCE_NAME}
        </a>
      </section>
      <section>
        <h2 className={styles['section-title']}>Support</h2>
        <ListOfItems 
          linksArray={[
            { linkRef: '#', content: 'Shipping policy' },
            { linkRef: '#', content: 'Ordering process' },
            { linkRef: '#', content: 'Cancellations and returns' },
            { linkRef: '#', content: 'Contact us' }
          ]}
        />
      </section>
      <section>
        <h2 className={styles['section-title']}>More Information</h2>
        <ListOfItems 
          linksArray={[
            { linkRef: '#', content: 'GitHub documentation' },
            { linkRef: '#', content: `${ECOMMERCE_NAME} developer` }
          ]}
        />
      </section>
      <section title='Payment methods'
        style={{padding: '.2em'}}
      >
        <ListOfItems 
          linksArray={[
            { linkRef: '', content: 
              <React.Fragment>
                <span className='sr-only'>MasterCard</span>
                <FaCcMastercard/>
              </React.Fragment>
            },
            { linkRef: '', content: 
              <React.Fragment>
                <span className='sr-only'>Visa</span>
                <FaCcVisa/>
              </React.Fragment>
            },
            { linkRef: '', content: 
              <React.Fragment>
                <span className='sr-only'>PayPal</span>
                <FaPaypal/>
              </React.Fragment>
            }
          ]}
          inRowFormat={true}
        />
      </section>
      <section className={styles['copyright-section']}>
        <h2 className={styles['section-title']}>Follow me</h2>
        <ListOfItems 
          linksArray={[
            { linkRef: '#', content: 
              <React.Fragment>
                <span className='sr-only'>LinkedIn</span>
                <FaLinkedin/>
              </React.Fragment>
            },
            { linkRef: 'https://github.com/Diego-Luiz', content: 
              <React.Fragment>
                <span className='sr-only'>Github</span>
                <FaGithub/>
              </React.Fragment>
            }
          ]}
          inRowFormat={true}
        />
      </section>
      <section title='Copyright'>
        <ListOfItems 
          linksArray={[
            { linkRef: '#', content: 'Cookie policy' },
            { linkRef: '#', content: 'Terms and conditions' },
            { linkRef: '', content: 
              <React.Fragment>
                &copy;<span className='sr-only'>Copyright</span>2022 {ECOMMERCE_NAME} by <a href="https://github.com/Diego-Luiz">Diego Luiz</a>
              </React.Fragment> 
            }
          ]}
        />
      </section>
    </footer>
  );
}

export default Footer;