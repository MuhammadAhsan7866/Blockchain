import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Img,
  Flex,
  Heading,
  HStack,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      backdropFilter="blur(10px)"
      bgImage="url('/ftrbg.avif')"
      backgroundSize="cover"
      backgroundPosition="center"
      width="100%"
      borderTopLeftRadius="64px"
      borderTopRightRadius="64px"
      opacity="1"
      borderBottomWidth="0px"
      borderLeftWidth="0px"
      borderRightWidth="0px"
      borderTopWidth="1px"
      borderStyle="solid"
      borderColor="rgba(130, 130, 130, 0.4)"
      p={{
        base: "25px",
        sm: "25px",
        md: "30px",
        lg: "40px",
        xl: "50px",
        xxl: "70px",
      }}
    >
      <Container as={Stack} maxW={"1440px"} pb={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 1 }} spacing={8}>
         
         
          <HStack align={"flex-start"} gap={"14px"} justifyContent={'center'} alignItems={'center'}>
           
            <Link color={"white"} href={"#"} fontSize={'18px'}>
              Contact Us{" "}
            </Link>
            <Link color={"white"} href={"#"} fontSize={'18px'}>
              Privacy Policy
            </Link>
            <Link color={"white"} href={"#"} fontSize={'18px'}>
              Terms of Service
            </Link>
          </HStack>
        </SimpleGrid>
      </Container>

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"#253538"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <Text color={"#7B7A7A"}>
            Copyright © 2025 Yt2 Converter. All rights reserved
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
