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
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import IframeResizer from "./IframeResizer";

const VideoConverter = () => {
  const [url, setUrl] = useState("");
  const [iframeSrc, setIframeSrc] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleSearch = () => {
    if (!url) {
      alert("Please Enter URL or type your keyword");
      return;
    }

    const youtubeRegex = /(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/|\/shorts\/)/;
    const match = url.split(youtubeRegex);

    if (match[2] && match[2].length > 10) {
      const finalUrl = `https://www.youtube.com/watch?v=${
        match[2].split(/[^0-9a-z_\-]/i)[0]
      }`;
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
        fontSize={{base:'24px',md:'30px'}}
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

      <Text mt={4} textAlign="center" color="white">
        By using our service you are accepting our Terms of use.
      </Text>

      <IframeResizer src={iframeSrc} />
    </Box>
  );
};

export default VideoConverter;
