import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/avatar';
import List from '../components/Detail/List';
import { useEarthFire } from '../Hooks/EarthFireProvider';
import earthStyles from '../Earth.css';
import fireStyles from '../Fire.css';

const CharactersViewer = () => {
  const [characters, setCharacters] = useState([]);
  const earthFire = useEarthFire();
  const [page, setPage] = useState(1);

  const changePage = (direction) => {
    setPage(prevPage => prevPage + direction);
  };


  useEffect(() => {
    fetchCharacters()
      .then(res => setCharacters(res));
  }, []);

  return (
    <>
      <button onClick={() => changePage(-1)} disabled={page === 1}>&lt;</button>
      <button onClick={() => changePage(1)} disabled={page * 10 >= characters.length}>&gt;</button>
      <section className={earthFire === 'earth' ? earthStyles.Root : fireStyles.Root}>
        <List characters={characters.slice((page - 1) * 10, page * 10)} />
      </section>
    </>
  );
};



export default CharactersViewer;

