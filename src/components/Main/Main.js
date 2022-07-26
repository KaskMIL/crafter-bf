import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Main.module.scss';

function Main() {
  return (
    <main className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.ulCont}>
          <NavLink to="/styles"><div>Styles</div></NavLink>
          <NavLink to="/hops"><div>Hops</div></NavLink>
          <NavLink to="/yeasts"><div>Yeasts</div></NavLink>
        </ul>
      </nav>
    </main>
  );
}

export default Main;
