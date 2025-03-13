import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Link,
  Button,
  Img,
} from "@chakra-ui/react";
import React from "react";
import CardList from "./ServicesBrainCard";
import TitleSection from "./SectionTitle";

const PortfolioServices = () => {
  return (
    <>
      <Box id="services">
        <Container m={"auto"} maxW={"1300px"} p={"0"} >
          <Box
            maxW={"100%"}
            position={"relative"}
            px={{ base: "30px", sm: "30px", md: "30px", lg: "0px" }}
          >
            <Box py={"50px"} textAlign={"center"}>
              <Heading
                as={"h2"}
                fontSize={{ xl: "64px", lg: "42px", base: "42px", md: "42px" }}
                lineHeight={{ xl: "65px", base: "36px", md: "53px" }}
                fontWeight={"900"}
                letterSpacing={"-2%"}
                color="purple.400"
                mb={"16px"}
              >
                Services Offered
              </Heading>
            </Box>
            <CardList />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PortfolioServices;
