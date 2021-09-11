import { HStack, Spacer, Button, LinkOverlay, LinkBox } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NavLink = ({
  children,
  dest,
}: {
  children: React.ReactNode;
  dest: string;
}) => {
  return (
    <LinkBox>
      <Button colorScheme="teal">
        <LinkOverlay as={RouterLink} to={dest}>
          {children}
        </LinkOverlay>
      </Button>
    </LinkBox>
  );
};

export default function TopNav() {
  return (
    <HStack p="2" spacing="14px" bg="lavender">
      <NavLink dest="/">Home</NavLink>

      <Spacer data-testid="topnav-middle-spacer" />

      <NavLink dest="/resume">Resume</NavLink>
      <NavLink dest="/bikes">Bikes</NavLink>
    </HStack>
  );
}
