import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import PropTypes from 'prop-types';

function ListPage({ characters }) {
  console.log(characters, 'array');
  const charactersList = characters.map((character) => {
    return (
      <li key={character._id}>
        <Link to={`detail/${character._id}`}>
          <ListItem
            key={character._id}
            name={character.name}
            photoUrl={character.photoUrl}
          />
        </Link>
      </li>
    );
  });

  return <ul>{charactersList}</ul>;
}

ListPage.propTypes = {
  characters: PropTypes.array,
};

export default ListPage;
