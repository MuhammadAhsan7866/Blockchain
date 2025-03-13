'use client';

import { useState, useEffect } from 'react';
import { Box, Flex, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, Link, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      transition="background-color 0.3s"
      bg={scrolling ? 'rgba(0, 0, 0, 0.8)' : 'transparent'}
      boxShadow={scrolling ? 'md' : 'none'}
    >
      <Flex justify="space-between" align="center" p={4} maxW="1200px" mx="auto">
        <NextLink href="/" passHref>
          <Link fontSize="xl" fontWeight="bold" color="white">Logo</Link>
        </NextLink>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: 'block', md: 'none' }}
          icon={<HamburgerIcon />}
          variant="outline"
          color="white"
          onClick={onOpen}
        />

        {/* Desktop Navigation */}
        <Flex display={{ base: 'none', md: 'flex' }} gap={6}>
          <NextLink href="/#about" passHref>
            <Link color="white">About</Link>
          </NextLink>
          <NextLink href="/#services" passHref>
            <Link color="white">Services</Link>
          </NextLink>
          <NextLink href="/#contact" passHref>
            <Link color="white">Contact</Link>
          </NextLink>
        </Flex>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="gray.900" color="white" w="full">
          <DrawerCloseButton />
          <VStack mt={12} spacing={6} align="center">
            <NextLink href="/#about" passHref>
              <Link onClick={onClose}>About</Link>
            </NextLink>
            <NextLink href="/#services" passHref>
              <Link onClick={onClose}>Services</Link>
            </NextLink>
            <NextLink href="/#contact" passHref>
              <Link onClick={onClose}>Contact</Link>
            </NextLink>
          </VStack>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
