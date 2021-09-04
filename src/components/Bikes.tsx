import { Box, Button } from '@chakra-ui/react';
import { GiAmericanShield } from 'react-icons/gi';

// function showMessage(message = 'go ride you fool') {
//   alert(message);
//   // return undefined;
// }

const showMessage = (message = 'go ride you fool') => {
  alert(message);
};

export default function Bikes() {
  return (
    <>
      <h2>Bikes are funs</h2>
      <Box
        _hover={{ backgroundColor: 'green.400' }}
        bg={'blue.400'}
        w={300}
        h={400}
        mb={20}
        mt={4}
      >
        Hello
      </Box>
      <Button
        leftIcon={<GiAmericanShield />}
        onClick={() => {
          showMessage('foo');
        }}
        size="lg"
        colorScheme="blue"
      >
        I can do this all day
      </Button>
    </>
  );
}
