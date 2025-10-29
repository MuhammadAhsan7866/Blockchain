// components/DownloadFromOtherWebsites.js

import { Box, Text, Link } from "@chakra-ui/react";

const DownloadFromOtherWebsites = ({
  title = "Default Title",
  paragraphs = [],
  exampleLinkText,
  exampleLinkUrl,
}) => {
  return (
    <Box maxW="100%" margin="auto">
      <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="left">
        {title}
      </Text>

      {paragraphs.length > 0 &&
        paragraphs.map((para, index) => (
          <Text mb={4} key={index}>
            {para}
          </Text>
        ))}

      {exampleLinkText && exampleLinkUrl && (
        <Text mt={2}>
          For example:{" "}
          <Link href={exampleLinkUrl} color="cyan.300" isExternal>
            {exampleLinkText}
          </Link>
        </Text>
      )}
    </Box>
  );
};

export default DownloadFromOtherWebsites;
