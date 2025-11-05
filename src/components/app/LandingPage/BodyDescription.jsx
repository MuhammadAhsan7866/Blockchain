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
  Link,
  OrderedList,
} from "@chakra-ui/react";
import DownloadFromOtherWebsites from "./BannerInstructions";

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
    <>
      <Box
        py={{ base: "30px", md: "50px" }}
        maxW="1240px"
        mx="auto"
        // px={{
        //   base: "25px",
        //   md: "30px",
        //   lg: "30px",
        //   xl: "30px",
        //   xxl: "30px",
        //   xxxl: "30px",
        // }}
        px={{ base: "25px", md: "40px" }}
        textAlign="center"
      >
        <Text fontSize="lg" color="black" mb={6} textAlign={"left"}>
          There are billions of videos flowing on many platforms. ssyoutube is
          the most common and easiest place to play your favorite songs, Movies
          dramas, etc. <strong>Online YouTube Downloader</strong> has become the
          go-to platform for entertainment, education, music, and more. In case
          you can download your favorite MP4 songs. This website solved all the
          problems of how you can download your MP4 music. You easily open this
          website on your Android and click the Chrome search box. Type the name
          of our website ss youtube reviews. You can easily download and share
          on your favorite platforms like Messenger, WhatsApp, and Instagram.
          This is an amazing platform for installation because you can download
          it without registration. Just copy and paste the link to your YouTube
          music. This website is supported in many high formats like 126kps,
          320kps, 64kps, 96kps, 192kps, 256kps, etc. It&apos;s a very fast and
          easy tool to use. It is very easy to understand.
        </Text>
        <Text fontSize="lg" color="black" mb={6} textAlign={"left"}>
          It&apos;s just a tool like as instagram video downloader videos reels
          not a YouTuber downloader. This website is easily open on your laptop,
          desktop, android, etc. youtube download videos is a free web-based
          tool designed to help users download MP3s directly from YouTube. It
          supports many formats like HD, MP4, and MP3. It&apos;s very easy to
          use and share your entertainment with your family members, friends,
          etc. Press the red download button automatically appears a dialog box
          and suggestions you how to download your music like as Mp3, Mp4, MV4,
          WMV, FLV, etc.
        </Text>
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          Our Converter Supported Platforms
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
      </Box>

      <Box bg="#08003A" color="white" py={"50px"} px={6} w="100%">
        <Box maxW="1240px" mx="auto">
          <DownloadFromOtherWebsites
            title="How to download YouTube videos and audio using YouTube? Or features"
            paragraphs={[
              "Copy the URL of your music from YouTube and paste it into our site.",
            ]}
          />
          <OrderedList>
            <ListItem>
              Click the red Button and appear a dialog box Then its your choice
              of how to download and the quality to download
            </ListItem>
            <ListItem>
              Then you choose your favorite format and it is automatically saved
              in your library.
            </ListItem>
            <ListItem>
              Clicking to Tap the download button to download any mp3 or mp4
              that you really want. It very well may be saved in the same
              quality.
            </ListItem>
          </OrderedList>
        </Box>
      </Box>

      {/* <Box
        py={10}
        maxW="1240px"
        mx="auto"
        px={{ base: "25px", md: "0px" }}
        textAlign="center"
      >
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
      </Box> */}
    </>
  );
};

export default PlatformSupportSection;
