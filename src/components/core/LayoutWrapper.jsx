import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const LayoutWrapper = ({ children }) => {
  return (
    <Box
      bg={'#0C0714'}
    >
      
      <Header/>
      {children}
      <Footer/>
    </Box>
  );
};

export default LayoutWrapper;