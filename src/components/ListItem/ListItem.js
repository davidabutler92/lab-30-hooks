import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.css';

function ListItem({ name, photoUrl }) {
  return (
    <>
      <h1>{name}</h1>
      <img className={styles.image} src={photoUrl} alt="avatar character" />
    </>
  );
}

ListItem.propTypes = {
  name: PropTypes.string,
  photoUrl: PropTypes.string,
};

export default ListItem;
