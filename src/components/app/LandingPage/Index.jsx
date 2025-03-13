import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import HeroSection from "./Banner";
import AboutSection from "./About";
import PortfolioServices from "./BrainServices";
import FeatureProjects from "./FeatureProject";
import SkillsSection from "./SkillSection";
import TestimonialSlider from "./Testimonial";
import ContactForm from "./ContactForm";
import CompanyLogoSlider from "./Companylogo";

const LandingPage = () => {
  return (
    <>
      <Box maxW={"100%"} w="100%" mx="auto" position={"relative"}>
        <HeroSection />
         <AboutSection />
         <PortfolioServices/>
         <Container maxW={'1320px'} py={'100px'} id="project">
          <Heading mb={'45px'} color="purple.400" textAlign={'center'}>
          Featured Projects

          </Heading>
         <FeatureProjects/>
         </Container>
          <SkillsSection/>
          <TestimonialSlider/>
          <CompanyLogoSlider/>
          <ContactForm/>
      </Box>
    </>
  );
};

export default LandingPage;
