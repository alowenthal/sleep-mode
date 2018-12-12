import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ isSleeping, onSleepChange }) => {

  return (
    <React.Fragment>
      <div className="toggle toggle--daynight">
        <input
          type="checkbox"
          id="toggle--daynight"
          className="toggle--checkbox"
          onChange={onSleepChange}
          checked={!isSleeping}
        />
        <label className="toggle--btn" for="toggle--daynight">
          <span className="toggle--feature" />
        </label>
      </div>
    </React.Fragment>
  );
};

Toggle.propTypes = {
  isSleeping: PropTypes.bool,
  onSleepChange: PropTypes.func
}

export default Toggle;
