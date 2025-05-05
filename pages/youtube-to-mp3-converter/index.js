import React from "react";

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
const supportedPlatforms = [
  { src: "/windows.svg", alt: "Windows" },
  { src: "/apple.svg", alt: "Apple" },
  { src: "/android.svg", alt: "Android" },
  { src: "/linux.svg", alt: "Linux" },
];
const features = [
  "From the YouTube site copy the URL of your YouTube MP3 music, song, or any stories.",
  "Past the URL of your song into our website search box and set the quality of your song and press the download button to download the song.",
  "After clicking the download button to download the song which you need.",
];
const sections = [
  {
    title: "Download Best quality song",
    content: [
      `Our YouTube converter permits you to download your favorite song in the best performance pitch and www ssyoutube com music format also you can listen to or test the song on our website. This makes sure that you get excellent sound quality. With our ssyoutube mp3 download, you can save videos from popular platforms YouTube. This is an amazing site without installing any app and without creating an account just copy the URL and paste it into the website. This website is supported in many high formats and various resolutions including 128kbps, 192kbps, and 256kbps then saved in the same pitch.

Sssyoutube transforms song in the best production key and convert mp3 format also you can listen to or test the song on our website. This makes sure that you get excellent sound quality. With our downloader, you can save song from popular platforms such as ss TikTok short, and YouTube short. You have the option to choose from many resolutions involving 32kbps, 64kbps, 192kbps, 256kbps, and 128kbps then save it in same pitch.`,
    ],
  },
  {
    title: "Supported Browsers for Online Mp3 Downloader",
    content: [
      `Yt1s Our website permits all platforms. Simple to switch YouTube recordings over completely to MP3 documents doesn't make any difference assuming you are making use of Windows, Macintosh or Linux, Android, or iPhone. Simple ssyt mp3 changing over. No registration is required. You should simply glue the URL of the mp4 that you wish to change over and download. We don't uphold transferring the changed documents over completely to your DropBox and Google Drive. Our online video ssyoutube rip is compatible with a wide range of web browsers, including Google Chrome, Mozilla Firefox, Safari, Opera, and all Chromium-based browsers.`,
    ],
  },
];
const Home = () => {
  return (
    <>
      <Box bg={"#08003A"}>
        <Container maxW="1100px" p={"157px 0px 0px"}>
          <YoutubeMP3 />
        </Container>
      </Box>
      <Container maxW="1240px" py={"50px"}>
        <Text fontSize="lg" color="gray.600" mb={6}>
          Online Downloader videos can be shared easily on your social media
          platform. You can easily download and Savefrom YouTube MP3 in your
          gallery library, and you can watch it offline, and the converter
          supports many formats, such as MP3, MP4, M4V, WMV, FLV, 3Gp, 4GP, MA4,
          etc. While the official YouTube website only offers downloads for
          anywhere and anytime. You can click the video and it is immediately
          saved in your library. You can easily YouTube MP3 downloader 2025 many
          TV shows; Movies, Songs, and Short videos are free.
        </Text>
        <Text fontSize="lg" color="gray.600" mb={6}>
          YouTube Downloader 1080p your favorite music, songs, ringtones, etc.
          This download converter is a free yt to mp3 converter fast download
          from yt. With this tool, you can easily download many other platform
          videos downloading from here. All video downloaders in this tool same
          process, just copy the URL of your video and paste it into the MP3
          download converter tool. Then it is your choice format like MP3, MP4,
          and M4V, etc. This is very amazing and YouTube to MP3 100% working
          safe tools. You can all types of video (long video, short video)
          downloader here.
        </Text>
        <Text fontSize="lg" color="gray.600" mb={6}>
          Many websites cannot allow yt download transform mp3. Yt1s YouTube to
          Mp3 Converter is easily opened on your mobile phone; Laptop, computer,
          and many touch screens. This is a very fast and sss youtube safe tool
          for all users. You can easily watch without using a connection to the
          internet. You can easily open this MP3 download converter on your
          Smartphone, Laptop, desktop, and all the touch screens. You can easily
          open this website in any browser such as Firefox, Chrome, Safari,
          Opera, and Google. You have the option to choose from various
          resolutions including 128kbps, 192kbps, and 256kbps then save it in
          the same pitch.
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
          title="Instruction: Downloading MP3 song in best quality"
          paragraphs={[
            "How to download YouTube song using ss-youtube.cc? OR more Feature",
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
