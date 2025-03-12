import { Box, Image, Grid, GridItem, Text, Container, Heading } from "@chakra-ui/react";
import { useState } from "react";

const projects = [
  {
    title: "Fullet",
    description:
      "Welcome to the best web3 tracker on the internet, we help our user track wallets, DAOs, DEFI, NFTs & much more",
    image: "/fullet.png",
  },
  {
    title: "Enoch",
    description:
      "Enoch is getting ready to roll out new meta-commerce features by adding Bitmoji avatars that let users dress them up in items provided by creators on our NFT marketplace.",
    image: "/enoch.png",
  },
  {
    title: "Wardog",
    description:
      "Join the playful pup pack! $WARDOG battles other meme coins for crypto glory.",
    image: "/wardog.png",
  },
  {
    title: "Myro",
    description:
      "Meet the next-gen memecoin inspired by the legend Myro! The doge meme revolution is here.",
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
        p={'18px'}
        bgGradient={'linear-gradient(0.07deg, rgba(0, 85, 255, 0.15)  0%, rgba(97, 97, 97, 0.09)  100%)'}
        minH={'400px'}
      >
        <Image src={project.image} alt={project.title} w="full" h="auto" borderRadius="lg"  minH={'400px'} />
        {hovered && (
          <Box
            position="absolute"
            top={'57%'}
            left={'5%'}
          maxW={'550px'}
          w={'100%'}
            h="150px"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            p={6}
            bgGradient="linear(to-r, #2a1454, #8750f7)"
            color="white"
            borderRadius={'20px'}
          >
            <Text fontSize="xl" fontWeight="bold">
              {project.title}
            </Text>
            <Text mt={2}>{project.description}</Text>
          </Box>
        )}
      </Box>
    
     
    
  );
};

export default FeatureProjects;
