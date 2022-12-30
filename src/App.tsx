import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import Bikes from './components/Bikes';
import Home from './components/Home';
import Resume from './components/Resume';
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
