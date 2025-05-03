'use client';

import { Box, Flex, Text, Link, VStack, HStack, Stack, useColorModeValue } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="black" color="white" py={10} px={5}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={10}
        justify="space-between"
        align={{ base: 'flex-start', md: 'center' }}
        maxW="7xl"
        mx="auto"
      >
        {/* Section 1 */}
        <VStack align="flex-start" spacing={2}>
          <Text fontWeight="bold">Download Youtube to mp4</Text>
          <Link color="green.400" href="#">Youtube Shorts</Link>
          <Link color="green.400" href="#">Twitter Video Downloader</Link>
        </VStack>

        {/* Section 2 */}
        <VStack align="flex-start" spacing={2}>
          <Link color="green.400" href="#">Facebook Video Downloader</Link>
        </VStack>

        {/* Section 3 */}
        <VStack align="flex-start" spacing={2}>
          <Text fontWeight="bold">About us</Text>
          <Link color="green.400" href="/Policy">Privacy Policy</Link>
          <Link color="green.400" href="/terms-of-service">Terms of Service</Link>
          <Link color="green.400" href="#">Contact</Link>
          <Link color="green.400" href="#">API</Link>
        </VStack>

        {/* Section 4 */}
        <VStack align="flex-start" spacing={2}>
          <Text fontWeight="bold">Partners</Text>
          <Link color="green.400" href="#">SSSTIK</Link>
        </VStack>
      </Stack>

      {/* Copyright */}
      <Flex justify="center" align="center" mt={10}>
        <Text fontSize="sm" color="gray.400" textAlign="center">
          © 2025 YouTube Downloader, made with{' '}
          <Box as={FaHeart} display="inline-block" color="orange.400" mx={1} /> by SSYouTube.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
