import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListPage from '../ListPage/ListPage';
import DetailPage from '../DetailPage/DetailPage';
import { getCharacters } from '../services/avatarApi';

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((characters) => setCharacters(characters));
  }, []);

  console.log(characters);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <ListPage characters={characters} />}
        />
        <Route
          exact
          path="/detail:id"
          component={() => <DetailPage characters={characters} />}
        />
      </Switch>
    </Router>
  );
}
