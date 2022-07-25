import React from 'react';
import { GiHops } from 'react-icons/gi';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logoCont}>
        <GiHops />
      </div>
      <div className={styles.titleContainer}>
        <h1>Crafter BF</h1>
        <p>The Beer-Crafter's best friend!</p>
      </div>
    </header>
  );
}

export default Header;