import { ChakraProvider, Container } from "@chakra-ui/react";
import Script from "next/script";
import VideoConverter from "./VideoConterter";
import BodySection from "./BodyDescription";
import Info from "./Instructions";

export default function Home() {
  return (
    <ChakraProvider>
      {/* Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-88098706-1" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-88098706-1');
        `}
      </Script>

      {/* Ad Script */}
      <Script async data-cfasync="false" src="https://alwingulla.com/88/tag.min.js" data-zone="107310" />

      <Container maxW="1100px" p={'157px 0px 50px'}>
        <VideoConverter />
      
      </Container>
      <BodySection/>
     <Info/>
    </ChakraProvider>
  );
}
