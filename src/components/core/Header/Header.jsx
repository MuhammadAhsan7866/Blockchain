import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Heading,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [headerStyles, setHeaderStyles] = useState({
    backgroundColor: "#121225",
    backdropFilter: "blur(10px)",
  });

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHeaderStyles({
        backgroundColor: "#050709",
        backdropFilter: "blur(10px)",
        boxShadow: "0 0 30px rgba(135, 80, 247, 0.2)",
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

  const navItems = [
    { label: "About", to: "about" },
    { label: "Services", to: "services" },
    { label: "Projects", to: "project" },
    { label: "My Skills", to: "skills" },
    { label: "Testimonials", to: "testimonials" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <Box
      sx={{ ...headerStyles, position: "fixed", width: "100%", zIndex: 10 }}
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
          <Link to="banner" smooth={true} duration={500}>
            <Heading fontSize={"32px"} color={"white"} cursor={"pointer"}>
              Portfolio
            </Heading>
          </Link>
        </Box>

        <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
          <HStack as="nav" spacing={4}>
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} smooth={true} duration={500}>
                <Button
                  color="white"
                  bg={"transparent"}
                  _hover={{ color: "gray.400" }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link to="contact" smooth={true} duration={500}>
              <Button
                sx={{
                  background: "linear-gradient(140deg, #FF6E00, #A629F2)",
                  color: "white",
                  padding: "15px 30px",
                  borderRadius: "150px",
                  height: "52px",
                  boxShadow: "0px 8px 18px -3px rgba(153, 1, 255, 0.32)",
                  transition: "background 0.3s ease",
                  _hover: {
                    background: "linear-gradient(260deg, #FF4094, #A629F2)",
                  },
                }}
              >
               Let&apos;s Talk
              </Button>
            </Link>
          </HStack>
        </Flex>

        <IconButton
          size="md"
          icon={<HamburgerIcon color="white" />}
          aria-label="Open Menu"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
          sx={{
            background: "linear-gradient(140deg, #FF6E00, #A629F2)",
            color: "white",
          }}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#2a1454" transition="transform 0.5s ease-in-out">
          <DrawerCloseButton color="white" />
          <DrawerBody>
            <Stack as="nav" spacing={4} alignItems="center" py={6}>
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} smooth={true} duration={500}>
                  <Button
                    color="white"
                    bg={"transparent"}
                    _hover={{ color: "gray.400" }}
                    fontSize="lg"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              <Link to="contact" smooth={true} duration={500}>
                <Button
                  sx={{
                    background: "linear-gradient(140deg, #FF6E00, #A629F2)",
                    color: "white",
                    padding: "15px 30px",
                    borderRadius: "150px",
                    height: "52px",
                    boxShadow: "0px 8px 18px -3px rgba(153, 1, 255, 0.32)",
                    transition: "background 0.3s ease",
                    _hover: {
                      background: "linear-gradient(260deg, #FF4094, #A629F2)",
                    },
                  }}
                >
                  Let&apos;s Talk
                </Button>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
