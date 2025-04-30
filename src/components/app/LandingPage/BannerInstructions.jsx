// components/DownloadFromOtherWebsites.js

import { Box, Text, Link } from "@chakra-ui/react";

const DownloadFromOtherWebsites = () => {
  return (
    <Box maxW={'1140px'} margin={'auto'}>
      <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign={'center'}>
        Download Videos From Other Websites
      </Text>
      <Text mb={4}>
        Want to download YouTube shorts from sites other than YouTube? The
        SSYouTube downloader supports video downloads from 99% of websites!
        Just add sfrom.net/ or savefrom.net/ before the website URL and
        press Enter.
      </Text>
      <Text>
        You will get a list of direct links to download all available videos
        from that website.
      </Text>
      <Text mt={2}>
        For example:
        <Link
          href="http://www.freethechildren.com/"
          color="cyan.300"
          isExternal
        >
          sfrom.net/http://www.freethechildren.com/
        </Link>
      </Text>
    </Box>
  );
};

export default DownloadFromOtherWebsites;
