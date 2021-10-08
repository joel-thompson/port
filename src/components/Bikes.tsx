import { Heading, Divider, Text } from '@chakra-ui/react';
import { Link, Route, Switch } from 'react-router-dom';
import MultiFrontRearCenterCalculator from './bikes/MultiFrontRearCenterCalculator';

// const BikeBox = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <Box
//       _hover={{ backgroundColor: 'green.400' }}
//       bg={'blue.400'}
//       w={300}
//       h={400}
//       mb={20}
//       mt={4}
//     >
//       {children}
//     </Box>
//   );
// };

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
