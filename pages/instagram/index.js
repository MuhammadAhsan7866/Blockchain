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

const InstagramDownloader = () => {
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
              Instagram All-in-One Downloader Online
            </Heading>

            <Box w="100%" maxW="450px" mx="auto">
              <form onSubmit={handleSubmit}>
                <Box position="relative">
                  <Input
                    type="text"
                    placeholder="Paste Instagram Reel URL here"
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
                    {videoData.thumbnail_url ? (
                      <HoverVideoPlayer
                        videoSrc={videoData.video_url}
                        pausedOverlay={
                          <Image
                            src={videoData.thumbnail_url}
                            alt="Instagram Reel Thumbnail"
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
        </Container>

        {/* Info Section */}
        <Container maxW="1240px" py="50px" px="20px">
          <VStack spacing={6} align="start">
            <Text fontSize="lg" color="white">
              <strong>SSSInstagram</strong> is a popular and one of the most
              used social media applications. This platform is used for several
              purposes, including posting and sharing videos, photos, stories,
              highlights, and reels etc. People from all over the world connect.
              It is also one of the most famous social media applications for
              gaining news from all corners of the world. Instagram, despite
              having so many useful features and functions, lacks one of the
              most important features, and that is downloading any video, photo,
              or reel directly to users&apos; devices.{" "}
              <strong>instagram video downloader mod apk</strong> is a software
              created to solve this important issue.
            </Text>

            <Text fontSize="lg" color="white">
              <strong>Instagram Video Downloader</strong> is a safe and secure
              software to help its users download any video from Instagram they
              wish. It works without the assistance of any other software or
              application. Downloading any reel or video through the Instagram
              Video Downloader is a very easy process.
            </Text>

            <Text
              fontSize="xl"
              fontWeight="bold"
              color="#666"
              textAlign="center"
              w="100%"
            >
              Fully Compatible With
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
                Steps Used to Download from Instagram videos
              </Heading>
              <Text mt="40px">
                Downloading videos from Instagram is easy and does not take a
                lot of involved steps.
              </Text>
              <UnorderedList spacing={3} fontSize="18px" color="white">
                <ListItem>
                  Copy the URL of any video, reel, or photo you want to{" "}
                  <strong>download video instagram 2021</strong> from Instagram.
                </ListItem>
                <ListItem>
                  Paste the copied URL in the input area of the Instagram Video
                  Downloader website.
                </ListItem>
                <ListItem>
                  Click the Download button to start the process of
                  downloading.A list of results offering several quality options
                  will appear immediately on your screen. Choose the option you
                  want and download it.
                </ListItem>
                <ListItem>
                  A list of results offering several quality options will appear
                  immediately on your screen. Choose the option you want and
                  download it.
                </ListItem>
              </UnorderedList>
              <Text>
                Instagram Video Downloader is a tool that offers many functions
                that attract its users. It has a user-friendly border and works
                on all screens and browsers. This tool includes useful
                functionality and is simple to use.
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Features Section */}
        <Container maxW="1240px" py="50px">
          <VStack spacing={8}>
            <Heading as="h2" size="lg" textAlign="center">
              Features of SSSInstagram Video Downloader
            </Heading>
            <Text fontSize="lg" color="white" textAlign="left">
              Instagram Video Downloader is one of the most reliable and unique
              software that allows its users to download any content from
              Instagram directly to their devices, whether Android, iOS,
              Computers, or Tablets for free and quickly. Instagram, in spite of
              having many different and important features, lacks this key
              feature of downloading any Video, Photo, Reel, Carousel, IGTV,
              Profile Picture, Story, or Highlights, etc to the user&apos;s device.
              But the download video instagram private came to the rescue. This
              tool downloads videos and other content from Instagram in a few
              simple ways, and it is very safe and secure because it does not
              require any personal data. Instagram Video Downloader is one of
              the most useful creations in the tech world.
            </Text>
            <Text fontSize="lg" color="white">
              The following are some of the most important features of the
              Instagram Video Downloader that make this software the most
              favorite to use.
            </Text>
            <UnorderedList spacing={3} fontSize="lg" color="white">
              <ListItem>
                Instagram Video Downloader is a software that allows its users
                to download any video, photo, album, IGTV,{" "}
                <strong>instagram video download story</strong>, reel, or
                profile picture quickly without consuming time.
              </ListItem>
              <ListItem>
                It offers high-quality downloads of any kind of content from{" "}
                <strong>igram apk download</strong> for example, 2k, 4k, and
                1080p. Any video you wish to download is downloaded in its
                original quality.
              </ListItem>
              <ListItem>
                It works on all devices, whether Android, iOS, Tablet, or PC. It
                does not restrict its users from using the Instagram Video
                Downloader just for the sake of the device. It has an
                easy-to-use connection.
              </ListItem>
              <ListItem>
                It is much protected to use because you do not need to share any
                personal data or information. You also do not need to share
                login details to operate this software. The download history of
                its users is also not saved by Instagram Video Downloader.
              </ListItem>
              <ListItem>
                It works freely, and you do not need to buy any premium version
                or any monthly or annual package. It does not require any
                registration either.
              </ListItem>
              <ListItem>
                Instagram Video Downloader does not need any other third-party
                software or application to operate its functionality. By not
                taking any assistance from other software or applications, we
                left no room to share any data or details of our users with any
                other software or application, and it also helps in maintaining
                storage space.
              </ListItem>
            </UnorderedList>
          </VStack>
        </Container>

        {/* IGram Downloader Section */}
        <Container maxW="1240px" py="50px">
          <VStack spacing={8}>
            <Heading as="h2" size="lg" textAlign="center">
              IGram Downloader – Videos, Photos iGTV Story Saver & Reels
            </Heading>
            <Text fontSize="lg" color="white" textAlign="left">
              You can seamlessly download different forms of content from
              Instagram for free and fast with the original quality, such as
              Videos, Photos, Reels, IGTV, Carousel/ Album, Story, Highlights,
              and Profile Picture.You can download any kind of video from
              Instagram in high resolution easily by using the instagram video
              download online. Both types of videos, singular and multiple, can
              be downloaded without any watermark.Reels have become a popular
              video format today because it is short videos explaining big
              topics without consuming much time. By using our Instagram
              Downloader tool, you can save your favorite{" "}
              <strong>instagram video download reel</strong> on your device for
              free and enjoy it whenever you want.
            </Text>
            <Text fontSize="lg" color="white">
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
            <Text fontSize="lg" color="white">
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
            <Text fontSize="lg" color="white">
              Highlights Downloader By using the Instagram Downloader software,
              Profile Picture you can also download highlights from Instagram
              without any inconvenience. No support from any other software or
              application is required for our software to download anything from
              Instagram.
            </Text>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default InstagramDownloader;
