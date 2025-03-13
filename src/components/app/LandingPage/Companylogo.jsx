"use client";

import { Box, Container, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Motion component for smooth animation
const MotionFlex = motion(Flex);

// Dummy logos (Replace with your actual logo URLs)
const logos = [
  "/referal.png",
  "/referal.png",
  "/referal.png",
  "/referal.png",
  "/referal.png",
  "/referal.png",
  "/referal.png",
  
  
];

const CompanyLogoSlider = () => {
  const [offset, setOffset] = useState(0);
  const slideWidth = 180; // Adjust based on logo size
  const totalSlides = logos.length;
  const visibleSlides = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev - slideWidth) % (slideWidth * totalSlides));
    }, 2000); // Adjust timing for smooth auto-slide

    return () => clearInterval(interval);
  }, [slideWidth, totalSlides]);

  return (
    <Container maxW="1340px" py={{base:'40px',md:'70px'}}>
      <Box overflow="hidden" position="relative">
        <MotionFlex
          animate={{ x: offset }}
          transition={{ ease: "linear", duration: 1.5 }}
          display="flex"
          whiteSpace="nowrap"
        >
          {[...logos, ...logos].map((logo, index) => (
            <Box key={index} minWidth={`${slideWidth}px`} mx={2}>
              <Image src={logo} alt={`logo-${index}`} w="250px" h="auto" />
            </Box>
          ))}
        </MotionFlex>
      </Box>
    </Container>
  );
};

export default CompanyLogoSlider;
