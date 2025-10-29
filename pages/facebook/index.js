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
  Spinner,
  HStack,
  Icon,
  Divider,
} from "@chakra-ui/react";
import HoverVideoPlayer from "react-hover-video-player";
import { FaHeart, FaCalendarAlt, FaUser } from "react-icons/fa";

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

      {/* Search box */}
      <Box bg="#08003A" minH="100vh">
        <Container maxW="1100px" py="110px">
          <VStack spacing={8} textAlign="center">
            <Heading
              as="h1"
              size="xl"
              color="white"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
            >
              Facebook Video Downloader HD
            </Heading>

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
                        "{videoData.description}"
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
                    {videoData.thumbnail_url ? (
                      <HoverVideoPlayer
                        videoSrc={videoData.video_url}
                        pausedOverlay={
                          <Image
                            src={videoData.thumbnail_url}
                            alt="Facebook Video Thumbnail"
                            w="100%"
                            h="auto"
                            objectFit="cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              // Show fallback when thumbnail fails
                              const fallbackDiv = e.target.nextSibling;
                              if (fallbackDiv) {
                                fallbackDiv.style.display = 'flex';
                              }
                            }}
                          />
                        }
                        loadingOverlay={
                          <Box
                            bg="#f0f0f0"
                            w="100%"
                            h="200px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Spinner size="lg" color="#d32f2f" />
                          </Box>
                        }
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                        }}
                      />
                    ) : (
                      // Fallback: Show video directly without thumbnail
                      <Box position="relative">
                        <video
                          src={videoData.video_url}
                          controls
                          style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                          }}
                          preload="metadata"
                        />
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
                      </Box>
                    )}
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
        </Container>

        {/* Info Section */}
        <Container maxW="1240px" py="50px" px="20px">
          <VStack spacing={6} align="start">
            <Text fontSize="lg" color="white">
              <strong>SnapSave</strong> Facebook Video Downloader is a tool
              designed to download any video and other content from Facebook
              completely free and in high quality. This important feature has
              been proven very significant because it allows users to download
              their favorite videos to watch them later for different purposes,
              such as entertainment and learning. You can seamlessly and
              conveniently download any type of video on any device, whether it
              is Android, iOS, Tablet, or PC. Facebook is one of the most used
              social media platforms, and a large number of people globally have
              been using this application for many years now. Introducing the
              free facebook video downloader online software is very beneficial
              for Facebook users.
            </Text>

            <Text fontSize="lg" color="white">
              Just paste the link and hit <strong>Download</strong> – your video
              will start downloading immediately In Full HD, 1080p, 2k, 4k.
            </Text>

            <Text
              fontSize="xl"
              fontWeight="bold"
              color="#666"
              textAlign="center"
              w="100%"
            >
              Facebook Video Downloader - Save FB Stories & Videos
            </Text>

            <Flex justify="center" gap="15px" flexWrap="wrap" w="100%">
              {supportedPlatforms.map((platform) => (
                <Image
                  key={platform.alt}
                  src={platform.src}
                  alt={platform.alt}
                  boxSize="150px"
                />
              ))}
            </Flex>
          </VStack>
        </Container>

        {/* Steps Section */}
        <Box bg="#08003A" color="white" py="50px" px="10px">
          <Container maxW="1240px">
            <VStack spacing={6}>
              <Heading as="h2" size="lg" textAlign="center" color="white">
                How to Downloading Facebook Videos
              </Heading>
              <Text>
                fb status downloaded on your mobile device is a straightforward
                process.
              </Text>
              <UnorderedList spacing={3} fontSize="18px" color="white">
                <ListItem>
                  First of all, you need to find a particular video on the
                  Facebook app that you want to download.
                </ListItem>
                <ListItem>
                  Open the menu by tapping a video and click on the Share
                  option. Copy the link of a video.
                </ListItem>
                <ListItem>
                  Paste the fb link download into the input field of our free{" "}
                  <strong>Facebook Video Downloader</strong> website.
                </ListItem>
                <ListItem>
                  To start downloading a video, you need to select a format in
                  which you want to convert your video, for example, MP3, MP4,
                  AVI, WMA, AAC, and HD etc. Click the download button to start
                  downloading a video
                </ListItem>
              </UnorderedList>
            </VStack>
          </Container>
        </Box>

        {/* Features Section */}
        <Container maxW="1240px" py="50px">
          <VStack spacing={8}>
            <Heading as="h2" size="lg" textAlign="center">
              Fast & Easy Downloading Facebook Videos on PC
            </Heading>
            <Text fontSize="lg" color="white" textAlign="left">
              Our free fb profile pic download is a reliable video downloading
              tool that allows users to download any Facebook video quickly,
              easily, and conveniently. You can convert video to the format of
              your choice, such as MP3, MP4, AVI, WMA, and AAC. It has a
              user-friendly interface, and it works on all devices, for
              instance, Android, iOS, Tablets, and PC etc.{" "}
              <strong>Fb video downloader</strong> is one of the best software
              programs that does not require any software or application to
              operate. It is effortless to use and consists of simple steps of
              downloading.
            </Text>
            <Text fontSize="lg" color="white">
              Facebook Video Downloader is a tool that allows you to download
              any video from Facebook directly and quickly to your computer
              without the assistance of any other software or application.
            </Text>
            <Text fontSize="lg" color="white">
              The following are some of the most important features of the
              Instagram Video Downloader that make this software the most
              favorite to use.
            </Text>
            <UnorderedList spacing={3} fontSize="lg" color="white">
              <ListItem>
                Find the link to a video you want to download from Facebook.
              </ListItem>
              <ListItem>Copy the link of a video.</ListItem>
              <ListItem>
                Paste the link of the video into the text box of our free
                Facebook Video Downloader website.
              </ListItem>
              <ListItem>
                Press the download button after choosing your favorite format to
                start downloading.
              </ListItem>
            </UnorderedList>
          </VStack>
        </Container>

        {/* Additional Features Section */}
        <Container maxW="1240px" py="50px">
          <VStack spacing={8}>
            <Heading as="h2" size="lg" textAlign="center">
              Fast & easy Downloading Facebook Videos on PC
            </Heading>
            <Text fontSize="lg" color="white" textAlign="left">
              Our free Facebook Video Downloader allows you to download Facebook
              content, for instance, videos, reels, stories, and photos. This
              software is proven to be very useful and helpful for the users.
              Our <strong>FDownloader</strong> downloads videos safely and
              securely. Facebook Reels: Nowadays, they are very trendy. You can
              easily download any{" "}
              <strong>facebook reel video downloader</strong> directly to your
              mobile and computer by using our free facebook video downloader.
            </Text>
            <Text fontSize="lg" color="white">
              Facebook Story: Downloading Facebook Story is a very unique
              feature our software is offering because normally a Facebook Story
              disappears after 24 hours, but saving it to your device allows you
              to keep it with you forever.
            </Text>
            <Text fontSize="lg" color="white">
              Facebook Image: You can also download any facebook messenger
              download image quickly and in high-quality resolution, and save it
              to your mobile or computer. Facebook Private Videos: Facebook
              Video Downloader enables its users to download private videos as
              well. Our Facebook Video Downloader helps download different
              content of your choice from Facebook directly and effortlessly to
              your devices. Our Facebook Video Downloader is not only reliable,
              but it is also one of the safest software to use. No registration
              is required to start using our software, and no need to share any
              personal data.
            </Text>
          </VStack>
        </Container>

        {/* Why Choose Section */}
        <Container maxW="1240px" py="50px">
          <VStack spacing={8}>
            <Heading as="h3" size="lg" textAlign="center">
              Why choose our Free Facebook Video Downloader?
            </Heading>
            <Text fontSize="lg" color="white" textAlign="left">
              There are many different software and applications available to
              download a Facebook video downloader, but our unique and
              convenient features and functions make our Facebook Video
              Downloader special and the best among others. Below are some of
              the promising features and functions of our free Facebook Video
              Downloader mentioned?
            </Text>
            <UnorderedList spacing={3} fontSize="lg" color="white">
              <ListItem>
                <strong>Fast and Easy Process</strong>
                <Text fontSize="md" mt="2">
                  Our Facebook Video Downloader works fast and does not consume
                  much time. It also consists of simple and easy steps to
                  download any Facebook video directly to your device.
                </Text>
              </ListItem>
              <ListItem>
                <strong>Free-to-use Software</strong>
                <Text fontSize="md" mt="2">
                  It does not ask its users to buy any premium version or charge
                  any monthly or annual fee to access its functions. Our
                  Facebook Video Downloader is free software to use.
                </Text>
              </ListItem>
              <ListItem>
                <strong>No Need for an Account</strong>
                <Text fontSize="md" mt="2">
                  To take the benefits from this Facebook Video Downloader, you
                  do not need a fb account. You can download any video, reel,
                  story, or photo from Facebook without signing up for an
                  account.
                </Text>
              </ListItem>
              <ListItem>
                <strong>Works on all Devices</strong>
                <Text fontSize="md" mt="2">
                  Our <strong>fb video downloader apk</strong> works on all
                  devices, whether it is Android, iOS, Tablets, or Computers. No
                  need for a specific device to use our Video Downloader
                  software. It has a very smooth interface.
                </Text>
              </ListItem>
              <ListItem>
                <strong>Offers High-quality resolution</strong>
                <Text fontSize="md" mt="2">
                  Downloading a video with a good quality resolution is very
                  necessary because destroying the quality of a video makes it
                  less enjoyable and useful. You can download any Facebook video
                  through our free <strong>facebook video downloader</strong>{" "}
                  app in a high-quality resolution, such as 4k, 8k, QHD, HD, and
                  1080p.
                </Text>
              </ListItem>
              <ListItem>
                <strong>Multiple Formats and Private Videos</strong>
                <Text fontSize="md" mt="2">
                  It also offers multiple format options when you download a
                  video through our free Facebook Video Downloader, for example,
                  MP3, MP4, AVI, WMA, and AAC.Our Facebook Video downloader also
                  downloads Facebook private videos by following simple steps,
                  and only if you have reasonable access.
                </Text>
              </ListItem>
            </UnorderedList>
          </VStack>
        </Container>

        {/* Reasons Section */}
        <Container maxW="1240px" py="50px">
          <VStack spacing={8}>
            <Heading as="h3" size="lg" textAlign="center">
              Reasons for using Facebook Video Downloader
            </Heading>
            <Text fontSize="lg" color="white" textAlign="left">
              <strong>Watching Offline</strong> You can save your favorite
              videos directly to your device and enjoy watching them later. You
              will have access to that particular video even if the downloaded
              video is deleted permanently from the source.{" "}
              <strong>Learning and Entertainment:</strong> Saving useful videos
              from <strong>fb photo download</strong> to learn something from
              them, as a motivation or educational purpose, is helpful. You can
              use them for entertainment purposes as well.
              <strong>Reposting and Re-sharing a Video</strong> A downloaded
              Facebook video can be reposted and re-shared on multiple social
              media platforms such as Instagram, YouTube, TikTok, and Facebook.
            </Text>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default FacebookDownloader;
