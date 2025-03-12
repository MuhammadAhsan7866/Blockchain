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
      pt={{ base: "30px", lg: "85px" }}
      pb={{ base: "30px", lg: "85px" }}
      px={{ base: "30px", lg: "0px" }}
    >
      <Container maxW={"1340px"} mx={"auto"}>
        <Flex alignItems={"center"} flexWrap={"wrap"} gap={"32px"}>
          {/* Animated Image */}
          <MotionImg
            src="/img_portfolio_Home01.png"
            borderRadius={"12px"}
            width={{ xl: "50%", base: "100%" }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Animated Text Content */}
          <MotionBox
            width={{ xl: "47.5%", base: "100%" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <Text
              color={"#FF1415"}
              fontSize={"16px"}
              fontWeight={"700"}
              mb={"25px"}
            >
              About Me
            </Text>
            <Heading
              as={"h2"}
              fontSize={{ xl: "48px", base: "38px" }}
              lineHeight={{ xl: "54px", base: "36px" }}
              fontWeight={"900"}
              color={"white"}
            >
              6+ Years of BlockChain Development
            </Heading>
            <Text
              fontSize={{ xl: "17px", base: "14px" }}
              color={"#DADADA"}
              mt={"15px"}
            >
              Played a key role in designing and implementing user-friendly
              interfaces for various digital platforms. Revised existing
              Projects to meet industry and company standards for SEO and
              Accessibility.
            </Text>
            <Text
              color={"#FF1415"}
              fontSize={"18px"}
              fontWeight={"700"}
              mt={"30px"}
            >
              Key areas of expertise
            </Text>
            <List
              spacing={3}
              color="white"
              display={"flex"}
              gap={"15px"}
              alignItems={"center"}
              mt={"15px"}
            >
              {["AI", "BlockChain", "Game Development"].map((item) => (
                <ListItem key={item} fontSize={"18px"} fontWeight={"700"} mt={'0px !important'}>
                  <ListIcon as={MdFiberManualRecord} color="#FF1415" />
                  {item}
                </ListItem>
              ))}
            </List>
            <Flex gap={"30px"} flexDirection={{ base: "column", md: "row" }}>
              <CountersClients />
            </Flex>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutSection;
