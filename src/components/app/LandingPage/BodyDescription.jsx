// components/PlatformSupportSection.js

import {
  Box,
  Flex,
  Text,
  VStack,
  Image,
  UnorderedList,
  ListItem,
  Heading,
} from "@chakra-ui/react";

const supportedPlatforms = [
  { src: "/windows.svg", alt: "Windows" },
  { src: "/apple.svg", alt: "Apple" },
  { src: "/android.svg", alt: "Android" },
  { src: "/linux.svg", alt: "Linux" },
];

const features = [
  "Experience the best YouTube video downloading with our top-rated tool – completely free.",
  "Download content in your preferred quality: from MP4 to MP3, standard to Full HD resolution.",
  "Perfect compatibility across all devices – grab your favorite videos on desktop or mobile.",
  "Convert YouTube videos with just a few simple clicks using our streamlined platform.",
  "Get lightning-fast downloads and unlimited video access without spending a dime.",
  "Master YouTube downloading with our comprehensive guide and expert tips.",
];

const PlatformSupportSection = () => {
  return (
    <Box
      py={10}
      maxW="1240px"
      mx="auto"
      px={{ base: "25px", md: "0px" }}
      textAlign="center"
    >
      <Heading as="h1" size="xl" mb={8} display={{ base: "none", md: "block" }}>
        SSYouTube - Your Ultimate Video Downloading Solution
      </Heading>

      <Text fontSize="lg" color="gray.600" mb={6}>
        SSYouTube is your go-to online video downloader, crafted to bypass
        YouTube&rsquo;s download restrictions. We bridge the gap by offering a fast
        and reliable way to download YouTube videos. With our user-friendly
        interface, accessing your favorite content has never been easier.
      </Text>

      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Supported Platforms:
      </Text>

      <Flex justify="center" gap={12} mb={10} flexWrap="wrap">
        {supportedPlatforms.map((platform) => (
          <Image
            key={platform.alt}
            src={platform.src}
            alt={platform.alt}
            boxSize={{ base: "124px", md: "150px" }}
          />
        ))}
      </Flex>

      <VStack
        spacing={4}
        mx="auto"
        color="black"
        fontSize="17px"
        textAlign="left"
        align="start"
      >
        <UnorderedList spacing={3}>
          {features.map((feature, index) => (
            <ListItem key={index}>{feature}</ListItem>
          ))}
        </UnorderedList>
      </VStack>
    </Box>
  );
};

export default PlatformSupportSection;
