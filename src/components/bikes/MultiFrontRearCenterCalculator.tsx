import {
  Wrap,
  WrapItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import FrontRearCenterCalculator from './FrontRearCenterCalculator';

export default function MultiFrontRearCenterCalculator() {
  const [count, setCount] = React.useState(1);

  const setCountSafe = (count: number) => {
    if (count && count >= 1 && count <= 10) {
      setCount(count);
    }
  };

  return (
    <>
      <HStack w="md" mb="10" alignItems="center">
        <Text fontSize="lg">Count</Text>
        <NumberInput
          mb="10"
          size="sm"
          min={1}
          max={10}
          defaultValue={1}
          onChange={(value) => {
            setCountSafe(parseInt(value));
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </HStack>
      <Wrap>
        {[...Array(count)].map((_value: undefined, index: number) => (
          <WrapItem border="thin" borderStyle="solid" key={index}>
            <FrontRearCenterCalculator label={`Calculator ${index + 1}`} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
}
