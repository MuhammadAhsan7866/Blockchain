// components/PlatformSupportSection.js

import {
  Box,
  Flex,
  Text,
  VStack,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const PlatformSupportSection = () => {
  return (
    <Box py={10} maxW="1240px" mx="auto" textAlign="center">
      <Text fontSize="lg" color="gray.600" mb={6}>
        SSYouTube is your go-to online video downloader, crafted to bypass
        YouTubes download restrictions. We bridge the gap by offering a fast and
        reliable way to download YouTube videos. With our user-friendly
        interface, accessing your favorite content has never been easier.
      </Text>

      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Supported Platforms:
      </Text>

      <Flex justify="center" gap={12} mb={10} flexWrap="wrap">
        <Image src="/windows.svg" alt="Windows" boxSize="150px" />
        <Image src="/apple.svg" alt="Apple" boxSize="150px" />
        <Image src="/android.svg" alt="Android" boxSize="150px" />
        <Image src="/linux.svg" alt="Linux" boxSize="150px" />
      </Flex>

      <VStack textAlign={'left'} spacing={4}  mx="auto" color="black" fontSize={'17px'}>
        <UnorderedList spacing={3}>
          <ListItem>
            Experience the best YouTube video downloading with our top-rated
            tool – completely free.
          </ListItem>
          <ListItem>
            Download content in your preferred quality: from MP4 to MP3,
            standard to Full HD resolution.
          </ListItem>
          <ListItem>
            Perfect compatibility across all devices – grab your favorite videos
            on desktop or mobile.
          </ListItem>
          <ListItem>
            Convert YouTube videos with just a few simple clicks using our
            streamlined platform.
          </ListItem>
          <ListItem>
            Get lightning-fast downloads and unlimited video access without
            spending a dime.
          </ListItem>
          <ListItem>
            Master YouTube downloading with our comprehensive guide and expert
            tips.
          </ListItem>
        </UnorderedList>
      </VStack>
    </Box>
  );
};

export default PlatformSupportSection;
