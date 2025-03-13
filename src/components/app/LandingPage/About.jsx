import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Img,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import React from "react";
import { MdFiberManualRecord } from "react-icons/md";
import { motion } from "framer-motion";
import CountersClients from "./Counters";

const MotionBox = motion(Box);
const MotionImg = motion(Img);

const AboutSection = () => {
  return (
    <Box
      id="about" // Add this for scrolling
      pt={{ base: "30px", lg: "85px" }}
      pb={{ base: "30px", lg: "85px" }}
      px={{ base: "20px", md: "30px", lg: "0px" }}
    >
      <Container maxW={"1340px"} mx={"auto"}>
        <Flex 
          alignItems={"center"} 
          flexWrap={"wrap"} 
          gap={{ base: "20px", md: "32px" }} 
          flexDirection={{ base: 'column-reverse', lg: "row" }} 
        >
          {/* Animated Image */}
          <MotionImg
            src="/img_portfolio_Home01.png"
            borderRadius={"12px"}
            width={{ base: "100%", md: "75%", lg: "50%" }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Animated Text Content */}
          <MotionBox
            width={{ base: "100%", lg: "47.5%" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <Text
              color={"#FF1415"}
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight={"700"}
              mb={"20px"}
            >
              About Me
            </Text>
            <Heading
              as={"h2"}
              fontSize={{ base: "22px", md: "38px", xl: "48px" }}
              lineHeight={{ base: "34px", md: "46px", xl: "54px" }}
              fontWeight={"900"}
              color={"white"}
            >
              6+ Years of BlockChain Development
            </Heading>
            <Text
              fontSize={{ base: "14px", md: "16px", xl: "17px" }}
              color={"#DADADA"}
              mt={"15px"}
            >
              Played a key role in designing and implementing user-friendly
              interfaces for various digital platforms. Revised existing
              projects to meet industry and company standards for SEO and
              accessibility.
            </Text>
            <Text
              color={"#FF1415"}
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight={"700"}
              mt={"25px"}
            >
              Key areas of expertise
            </Text>
            <List
              spacing={3}
              color="white"
              display={"flex"}
              flexWrap={"wrap"}
              gap={"15px"}
              alignItems={"center"}
              mt={"15px"}
            >
              {["AI", "BlockChain", "Game Development"].map((item) => (
                <ListItem
                  key={item}
                  fontSize={{ base: "16px", md: "18px" }}
                  fontWeight={"700"}
                  mt={'0px !important'}
                >
                  <ListIcon as={MdFiberManualRecord} color="#FF1415" />
                  {item}
                </ListItem>
              ))}
            </List>
            <Flex 
              gap={{ base: "20px", md: "30px" }} 
              flexDirection={{ base: "column", md: "row" }} 
              mt={"20px"}
            >
              <CountersClients />
            </Flex>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutSection;
