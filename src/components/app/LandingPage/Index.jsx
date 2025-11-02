import {
  Box,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import Script from "next/script";
import VideoConverter from "./VideoConterter";
import BodySection from "./BodyDescription";
import Info from "./Instructions";
import DownloadFromOtherWebsites from "./BannerInstructions";
import DomainInstruction from "../ShortDomain";
import FAQAccordion from "./Faq";

export default function Home() {
  return (
    <ChakraProvider>
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-88098706-1"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-88098706-1');
        `}
      </Script>

      {/* Ad Script */}
      <Script
        async
        data-cfasync="false"
        src="https://fpyf8.com/88/tag.min.js"
        data-zone="181028"
      />

      <Box bg={"#08003A"}>
        <Container maxW="1100px" p={"157px 0px 50px"}>
          {/* <Heading as="h1" size="xl" color="white" textAlign="center" mb={8} display={{ base: 'none', md: 'block' }}>
            SsYouTube - Free YouTube Video Downloader 2025
          </Heading> */}
          <VideoConverter />
        </Container>
      </Box>

      <BodySection />
      {/* <Info /> */}

      {/* <DomainInstruction /> */}
      <Box
        py={10}
        maxW="1240px"
        mx="auto"
        px={{ base: "25px", md: "0px" }}
        textAlign="center"
      >
        <Text
          as={"h2"}
          fontSize="32px"
          fontWeight="500"
          color="black"
          mb={6}
          textAlign={"left"}
        >
          Download MP4 or MP3 in high quality using an online converter.
        </Text>
        <Text fontSize="lg" color="black" mb={6} textAlign={"left"}>
          Y2MP3 dl is an ideal Ssyoutube APK sss yt Downloader online
          ssyoutube.com is just a tool not a YouTube. This is a free online
          website that allows all users that free video download from ss,
          without any registration. It is very easy to understand and very easy
          to download in your favorite formats like Mp3 its audio file, Mp4 its
          video file in high quality. You can easily download and save it in
          your gallery library very easily you can watch it offline.
        </Text>
        <Text fontSize="lg" color="black" mb={6} textAlign={"left"}>
          SssYouTube online allows you to download videos easily and it is free
          and safe for you. You can Savefrom YouTube is an amazing site without
          installing any app and without creating an account just copy the URL
          and paste it into the website. This website is supported in many high
          formats like 128kps, 320kp, 64kbps, 96kps, 192kps, 256kps etc. This
          website is easily opened on your mobile phone; Laptop, computer, and
          many touch screens. This is a very fast and safe tool for all the
          users. You can easily Online Downloader videos for many TV shows,
          Movies, Songs, and{" "}
          <Link
            color="blue.500"
            href="https://www.facebook.com/downloader/"
            target="_blank"
          >
            Facebook Video Downloader
          </Link>{" "}
          for free.
        </Text>
        <Text
          as={"h2"}
          fontSize="32px"
          fontWeight="500"
          color="black"
          mb={6}
          textAlign={"left"}
        >
          Web Browsers That Work with the Online YT MP3 & MP4 Downloader
        </Text>
        <Text fontSize="lg" color="black" mb={6} textAlign={"left"}>
          Ssyoutube Online Downloader Converter normally supports modern
          browsers like as Google, Dailymotion, Firefox, and Safari. These
          browsers are the best agreeable with the latest tools and provide
          stable performance for downloading your favorite music’s. This website
          is provided by high-quality and faster music downloader’s. With just a
          few clicks and pressing the Downloader button, your song is
          automatically converted to your favorite converter, like MP3 and MP4,
          with High quality.
        </Text>
      </Box>
    </ChakraProvider>
  );
}
