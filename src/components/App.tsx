import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNav from './TopNav';
import Bikes from './Bikes';
import Home from './Home';
import Resume from './Resume';
import { Box } from '@chakra-ui/react';

export default function App() {
  return (
    <Router>
      <TopNav />

      <br data-testid="app-topnav-separation" />

      <Switch>
        <Box m="2">
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/bikes" component={Bikes} />
        </Box>
      </Switch>
    </Router>
  );
}
