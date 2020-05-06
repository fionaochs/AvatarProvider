import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/avatar';
import List from '../components/Detail/List';
import { useEarthFire } from '../Hooks/EarthFireProvider';
import earthStyles from '../Earth.css';
import fireStyles from '../Fire.css';

const CharactersViewer = () => {
  const [characters, setCharacters] = useState([]);
  const earthFire = useEarthFire();

  useEffect(() => {
    fetchCharacters()
      .then(res => setCharacters(res));
  }, []);
    
  return (
    <>
      <section className={earthFire === 'earth' ? earthStyles.Root : fireStyles.Root}>
        <List characters={characters} />
      </section>
    </>
  );
};



export default CharactersViewer;

