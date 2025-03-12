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
      <Box
      
      >
        <Container m={"auto"} maxW={"1300px"} p={"0"}>
          <Box
            maxW={"100%"}
            position={"relative"}
            px={{ base: "30px", sm: "30px", md: "30px", lg: "0px" }}
          >
            <TitleSection/>
            <CardList />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PortfolioServices;
