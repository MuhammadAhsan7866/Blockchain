import {
  Box,
  Image,
  Grid,
  GridItem,
  Text,
  Container,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";

const projects = [
  {
    title: "Fullet",
    description: "React, Next.js",
    image: "/fullet.png",
  },
  {
    title: "Enoch",
    description: "React, Next.js",
    image: "/enoch.png",
  },
  {
    title: "Wardog",
    description: "React, Next.js",
    image: "/wardog.png",
  },
  {
    title: "Myro",
    description: "React, Next.js",
    image: "/myro.png",
  },
];

const FeatureProjects = () => {
  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
      {projects.map((project, index) => (
        <GridItem key={index}>
          <HoverCard project={project} />
        </GridItem>
      ))}
    </Grid>
  );
};

const HoverCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      position="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      overflow="hidden"
      borderRadius="lg"
      p={"18px"}
      bgGradient={
        "linear-gradient(0.07deg, rgba(0, 85, 255, 0.15)  0%, rgba(97, 97, 97, 0.09)  100%)"
      }
      minH={{ base: "auto", md: "400px" }}
    >
      <Image
        src={project.image}
        alt={project.title}
        w="full"
        h="auto"
        borderRadius="lg"
        minH={{ base: "250px", md: "400px" }}
      />
      {hovered && (
        <Box
          position="absolute"
          top={{ base: "58%", md: "56%" }}
          left={{ base: "8%", md: "5%" }}
          maxW={{ base: "285px", md: "550px" }}
          w={"100%"}
          h={{ base: "auto", md: "150px" }}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          p={{ base: "18px", md: "20px" }}
          bgGradient="linear(to-r, #2a1454, #8750f7)"
          color="white"
          borderRadius={{base:'12px',md:'20px'}}
        >
          <Text fontSize="xl" fontWeight="bold">
            {project.title}
          </Text>
          <Text fontSize={{ base: "14px", md: "20px" }} mt={2}>
            {project.description}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default FeatureProjects;
