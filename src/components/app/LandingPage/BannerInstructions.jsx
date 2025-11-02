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
      <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
        {title}
      </Text>

      {paragraphs.length > 0 &&
        paragraphs.map((para, index) => (
          <Text mb={4} key={index} mx={'auto'} w={'59%'}>
            {para}
          </Text>
        ))}

      {exampleLinkText && exampleLinkUrl && (
        <Text mt={2} textAlign="center">
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
