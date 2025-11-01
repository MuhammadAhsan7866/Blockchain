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
} from "@chakra-ui/react";
import { FaHeart, FaCalendarAlt } from "react-icons/fa";
import DownloadFromOtherWebsites from "../../src/components/app/LandingPage/BannerInstructions";

const FacebookDownloader = () => {
  const [url, setUrl] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

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
      console.log('Facebook API Response:', data);
      
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
    "Experience the best Facebook video downloading with our top-rated tool – completely free.",
    "Download content in your preferred quality: from videos to HD and Full HD resolution.",
    "Perfect compatibility across all devices – grab your favorite videos on desktop or mobile.",
    "Convert Facebook videos with just a few simple clicks using our streamlined platform.",
    "Get lightning-fast downloads and unlimited video access without spending a dime.",
    "Master Facebook downloading with our comprehensive guide and expert tips.",
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
          property="og:title"
          content="Facebook Video Downloader - SnapSave Download Videos Full HD, 1080p, 2k, 4k"
        />
        <meta
          property="og:description"
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
              <Box w="100%" maxW="450px" mx="auto">
                <form onSubmit={handleSubmit}>
                  <Box position="relative">
                    <Input
                      type="text"
                      placeholder="Paste Facebook Reel or Watch URL here"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      bg="white"
                      color="#000"
                      h="49px"
                      px="15px"
                      fontSize="16px"
                      border="none"
                      borderRadius="6px"
                      _focus={{
                        boxShadow: "0 0 0 1px #d32f2f",
                      }}
                      autoFocus
                      autoComplete="off"
                      inputMode="url"
                      autoCapitalize="none"
                    />
                    <Button
                      type="submit"
                      position="absolute"
                      top="5px"
                      right="5px"
                      h="39px"
                      w="80px"
                      bg="#d32f2f"
                      color="white"
                      border="none"
                      borderRadius="4px"
                      fontSize="14px"
                      cursor="pointer"
                      transition="all 0.2s"
                      _hover={{
                        bg: "#b71c1c",
                        transform: "scale(0.96)",
                      }}
                      isLoading={loading}
                      loadingText="..."
                    >
                      Download
                    </Button>
                  </Box>
                </form>
              </Box>

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
                  <Heading as="h3" size="md" color="#333" mb="15px">
                    🎉 Download is Ready!
                  </Heading>
                  
                  {/* Video Metadata Section */}
                  <Box mb="20px" p="15px" bg="rgba(255,255,255,0.1)" borderRadius="8px">
                    <VStack spacing={3} align="start">
                      <Heading as="h4" size="sm" color="#333">
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
                    Click the button below to download your video.
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
          <strong>SnapSave</strong> Facebook Video Downloader is a tool
          designed to download any video and other content from Facebook
          completely free and in high quality. This important feature has
          been proven very significant because it allows users to download
          their favorite videos to watch them later for different purposes,
          such as entertainment and learning. You can seamlessly and
          conveniently download any type of video on any device, whether it
          is Android, iOS, Tablet, or PC. Facebook is one of the most used
          social media platforms, and a large number of people globally have
          been using this application for many years now. Just paste the link and hit <strong>Download</strong> – your video
          will start downloading immediately In Full HD, 1080p, 2k, 4k.
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
          title="Instruction: Downloading Facebook Videos in best quality"
          paragraphs={[
            "How to download Facebook videos using SnapSave? OR Feature:",
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

      {/* Step-by-Step Guide */}
      <Box py={10} maxW="1240px" mx="auto">
        <Text fontSize="32px" fontWeight="500" textAlign="center" mb={8}>
          Leverage Facebook Downloader for Efficient Downloads
        </Text>
        <Flex justify="center" gap={10} flexWrap="wrap" mb={8}>
          <VStack spacing={4}>
            <Text color="black" fontSize="20px" fontWeight={"500"} maxW="360px">
              Finding Your Ideal Facebook Video
            </Text>
            <Image src="/how_can_i_save_1.png" alt="Step 1" />
            <Text textAlign="center" maxW="360px" fontSize={"17px"}>
              Start by exploring to the Facebook video or watch link you want to
              download to ensure a smooth and simple download process.
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Text color="black" fontSize="20px" fontWeight={"500"} maxW="360px">
              Pasting the URL into Search Box
            </Text>
            <Image src="/insert_video_link.png" alt="Step 2" />
            <Text textAlign="center" maxW="360px" fontSize={"17px"}>
              You can download video to your PC by essentially pasting the
              link or copying the URL from Facebook you need to download.
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Text color="black" fontSize="20px" fontWeight={"500"} maxW="360px">
              Download Your Facebook Video Step by Step
            </Text>
            <Image src="/how_can_i_save_3.png" alt="Step 3" />
            <Text textAlign="center" maxW="360px" fontSize={"17px"}>
              We provide fast convert and download Facebook videos in high
              quality. Simply paste a link, pick the format and your video is ready to download.
            </Text>
          </VStack>
        </Flex>
      </Box>

      {/* Additional Features Section */}
      <Container maxW="1240px" py="50px">
        <VStack spacing={8}>
          <Heading as="h2" size="lg" textAlign="center">
            Fast & Easy Downloading Facebook Videos on PC
          </Heading>
          <Text fontSize="lg" color="gray.600" textAlign="left">
            Our free Facebook Video Downloader allows you to download Facebook
            content, for instance, videos, reels, stories, and photos. This
            software is proven to be very useful and helpful for the users.
            Our <strong>FDownloader</strong> downloads videos safely and
            securely. Facebook Reels: Nowadays, they are very trendy. You can
            easily download any{" "}
            <strong>facebook reel video downloader</strong> directly to your
            mobile and computer by using our free facebook video downloader.
          </Text>
          <Text fontSize="lg" color="gray.600">
            Facebook Story: Downloading Facebook Story is a very unique
            feature our software is offering because normally a Facebook Story
            disappears after 24 hours, but saving it to your device allows you
            to keep it with you forever. You can also download any facebook messenger
            download image quickly and in high-quality resolution, and save it
            to your mobile or computer.
          </Text>
          <Text fontSize="lg" color="gray.600">
            Our Facebook Video Downloader helps download different
            content of your choice from Facebook directly and effortlessly to
            your devices. Our Facebook Video Downloader is not only reliable,
            but it is also one of the safest software to use. No registration
            is required to start using our software, and no need to share any
            personal data.
          </Text>
        </VStack>
      </Container>
    </>
  );
};

export default FacebookDownloader;
