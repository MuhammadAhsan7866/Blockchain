// components/TermsOfUse.tsx

import {
  Box,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const TermsOfUse = () => {
  return (
    <Box maxW="1240px" mx="auto" px={6} pt="120px" pb="35px" bg="white">
      <VStack spacing={4} align="start">
        <Heading as="h1" fontSize="35px" fontWeight="600" color="black">
          Term Of Service
        </Heading>

        <Text fontSize="16px" fontWeight="bold" textTransform="uppercase" mb={4} color="black">
          PLEASE READ THIS STATEMENT OF PRIVACY PRACTICES CAREFULLY BEFORE USING OUR SERVICE
        </Text>

        <Text mb={3} color="black">
          Mp3juices fan made website, is not affiliated with the original Mp3juices and legal entity. We absolutely do not host any copyrighted or illegal content on MP3 Quack the Music Searching information. Our service only provides links to stream and search music information on 3rd party sites. MP3 Quack complies with the Digital Millennium Copyright Act ("DMCA") and any other applicable intellectual property laws. We will immediately withdraw links to copyrighted works upon receipt of properly submitted notices of copyright infringement. Our service is intended for searching the internet. Anyone requesting to remove any URL, search results, or play options can contact us at info@ss-youtube.cc
        </Text>

        <Text mb={3} color="black">
          You need to follow the following procedure if you want to remove your work:
        </Text>

        <Text mb={3} color="black">
          Claims should be submitted to us via the contact form on our website. The claim must be in English and should be understandable, polite, and reasonable. Claims from free service emails like AOL, Yahoo, Gmail, etc. will be rejected.
        </Text>

        <Text mb={3} color="black">
          You should present evidence that shows that you are the copyright holder or that you are acting on behalf of the copyright holder. You should also present evidence that shows the content is legally copyright.
        </Text>

        <Text mb={3} color="black">
          You should present materials that need to be removed as material name and links to direct music pages. We will not accept links to search queries, categories or subcategories or media pages.
        </Text>

        <Text mb={3} color="black">
          You should enter their contact information, such as a valid email address and phone number.
        </Text>

        <Text mb={3} color="black">
          After the removal requests are processed, the work will be removed from our website. Still, the name of your product will still remain indexed and any media page or further hosted music on other websites will still be available even if the file has our name on it or its description.
        </Text>

        <Heading as="h2" fontSize="20px" fontWeight="bold" mb={3} color="black">
          Good Copyright Claim Example:
        </Heading>

        <Text mb={3} color="black">
          We comply with the Online Copyright Infringement Liability Limitation Act (OCILLA), which is part of the Digital Millennium Copyright Act of 1998. In accordance with the requirements and terms of the DMCA, we request service providers to be held liable for their acts concerning copyright infringement. We request service providers to immediately stop allowing access to copyrighted material.
        </Text>

        <Text mb={3} color="black">
          We have found infringing material on your website which indeed is our music 'The Music' released on December 12th, 2011.
        </Text>

        <Text mb={3} color="black">
          The infringing material should be removed or disabled immediately because it is copyrighted and is used without permission. Piracy should be avoided. We believe in good faith & belief that use of the material in the manner complained of here is not authorized by the owner of an exclusive right that is allegedly infringed, or its agent, or by the law. The person claiming copyright infringement is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
        </Text>

        <Text mb={3} color="black">
          We hereby declare that the information in the notification is accurate to the best of our knowledge & belief.
        </Text>

        <Text mb={3} color="black">
          Authorization letter of the copyright owner (or person/company representing): [Link to the letter]<br />
          A document proving that the materials are copyrighted and belong to owner (or person/company representing): [Link to the document]
        </Text>

        <Text mb={3} color="black">
          Digital signature for copyright claim:
        </Text>

        <Text mb={3} color="black">
          Full information included and email addresses, phone numbers, and website details.{' '}
          <Text as="a" href="mailto:info@ss-youtube.cc" color="blue.600" textDecoration="underline">
            info@ss-youtube.cc
          </Text>
        </Text>
      </VStack>
    </Box>
  );
};

export default TermsOfUse;
