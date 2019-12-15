import React from 'react';
import PropTypes from 'prop-types';

import { MenuButton } from '../buttons/MenuButton';
// import BackButton from '../buttons/BackButton';
import { SearchButton } from '../buttons/SearchButton';

import styles from '../styles/app.module.scss';

export function Hat({ leftComponent, centerComponent, rightComponent }) {
  console.log(200000);
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
