import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AvatarContainer from '../Container/AvatarContainer';
import DetailPage from '../DetailPage/DetailPage';

export default function App() {
  // const [characters, SetCharacters] = useState([]);
  // useEffect(() => {
  //   getCharacters().then((characters) => SetCharacters(characters));
  // }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AvatarContainer} />
        <Route exact path="/detail" component={DetailPage} />
      </Switch>
    </Router>
  );
}
