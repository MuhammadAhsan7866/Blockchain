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

const YouTubeDownloadGuide = () => {
  return (
    <Box py={10} maxW="1240px" mx="auto" px={{base:'25px',md:'0px'}}>
      {/* Header */}
      <Heading as="h1" size="xl" textAlign="center" mb={8} display={{ base: 'none', md: 'block' }}>
        Download YouTube Videos: Your Complete Guide
      </Heading>
      <Text fontSize={{base:'26px',md:'40px'}} fontWeight="500" textAlign="center" mb={8}>
        Download YouTube Videos: Your Complete Guide
      </Text>

      {/* Step-by-step images */}
      <Flex justify="center" gap={10} flexWrap="wrap" mb={8}>
        <VStack spacing={4}>
          <Image src="/howto2.png" alt="Step 1" w="90%" />
          <Text textAlign="center" maxW="360px" fontSize="17px">
            Get your favorite YouTube videos downloaded with these
            straightforward instructions:
          </Text>
        </VStack>
        <VStack spacing={4}>
          <Image src="/howto3.png" alt="Step 2" w="90%" />
          <Text textAlign="center" maxW="360px" fontSize="17px">
            Find the video you want on YouTube and grab the URL from your
            browser.
          </Text>
        </VStack>
        <VStack spacing={4}>
          <Image src="/howto3.png" alt="Step 3" w="90%" />
          <Text textAlign="center" maxW="360px" fontSize="17px">
            Insert the YouTube video link into our download box above.
          </Text>
        </VStack>
      </Flex>

      {/* Text Guide Section */}
      <Box mb={10}>
        <Text fontSize="2xl" fontWeight="semibold" mb={2} textAlign="center">
          How to Download YouTube Videos Without an Add-on
        </Text>
        <Text color="gray.600" mb={4} textAlign="left">
          Learn how to download a YouTube video without a video downloader
          add-on! Simply add &apos;ss&apos; to the video URL to quickly save the
          video to your device.
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
            Modified URL with &apos;ss&apos;:{" "}
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
