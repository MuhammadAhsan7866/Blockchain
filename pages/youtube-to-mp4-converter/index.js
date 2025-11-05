import React from "react";
import Head from "next/head";

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
import YoutubeMP3 from "../../src/components/app/LandingPage/YoutubeMp3";
import YoutubeMP4 from "../../src/components/app/LandingPage/YoutubeMp4";
const supportedPlatforms = [
  { src: "/windows.svg", alt: "Windows" },
  { src: "/apple.svg", alt: "Apple" },
  { src: "/android.svg", alt: "Android" },
  { src: "/linux.svg", alt: "Linux" },
];
const features = [
  "Open the YouTube site and copy the URL of the YouTube video to MP4 that you need to change over and download.",
  "Glue this URL into the search box press the download button and Pick the video quality you might want to download from YouTube.",
  "After clicking on the Download button to download the video which you need.",
];
const sections = [
  {
    title: "Download High-Quality Videos",
    content: [
      `Ssyoutube online video downloader allows you to download videos in high quality and convert them to MP4 format. This ensures that you get excellent video quality. With our ss downloader, you can videos Savefrom popular platforms such as SSTikTok and YouTube. You have the option to choose from various resolutions including SD, HD, FullHD, 2K, and 4K. If a video is uploaded in 1080p, you can save it in the same resolution or select a lower one.

SssYouTube can assist you with changing over and downloading videos from YouTube, Vimeo, every day, Twitter, Reddit, Jerk, and 100s of different locales such as MP3 and Youtube to MP4 ssyoutube records. Y2mate upholds all video designs for download, for example, MP4, 3GP, FLV, MP3, WEBM, and so on as long as the website gives it. You can without much of a stretch download free of charge all possible recordings from YouTube and different sites. Y2mate 2k likewise knows a great strategy for getting around yt playlists. Download many recordings or convert them to MP3 all in 1 shot with YouTube and Everyday playlists.

Sssyoutube transforms song in the best production key and convert mp3 format also you can listen to or test the song on our website. This makes sure that you get excellent sound quality. With our downloader, you can save song from popular platforms such as ss TikTok short, and YouTube short. You have the option to choose from many resolutions involving 32kbps, 64kbps, 192kbps, 256kbps, and 128kbps then save it in same pitch.`,
    ],
  },
  {
    title: "Supported Browsers",
    content: [
      `All platforms upheld. Simple to switch yt recordings over completely to MP3 files doesn't make any difference suppose to you are utilizing Windows, Macintosh or Linux, Android, or iPhone. Simple mp4 changing over. No enrollment is required. You should simply glue the URL of the video that you wish to change over and download. We don't uphold transferring the changed documents over completely to your DropBox and Google Drive. Our online SS video downloader is compatible with a wide range of web browsers, including Google Chrome, Mozilla Firefox, Safari, Opera, and all Chromium-based browsers.

Our online SS video downloader is compatible with a wide range of web browsers, including Google Chrome, Mozilla Firefox, Safari, Opera, and all Chromium-based browsers.`,
    ],
  },
  {
    title: "Online Download Videos",
    content: [
      `Download any videos online immediately with close to no application foundation. YT video downloader too as it can switch yt Sound over totally to MP3. It will help you with downloading HD accounts and sound from YouTube and save them in the plan MP4, MP3, webm, etc. The video quality we can download from YouTube starts Downloader from 240p to free download YouTube 1080p ssyt one. Additionally, sound from 32kbps to 160kbps.`,
    ],
  },
];
const Home = () => {
  return (
    <>
      <Head>
        <title>
          YouTube to MP4 Converter - Download YouTube Videos in MP4 | SSYouTube
        </title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://ss-youtube.cc/youtube-to-mp4-converter/"
        />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Convert YouTube videos to MP4 format in high quality (HD, 1080p, 2k, 4k) with SSYouTube free online converter. Fast downloads, no registration required."
        />
        <meta
          property="og:title"
          content="YouTube to MP4 Converter - Download YouTube Videos in MP4 | SSYouTube"
        />
      </Head>
      <Box bg={"#08003A"}>
        <Container maxW="1100px" p={"157px 0px 0px"}>
          <YoutubeMP4 />
        </Container>
      </Box>
      <Container maxW="1240px" py={"50px"}>
        <Text fontSize="lg" color="gray.600" mb={6}>
          Ssyoutube MP4 Downloader is a free and unique tool that is much easier
          and faster to use. We cannot share videos in Sssyoutube Converter This
          website allows all the songs to be downloaded easily. Just copy the
          URL and paste it into the website, then press the download button. You
          can easily open YouTube and search for your favorite video. Then, you
          can copy your link and paste it into the SS tool. You can just press
          the red button. Your video is easily downloaded and converted into
          your chosen format files, like MP3, MP4, etc.
        </Text>
        <Text fontSize="lg" color="gray.600" mb={6}>
          Our website is a SsYouTube online Video Download tool for all users.
          It supports video formats and is compatible with most devices, media
          players, and editing software. You give an appearance as an option;
          one click is a must. Then, you click YouTube to MP4 ssyoutube. It
          transforms your video into an MP4 format.
        </Text>
        <Text fontSize="lg" color="gray.600" mb={6}>
          Ssyoutube online video downloader allows you to download videos in
          high quality and convert them to MP4 format. This ensures that you get
          excellent video quality. With our ss downloader, you can videos
          Savefrom popular platforms such as SSTikTok and YouTube. You have the
          option to choose from various resolutions including SD, HD, FullHD,
          2K, and 4K. If a video is uploaded in 1080p, you can save it in the
          same resolution or select a lower one.
        </Text>
        <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign={"center"}>
          Supported Platforms
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
          title="Instruction: Downloading MP4 Videos in HD"
          paragraphs={[
            "How to download YouTube videos using ss-youtube.cc? OR more Feature",
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
          SaveFrom youtube Short Domain for Proficient Video Downloader
        </Text>

        {/* Step-by-step images */}
        <Flex justify="center" gap={10} flexWrap="wrap" mb={8}>
          <VStack spacing={4}>
            <Text color="black" fontSize="20px" fontWeight={"500"} maxW="360px">
              Exploring to Your Ideal YouTube Video
            </Text>
            <Image src="/how_can_i_save_1.png" alt="Step 1" />
            <Text textAlign="center" maxW="360px" fontSize={"17px"}>
              Start by exploring to the YouTube video you want to download to
              ensure a smooth and simple download process.
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Text color="black" fontSize="20px" fontWeight={"500"} maxW="360px">
              Integrating into the Video URL into search box
            </Text>
            <Image src="/insert_video_link.png" alt="Step 2" />
            <Text textAlign="center" maxW="360px" fontSize={"17px"}>
              You can download video to your PC by essentially gluing the
              connection or looking for the video you need to change over.
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Text color="black" fontSize="20px" fontWeight={"500"} maxW="360px">
              Download Your YouTube song or video step by step
            </Text>
            <Image src="/how_can_i_save_3.png" alt="Step 3" />
            <Text textAlign="center" maxW="360px" fontSize={"17px"}>
              We give Fast convert and download YouTube to mp4 and simple to
              change over glue a connection pick the configuration and record is
              prepared to download.
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
