import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Main.module.scss';

function Main() {
  return (
    <main className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.ulCont}>
          <li><NavLink to="/">Styles</NavLink></li>
          <li><NavLink to="/">Hops</NavLink></li>
          <li><NavLink to="/">Yeasts</NavLink></li>
        </ul>
      </nav>
    </main>
  )
}

export default Main;