import React from 'react';
import PropTypes from 'prop-types';
import Detail from './Detail';
import styles from './styles.css';

const List = ({ characters }) => {
  const charactersList = characters.map(character => 
    <ul key={character.id}>
      <li key={character.name}>
        <Detail {...character} />
      </li>
    </ul>
  );
  // const characterId = characters.map(character => character.id);
  return (
    <ul key={5} className={styles.Characters}>
      {charactersList}
    </ul>
  );
};


List.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    allies: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    enemies: PropTypes.string,
    image: PropTypes.string.isRequired,
  })).isRequired
};

export default List;
