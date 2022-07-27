import React from 'react';
import PropTypes from 'prop-types';

function ButtonsContainer(props) {
  const { handleAbvButton, handleIbuButton } = props;
  return (
    <div>
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
