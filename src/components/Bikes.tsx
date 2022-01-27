import { Heading, Divider, Text } from '@chakra-ui/react';
import { Link, Route, Switch } from 'react-router-dom';
import MultiFrontRearCenterCalculator from './bikes/MultiFrontRearCenterCalculator';

export default function Bikes() {
  return (
    <>
      <Heading>Bikes are fun</Heading>
      <Divider mb="5" />

      <Link to={'/bikes'}>bikes home</Link>
      <br />
      <Link to={'/bikes/fs-rs-calculator'}>fs-rs-calculator</Link>

      <Divider mt="5" mb="10" />

      <Switch>
        <Route exact path="/bikes">
          <Text fontSize="lg">Choose a page</Text>
        </Route>
        <Route
          path="/bikes/fs-rs-calculator"
          component={MultiFrontRearCenterCalculator}
        />
      </Switch>
    </>
  );
}
