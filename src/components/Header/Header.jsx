import React from 'react';
import Toggle from '../Toggle/Toggle';
// import { useEarthFire, useToggle } from '../../hooks/EarthFireProvider';
import styles from './Header.css';

const Header = () => {
  // const earthFire = useEarthFire();
  // const toggle = useToggle();

  return (
    <div className={styles.Header}>
      <h1>Avatar the Last Airbender Characters</h1>
      <Toggle />
    </div>
  );
};

export default Header;
