import { Grid, GridItem, Text } from '@chakra-ui/react';
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
        h="96"
        gridTemplate={`
          'nav . . . .' 1fr
          'nav . . . .' 1fr
          'nav . . . .' minmax(50px, auto)
          '. . bottombar bottombar .' 2fr
          / 50px 1fr 1fr 1fr 1fr
        `}
        gridColumnGap="30px"
        gridRowGap="20px"
      >
        <GridItem
          gridArea="nav"
          bg="yellow.500"
          _hover={{ backgroundColor: 'yellow.200' }}
        />
        <GridItem
          gridColumn="span 2"
          bg="blue.500"
          _hover={{ backgroundColor: 'blue.200' }}
        />
        <GridItem
          gridColumn="span 2"
          bg="red.500"
          _hover={{ backgroundColor: 'red.200' }}
        />
        <GridItem
          gridColumn="span 2"
          bg="green.500"
          _hover={{ backgroundColor: 'green.200' }}
        />
        <GridItem
          gridColumn="span 2"
          bg="purple.500"
          _hover={{ backgroundColor: 'purple.200' }}
        />
        <GridItem
          display="flex"
          justifyContent="center"
          alignItems="center"
          gridColumn="span 4"
          bg="yellow.500"
          _hover={{ outline: 'solid', outlineColor: 'purple.200' }}
        >
          <Text fontSize="lg" fontWeight="bold">
            Hi
          </Text>
        </GridItem>
        <GridItem
          gridArea="bottombar"
          bg="yellowgreen"
          _hover={{ outline: 'dashed', outlineColor: 'purple.200' }}
        />
      </Grid>
      <br />
      <p>My Name is Joel and this is my website</p>
    </>
  );
}
