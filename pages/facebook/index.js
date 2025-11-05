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

const FacebookDownloader = () => {
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
      setError("Please enter a valid Facebook video URL.");
      return;
    }

    if (!url.includes("facebook.com") && !url.includes("fb.watch")) {
      setError("Please enter a valid Facebook video URL.");
      return;
    }

    setLoading(true);
    setError("");
    setVideoData(null);

    try {
      const response = await fetch("/api/facebook-download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      // Debug: Log the received data
      console.log("Facebook API Response:", data);

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
      setError(err.message || "Failed to connect to Facebook API. Try again.");
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
    "First of all, you need to find a particular video on the Facebook app that you want to download.",
    "Open the menu by tapping a video and click on the Share option. Copy the link of a video.",
    "Paste the fb link download into the input field of our free Facebook Video Downloader website.",
    "To start downloading a video, you need to select a format in which you want to convert your video, for example, MP3, MP4, AVI, WMA, AAC, and HD etc. Click the download button to start downloading a video",
  ];

  return (
    <>
      <Head>
        <title>
          Facebook Video Downloader - SnapSave Download Videos Full HD, 1080p,
          2k, 4k
        </title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://ss-youtube.cc/download-from-facebook/"
        />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="SaveFrom your favorite Facebook videos Downloader through with FB videos in HD result 2K, 4K (mp4)."
        />
        <meta
          name="keywords"
          content="facebook video downloader, facebook downloader, download facebook videos, fb video downloader, facebook video saver, download facebook reels, facebook watch downloader"
        />
        <meta name="author" content="SSYouTube" />
        <meta
          property="og:title"
          content="Facebook Video Downloader - SnapSave Download Videos Full HD, 1080p, 2k, 4k"
        />
        <meta
          property="og:description"
          content="SaveFrom your favorite Facebook videos Downloader through with FB videos in HD result 2K, 4K (mp4)."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Facebook Video Downloader - SnapSave Download Videos Full HD, 1080p, 2k, 4k"
        />
        <meta
          name="twitter:description"
          content="SaveFrom your favorite Facebook videos Downloader through with FB videos in HD result 2K, 4K (mp4)."
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
              Facebook Video Downloader HD
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
                        placeholder="Paste Facebook Reel or Watch URL here"
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

                  <Text color="white" mb="15px">
                    Click the button below to download your video.
                  </Text>

                  {/* Video Preview Section */}
                  <Box mb="20px">
                    <Text
                      color="white"
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
                    download={`facebook_video_${Date.now()}.mp4`}
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
                    ⬇️ Download Video Now
                  </Button>
                  <Text mt="15px" fontSize="14px" color="white">
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
                      View on Facebook
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
        <Heading
          as="h1"
          size="xl"
          mb={8}
          display={{ base: "none", md: "block" }}
          textAlign={"center"}
        >
          Best Quality Facebook Video Downloader
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={6}>
          <strong>SnapSave</strong> Facebook Video Downloader is a tool designed
          to download any video and other content from Facebook completely free
          and in high quality. This important feature has been proven very
          significant because it allows users to download their favorite videos
          to watch them later for different purposes, such as entertainment and
          learning. You can seamlessly and conveniently download any type of
          video on any device, whether it is Android, iOS, Tablet, or PC.
          Facebook is one of the most used social media platforms, and a large
          number of people globally have been using this application for many
          years now. Just paste the link and hit <strong>Download</strong> –
          your video will start downloading immediately In Full HD, 1080p, 2k,
          4k.
        </Text>

        <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign={"center"}>
          Facebook Video Downloader - Save FB Stories & Videos
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
          title="How to Downloading Facebook Videos"
          paragraphs={[
            "fb status downloaded on your mobile device is a straightforward process.",
          ]}
          exampleLinkText="facebook.com/watch?v=xxxxxxxxx"
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

      {/* Additional Features Section */}
      <Container maxW="1240px" py="50px">
        <VStack spacing={8}>
          <Heading as="h2" size="lg" textAlign="center">
            Fast & Easy Downloading Facebook Videos on PC
          </Heading>
          <Text fontSize="lg" color="gray.600" textAlign="left">
            Our free fb profile pic download is a reliable video downloading
            tool that allows users to download any Facebook video quickly,
            easily, and conveniently. You can convert video to the format of
            your choice, such as MP3, MP4, AVI, WMA, and AAC. It has a
            user-friendly interface, and it works on all devices, for instance,
            Android, iOS, Tablets, and PC etc. Fb video downloader is one of the
            best software programs that does not require any software or
            application to operate. It is effortless to use and consists of
            simple steps of downloading.
          </Text>
          <Text fontSize="lg" color="gray.600">
            Facebook Video Downloader is a tool that allows you to download any
            video from Facebook directly and quickly to your computer without
            the assistance of any other software or application.
          </Text>
          <Text fontSize="lg" color="gray.600">
            The following are some of the most important features of the
            Instagram Video Downloader that make this software the most favorite
            to use.
            <OrderedList>
              <ListItem>
                Find the link to a video you want to download from Facebook.
                Copy the link of a video
              </ListItem>
              <ListItem>
                Paste the link of the video into the text box of our free
                Facebook Video Downloader website.
              </ListItem>
              <ListItem>
                Press the download button after choosing your favorite format to
                start downloading.
              </ListItem>
            </OrderedList>
          </Text>
        </VStack>
        <VStack spacing={8}>
          <Heading as="h2" size="lg" textAlign="center" mt={"50px"}>
            Fast & easy Downloading Facebook Videos on PC
          </Heading>
          <Text fontSize="lg" color="gray.600" textAlign="left">
            Our free Facebook Video Downloader allows you to download Facebook
            content, for instance, videos, reels, stories, and photos. This
            software is proven to be very useful and helpful for the users. Our
            FDownloader downloads videos safely and securely. Facebook Reels:
            Nowadays, they are very trendy. You can easily download any facebook
            reel video downloader directly to your mobile and computer by using
            our free facebook video downloader.
          </Text>
          <Text fontSize="lg" color="gray.600">
            Facebook Video Downloader is a tool that allows you to download any
            video from Facebook directly and quickly to your computer without
            the assistance of any other software or application.
          </Text>
          <Text fontSize="lg" color="gray.600">
            Facebook Story: Downloading Facebook Story is a very unique feature
            our software is offering because normally a Facebook Story
            disappears after 24 hours, but saving it to your device allows you
            to keep it with you forever.
          </Text>
          <Text fontSize="lg" color="gray.600">
            Facebook Image: You can also download any facebook messenger
            download image quickly and in high-quality resolution, and save it
            to your mobile or computer. Facebook Private Videos: Facebook Video
            Downloader enables its users to download private videos as well. Our
            Facebook Video Downloader helps download different content of your
            choice from Facebook directly and effortlessly to your devices. Our
            Facebook Video Downloader is not only reliable, but it is also one
            of the safest software to use. No registration is required to start
            using our software, and no need to share any personal data.
          </Text>
        </VStack>

        <VStack spacing={8}>
          <Heading as="h2" size="lg" textAlign="center" mt={"50px"}>
            Why choose our Free Facebook Video Downloader?
          </Heading>

          <Text fontSize="lg" color="gray.600">
            There are many different software and applications available to
            download a Facebook video downloader, but our unique and convenient
            features and functions make our Facebook Video Downloader special
            and the best among others. Below are some of the promising features
            and functions of our free Facebook Video Downloader mentioned?
            <OrderedList mt={"20px"}>
              <ListItem mt={"10px"}>
                Fast and Easy Process Our Facebook Video Downloader works fast
                and does not consume much time. It also consists of simple and
                easy steps to download any Facebook video directly to your
                device.
              </ListItem>
              <ListItem mt={"10px"}>
                Free-to-use Software It does not ask its users to buy any
                premium version or charge any monthly or annual fee to access
                its functions. Our Facebook Video Downloader is free software to
                use.
              </ListItem>
              <ListItem mt={"10px"}>
                No Need for an Account To take the benefits from this Facebook
                Video Downloader, you do not need a fb account. You can download
                any video, reel, story, or photo from Facebook without signing
                up for an account.
              </ListItem>
              <ListItem mt={"10px"}>
                Works on all Devices Our fb video downloader apk works on all
                devices, whether it is Android, iOS, Tablets, or Computers. No
                need for a specific device to use our Video Downloader software.
                It has a very smooth interface.
              </ListItem>
              <ListItem mt={"10px"}>
                Offers High-quality resolution Downloading a video with a good
                quality resolution is very necessary because destroying the
                quality of a video makes it less enjoyable and useful. You can
                download any Facebook video through our free facebook video
                downloader app in a high-quality resolution, such as 4k, 8k,
                QHD, HD, and 1080p.
              </ListItem>
              <ListItem mt={"10px"}>
                Multiple Formats and Private Videos It also offers multiple
                format options when you download a video through our free
                Facebook Video Downloader, for example, MP3, MP4, AVI, WMA, and
                AAC.Our Facebook Video downloader also downloads Facebook
                private videos by following simple steps, and only if you have
                reasonable access.
              </ListItem>
            </OrderedList>
          </Text>
        </VStack>
        <VStack spacing={8}>
          <Heading as="h2" size="lg" textAlign="center" mt={"50px"}>
            Reasons for using Facebook Video Downloader
          </Heading>

          <Text fontSize="lg" color="gray.600">
            Watching Offline You can save your favorite videos directly to your
            device and enjoy watching them later. You will have access to that
            particular video even if the downloaded video is deleted permanently
            from the source. Learning and Entertainment: Saving useful videos
            from fb photo download to learn something from them, as a motivation
            or educational purpose, is helpful. You can use them for
            entertainment purposes as well.Reposting and Re-sharing a Video A
            downloaded Facebook video can be reposted and re-shared on multiple
            social media platforms such as Instagram, YouTube, TikTok, and
            Facebook.
          </Text>
        </VStack>
      </Container>
    </>
  );
};

export default FacebookDownloader;
