import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  Container,
} from '@chakra-ui/react';
import React from 'react';

export default function FrontRearCenterCalculator({
  label = 'Front center / rear center ratio calculator',
}: {
  label?: string;
}) {
  const [wheelbase, setWheelbase] = React.useState(0);
  const [chainstay, setChainstay] = React.useState(0);
  return (
    <Container>
      <Text fontSize="lg" mb="5">
        {label}
      </Text>
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

      <Text mt="5">Rear center / chainstay</Text>
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

      <Text mt="5">front center: {wheelbase - chainstay}</Text>
      <Text>
        front center / rear center ratio: {(wheelbase - chainstay) / chainstay}
      </Text>
    </Container>
  );
}
