import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  ButtonGroup,
  Img,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [headerStyles, setHeaderStyles] = useState({
    backgroundColor: "#121225",
    backdropFilter: "blur(10px)",
  });

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHeaderStyles({
        backgroundColor: "#121225",
        backdropFilter: "blur(10px)",
      });
    } else {
      setHeaderStyles({
        backgroundColor: "#121225",
        backdropFilter: "blur(10px)",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        ...headerStyles,
        // position: "fixed",
        width: "100%",
        opacity: 1,
        zIndex: 10,
      }}
      px={4}
    >
      <Flex
        h={"95px"}
        alignItems="center"
        justifyContent="space-between"
        maxW={"1340px"}
        m={"auto"}
        p={"12px"}
      >
        <Box w={{ base: "100%", md: "25%" }}>
          <Link href="http://localhost:3000/">
            {/* <Img src="/Gatech.co-Logo.png" w={"70%"} /> */}
            <Heading fontSize={'32px'} color={'white'}>
           Portfolio
          </Heading>
          </Link>
        </Box>

        <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
          <HStack
            as="nav"
            spacing={4}
            display={{
              base: "none",
              md: "none",
              lg: "block",
              xxl: "block",
              xxxl: "block",
            }}
          >
            <Menu>
            <Link href="#about" scroll={false}>
            <MenuButton
                as={Button}
                color="white"
                bg={"transparent"}
                _hover={{ color: "gray.400" }}
                _focus={{ boxShadow: "none", bg: "transparent" }}
                _active={{ bg: "transparent" }}
                fontWeight={"normal"}
              >
                About
              </MenuButton>
            </Link>
              
            </Menu>

            <Link href="/SuccessStory">
              <Button
                color="white"
                bg={"transparent"}
                colorScheme="transparent"
                aria-label="Contact Us"
                _hover={{ color: "gray.400" }}
              >
                Projects
              </Button>
            </Link>
            <Link href="/Career">
              <Button
                color="white"
                bg={"transparent"}
                colorScheme="transparent"
                aria-label="Contact Us"
                _hover={{ color: "gray.400" }}
              >
                Contact
              </Button>
            </Link>
          </HStack>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent={"center"}
          display={{
            base: "none",
            md: "none",
            lg: "block",
            xxl: "block",
            xxxl: "block",
          }}
        >
          <Button
            sx={{
              background: "linear-gradient(140deg, #FF6E00, #A629F2)",
              color: "white",
              border: "none",
              padding: "15px 30px",
              borderRadius: "150px",
              cursor: "pointer",
              height: "52px",
              boxShadow:
                "0px 8px 18px -3px rgba(153.99999999999997, 0.9999999999999964, 255, 0.32)",
              transition: "background 0.3s ease",
              _hover: {
                background: "linear-gradient(260deg, #FF4094, #A629F2)",
              },
            }}
          >
            Get Started
          </Button>
          ;
        </Flex>

        <IconButton
          size="md"
          icon={<HamburgerIcon color="white" />}
          aria-label="Open Menu"
          display={{
            base: "block",
            md: "block",
            lg: "none",
            xxl: "none",
            xxxl: "none",
          }}
          onClick={onOpen}
          sx={{
            background: "linear-gradient(140deg, #FF6E00, #A629F2)",
            color: "white",
            transition: "background 0.3s ease",
          }}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="black">
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <Stack as="nav" spacing={4}>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  w="100%"
                  bg="transparent"
                  _hover={{ color: "gray.400" }}
                  _focus={{ boxShadow: "none", bg: "transparent" }}
                  _active={{ bg: "transparent" }}
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                >
                  About
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} href="/OurVision">
                    Our Vision
                  </MenuItem>
                  <MenuItem as={Link} href="/SupportMarriage">
                    Support a Marriage
                  </MenuItem>
                  <MenuItem as={Link} href="/BankAccount">
                    Safety and Security
                  </MenuItem>
                  <MenuItem as={Link} href="/BrideGuide">
                    Bride Guide
                  </MenuItem>
                  <MenuItem as={Link} href="/GroomGuide">
                    Groom Guide
                  </MenuItem>
                </MenuList>
              </Menu>

              <Link href="/Cards">
                <Button
                  bg="transparent"
                  colorScheme="transparent"
                  w="100%"
                  textAlign="left"
                  _hover={{ color: "gray.400" }}
                >
                  Plans
                </Button>
              </Link>
              <Link href="/#">
                <Button
                  bg="transparent"
                  colorScheme="transparent"
                  w="100%"
                  textAlign="left"
                  _hover={{ color: "gray.400" }}
                >
                  Events
                </Button>
              </Link>
              <Link href="/SuccessStory">
                <Button
                  bg="transparent"
                  colorScheme="transparent"
                  w="100%"
                  textAlign="left"
                  _hover={{ color: "gray.400" }}
                >
                  Success Story
                </Button>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
