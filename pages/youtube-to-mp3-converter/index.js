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
const supportedPlatforms = [
  { src: "/windows.svg", alt: "Windows" },
  { src: "/apple.svg", alt: "Apple" },
  { src: "/android.svg", alt: "Android" },
  { src: "/linux.svg", alt: "Linux" },
];
const features = [
  "Copy the URL of your music from YouTube and paste it into our site.",
  "Click the red Button and appear a dialog box Then it & your choice of how to download and the quality to download",
  "Then you choose your favorite format and it is automatically saved in your library.",
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
      <Head>
        <title>
          YouTube to MP3 Converter - Convert YouTube to MP3 Free | SSYouTube
        </title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://ss-youtube.cc/youtube-to-mp3-converter/"
        />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Convert YouTube videos to MP3 format for free with SSYouTube. High-quality audio downloads (128kbps, 192kbps, 256kbps) - no registration required."
        />
        <meta
          name="keywords"
          content="youtube to mp3, youtube mp3 converter, convert youtube to mp3, youtube audio downloader, youtube mp3 downloader, free youtube mp3 converter, ytmp3"
        />
        <meta name="author" content="SSYouTube" />
        <meta
          property="og:title"
          content="YouTube to MP3 Converter - Convert YouTube to MP3 Free | SSYouTube"
        />
        <meta
          property="og:description"
          content="Convert YouTube videos to MP3 format for free with SSYouTube. High-quality audio downloads (128kbps, 192kbps, 256kbps) - no registration required."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="YouTube to MP3 Converter - Convert YouTube to MP3 Free | SSYouTube"
        />
        <meta
          name="twitter:description"
          content="Convert YouTube videos to MP3 format for free with SSYouTube. High-quality audio downloads (128kbps, 192kbps, 256kbps) - no registration required."
        />
      </Head>
      <Box bg={"#08003A"}>
        <Container maxW="1100px" p={"157px 0px 0px"}>
          <YoutubeMP3 />
        </Container>
      </Box>
      <Container maxW="1240px" py={"50px"}>
        <Text fontSize="lg" color="gray.600" mb={6}>
          You want to easily Yt1s youtube downloader to MP3 Converter download
          and share it with your friends and many other people. It is also
          edited in your videos like can you download in shorter you can also
          download YouTube MP4 in other tools. This website allows users to
          access many websites easily and on many platforms; videos are easy to
          download. You can easily use the Y2mp3 Converter for YouTube Shorts
          and many other websites. This website supports many high formats like
          128 kbps, 320 kbps, 64 kbps, 96 kbps, 192 kbps, 256 kbps, etc. This is
          a very fast and safe tool for all users. You can easily download many
          TV shows, movies, songs, and short videos free from YouTube.
        </Text>
        <Text fontSize="lg" color="gray.600" mb={6}>
          youtube video and downloader is the most popular and fastest tool for
          all users. Ss download is very safe for all users, without creating
          anything in writing. Its sound quality is too good. It is an official
          website. Don’t wait any longer for the downloading. It is a very quick
          and fast downloader. Its user-good nature is very good. You can easily
          open them on your mobile devices, Android, laptop, and Computers.Yt
          Downloader ss free for many configurations in this transform youtube
          audio downloader, yt ss downloader with high quality such as 360p,
          480p, 720p, 1080p, 144p, 240p, etc. Expected up next are the most
          important characteristics of Ytmp3s.
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
          title="Guidelines: Downloading Mp3 or Mp4 in Best Quality"
          paragraphs={[
            "How to download YouTube videos and audio using YouTube? Or features",
          ]}
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
            <Text color="black" fontSize="20px" fontWeight={"500"} maxW="360px">
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
            <Text color="black" fontSize="20px" fontWeight={"500"} maxW="360px">
              Integrating into the song URL into search box
            </Text>
            <Image src="/insert_video_link.png" alt="Step 2" />
            <Text textAlign="center" maxW="360px" fontSize={"17px"}>
              You can download song to your PC by essentially gluing the
              connection or looking for the song you need to change over.
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Text color="black" fontSize="20px" fontWeight={"500"} maxW="360px">
              Combine the video URL into the search box.
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
          {/* <YouTubeDownloaderInfo sections={sections} /> */}
          <Text
            as={"h2"}
            fontSize="32px"
            fontWeight="500"
            textAlign="center"
            mb={8}
          >
            Internet-Based High-Quality YouTube Shorts Download
          </Text>
          <Text fontSize="lg" color="gray.600" mb={6}>
            Ssyoutube is a perfect downloader as you want to download your music
            and convert it easily to your favorite formats like MP3 or MP4. This
            is totally safe and helps for all the users. This website also
            provides all the high formats like 240p, 1080p, and 32kbps to 16kps.
            All the downloading sound quality is too good. This website
            transforms songs in the best production key and converts youtube mp3
            downloader formats also you can listen to or test the song on our
            website. This makes sure that you get excellent sound quality. With
            our downloader, you can save songs from the popular platform YouTube
            Shorts. You have the option to choose from many resolutions
            including 192kps, 256kbps, and 128kbps then save it in the same
            tone.
          </Text>
          <Text
            as={"h2"}
            fontSize="32px"
            fontWeight="500"
            textAlign="center"
            mb={8}
          >
            Hold up Browsers for Online Mp3 and Mp4 Downloader
          </Text>
          <Text fontSize="lg" color="gray.600" mb={6}>
            Our website ssyt mp3 Improve your youtube video and downloader
            expertise with our tool’s smooth agreements across popular browsers.
            Weathers you prefer Google Chrome, Mozilla Firefox, Safari, Opera,
            or other Chromium-based browsers, our downloader works perfectly
            with your chosen platform, ensuring a quick and reliable video
            downloader every time
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default Home;
