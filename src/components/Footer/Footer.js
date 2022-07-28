import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.container}>
      <a href="https://github.com/KaskMIL" target="blank">Tom Milanesi  </a>
      &copy; All Rights Reserved
    </footer>
  );
}

export default Footer;
