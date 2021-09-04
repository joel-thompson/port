import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNav from './TopNav';
import Bikes from './Bikes';
import Home from './Home';

export default function App() {
  return (
    <Router>
      <TopNav />

      <hr data-testid="topnav-separation" />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bikes" component={Bikes} />
      </Switch>
    </Router>
  );
}
