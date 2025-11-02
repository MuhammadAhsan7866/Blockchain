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
  "How to download YouTube videos and audio using YouTube? Or features",
  "Copy the URL of your music from YouTube and paste it into our site.",
  "Then you choose your favorite format and it is automatically saved in your library.",
];
const sections = [
  {
    title: "High-Quality Mp4 Downloader",
    content: [
      `Ssyoutube is a perfect YouTube video downloader Experience unparalleled benefits in YouTube mp4 downloader with our site, your top choice for swift and free video downloading. Without any registration, our platform offers a smooth and efficient download process for all consumers. With its user-friendly design, ss youtube supports users at every particular skill level, making sure they a flawless downloading experts. Y2mate 2k-like views know a great strategy for getting around youtube mp4 download playlists. Downloading many recordings or convert them your chosen format. You can without much of a stretch download free of charge all possible recordings from yt and many different sites.Raise your video downloading with ss high-quality options. Chosen your desired video resolution, from 144p to 1080p, to match your viewing preferences on any device. Perfect for those who importance video quality, our service caters to the needs of repeated video downloader’s.`,
      `youtube download mp4 allows you to download videos in high quality and convert them to MP4 format. This ensures that you get excellent video quality. With our SS downloader, you can videos from popular platforms such as youtube shorts and YouTube. You have the option to choose from various resolutions including SD, HD, Full HD, 2K, and 4K. If a video is uploaded in 1080p, you can save it in the same resolution or select a lower one.`,
    ],
  },
  {
    title: "Compatible Browsers for Online Mp3 & mp4 Downloader",
    content: [
      `All platforms upheld. Simple to switch youtube to mp4 download recordings over completely to MP3 files doesn't make any difference suppose to you are utilizing Windows, Macintosh or Linux, Android, or iPhone. Simple mp4 changing over. No enrollment is required. You should simply glue the URL of the video that you wish to change over and download. We don't uphold transferring the changed documents over completely to your DropBox and Google Drive. Our online SS video downloader is compatible with a wide range of web browsers, including Google Chrome, Mozilla Firefox, Safari, Opera, and all Chromium-based browsers.`,
    `In addition, the mp4 format simplifies the process of sharing and transferring content. Easily share your favorite downloads with friends and family, allowing them to enjoy the videos without internet access or any additional costs. ss download mp4 any videos online immediately with close to no application foundation. YT video downloader too as it can switch yt Sound over totally to MP3. The video quality we can download from YouTube starts Downloader from 240p to free download YouTube 1080p system one. Additionally, sound from 32kbps to 160kbps.`,
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
        {/* <Heading
          as="h1"
          size="xl"
          mb={8}
          display={{ base: "none", md: "block" }}
          textAlign={"center"}
        >
          Best Quality YouTube Video or MP3 Downloader
        </Heading> */}
        <Text fontSize="lg" color="black" mb={6}>
          Ssyoutube video Download Today’s very digital lifestyle has created a
          growing need for saving YouTube content and viewing it offline. If
          possible, it would be great to know how to download our videos and
          watch them easily, while also saving them to our library. On this
          website you want to choose any video and, it’s very easy to download
          and also share with your social media platforms as family circle,
          friends, etc. all over a simple process like just copying your link
          and pasting it onto Yt Downloader ss. There are many formats provided.
          That’s where sss youtube comes in a particle solution that lets you
          convert YouTube videos into mp4 downloader files without spending a
          dime. As more people seek flexibility in how they use content our
          platform provides a simple way to keep your favorite videos reachable
          anytime, anywhere.
        </Text>
        <Text fontSize="lg" color="black" mb={6}>
          Youtube downloader online mp4 videos in MP4 format offers multiple
          advantages, increasing your viewing expertise. Joy your favorite
          YouTube content offline at your benefit accessible without an internet
          connection, and perfect for on-the-go entertainment. Regular flow can
          use a significant amount of dT, resulting in expensive charges if you
          have a capped data plan.
        </Text>
        <Text fontSize="lg" color="black" mb={6}>
          Ssyoutube online video downloader allows you to download videos in
          high quality and convert them to youtube mp4 downloader format. This
          ensures that you get excellent video quality. With our SS downloader,
          you can videos from popular platforms such as yt shorts and YouTube.
          You have the option to choose from various resolutions including SD,
          HD, Full HD, 2K, and 4K. If a video is uploaded in 1080p, you can save
          it in the same resolution or select a lower one.
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
          Use the SSYouTube short link to download videos quickly and easily.
        </Text>

        {/* Step-by-step images */}
        <Flex justify="center" gap={10} flexWrap="wrap" mb={8}>
          <VStack spacing={4}>
            <Text color="black" fontSize="17px" fontWeight={"500"} maxW="360px">
              Search Your Favorite YouTube MP3 and MP4.
            </Text>
            <Image src="/how_can_i_save_1.png" alt="Step 1" />
            <Text textAlign="center" maxW="360px" fontSize={"17px"}>
              First, copy the music link you would like to download. Go to the
              website and paste the link into the provided field. Click
              “Download or press “Enter to begin”
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Text color="black" fontSize="17px" fontWeight={"500"} maxW="360px">
              Combine the video URL into the search box.
            </Text>
            <Image src="/insert_video_link.png" alt="Step 2" />
            <Text textAlign="center" maxW="360px" fontSize={"17px"}>
              Just use a simple process like paste the link or search for the
              music or video you want, and you can easily download it as MP3 or
              MP4 on your Android.
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Text color="black" fontSize="17px" fontWeight={"500"} maxW="360px">
              Step by step download your YouTube.
            </Text>
            <Image src="/how_can_i_save_3.png" alt="Step 3" />
            <Text textAlign="center" maxW="360px" fontSize={"17px"}>
              You want to download and convert YouTube videos to MP3 or MP4
              quickly and easily. Just copy and paste the link, and your music
              or video will be ready to download.
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
