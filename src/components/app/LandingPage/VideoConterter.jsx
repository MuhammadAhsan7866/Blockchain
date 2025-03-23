"use client";
import { useState } from "react";
import { VStack, Input, Button, Text, Box, Flex } from "@chakra-ui/react";
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

    const youtubeRegex =
      /(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/|\/shorts\/)/;
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
    <Box border={"1px solid #ccc"} p={"60px 30px 80px"}>
      <Text
        fontSize="30px"
        fontWeight="500"
        textAlign={"center"}
        color={"white"}
      >
        Download Video and Audio from YouTube
      </Text>
      <Flex
        spacing={4}
        p={5}
        justify={"center"}
        alignItems={"center"}
        gap={"15px"}
      >
        <Box
          border={"1px solid white "}
          w={"100%"}
          p={"7px"}
          borderRadius={"12px"}
        >
          <Input
            placeholder="Enter YouTube URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            border={"none"}
            outline={"none"}
            _focusVisible={"none"}
            color={"white"}
          />
        </Box>

        <Button
          onClick={handleSearch}
          sx={{
            background: "linear-gradient(140deg, #FF6E00, #A629F2)",
            color: "white",
            padding: "15px 30px",
            borderRadius: "150px",
            height: "52px",
            boxShadow: "0px 8px 18px -3px rgba(153, 1, 255, 0.32)",
            transition: "background 0.3s ease",
            _hover: {
              background: "linear-gradient(260deg, #FF4094, #A629F2)",
            },
          }}
        >
          Convert Video
        </Button>
      </Flex>
      <Text textAlign={"center"} color={'white'}>
        By using our service you are accepting our Terms of use.
      </Text>
      <IframeResizer src={iframeSrc} />
    </Box>
  );
};

export default VideoConverter;
