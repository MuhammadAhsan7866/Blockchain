"use client";

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
    title: "Search Your Favorite YouTube MP3 and MP4.",
    image: "/howto2.png",
    alt: "How to Step 1",
    text: "Get your favorite YouTube videos downloaded with these straightforward instructions:",
  },
  {
    title: "Combine the video URL into the search box",
    image: "/howto3.png",
    alt: "How to Step 2",
    text: "Find the video you want on YouTube and grab the URL from your browser.",
  },
  {
    title: "Step by step Download your YouTube Files",
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
        as="h2"
        fontSize="32px"
        fontWeight="500"
        textAlign="center"
        mb={8}
        display={{ base: "none", md: "block" }}
      >
       SSYouTube is a Short and simple website link you can use to Download all Types of videos from YouTube using SaveFrom.
      </Heading>
      

      {/* Step-by-step Images */}
      <Flex justify="center" gap={10}  mb={8}>
        {steps.map((step, index) => (
          <VStack key={index} spacing={4}>
            <Text color="black" fontSize="17px" fontWeight={"500"}>
              {step.title}
            </Text>
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
          Learn how to download a YouTube video without a video downloader add-on! Simply add
          {' '}<strong>ss</strong>{' '}to the video URL to quickly save the video to your device.
        </Text>
        <UnorderedList textAlign="left" maxW="1240px" mx="auto" spacing={2}>
          <ListItem>
            Original URL:&nbsp;
            <Link
              color="blue.500"
              href="https://youtube.com/watch?v=YOCmSsBfafg"
              isExternal
            >
              https://youtube.com/watch?v=YOCmSsBfafg
            </Link>
          </ListItem>
          <ListItem>
            Modified URL with &quot;ss&quot;:&nbsp;
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
