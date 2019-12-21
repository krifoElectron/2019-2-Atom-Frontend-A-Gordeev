import React, { useState } from 'react';
import PropType from 'prop-types';

import { ReactComponent as Clip } from './clip.svg';

import styles from './attachButton.module.scss';

export function AttachButton({ setGeolocation }) {
  const [visible, setVisible] = useState(false);

  const attachTypes = [
    {
      title: 'my geolocation',
      onClick: () => {
        const position = navigator.geolocation.getCurrentPosition(function(position) {
          console.log(position);
          console.log(position.coords.latitude, position.coords.longitude);
          setGeolocation(position.coords.latitude, position.coords.longitude);
        });
      },
    },
    { title: 'photo' },
  ];

  return (
    <div className={[styles.clip, styles.dropdown].join(' ')} onClick={() => setVisible(!visible)}>
      {visible && (
        <div className={styles.dropdownContent}>
          {attachTypes.map(({ title, onClick }) => (
            <div className={styles.attachElement} onClick={onClick} key={title}>
              {title}
            </div>
          ))}
        </div>
      )}
      <Clip />
    </div>
  );
}

AttachButton.defaultProps = {
  setGeolocation: () => {},
};

AttachButton.propType = {
  setGeolocation: PropType.func,
};
