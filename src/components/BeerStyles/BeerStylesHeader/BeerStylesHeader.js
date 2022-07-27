import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import styles from '../BeerStylesPage.module.scss';

function BeerStylesHeader() {
  return (
    <div className={styles.headerContainer}>
      <Link to="/">
        <IoIosArrowBack />
      </Link>
      <h1>Beer styles</h1>
    </div>
  );
}

export default BeerStylesHeader;
