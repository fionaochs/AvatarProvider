import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/avatar';
import List from '../components/Detail/List';

const CharactersViewer = () => {
  const [characters, setCharacters] = useState([]);

    
  useEffect(() => {
    fetchCharacters()
      .then(res => setCharacters(res));
  }, []);
    
  return (
    <>
      <List characters={characters} />
    </>
  );
};



export default CharactersViewer;

