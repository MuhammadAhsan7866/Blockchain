// components/YouTubeDownloadGuide.js

import {
  Box,
  Flex,
  Text,
  Image,
  VStack,
  UnorderedList,
  ListItem,
  Link,
  Heading,
} from "@chakra-ui/react";

const steps = [
  {
    image: "/howto2.png",
    alt: "How to Step 1",
    text: "Get your favorite YouTube videos downloaded with these straightforward instructions:",
  },
  {
    image: "/howto3.png",
    alt: "How to Step 2",
    text: "Find the video you want on YouTube and grab the URL from your browser.",
  },
  {
    image: "/howto3.png",
    alt: "How to Step 3",
    text: "Insert the YouTube video link into our download box above.",
  },
];

const YouTubeDownloadGuide = () => {
  return (
    <Box py={10} maxW="1240px" mx="auto" px={{ base: "25px", md: "0px" }}>
      {/* Heading */}
      <Heading
        as="h1"
        size="xl"
        textAlign="center"
        mb={8}
        display={{ base: "none", md: "block" }}
      >
        Download YouTube Videos: Your Complete Guide
      </Heading>
      <Text
        fontSize={{ base: "26px", md: "40px" }}
        fontWeight="500"
        textAlign="center"
        mb={8}
      >
        Download YouTube Videos: Your Complete Guide
      </Text>

      {/* Step-by-step Images */}
      <Flex justify="center" gap={10} flexWrap="wrap" mb={8}>
        {steps.map((step, index) => (
          <VStack key={index} spacing={4}>
            <Image src={step.image} alt={step.alt} w="90%" />
            <Text textAlign="center" maxW="360px" fontSize="17px">
              {step.text}
            </Text>
          </VStack>
        ))}
      </Flex>

      {/* Text Guide Section */}
      <Box mb={10}>
        <Text fontSize="2xl" fontWeight="semibold" mb={2} textAlign="center">
          How to Download YouTube Videos Without an Add-on
        </Text>
        <Text color="gray.600" mb={4} textAlign="left">
          Learn how to download a YouTube video without a video downloader
          add-on! Simply add 'ss' to the video URL to quickly save the video to your device.
        </Text>
        <UnorderedList textAlign="left" maxW="1240px" mx="auto" spacing={2}>
          <ListItem>
            Original URL:{" "}
            <Link
              color="blue.500"
              href="https://youtube.com/watch?v=YOCmSsBfafg"
              isExternal
            >
              https://youtube.com/watch?v=YOCmSsBfafg
            </Link>
          </ListItem>
          <ListItem>
            Modified URL with 'ss':{" "}
            <Link
              color="blue.500"
              href="https://ssyoutube.com/watch?v=YOCmSsBfafg"
              isExternal
            >
              https://ssyoutube.com/watch?v=YOCmSsBfafg
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default YouTubeDownloadGuide;
