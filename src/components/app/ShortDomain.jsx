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
  } from "@chakra-ui/react";
  
  
  const DomainInstruction = () => {
    return (
      <Box py={10} maxW="1240px" mx="auto">
        {/* Header */}
        <Text fontSize="40px" fontWeight="500" textAlign="center" mb={8}>
        Download YouTube Videos: Your Complete Guide
        </Text>
  
        {/* Step-by-step images */}
        <Flex justify="center" gap={10} flexWrap="wrap" mb={8}>
          <VStack spacing={4}>
            <Text color="black" fontSize='20px' fontWeight={'500'}>Find Your Video</Text>
            <Image src="/downloader_how.svg" alt="Step 1" />
            <Text textAlign="center" maxW="360px" fontSize={'20px'}>
              Get your favorite YouTube videos downloaded with these
              straightforward instructions:
            </Text>
          </VStack>
          <VStack spacing={4}>
          <Text color="black" fontSize='20px' fontWeight={'500'}>Find Your Video</Text>
            <Image src="/downloader_how.svg" alt="Step 2" />
            <Text textAlign="center" maxW="360px"  fontSize={'20px'}>
              Find the video you want on YouTube and grab the URL from your
              browser.
            </Text>
          </VStack>
          <VStack spacing={4}>
          <Text color="black" fontSize='20px' fontWeight={'500'}>Find Your Video</Text>
            <Image src="/downloader_how.svg" alt="Step 3" />
            <Text textAlign="center" maxW="360px"  fontSize={'20px'}>
              Insert the YouTube video link into our download box above.
            </Text>
          </VStack>
        </Flex>
  
      </Box>
    );
  };
  
  export default DomainInstruction;
  