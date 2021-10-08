import {
  Box,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Heading,
} from '@chakra-ui/react';
import React from 'react';

import { GiAmericanShield } from 'react-icons/gi';

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
  const [wheelbase, setWheelbase] = React.useState(0);
  const [chainstay, setChainstay] = React.useState(0);
  return (
    <>
      <Heading>Front center / rear center ratio calculator</Heading>
      <p>Wheelbase</p>
      <NumberInput
        size="sm"
        min={0}
        defaultValue={0}
        onChange={(value) => {
          setWheelbase(parseInt(value));
        }}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <p>Rear center / chainstay</p>
      <NumberInput
        size="sm"
        min={0}
        defaultValue={0}
        onChange={(value) => {
          setChainstay(parseInt(value));
        }}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <br />
      <p>front center: {wheelbase - chainstay}</p>
      <p>
        front center / rear center ratio: {(wheelbase - chainstay) / chainstay}
      </p>
    </>
  );
}
