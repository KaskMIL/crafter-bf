import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import styles from '../BeerStylesPage.module.scss';

function BeerStylesHeader(props) {
  const { title } = props;

  return (
    <div className={styles.headerContainer}>
      <Link to="/">
        <IoIosArrowBack />
      </Link>
      <h1>{title}</h1>
    </div>
  );
}

BeerStylesHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BeerStylesHeader;
