import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNav from './TopNav';
import Bikes from './Bikes';
import Home from './Home';
import Resume from './Resume';

export default function App() {
  return (
    <Router>
      <TopNav />

      <br data-testid="app-topnav-separation" />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/bikes" component={Bikes} />
      </Switch>
    </Router>
  );
}
