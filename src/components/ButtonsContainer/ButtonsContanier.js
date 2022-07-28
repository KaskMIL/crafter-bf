import React from 'react';
import PropTypes from 'prop-types';
import styles from '../BeerStyles/BeerStylesPage.module.scss';

function ButtonsContainer(props) {
  const {
    handleAbvButton, handleIbuButton, firstBtnTitle, secondBtnTitle,
  } = props;
  return (
    <div className={styles.btnContainer}>
      <button onClick={handleAbvButton} type="submit">
        {firstBtnTitle}
      </button>
      <button onClick={handleIbuButton} type="submit">
        {secondBtnTitle}
      </button>
    </div>
  );
}

ButtonsContainer.propTypes = {
  handleAbvButton: PropTypes.func.isRequired,
  handleIbuButton: PropTypes.func.isRequired,
  firstBtnTitle: PropTypes.string.isRequired,
  secondBtnTitle: PropTypes.string.isRequired,
};

export default ButtonsContainer;
