import { Box, Button } from '@chakra-ui/react';
import { GiAmericanShield } from 'react-icons/gi';

const showMessage = (message = 'go ride you fool') => {
  alert(message);
};

const BikeBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      _hover={{ backgroundColor: 'green.400' }}
      bg={'blue.400'}
      w={300}
      h={400}
      mb={20}
      mt={4}
    >
      {children}
    </Box>
  );
};

export default function Bikes() {
  return (
    <>
      <h2>Bikes are fun</h2>
      <BikeBox>Hello</BikeBox>
      <Button
        ml={2}
        leftIcon={<GiAmericanShield />}
        onClick={() => {
          showMessage("No, I don't think I will");
        }}
        size="lg"
        colorScheme="blue"
      >
        I can do this all day
      </Button>
    </>
  );
}
