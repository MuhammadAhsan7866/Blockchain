'use client';

import { Box, Flex, Text, Link, VStack, Grid, GridItem } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="black" color="white" py={10} px={5}>
      {/* Copyright at top */}
      <Flex justify="center" align="center" mb={8}>
        <Text fontSize="sm" textAlign="center">
          © 2025 YouTube Downloader, made with{' '}
          <Box as={FaHeart} display="inline-block" color="red.500" mx={1} /> by SSYoutube.
        </Text>
      </Flex>

      {/* Four columns */}
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        gap={8}
        maxW="6xl"
        mx="auto"
        justifyItems={{ base: 'center', md: 'flex-start' }}
      >
        {/* Column 1: YouTube Downloader */}
        <GridItem>
          <VStack align="flex-start" spacing={3}>
            <Link href="#" textDecoration="underline" fontSize="md" fontWeight="normal">
              YouTube Downloader
            </Link>
            <VStack align="flex-start" spacing={2}>
              <Link href="/youtube-to-mp3-converter" color="cyan.300" textDecoration="underline" fontSize="sm">
                YouTube to Mp3
              </Link>
              <Link href="/youtube-to-mp4-converter" color="cyan.300" textDecoration="underline" fontSize="sm">
                YouTube to Mp4
              </Link>
            </VStack>
          </VStack>
        </GridItem>

        {/* Column 2: Facebook Downloader */}
        <GridItem>
          <VStack align="flex-start" spacing={3}>
            <Link href="#" textDecoration="underline" fontSize="md" fontWeight="normal">
              Facebook Downloader
            </Link>
            <VStack align="flex-start" spacing={2}>
              <Link href="/facebook" color="cyan.300" textDecoration="underline" fontSize="sm">
                Facebook Videos
              </Link>
              <Link href="/facebook" color="cyan.300" textDecoration="underline" fontSize="sm">
                Facebook Reels
              </Link>
            </VStack>
          </VStack>
        </GridItem>

        {/* Column 3: Instagram Downloader */}
        <GridItem>
          <VStack align="flex-start" spacing={3}>
            <Link href="#" textDecoration="underline" fontSize="md" fontWeight="normal">
              Instagram Downloader
            </Link>
            <VStack align="flex-start" spacing={2}>
              <Link href="/instagram" color="cyan.300" textDecoration="underline" fontSize="sm">
                Instagram Videos
              </Link>
              <Link href="/instagram" color="cyan.300" textDecoration="underline" fontSize="sm">
                Instagram Reels
              </Link>
            </VStack>
          </VStack>
        </GridItem>

        {/* Column 4: Copyright */}
        <GridItem>
          <VStack align="flex-start" spacing={3}>
            <Link href="#" textDecoration="underline" fontSize="md" fontWeight="normal">
              Copyright
            </Link>
            <VStack align="flex-start" spacing={2}>
              <Link href="/faq" color="cyan.300" textDecoration="underline" fontSize="sm">
                FAQs
              </Link>
              <Link href="#" color="cyan.300" textDecoration="underline" fontSize="sm">
                Contact
              </Link>
              <Link href="/terms-of-service" color="cyan.300" textDecoration="underline" fontSize="sm">
                Terms of Use
              </Link>
            </VStack>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
