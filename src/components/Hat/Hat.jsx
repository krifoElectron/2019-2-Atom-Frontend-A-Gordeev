import React from 'react';
import PropTypes from 'prop-types';

import { MenuButton } from '../../buttons/MenuButton/MenuButton';
import { SearchButton } from '../../buttons/SearchButton/SearchButton';

import styles from '../App/app.module.scss';

export function Hat({ leftComponent, centerComponent, rightComponent }) {
  return (
    <div className={styles.hat}>
      {leftComponent()}
      {centerComponent()}
      {rightComponent()}
    </div>
  );
}

Hat.defaultProps = {
  leftComponent: () => <MenuButton />,
  centerComponent: () => <div className={styles.centerBlock}>Messenger</div>,
  rightComponent: () => <SearchButton />,
};

Hat.propTypes = {
  leftComponent: PropTypes.func,
  centerComponent: PropTypes.func,
  rightComponent: PropTypes.func,
};
