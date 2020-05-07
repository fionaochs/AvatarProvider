import React from 'react';
import PropTypes from 'prop-types';
import Detail from './Detail';
import styles from './styles.css';

const List = ({ characters }) => {
  const charactersList = characters.map(character => 
    <>
      <li key={character.name}>
        <Detail {...character} />
      </li>
    </>
  );

  return (
    <ul className={styles.Characters}>
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
    enemies: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired
};

export default List;
