import React from "react";

import YoutubeDownloader from "../../src/components/app/LandingPage/YoutubeDownloader";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import DownloadFromOtherWebsites from "../../src/components/app/LandingPage/BannerInstructions";
import YouTubeDownloaderInfo from "../../src/components/app/LandingPage/YouTubeDownloaderInfo ";
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
const sections = [
  {
    title: "Online High-Quality YouTube Shorts Download",
    content: [
      `Ssyoutube is a perfect YouTube video downloader ss too as it can change YouTube Sound over totally to MP3. It will help you with downloading HD accounts and sound from YouTube and save them in the relationship mp4, mp3, WEDM, etc. The video quality we can download from YouTube starts from 240p to 1080p. Besides, sound from 32kbps to 160kbps.

Sssyoutube transforms song in the best production key and convert mp3 format also you can listen to or test the song on our website. This makes sure that you get excellent sound quality. With our downloader, you can save song from popular platforms such as ss TikTok short, and YouTube short. You have the option to choose from many resolutions involving 32kbps, 64kbps, 192kbps, 256kbps, and 128kbps then save it in same pitch.`,
    ],
  },
  {
    title: "Supported Browsers for Online Mp3 & mp4 Downloader",
    content: [
      `Ss YouTube video download online-- allow all platforms. Simple to switch SSS YouTube music over completely to MP3 or MP4 documents doesn't make any difference suppose you are making use of Windows, Macintosh Linux, Android, or iPhone. Simple MP3 and MP4 changing over. No engagement is required. You should simply glue the URL of the video that you wish to change over and download. We don't maintain convey the changed documents over completely to your Drop Box and Google Drive.`,
    ],
  },
];
const Home = () => {
  return (
    <>
      <Box bg={"#08003A"}>
        <Container maxW="1100px" p={"157px 0px 0px"}>
          <YoutubeDownloader />
        </Container>
      </Box>
      <Container maxW="1240px" py={"50px"}>
        <Heading
          as="h1"
          size="xl"
          mb={8}
          display={{ base: "none", md: "block" }}
          textAlign={"center"}
        >
          Best Quality YouTube Video or MP3 Downloader
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={6}>
          Ssyoutube video Download is the most popular and fastest tool for all
          users. Ss download is very safe for all users, without creating
          anything in writing. Its sound quality is too good. It is an official
          website. Don’t wait any longer for the downloading. It is a very quick
          and fast downloader. Its user-good nature is very good. You can easily
          open them on your mobile devices, Android, laptop, and Computers. Yt
          Downloader ss free for many configurations in this transform MP3, yt
          ss downloader with high quality such as 360p, 480p, 720p, 1080p, 144p,
          240p, etc. Expected up next are the most important characteristics of
          Ytmp3s.
        </Text>
        <Text fontSize="lg" color="gray.600" mb={6}>
          YouTubess you can easily download YouTube to MP3 Converter download
          and share it with your friends and many other people. It is also
          edited in your videos like can you download in shorter you can also
          download YouTube MP4 in other tools. This website allows users to
          access many websites easily and on many platforms; videos are easy to
          download. You can easily use Y2mp3 Downloader Converter for YouTube
          Shorts, TikTok, and many other websites. This website supports many
          high formats like 128 kbps, 320 kbps, 64 kbps, 96 kbps, 192 kbps, 256
          kbps, etc. This is a very fast and safe tool for all users. You can
          easily download many TV shows, movies, songs, and short videos for
          free.
        </Text>

        <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign={"center"}>
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
      </Container>
      <Box bg="#08003A" color="white" py={"50px"} px={6}>
        <DownloadFromOtherWebsites
          title="Instruction: Downloading MP3 or mp4 in best quality"
          paragraphs={[
            "How to download YouTube songs or videos using Ssyoutube? OR Feature:",
          ]}
          exampleLinkText="sfrom.net/http://www.freethechildren.com/"
        />
        <Container maxW="1100px" p={0}>
          <VStack
            spacing={4}
            mx="auto"
            color="black"
            fontSize="17px"
            textAlign="left"
            align="start"
          >
            <UnorderedList spacing={3} color={"white"}>
              {features.map((feature, index) => (
                <ListItem key={index}>{feature}</ListItem>
              ))}
            </UnorderedList>
          </VStack>
        </Container>
      </Box>
      <Box py={10} maxW="1240px" mx="auto">
        {/* Header */}
        <Text fontSize="32px" fontWeight="500" textAlign="center" mb={8}>
          Leverage Ssyoutube Short Domain for Efficient s Downloads
        </Text>

        {/* Step-by-step images */}
        <Flex justify="center" gap={10} flexWrap="wrap" mb={8}>
          <VStack spacing={4}>
            <Text color="black" fontSize="20px" fontWeight={"500"} maxW="360px">
              Exploring to Your Ideal YouTube song or any videos.
            </Text>
            <Image src="/how_can_i_save_1.png" alt="Step 1" />
            <Text textAlign="center" maxW="360px" fontSize={"17px"}>
              Start by exploring to the YouTube video or song you want to
              download to ensure a smooth and simple download process.
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Text color="black" fontSize="20px" fontWeight={"500"} maxW="360px">
              Integrating into the song URL into search box
            </Text>
            <Image src="/insert_video_link.png" alt="Step 2" />
            <Text textAlign="center" maxW="360px" fontSize={"17px"}>
              You can download song or video to your PC by essentially gluing
              the connection or looking for the song or videos you need to
              change over.
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Text color="black" fontSize="20px" fontWeight={"500"} maxW="360px">
              Download Your YouTube song or video step by step
            </Text>
            <Image src="/how_can_i_save_3.png" alt="Step 3" />
            <Text textAlign="center" maxW="360px" fontSize={"17px"}>
              We give Fast convert and download YouTube to mp3 and mp4 simple to
              change over glue a connection pick the configuration and musica or
              video is prepared to download.
            </Text>
          </VStack>
        </Flex>
        <Container maxW={"1300px"}>
          <YouTubeDownloaderInfo sections={sections} />
        </Container>
      </Box>
    </>
  );
};

export default Home;
