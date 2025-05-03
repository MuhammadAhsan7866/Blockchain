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
            First, find the YouTube video you want to download and copy its URL from the address bar.
            </Text>
          </VStack>
          <VStack spacing={4}>
          <Text color="black" fontSize='20px' fontWeight={'500'}>Find Your Video</Text>
            <Image src="/downloader_how.svg" alt="Step 2" />
            <Text textAlign="center" maxW="360px"  fontSize={'20px'}>
            Add ss before the video URL. This prefix is how you initiate the youtube download process.
            </Text>
          </VStack>
          <VStack spacing={4}>
          <Text color="black" fontSize='20px' fontWeight={'500'}>Find Your Video</Text>
            <Image src="/downloader_how.svg" alt="Step 3" />
            <Text textAlign="center" maxW="360px"  fontSize={'20px'}>
            Hit Enter You will be taken to a new page where your youtube video download will start automatically.
            </Text>
          </VStack>
        </Flex>
  
      </Box>
    );
  };
  
  export default DomainInstruction;
  