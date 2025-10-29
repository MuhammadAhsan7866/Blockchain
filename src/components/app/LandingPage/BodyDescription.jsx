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
    <Box
      py={10}
      maxW="1240px"
      mx="auto"
      px={{ base: "25px", md: "0px" }}
      textAlign="center"
    >
      <Text fontSize="lg" color="black" mb={6} textAlign={"left"}>
        There are billions of videos flowing on many platforms. ssyoutube is the
        most common and easiest place to play your favorite songs, Movies
        dramas, etc. Online YouTube Downloader has become the go-to platform for
        entertainment, education, music, and more. In case you can download your
        favorite MP4 songs. This website solved all the problems of how you can
        download your MP4 music. You easily open this website on your Android
        and click the Chrome search box. Type the name of our website ss youtube
        reviews. You can easily download and share on your favorite platforms
        like Messenger, WhatsApp, and Instagram. This is an amazing platform for
        installation because you can download it without registration. Just copy
        and paste the link to your YouTube music. This website is supported in
        many high formats like 126kps, 320kps, 64kps, 96kps, 192kps, 256kps,
        etc. It’s a very fast and easy tool to use. It is very easy to
        understand.
        <Link href="https://www.instagram.com/downloader/" target="_blank">
          instagram video downloader
        </Link>
      </Text>
      <Text fontSize="lg" color="black" mb={6} textAlign={"left"}>
        It’s just a tool like as <Link href="https://www.instagram.com/downloader/" target="_blank">
          <strong>instagram video downloader</strong>
        </Link> videos reels not a
        YouTuber downloader. This website is easily open on your laptop,
        desktop, android, etc. youtube download videos is a free web-based tool
        designed to help users download MP3s directly from YouTube. It supports
        many formats like HD, MP4, and MP3. It’s very easy to use and share your
        entertainment with your family members, friends, etc. Press the red
        download button automatically appears a dialog box and suggestions you
        how to download your music like as Mp3, Mp4, MV4, WMV, FLV, etc.
       
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
      <Box bg="#08003A" color="white" py={"50px"} px={6}>
        <DownloadFromOtherWebsites
          title="Download Videos From Other Websites"
          paragraphs={[
            "Want to download YouTube shorts from sites other than YouTube? The SSYouTube downloader supports video downloads from 99% of websites! Just add sfrom.net/ or savefrom.net/ before the website URL and press Enter.",
            "You will get a list of direct links to download all available videos from that website.",
          ]}
          exampleLinkText="sfrom.net/http://www.freethechildren.com/"
          exampleLinkUrl="http://www.freethechildren.com/"
        />
      </Box>
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
