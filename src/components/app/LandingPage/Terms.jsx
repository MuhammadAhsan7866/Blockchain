// components/TermsOfUse.tsx

import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  VStack,
} from "@chakra-ui/react";

const TermsOfUse = () => {
  return (
    <Box maxW="1240px" mx="auto" px={6} pt="120px" pb="35px">
      <VStack spacing={6} align="start">
        <Heading as="h1" fontSize="35px" fontWeight="600">
          Terms of Use
        </Heading>

        <Text mb="15px">
          Please review these terms and conditions of use carefully before using our website and services. This document states the terms and conditions (&ldquo;Terms&rdquo;) upon which ssyoutube.com (&ldquo;we&rdquo; or &ldquo;us&rdquo;) will provide service to you on its website, applications and related services (collectively, the &ldquo;Service&rdquo;). As used in this document, the terms &ldquo;you&rdquo; or &ldquo;your&rdquo; refers to you, any entity you represent, your or its representatives, successors, assigns and affiliates, and any of your or their devices.
        </Text>

        <Text mb="15px">
          By visiting, accessing, using, downloading, copying, installing and/or joining (collectively &ldquo;using&rdquo;) the Service, you express your understanding and acceptance of these Terms...
        </Text>

        {/* SECTION 1 */}
        <Box>
          <Heading as="h2" fontSize="32px" fontWeight="500" marginBottom={".5rem"}>
            1. General Terms
          </Heading>
          <Text mb="15px">
            You may use the Service only if you can form a binding contract with us, and only in compliance with these Terms and all applicable laws.
          </Text>
          <Text mb="15px">
            You must be at least eighteen (18) years of age to use the Service...
          </Text>
        </Box>

        {/* SECTION 2 */}
        <Box>
          <Heading as="h2" fontSize="32px" fontWeight="500" marginBottom={".5rem"}>
            2. Intellectual Property
          </Heading>
          <Text mb="15px">
            All rights, title, and interest in and to the Service are owned by us and/or licensed to us...
          </Text>
        </Box>

        {/* SECTION 3 */}
        <Box>
          <Heading as="h2" fontSize="32px" fontWeight="500" marginBottom={".5rem"}>
            3. Your Representations
          </Heading>
          <Text mb="15px">
            You agree that while using our Service you shall not upload or make available materials that:
          </Text>
          <UnorderedList spacing={2} mb="15px">
            <ListItem>
              Are copyrighted, protected by trade secret, etc.
            </ListItem>
            <ListItem>
              Are obscene, vulgar, defamatory, or otherwise inappropriate.
            </ListItem>
            <ListItem>
              Depict illegal activities or cruelty.
            </ListItem>
            <ListItem>
              Impersonate any person or misrepresent identity.
            </ListItem>
            <ListItem>
              Promote criminal offenses or violate laws.
            </ListItem>
            <ListItem>
              Are unsolicited promotions or spam.
            </ListItem>
          </UnorderedList>
          <Text mb="15px">
            You are responsible for any and all content you upload or interact with.
          </Text>
        </Box>

        {/* SECTION 4 */}
        <Box>
          <Heading as="h2" fontSize="32px" fontWeight="500" marginBottom={".5rem"}>
            4. Third Party Links
          </Heading>
          <Text mb="15px">
            The Service may contain links to third party sites. We don&apos;t assume any responsibility for them.
          </Text>
        </Box>

        {/* SECTION 5 */}
        <Box>
          <Heading as="h2" fontSize="32px" fontWeight="500" marginBottom={".5rem"}>
            5. Use of the Service
          </Heading>
          <Text mb="15px">
            You acknowledge that the Service is a general-purpose tool and should only be used legally.
          </Text>
          <UnorderedList spacing={2} mb="15px">
            <ListItem>Using the Service for any unlawful purpose</ListItem>
            <ListItem>Using bots, scrapers, or automated tools</ListItem>
            <ListItem>Uploading malicious code or software</ListItem>
          </UnorderedList>
        </Box>

        {/* SECTION 6 */}
        <Box>
          <Heading as="h2" fontSize="32px" fontWeight="500" marginBottom={".5rem"}>
            6. Copyright Claims
          </Heading>
          <Text mb="15px">
            If you believe content infringes your copyright, email us with the required DMCA information.
          </Text>
        </Box>

        {/* SECTION 7 */}
        <Box>
          <Heading as="h2" fontSize="32px" fontWeight="500" marginBottom={".5rem"}>
            7. Limitation of Liability and No Warranty
          </Heading>
          <Text mb="15px">
            The Service is provided &quot;as is&quot;. We are not liable for any damages or losses.
          </Text>
        </Box>

        {/* SECTION 8 */}
        <Box>
          <Heading as="h2" fontSize="32px" fontWeight="500" marginBottom={".5rem"}>
            8. Indemnity
          </Heading>
          <Text mb="15px">
            You agree to indemnify and hold harmless the Service from any claims or liabilities.
          </Text>
        </Box>

        {/* SECTION 9 */}
        <Box>
          <Heading as="h2" fontSize="32px" fontWeight="500" marginBottom={".5rem"}>
            9. Miscellaneous
          </Heading>
          <Text mb="15px">
            If any part of these Terms is deemed invalid, the remaining parts remain in effect.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default TermsOfUse;
