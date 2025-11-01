// components/FAQAccordion.js

import {
    Box,
    Text,
    Heading,
    VStack,
  } from "@chakra-ui/react";

  const FAQAccordion = () => {
    return (
      <Box py={10} px={6} maxW={'1240px'} margin={'auto'} bg="white">
        <VStack spacing={6} align="flex-start">
          <Heading as="h1" fontSize="35px" fontWeight="600" color="black">
            FAQ
          </Heading>

          <Box>
            <Text fontWeight="bold" mb={2} color="black">
              Q: is Ss-youtube.cc free to use?
            </Text>
            <Text mb={4} color="black">
              Yes. Ss-youtube.cc is an 100% free website.
            </Text>
          </Box>

          <Box>
            <Text fontWeight="bold" mb={2} color="black">
              Q: is Ss-youtube.cc safe for my PC?
            </Text>
            <Text mb={4} color="black">
              Yes. Ss-youtube.cc is very safe, no virus, no malware
            </Text>
          </Box>

          <Box>
            <Text fontWeight="bold" mb={2} color="black">
              Q: Can I need an account to download video?
            </Text>
            <Text mb={4} color="black">
              No. You don&apos;t need register an account. Just click and download
            </Text>
          </Box>

          <Box>
            <Text fontWeight="bold" mb={2} color="black">
              Q: How do I download videos?
            </Text>
            <Text mb={4} color="black">
              Step 1: Search or paster link you wish to download<br />
              Step 2: Click &quot;Start&quot; button to begin conversion process<br />
              Step 3: Select a format video/audio you wish to download and click &quot;download&quot; button
            </Text>
          </Box>

          <Box>
            <Text fontWeight="bold" mb={2} color="black">
              Q: Can I just download Mp3 file from Youtube link?
            </Text>
            <Text mb={4} color="black">
              Yes. You can convert to Mp3 file from youtube video<br />
              Step 1: Search or paste this video you wish to convert to Mp3 file<br />
              Step 2: Select &quot;Audio&quot; Tab and choose the file type you want to download<br />
              Step 3: Click &quot;download&quot; button to download Mp3 file
            </Text>
          </Box>

          <Box>
            <Text fontWeight="bold" mb={2} color="black">
              Q: How can I contact Ss-youtube.cc to give feedback?
            </Text>
            <Text mb={4} color="black">
              Please send us an email to:{' '}
              <Text as="a" href="mailto:info@Ss-youtube.cc" color="blue.600" textDecoration="underline">
                info@Ss-youtube.cc
              </Text>
            </Text>
          </Box>
        </VStack>
      </Box>
    );
  };
  
  export default FAQAccordion;
  