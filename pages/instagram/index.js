import React, { useState } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  Input,
  Button,
  VStack,
  Text,
  Alert,
  AlertIcon,
  Flex,
  Image,
  UnorderedList,
  ListItem,
  useToast,
  HStack,
  Icon,
  InputGroup,
  InputRightElement,
  useBreakpointValue,
  OrderedList,
} from "@chakra-ui/react";
import { FaHeart, FaCalendarAlt } from "react-icons/fa";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import DownloadFromOtherWebsites from "../../src/components/app/LandingPage/BannerInstructions";

const InstagramDownloader = () => {
  const [url, setUrl] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Utility function to format date
  const formatDate = (dateString) => {
    if (!dateString) return null;
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return dateString;
    }
  };

  // Utility function to format likes count
  const formatLikes = (likes) => {
    if (!likes) return null;
    if (likes >= 1000000) {
      return `${(likes / 1000000).toFixed(1)}M`;
    } else if (likes >= 1000) {
      return `${(likes / 1000).toFixed(1)}K`;
    }
    return likes.toString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      setError("Please enter a valid Instagram Reel URL.");
      return;
    }

    if (!url.includes("instagram.com/reel")) {
      setError("Please enter a valid Instagram Reel URL.");
      return;
    }

    setLoading(true);
    setError("");
    setVideoData(null);

    try {
      const response = await fetch("/api/instagram-download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      // Debug: Log the received data
      console.log("Instagram API Response:", data);

      if (data.success) {
        setVideoData(data.data);
        console.log("Video data set:", data.data);
        toast({
          title: "Success!",
          description: "Video found and ready for download.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        setError(data.error || "No video found. Please check the link.");
      }
    } catch (err) {
      setError(err.message || "Failed to connect to Instagram API. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const supportedPlatforms = [
    { src: "/android.svg", alt: "Android" },
    { src: "/apple.svg", alt: "iOS" },
    { src: "/windows.svg", alt: "Windows" },
    { src: "/linux.svg", alt: "Linux" },
  ];

  const features = [
    "Copy the URL of any video, reel, or photo you want to download video instagram 2021 from Instagram.",
    "Paste the copied URL in the input area of the Instagram Video Downloader website.",
    "Click the Download button to start the process of downloading.A list of results offering several quality options will appear immediately on your screen. Choose the option you want and download it.",
    "A list of results offering several quality options will appear immediately on your screen. Choose the option you want and download it.",
  ];

  return (
    <>
      <Head>
        <title>
          SSInstagram Download Videos, Photos, Reels, StorySaver & IGTV
        </title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://ss-youtube.cc/download-from-instagram/"
        />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="SSInstagram - Instagram Downloader is Story, Videos, Reels, Profile Pictures, and iGTV in original HD High-Quality Download One click Fast and Free."
        />
        <meta
          property="og:title"
          content="SSInstagram Download Videos, Photos, Reels, StorySaver & IGTV"
        />
        <meta
          property="og:description"
          content="SSInstagram - Instagram Downloader is Story, Videos, Reels, profile pictures, and iGTV in original HD high-quality Download One click Fast and free."
        />
      </Head>

      {/* Banner with Download Input */}
      <Box bg={"#08003A"}>
        <Container maxW="1100px" p={"157px 0px 0px"}>
          <Box p={{ base: "40px 20px", md: "60px 30px 80px" }}>
            <Text
              fontSize={{ base: "24px", md: "30px" }}
              fontWeight="500"
              textAlign="center"
              color="white"
              mb={6}
            >
              Instagram All-in-One Downloader Online
            </Text>

            <VStack spacing={6} textAlign="center">
              <Flex justify="center" w="100%">
                <Box
                  border="1px solid white"
                  py={{ base: "2px", md: "5px" }}
                  px={{ base: "2px", md: "8px" }}
                  w={{ base: "95%", md: "65%" }}
                  bg="white"
                  maxW="700px"
                >
                  <form onSubmit={handleSubmit}>
                    <InputGroup size="md">
                      <Input
                        type="text"
                        placeholder="Paste Instagram Reel URL here"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        color="black"
                        bg="transparent"
                        border="none"
                        borderRadius="0"
                        h={{ base: "40px", md: "52px" }}
                        _placeholder={{ color: "gray.500" }}
                        _focusVisible={{ outline: "none", boxShadow: "none" }}
                        autoFocus
                        autoComplete="off"
                        inputMode="url"
                        autoCapitalize="none"
                      />
                      <InputRightElement
                        width={{ base: "3rem", md: "8.5rem" }}
                        h="100%"
                      >
                        <Button
                          type="submit"
                          aria-label={isMobile ? "Download video" : undefined}
                          h="100%"
                          w="100%"
                          p="0"
                          borderLeftRadius="7px"
                          bg="#DC3545"
                          color="white"
                          fontSize={{ base: "20px", md: "14px" }}
                          _hover={{ bg: "#DC3546" }}
                          isLoading={loading}
                          loadingText="..."
                        >
                          {isMobile ? <ArrowForwardIcon /> : "Download"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </form>
                </Box>
              </Flex>

              {error && (
                <Alert status="error" maxW="500px" mx="auto">
                  <AlertIcon />
                  {error}
                </Alert>
              )}

              {videoData && (
                <Box
                  bg="#003366"
                  borderRadius="10px"
                  p="25px"
                  boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                  maxW="600px"
                  mx="auto"
                  mt="30px"
                >
                  <Heading as="h3" size="md" color="white" mb="15px">
                    🎉 Download is Ready!
                  </Heading>

                  {/* Video Metadata Section */}
                  <Box
                    mb="20px"
                    p="15px"
                    bg="rgba(255,255,255,0.1)"
                    borderRadius="8px"
                  >
                    <VStack spacing={3} align="start">
                      <Heading as="h4" size="sm" color="white">
                        {videoData.title}
                      </Heading>

                      {videoData.description && (
                        <Text fontSize="sm" color="#666" fontStyle="italic">
                          &quot;{videoData.description}&quot;
                        </Text>
                      )}

                      <HStack spacing={4} flexWrap="wrap">
                        {videoData.upload_date && (
                          <HStack spacing={1}>
                            <Icon
                              as={FaCalendarAlt}
                              color="#d32f2f"
                              boxSize="12px"
                            />
                            <Text fontSize="sm" color="#666">
                              {formatDate(videoData.upload_date)}
                            </Text>
                          </HStack>
                        )}

                        {videoData.likes && (
                          <HStack spacing={1}>
                            <Icon as={FaHeart} color="#d32f2f" boxSize="12px" />
                            <Text fontSize="sm" color="#666">
                              {formatLikes(videoData.likes)} likes
                            </Text>
                          </HStack>
                        )}
                      </HStack>
                    </VStack>
                  </Box>

                  <Text color="#555" mb="15px">
                    Click the button below to download your Instagram Reel.
                  </Text>

                  {/* Video Preview Section */}
                  <Box mb="20px">
                    <Text
                      color="#555"
                      mb="10px"
                      fontSize="14px"
                      fontWeight="bold"
                    >
                      Video Preview:
                    </Text>
                    <Box
                      borderRadius="8px"
                      overflow="hidden"
                      boxShadow="0 2px 8px rgba(0,0,0,0.2)"
                      maxW="400px"
                      mx="auto"
                    >
                      <Box position="relative">
                        <video
                          src={videoData.video_url}
                          controls
                          poster={videoData.thumbnail_url}
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "8px",
                          }}
                          preload="metadata"
                        />
                        {!videoData.thumbnail_url && (
                          <Box
                            position="absolute"
                            top="10px"
                            right="10px"
                            bg="rgba(0,0,0,0.7)"
                            color="white"
                            px="8px"
                            py="4px"
                            borderRadius="4px"
                            fontSize="12px"
                          >
                            Preview
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Box>

                  <Button
                    as="a"
                    href={videoData.download_url}
                    download={`instagram_reel_${Date.now()}.mp4`}
                    bg="#d32f2f"
                    color="white"
                    px="30px"
                    py="12px"
                    borderRadius="6px"
                    fontWeight="bold"
                    textDecoration="none"
                    _hover={{
                      bg: "#b71c1c",
                      textDecoration: "none",
                    }}
                  >
                    ⬇️ Download Reel Now
                  </Button>
                  <Text mt="15px" fontSize="14px" color="#666">
                    Source:{" "}
                    <Button
                      as="a"
                      href={videoData.source}
                      target="_blank"
                      variant="link"
                      color="#d32f2f"
                      fontSize="14px"
                      p="0"
                      h="auto"
                    >
                      View on Instagram
                    </Button>
                  </Text>
                </Box>
              )}
            </VStack>
          </Box>
        </Container>
      </Box>

      {/* Description Section */}
      <Container maxW="1240px" py={"50px"}>
        <Text fontSize="lg" color="gray.600" mb={6}>
          SSSInstagram is a popular and one of the most used social media
          applications. This platform is used for several purposes, including
          posting and sharing videos, photos, stories, highlights, and reels
          etc. People from all over the world connect. It is also one of the
          most famous social media applications for gaining news from all
          corners of the world. Instagram, despite having so many useful
          features and functions, lacks one of the most important features, and
          that is downloading any video, photo, or reel directly to users&apos;
          devices. instagram video downloader mod apk is a software created to
          solve this important issue.
        </Text>
        <Text fontSize="lg" color="gray.600" mb={6}>
          Instagram Video Downloader is a safe and secure software to help its
          users download any video from Instagram they wish. It works without
          the assistance of any other software or application. Downloading any
          reel or video through the Instagram Video Downloader is a very easy
          process.
        </Text>

        <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign={"center"}>
          Fully Compatible With
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

      {/* Instructions Section */}
      <Box bg="#08003A" color="white" py={"50px"} px={6}>
        <DownloadFromOtherWebsites
          title="Steps Used to Download from Instagram videos"
          paragraphs={[
            "Downloading videos from Instagram is easy and does not take a lot of involved steps.",
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
            <Text mt={"15px"} color={"white"}>
              Instagram Video Downloader is a tool that offers many functions
              that attract its users. It has a user-friendly border and works on
              all screens and browsers. This tool includes useful functionality
              and is simple to use.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Additional Features Section */}
      <Container maxW="1240px" py="50px">
        <VStack spacing={8}>
          <Heading as="h2" size="lg" textAlign="center">
            Features of SSSInstagram Video Downloader
          </Heading>
          <Text fontSize="lg" color="gray.600" textAlign="left">
            Instagram Video Downloader is one of the most reliable and unique
            software that allows its users to download any content from
            Instagram directly to their devices, whether Android, iOS,
            Computers, or Tablets for free and quickly. Instagram, in spite of
            having many different and important features, lacks this key feature
            of downloading any Video, Photo, Reel, Carousel, IGTV, Profile
            Picture, Story, or Highlights, etc to the user&apos;s device. But the
            download video instagram private came to the rescue. This tool
            downloads videos and other content from Instagram in a few simple
            ways, and it is very safe and secure because it does not require any
            personal data. Instagram Video Downloader is one of the most useful
            creations in the tech world.
          </Text>
          <Text fontSize="lg" color="gray.600" textAlign="left">
            The following are some of the most important features of the
            Instagram Video Downloader that make this software the most favorite
            to use.
          </Text>
          <OrderedList mt={"20px"}>
            <ListItem mt={"10px"}>
              Instagram Video Downloader is a software that allows its users to
              download any video, photo, album, IGTV, instagram video download
              story, reel, or profile picture quickly without consuming time. It
              offers high-quality downloads of any kind of content from igram
              apk download for example, 2k, 4k, and 1080p. Any video you wish to
              download is downloaded in its original quality.
            </ListItem>
            <ListItem mt={"10px"}>
              It works on all devices, whether Android, iOS, Tablet, or PC. It
              does not restrict its users from using the Instagram Video
              Downloader just for the sake of the device. It has an easy-to-use
              connection.
            </ListItem>
            <ListItem mt={"10px"}>
              It is much protected to use because you do not need to share any
              personal data or information. You also do not need to share login
              details to operate this software. The download history of its
              users is also not saved by Instagram Video Downloader. It works
              freely, and you do not need to buy any premium version or any
              monthly or annual package. It does not require any registration
              either.
            </ListItem>
            <ListItem mt={"10px"}>
              Instagram Video Downloader does not need any other third-party
              software or application to operate its functionality. By not
              taking any assistance from other software or applications, we left
              no room to share any data or details of our users with any other
              software or application, and it also helps in maintaining storage
              space.
            </ListItem>
          </OrderedList>
          <Heading as="h2" size="lg" textAlign="center">
            IGram Downloader – Videos, Photos iGTV Story Saver & Reels
          </Heading>
          <Text fontSize="lg" color="gray.600">
            You can seamlessly download different forms of content from
            Instagram for free and fast with the original quality, such as
            Videos, Photos, Reels, IGTV, Carousel/ Album, Story, Highlights, and
            Profile Picture.You can download any kind of video from Instagram in
            high resolution easily by using the instagram video download online.
            Both types of videos, singular and multiple, can be downloaded
            without any watermark.Reels have become a popular video format today
            because it is short videos explaining big topics without consuming
            much time. By using our Instagram Downloader tool, you can save your
            favorite instagram video download reel on your device for free and
            enjoy it whenever you want.
          </Text>
          <Text fontSize="lg" color="gray.600">
            Downloading any photo directly to your device is not a big or
            difficult task using the Instagram Downloader tool. You can download
            a simple image of your choice, and similarly, you can download
            multiple images from carousels without compromising on their
            quality. IGTV Downloader Everyone can&apos;t watch a long video in one
            sitting; they need software that can help them download their
            favorite video to watch later. IGTV is a type of long video that
            cannot be seen in a single sitting for everyone, so our Instagram
            Downloader helps in this case to download your favorite video and
            watch it later offline
          </Text>
          <Text fontSize="lg" color="gray.600">
            Instagram provides its users with a feature of sharing mixed content
            consisting of multiple instagram profile picture download and
            videos, which is known as carousel posts, also known as gallery
            posts or album posts. In order to free and secure downloading of
            carousel posts, our Instagram Downloader tool is the best option.You
            can easily download any Instagram story and save it to your device.
            Instagram Story normally expires after 24/7 hours, but you can
            safely download it and view it every time you want.
          </Text>
          <Text fontSize="lg" color="gray.600">
            Highlights Downloader By using the Instagram Downloader software,
            Profile Picture you can also download highlights from Instagram
            without any inconvenience. No support from any other software or
            application is required for our software to download anything from
            Instagram.
          </Text>
        </VStack>
      </Container>
    </>
  );
};

export default InstagramDownloader;
