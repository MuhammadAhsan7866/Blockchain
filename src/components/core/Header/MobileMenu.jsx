import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  Link,
  Image,
  Box,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bg="transparent"
        color="#FFF"
        as={Button}
        p="0"
        ml="8px"
        _hover={{ bg: "transparent" }}
        _focus={{ bg: "transparent" }}
      >
        <HamburgerIcon color="white" fontSize="22px" fontWeight="600" />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay bg="#1F1F1F" backdropFilter="blur(2px)" />
        <DrawerContent bg="#1F1F1F" minW={{ base: "100%", sm: "50%" }}>
          <DrawerCloseButton color="#44566C" fontSize="20px" />
          <DrawerHeader pt={"30px"} pb={"20px"}>
            <Link
              href="#"
              height={"80px"}
              width={"300px"}
              mx={"auto"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image src="/bit-logo.png" alt="logo" />
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <Flex
              flexDirection="column"
              gap="25px"
              alignItems="center"
              justifyContent="center"
            >
              <Flex flexDirection={"column"} gap="10px" alignItems={"center"}>
                <Box
                  pb="4px"
                  minWidth={"3px"}
                  borderBottom={"2px solid rgba(52, 97, 255, 1)"}
                >
                  <Link
                    href="/Home"
                    color="#7EFCFC"
                    _hover={{ textDecoration: "none", color: "white" }}
                    fontSize="16px"
                    fontWeight="600"
                    lineHeight={"24px"}
                  >
                    Home
                  </Link>
                </Box>
                <Box
                  pb="4px"
                  color="#9A99AD"
                  _hover={{
                    color: "white",
                    fontWeight: "600",
                    borderBottom: "2px solid rgba(52, 97, 255, 1)",
                  }}
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight={"24px"}
                >
                  <Link
                    href="/InvestmentPlans"
                    _hover={{ textDecoration: "none", color: "white" }}
                  >
                    Invesment Plans
                  </Link>
                </Box>
                <Box
                  pb="4px"
                  color="#9A99AD"
                  _hover={{
                    color: "white",
                    fontWeight: "600",
                    borderBottom: "2px solid rgba(52, 97, 255, 1)",
                  }}
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight={"24px"}
                >
                  <Link href="\About" 
                  _hover={{ textDecoration: "none" }}>
                    About
                  </Link>
                </Box>
                <Box
                  pb="4px"
                  color="White"
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight={"24px"}
                >
                  <Link
                    href="/Blog"
                    _hover={{ textDecoration: "none", color: "white" }}
                  >
                    Blog
                  </Link>
                </Box>
                <Box
                  pb="4px"
                  color="#9A99AD"
                  _hover={{
                    color: "white",
                    fontWeight: "600",
                    borderBottom: "2px solid rgba(52, 97, 255, 1)",
                  }}
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight={"24px"}
                >
                  <Link href="\LoginPage" 
                  _hover={{ textDecoration: "none" }}>
                    Login
                  </Link>
                </Box>
                <Box
                  pb="4px"
                  color="#9A99AD"
                  _hover={{
                    color: "white",
                    fontWeight: "600",
                    borderBottom: "2px solid rgba(52, 97, 255, 1)",
                  }}
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight={"24px"}
                  w={"100%"}
                >
                  <Link
                    href="\SignUp"
                    _hover={{ textDecoration: "none" }}
                    w="100%"
                  >
                    <Button
                      bg={"#1ba8c6"}
                      color={"white"}
                      colorScheme="#1f3ac1"
                      _hover={{ bg: "black", color: "white" }}
                      px={"24px"}
                      w={"100%"}
                    >
                      Sign up
                    </Button>
                  </Link>
                </Box>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
