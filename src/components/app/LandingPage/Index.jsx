import { Box, ChakraProvider, Container, Heading } from "@chakra-ui/react";
import Script from "next/script";
import VideoConverter from "./VideoConterter";
import BodySection from "./BodyDescription";
import Info from "./Instructions";
import DownloadFromOtherWebsites from "./BannerInstructions";
import DomainInstruction from "../ShortDomain";
import FAQAccordion from "./Faq";

export default function Home() {
  return (
    <ChakraProvider>
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-88098706-1"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-88098706-1');
        `}
      </Script>

      {/* Ad Script */}
      <Script
        async
        data-cfasync="false"
        src="https://alwingulla.com/88/tag.min.js"
        data-zone="107310"
      />
      <Box bg={"#08003A"}>
        <Container maxW="1100px" p={"157px 0px 50px"}>
          {/* <Heading as="h1" size="xl" color="white" textAlign="center" mb={8} display={{ base: 'none', md: 'block' }}>
            SsYouTube - Free YouTube Video Downloader 2025
          </Heading> */}
          <VideoConverter />
        </Container>
      </Box>

      <BodySection />
      <Info />
      <Box bg="#08003A" color="white" py={"50px"} px={6}>
        <DownloadFromOtherWebsites
          title="Download Videos From Other Websites"
          paragraphs={[
            "Want to download YouTube shorts from sites other than YouTube? The SSYouTube downloader supports video downloads from 99% of websites! Just add sfrom.net/ or savefrom.net/ before the website URL and press Enter.",
            "You will get a list of direct links to download all available videos from that website.",
          ]}
          exampleLinkText="sfrom.net/http://www.freethechildren.com/"
          exampleLinkUrl="http://www.freethechildren.com/"
        />
      </Box>
      <DomainInstruction />
      <FAQAccordion />
    </ChakraProvider>
  );
}
