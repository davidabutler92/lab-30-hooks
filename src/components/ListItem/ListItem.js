import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ name, photoUrl }) {
  return (
    <>
      <h1>{name}</h1>
      <img src={photoUrl} alt="avatar character" />
    </>
  );
}

ListItem.propTypes = {
  name: PropTypes.string,
  photoUrl: PropTypes.string,
};

export default ListItem;
