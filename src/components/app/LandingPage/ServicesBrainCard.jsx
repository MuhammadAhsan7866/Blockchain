import React from "react";
import { Box, Grid, Text, Img, Flex } from "@chakra-ui/react";

const Card = ({ title, description, icon, shortdes }) => (
  <Box
    p="30px"
    w="100%"
    h="100%"
    pos={'relative'}
    borderWidth="1px"
    borderColor="rgb(255 255 255 / 7%)"
    borderRadius="20px"
    boxShadow="lg"
    overflow="hidden"
    backdropFilter="blur(0px)"
    bgGradient="linear-gradient(0.07deg, rgba(0, 85, 255, 0.15)  0%, rgba(97, 97, 97, 0.09)  100%)"
    cursor="pointer"
    _hover={{
      "& img.arrowIcon": { opacity: 1, transition: "opacity 0.3s ease-in-out" },
    }}
  >
    <Flex direction="column" gap="22px">
      <Flex justify="space-between" w="100%">
        <Img
          src={icon}
          borderRadius="50px"
          boxShadow="rgba(0, 85, 255, 0.35) 2px 4px 24px 0px"
        />
        <Img
          src="/arrownew.svg"
          h="24px"
          w="24px"
          opacity="0.2"
          className="arrowIcon"
          transition="opacity 0.3s ease-in-out"
        />
      </Flex>
      <Flex direction="column">
        <Text fontSize="18px" fontWeight="bold" color="white">
          {title}
        </Text>
        <Text color="#93959A">{shortdes}</Text>
      </Flex>
      <Box
        w="230px"
        h="1px"
        bgGradient="linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 100%)"
      />
      <Text color="#ffffff80">{description}</Text>
    </Flex>
    <Box
    bgGradient={'linear-gradient(90deg, rgba(0, 85, 255, 0) 0%, rgb(0, 85, 255) 50%, rgba(0, 85, 255, 0) 100%)'}
    h={'1px'}
    w={'170px'}
    pos={'absolute'}
    top={0}
    left={'calc(50.00000000000002% - 170px / 2)'}
    flex={'none'}
    zIndex={1}
    >

    </Box>
  </Box>
);

const CardList = () => (
  <Box maxW="1300px" mx="auto">
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap="25px"
      justifyItems="center"
      alignItems="center"
    >
      {[
        {
          icon: "/ser1.svg",
          title: "Game Development",
          description:
            "High-performance, immersive games with stunning visuals.",
          shortdes: "Increase Profit",
        },
        {
          icon: "/pro.svg",
          title: "Full Stack Development",
          description:
            "Scalable web & mobile applications.",
          shortdes: "Editable Designs",
        },
        {
          icon: "/bug.svg",
          title: "Cloud Solutions",
          description:
            "AWS, Azure, GCP architectures.",
          shortdes: "Optimized Code",
        },
        {
          icon: "/wining.svg",
          title: "AI & ML",
          description:
            "NLP, predictive analytics, computer vision",
          shortdes: "Reconized Design",
        },
        {
          icon: "/deliver.svg",
          title: "Blockchain Development",
          description:
            "Smart contracts, NFT platforms, Web3 apps.",
          shortdes: "Quick Turnaround",
        },
        {
          icon: "/mobile.svg",
          title: "Mobile Friendly",
          description:
            "Boost your online presence with our targeted marketing strategies.",
          shortdes: "Responsive",
        },
      ].map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </Grid>
  </Box>
);

export default CardList;
