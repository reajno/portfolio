import NavMenuSmall from "./NavMenuSmall";
import NavMenuLarge from "./navMenuLarge";
import BrandLogo from "../BrandLogo";
import Cart from "./Cart";
import useWindowSize from "../../hooks/useWindowSize";
import { Container, Center } from '@chakra-ui/react'

const NavBar = () => {
  const { width } = useWindowSize();

  return (
    <Container fluid as="nav" position="fixed"  className="bg-bittersweet-400 z-50">
      <HStack spacing={2} p="5" position="relative" justify="space-between" align="items-center"
      >
        {width > 768 ? <NavMenuLarge /> : <NavMenuSmall />}
        
        <BrandLogo
        position="absolute"
          className={
            "left-0 right-0 mx-auto max-w-20 flex justify-center"
          }
          />
        <Cart />
      </HStack>
    </Container>
  );
};
export default NavBar;
