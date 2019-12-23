import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Close } from './close.svg';

export function CloseButton({ onClick }) {
  return (
    <div>
      <Close onClick={onClick} />
    </div>
  );
}

CloseButton.defaultProps = {
  onClick: () => {},
};

CloseButton.propTypes = {
  onClick: PropTypes.func,
};
