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
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
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
      console.log('Instagram API Response:', data);
      
      if (data.success) {
        setVideoData(data.data);
        console.log('Video data set:', data.data);
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
    "Experience the best Instagram video downloading with our top-rated tool – completely free.",
    "Download content in your preferred quality: from videos to photos, standard to Full HD resolution.",
    "Perfect compatibility across all devices – grab your favorite content on desktop or mobile.",
    "Convert Instagram videos with just a few simple clicks using our streamlined platform.",
    "Get lightning-fast downloads and unlimited content access without spending a dime.",
    "Master Instagram downloading with our comprehensive guide and expert tips.",
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
                      <InputRightElement width={{ base: "3rem", md: "8.5rem" }} h="100%">
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
                  <Box mb="20px" p="15px" bg="rgba(255,255,255,0.1)" borderRadius="8px">
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
                            <Icon as={FaCalendarAlt} color="#d32f2f" boxSize="12px" />
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
                    <Text color="#555" mb="10px" fontSize="14px" fontWeight="bold">
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
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
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
        <Heading
          as="h1"
          size="xl"
          mb={8}
          display={{ base: "none", md: "block" }}
          textAlign={"center"}
        >
          Best Quality Instagram Video or Photo Downloader
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={6}>
          <strong>SSSInstagram</strong> is a popular and one of the most
          used social media applications. This platform is used for several
          purposes, including posting and sharing videos, photos, stories,
          highlights, and reels etc. People from all over the world connect.
          It is also one of the most famous social media applications for
          gaining news from all corners of the world. Instagram, despite
          having so many useful features and functions, lacks one of the
          most important features, and that is downloading any video, photo,
          or reel directly to users&apos; devices.{" "}
          <strong>Instagram Video Downloader</strong> is a safe and secure
          software to help its users download any video from Instagram they
          wish. It works without the assistance of any other software or
          application. Downloading any reel or video through the Instagram
          Video Downloader is a very easy process.
        </Text>

        <Text
          fontSize="2xl"
          fontWeight="bold"
          mb={6}
          textAlign={"center"}
        >
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

      {/* Instructions Section */}
      <Box bg="#08003A" color="white" py={"50px"} px={6}>
        <DownloadFromOtherWebsites
          title="Instruction: Downloading Instagram Videos or Photos in best quality"
          paragraphs={[
            "How to download Instagram videos, reels, photos, and stories using SSSInstagram? OR Feature:",
          ]}
          exampleLinkText="instagram.com/p/xxxxxxxxx/"
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

      {/* Step-by-Step Guide */}
      <Box py={10} maxW="1240px" mx="auto">
        <Text fontSize="32px" fontWeight="500" textAlign="center" mb={8}>
          Leverage Instagram Downloader for Efficient Downloads
        </Text>
        <Flex justify="center" gap={10} flexWrap="wrap" mb={8}>
          <VStack spacing={4}>
            <Text color="black" fontSize="20px" fontWeight={"500"} maxW="360px">
              Finding Your Ideal Instagram Video or Photo
            </Text>
            <Image src="/how_can_i_save_1.png" alt="Step 1" />
            <Text textAlign="center" maxW="360px" fontSize={"17px"}>
              Start by exploring to the Instagram post, reel, or photo you want to
              download to ensure a smooth and simple download process.
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Text color="black" fontSize="20px" fontWeight={"500"} maxW="360px">
              Pasting the URL into Search Box
            </Text>
            <Image src="/insert_video_link.png" alt="Step 2" />
            <Text textAlign="center" maxW="360px" fontSize={"17px"}>
              You can download content to your PC by essentially pasting the
              link or copying the URL from the post you need to download.
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Text color="black" fontSize="20px" fontWeight={"500"} maxW="360px">
              Download Your Instagram Content Step by Step
            </Text>
            <Image src="/how_can_i_save_3.png" alt="Step 3" />
            <Text textAlign="center" maxW="360px" fontSize={"17px"}>
              We provide fast convert and download Instagram content in high
              quality. Simply paste a link, pick the format and your content is ready to download.
            </Text>
          </VStack>
        </Flex>
      </Box>

      {/* Additional Features Section */}
      <Container maxW="1240px" py="50px">
        <VStack spacing={8}>
          <Heading as="h2" size="lg" textAlign="center">
            IGram Downloader – Videos, Photos iGTV Story Saver & Reels
          </Heading>
          <Text fontSize="lg" color="gray.600" textAlign="left">
            You can seamlessly download different forms of content from
            Instagram for free and fast with the original quality, such as
            Videos, Photos, Reels, IGTV, Carousel/ Album, Story, Highlights,
            and Profile Picture. You can download any kind of video from
            Instagram in high resolution easily by using the instagram video
            download online. Both types of videos, singular and multiple, can
            be downloaded without any watermark. Reels have become a popular
            video format today because it is short videos explaining big
            topics without consuming much time. By using our Instagram
            Downloader tool, you can save your favorite{" "}
            <strong>instagram video download reel</strong> on your device for
            free and enjoy it whenever you want.
          </Text>
          <Text fontSize="lg" color="gray.600">
            Downloading any photo directly to your device is not a big or
            difficult task using the Instagram Downloader tool. You can
            download a simple image of your choice, and similarly, you can
            download multiple images from carousels without compromising on
            their quality. <strong>IGTV Downloader</strong> Everyone can&apos;t
            watch a long video in one sitting; they need software that can
            help them download their favorite video to watch later. IGTV is a
            type of long video that cannot be seen in a single sitting for
            everyone, so our Instagram Downloader helps in this case to
            download your favorite video and watch it later offline
          </Text>
          <Text fontSize="lg" color="gray.600">
            Instagram provides its users with a feature of sharing mixed
            content consisting of multiple instagram profile picture download
            and videos, which is known as carousel posts, also known as
            gallery posts or album posts. In order to free and secure
            downloading of carousel posts, our Instagram Downloader tool is
            the best option.You can easily download any Instagram story and
            save it to your device. Instagram Story normally expires after
            24/7 hours, but you can safely download it and view it every time
            you want.
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
