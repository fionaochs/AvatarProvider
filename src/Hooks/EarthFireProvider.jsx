import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const EarthFireContext = createContext();

export const EarthFireProvider = ({ children }) => {
  const [earthFire, setEarthFire] = useState('earth');
  // const [page, setPage] = useState(1);

  // const changePage = (direction) => {
  //   setPage(prevPage => prevPage + direction);
  // };

  const toggle = ({ target }) => {
    if(target.checked) setEarthFire('fire');
    if(!target.checked) setEarthFire('earth');
  };

  return (
    <EarthFireContext.Provider value={{ earthFire, toggle }}>
      {children}
    </EarthFireContext.Provider>
  );
};

EarthFireProvider.propTypes = {
  children: PropTypes.node
};

export const useEarthFire = () => {
  const { earthFire } = useContext(EarthFireContext);
  return earthFire;
};

export const useToggle = () => {
  const { toggle } = useContext(EarthFireContext);
  return toggle;
};

// export const usePage = () => {
//   const { page } = useContext(EarthFireProvider);
//   return page;
// };
