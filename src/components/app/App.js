import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AvatarContainer from '../container/AvatarContainer';
import DetailPage from '../DetailPage/DetailPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <AvatarContainer />} />
        <Route exact path="/detail/:id" component={DetailPage} />
      </Switch>
    </Router>
  );
}
