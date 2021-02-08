import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListPage from '../ListPage/ListPage';
import DetailPage from '../DetailPage/DetailPage';

export default function App() {
  // const [characters, SetCharacters] = useState([]);
  // useEffect(() => {
  //   getCharacters().then((characters) => SetCharacters(characters));
  // }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <ListPage />} />
        <Route exact path="/detail" component={DetailPage} />
      </Switch>
    </Router>
  );
}
