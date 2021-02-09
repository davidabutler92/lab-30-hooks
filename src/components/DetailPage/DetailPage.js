import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharactersById } from '../services/avatarApi';
import { Link } from 'react-router-dom';

export default function DetailPage() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  console.log(id, 'character id');

  useEffect(() => {
    getCharactersById(id).then((character) => setCharacter(character));
  }, []);

  const { name, allies, enemies, gender, hair, photoUrl } = character;

  return (
    <div>
      <h1>{name}</h1>
      <img src={photoUrl} />
      <ul>
        <li>Allies: {allies}</li>
        <li>Enemies: {enemies}</li>
        <li>Gender: {gender}</li>
        <li>Hair Color: {hair}</li>
      </ul>
      <Link to="/">List Page</Link>
    </div>
  );
}
