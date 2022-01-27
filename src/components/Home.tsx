import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

// const SomeComp = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <Box _hover={{ backgroundColor: 'blue.200' }} bg="pink">
//       {children}
//     </Box>
//   );
// };

export default function Home() {
  return (
    <>
      <Grid
        w="auto"
        h="72"
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr) 2fr"
        gridColumnGap="30px"
        gridRowGap="20px"
      >
        <GridItem bg="blue.500" _hover={{ backgroundColor: 'blue.200' }} />
        <GridItem bg="red.500" _hover={{ backgroundColor: 'red.200' }} />
        <GridItem bg="green.500" _hover={{ backgroundColor: 'green.200' }} />
        <GridItem bg="purple.500" _hover={{ backgroundColor: 'purple.200' }} />
        <GridItem bg="blue.500" _hover={{ backgroundColor: 'blue.200' }} />
        <GridItem bg="blue.500" _hover={{ backgroundColor: 'blue.200' }} />
      </Grid>
      <br />
      <p>My Name is Joel and this is my website</p>
    </>
  );
}
