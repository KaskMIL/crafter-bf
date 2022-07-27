import React from 'react';
import PropTypes from 'prop-types';
import styles from '../BeerStylesPage.module.scss';

function ButtonsContainer(props) {
  const { handleAbvButton, handleIbuButton } = props;
  return (
    <div className={styles.btnContainer}>
      <button onClick={handleAbvButton} type="submit">
        ABV Filter
      </button>
      <button onClick={handleIbuButton} type="submit"> IBU Filter </button>
    </div>
  );
}

ButtonsContainer.propTypes = {
  handleAbvButton: PropTypes.func.isRequired,
  handleIbuButton: PropTypes.func.isRequired,
};

export default ButtonsContainer;
