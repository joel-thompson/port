import { Box } from '@chakra-ui/react';
import React from 'react';

const SomeComp = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box _hover={{ backgroundColor: 'blue.200' }} bg="pink">
      {children}
    </Box>
  );
};

export default function Home() {
  return (
    <>
      <SomeComp>Hello</SomeComp>
      <br />
      <p>My Name is Joel and this is my website</p>
    </>
  );
}
