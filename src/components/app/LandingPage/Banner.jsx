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
      justifyContent="center"
      bgPosition={{ base: "center", md: "center" }}
      color="white"
      px={{ base: 4, md: 8 }}
      py={{ base:'35px', md: '0' }}
    >
      {/* Overlay */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="radial-gradient(at top left, #05026C59 0%, #A629F200 49%)"
        opacity={0.79}
        transition="background 0.3s, border-radius 0.3s, opacity 0.3s"
      />

      <Container maxW="1340px" minH="85vh" display="flex" alignItems="center" pos="relative">
        <Flex 
          direction={{ base: "column", md: "row" }} 
          alignItems="center" 
          justifyContent="space-between" 
          width="100%"
          gap={{base:'45px',md:'25px'}}
        >
          {/* Animated Text Content (Fade Left) */}
          <MotionBox
            width={{ md: "50%", base: "100%" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Flex flexDir="column" p={{ base: "0", md: "2em" }} gap="20px">
              <Text color="#FF1415" fontSize={{ base: "28px", md: "35px" }} fontWeight="700">
                I am Dario Melappioni
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "32px", md: "42px", lg: "64px" }}
                lineHeight={{ base: "40px", md: "50px", lg: "75px" }}
                fontWeight="900"
                letterSpacing="-2%"
                color="white"
              >
                NFT BlockChain + Developer
              </Heading>
              <Text
                fontSize={{ base: "14px", md: "16px", lg: "17px" }}
                lineHeight={{ base: "22px", md: "26px", lg: "30px" }}
                fontWeight="500"
                color="#DADADA"
              >
                I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
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
                w={{ base: "100%", sm: "60%", md: "40%" }}
              >
                Consultation Booking
              </Button>
            </Flex>
          </MotionBox>

          {/* Animated Image (Zoom In) */}
          <Flex justifyContent="center" width={{ md: "50%", base: "100%" }}>
            <MotionImg
              w={{ base: "100%", sm: "85%", md: "85%" }}
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
