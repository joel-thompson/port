import { Box, Button } from '@chakra-ui/react';
import { GiAmericanShield } from 'react-icons/gi';

function showMessage() {
  alert('go ride you fool');
}

export default function Bikes() {
  return (
    <>
      <h2>Bikes are funs</h2>
      <Box
        _hover={{ backgroundColor: 'green.400' }}
        bg={'blue.400'}
        w={300}
        h={400}
      >
        Hello
      </Box>
      <Button
        leftIcon={<GiAmericanShield />}
        onClick={showMessage}
        size="lg"
        colorScheme="blue"
      >
        I can do this all day
      </Button>
    </>
  );
}
