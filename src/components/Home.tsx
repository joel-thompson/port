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
        templateColumns="[start] repeat(2, 1fr) [mid] repeat(2, 1fr) [end]"
        templateRows="[start] repeat(2, 1fr) 2fr 2fr [last]"
        gridColumnGap="30px"
        gridRowGap="20px"
      >
        <GridItem
          gridColumn="start / mid"
          bg="blue.500"
          _hover={{ backgroundColor: 'blue.200' }}
        />
        <GridItem
          gridColumn="mid / end"
          bg="red.500"
          _hover={{ backgroundColor: 'red.200' }}
        />
        <GridItem
          gridColumn="start / mid"
          bg="green.500"
          _hover={{ backgroundColor: 'green.200' }}
        />
        <GridItem
          gridColumn="mid / end"
          bg="purple.500"
          _hover={{ backgroundColor: 'purple.200' }}
        />
        <GridItem
          display="flex"
          justifyContent="center"
          alignItems="center"
          gridColumn="start / end"
          bg="yellow.500"
          _hover={{ outline: 'solid', outlineColor: 'purple.200' }}
        >
          <Text fontSize="lg" fontWeight="bold">
            Hi
          </Text>
        </GridItem>
        <GridItem
          gridRowEnd="last"
          gridColumn="2 / span 2"
          bg="yellowgreen"
          _hover={{ outline: 'dashed', outlineColor: 'purple.200' }}
        />
      </Grid>
      <br />
      <p>My Name is Joel and this is my website</p>
    </>
  );
}
