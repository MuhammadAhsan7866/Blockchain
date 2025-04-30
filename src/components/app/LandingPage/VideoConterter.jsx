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
} from "@chakra-ui/react";
import IframeResizer from "./IframeResizer";

const VideoConverter = () => {
  const [url, setUrl] = useState("");
  const [iframeSrc, setIframeSrc] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

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
    <Box p={"60px 30px 80px"}>
      <Text
        fontSize="30px"
        fontWeight="500"
        textAlign="center"
        color="white"
        mb={6}
      >
        Download Video and Audio from YouTube
      </Text>

      <Flex justify="center">
        <Box   border="1px solid white" py={'5px'} px={'8px'} w={'65%'} bg={'white'}>
        <InputGroup maxW="700px" w="100%">
          <Input
            placeholder="Enter YouTube URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            color="white"
            pr="8.5rem"
            bg="transparent"
            border="none"
            borderRadius="12px"
            h="52px"
            outline={'none'}
            _focusVisible={'none'}
          />
          <InputRightElement width="8.5rem" h="100%">
            <Button
              onClick={handleSearch}
              h="100%"
              borderLeftRadius="7px"
             w={'100%'}
              sx={{
                background: "#DC3545",
                color: "white",
                fontSize: "14px",
                padding: "0 20px",
                height: "100%",
              
                transition: "background 0.3s ease",
                _hover: {
                  background: "#DC3546",
                },
              }}
            >
              Convert
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
