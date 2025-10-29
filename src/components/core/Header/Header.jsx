import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Youtube Downloader", type: "route", to: "/youtube-downloader" },
    { label: "Convert YouTube to MP3", type: "route", to: "/youtube-to-mp3-converter" },
    { label: "Youtube to MP4 Converter", type: "route", to: "/youtube-to-mp4-converter" },
    { label: "Instagram Downloader", type: "route", to: "/instagram" },
    { label: "Facebook Downloader", type: "route", to: "/facebook" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: isScrolled ? "#08003A" : "#08003A",
        backdropFilter: "blur(10px)",
        boxShadow: isScrolled ? "0 0 30px rgba(135, 80, 247, 0.2)" : "none",
        position: "fixed",
        width: "100%",
        zIndex: 10,
      }}
      px={4}
    >
      <Flex
        h={"95px"}
        alignItems="center"
        justifyContent="space-between"
        maxW={"1440px"}
        m={"auto"}
        p={"12px"}
      >
        <Box w={{ base: "100%", md: "25%" }}>
          <ScrollLink to="banner" smooth={true} duration={500}>
            <Flex align="center" cursor="pointer">
              <Image
                src="/logo.svg"
                alt="ssyoutube"
                loading="lazy"
                boxSize="30px"
                mr={2}
              />
              <Text fontWeight="bold" fontSize="lg" color="white">
                ssyoutube
              </Text>
            </Flex>
          </ScrollLink>
        </Box>

        <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
          <HStack as="nav" spacing={4}>
            {navItems.map((item) =>
              item.type === "scroll" ? (
                <ScrollLink key={item.to} to={item.to} smooth={true} duration={500}>
                  <Button
                    color="white"
                    bg="transparent"
                    _hover={{ color: "gray.400" }}
                  >
                    {item.label}
                  </Button>
                </ScrollLink>
              ) : (
                <NextLink key={item.to} href={item.to} passHref>
                  <Button
                    color="white"
                    bg="transparent"
                    _hover={{ color: "gray.400" }}
                  >
                    {item.label}
                  </Button>
                </NextLink>
              )
            )}
            <ScrollLink to="contact" smooth={true} duration={500}>
              <Button
                w={"100%"}
                sx={{
                  background: "#DC3545",
                  color: "white",
                  fontSize: "14px",
                  padding: "0 30px",
                  height: "45px",
                  transition: "background 0.3s ease",
                  _hover: {
                    background: "#DC3546",
                  },
                }}
              >
                Let&apos;s Talk
              </Button>
            </ScrollLink>
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
              {navItems.map((item) =>
                item.type === "scroll" ? (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    onClick={onClose}
                  >
                    <Button
                      color="white"
                      bg="transparent"
                      _hover={{ color: "gray.400" }}
                      fontSize="lg"
                    >
                      {item.label}
                    </Button>
                  </ScrollLink>
                ) : (
                  <NextLink key={item.to} href={item.to} passHref>
                    <Button
                      color="white"
                      bg="transparent"
                      _hover={{ color: "gray.400" }}
                      fontSize="lg"
                      onClick={onClose}
                    >
                      {item.label}
                    </Button>
                  </NextLink>
                )
              )}
              <ScrollLink to="contact" smooth={true} duration={500} onClick={onClose}>
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
              </ScrollLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
