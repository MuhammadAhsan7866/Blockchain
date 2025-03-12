"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Img,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImg = motion(Img);

export default function HeroSection() {
  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgPosition={{ base: "-535px 146px", md: "center" }}
      color="white"
    >
      {/* Overlay */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="radial-gradient(at top left, #05026C59 0%, #A629F200 49%)"
        opacity={0.79}
        transition="background 0.3s, border-radius 0.3s, opacity 0.3s"
      />

      <Container
        maxW="1340px"
        p={0}
        minH="85vh"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        ml="auto"
        mr="auto"
        pos="relative"
        flexGrow={1}
      >
        <Flex alignItems="center" width="100%">
          {/* Animated Text Content (Fade Left) */}
          <MotionBox
            width={{ xl: "50%", lg: "50%", base: "100%" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Flex flexDir="column" p="1em" gap="20px">
              <Text color="#FF1415" fontSize="35px" fontWeight="700">
                Im Dario Melappioni
              </Text>
              <Heading
                as="h2"
                fontSize={{ xl: "64px", lg: "42px", base: "42px" }}
                lineHeight={{ xl: "75px", base: "36px" }}
                fontWeight="900"
                letterSpacing="-2%"
                color="white"
              >
                NFT BlockChain + Developer
              </Heading>
              <Text
                fontSize={{ xl: "17px", lg: "17px", base: "14px" }}
                lineHeight={{ xl: "30px", base: "26px" }}
                fontWeight="500"
                color="#DADADA"
              >
                I break down complex user experience problems to create
                integrity-focused solutions that connect billions of people.
                Let’s Build Something Extraordinary.
              </Text>
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
                w="35%"
              >
                Consultation Booking
              </Button>
            </Flex>
          </MotionBox>

          {/* Animated Image (Zoom In) */}
          <Flex
            justifyContent="end"
            width={{ xl: "50%", lg: "50%", base: "100%" }}
          >
            <MotionImg
              w="85%"
              src="Hero-1.png"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
