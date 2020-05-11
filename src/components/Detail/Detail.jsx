import React  from 'react';
import PropTypes from 'prop-types';


const Detail = ({ image, allies, enemies, affiliation, name }) =>  (
  <section>
    <h3>{name}</h3>
    <img src={image} />
    <p>Allies: {allies}</p>
    <p>Enemies: {enemies}</p>
    <p>Affiliation: {affiliation}</p>
  </section>
);


Detail.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  allies: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  enemies: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Detail;
