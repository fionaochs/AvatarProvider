import React from 'react';
import Toggle from '../Toggle/Toggle';
import { useEarthFire, useToggle } from '../../Hooks/EarthFireProvider';
import styles from './Header.css';

const Header = () => {
  const earthFire = useEarthFire();
  const toggle = useToggle();

  return (
    <div className={styles.Header}>
      <h1>Avatar the Last Airbender Characters</h1>
      <Toggle value={earthFire === 'fire'} toggle={toggle}/>
    </div>
  );
};

export default Header;
