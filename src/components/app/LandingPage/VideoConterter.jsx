"use client";

import { useState } from "react";
import {
  VStack,
  Input,
  Button,
  Text,
  Box,
  Flex,
  InputGroup,
  InputRightElement,
  useBreakpointValue,
  Img,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import IframeResizer from "./IframeResizer";

const VideoConverter = () => {
  const [url, setUrl] = useState("");
  const [iframeSrc, setIframeSrc] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleSearch = () => {
    if (!url.trim()) {
      alert("Please enter a YouTube URL or search term.");
      return;
    }

    const videoIdMatch = url.match(
      /(?:v=|\/embed\/|youtu\.be\/|\/shorts\/)([a-zA-Z0-9_-]{11})/
    );

    if (videoIdMatch && videoIdMatch[1]) {
      const videoId = videoIdMatch[1];
      const finalUrl = `https://www.youtube.com/watch?v=${videoId}`;
      setUrl(finalUrl);
      setIframeSrc(
        `https://loader.to/api/card2/?url=${finalUrl}&adUrl=https://myAdurl.com`
      );
      setDownloadUrl(
        `https://loader.to/api/button/?url=${finalUrl}&format=mp4`
      );
    } else {
      const encodedQuery = encodeURIComponent(url);
      setIframeSrc(`https://apiyoutube.cc/?q=${encodedQuery}&color=1c1c1c`);
      setDownloadUrl(
        `https://loader.to/api/button/?url=${encodedQuery}&format=mp4`
      );
    }
  };

  return (
    <Box p={{ base: "40px 20px", md: "60px 30px 80px" }}>
      <Text
        fontSize={{ base: "24px", md: "30px" }}
        fontWeight="500"
        textAlign="center"
        color="white"
        mb={6}
      >
        YouTube Video Downloader
      </Text>

      <Flex justify="center">
        <Box
          border="1px solid white"
          py={{ base: "2px", md: "5px" }}
          px={{ base: "2px", md: "8px" }}
          w={{ base: "95%", md: "65%" }}
          bg="white"
        >
          <InputGroup maxW="700px" w="100%" size="md">
            <Input
              aria-label="YouTube video URL"
              placeholder="Paste your video link here"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              color="black"
              bg="transparent"
              border="none"
              borderRadius="0"
              h={{ base: "40px", md: "52px" }}
              _placeholder={{ color: "gray.500" }}
              _focusVisible={{ outline: "none", boxShadow: "none" }}
            />
            <InputRightElement width={{ base: "3rem", md: "8.5rem" }} h="100%">
              <Button
                aria-label={isMobile ? "Download video" : undefined}
                onClick={handleSearch}
                h="100%"
                w="100%"
                p="0"
                borderLeftRadius="7px"
                bg="#DC3545"
                color="white"
                fontSize={{ base: "20px", md: "14px" }}
                _hover={{ bg: "#DC3546" }}
              >
                {isMobile ? <ArrowForwardIcon /> : "Download"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Flex>

      <Flex
        bg="#0c003b"
        color="white"
        align="center"
        justify="center"
        py={2}
        px={4}
        fontSize="20px"
        mt={'18px'}
      >
        <Text mr={1}>Scanned by</Text>
        <Img
          src="/norton.svg"
          alt="Norton Safe Web"
          boxSize="16px"
          mx={1}
        />
        <Text ml={1}>Norton™ Safe Web</Text>
      </Flex>

      {iframeSrc && <IframeResizer src={iframeSrc} />}

      {downloadUrl && (
        <Box mt={8} textAlign="center">
          <iframe
            src={downloadUrl}
            width="100%"
            height="80"
            style={{ border: "none" }}
            title="Download Options"
          />
        </Box>
      )}
    </Box>
  );
};

export default VideoConverter;
