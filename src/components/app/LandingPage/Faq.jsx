// components/FAQAccordion.js

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    Heading,
  } from "@chakra-ui/react";
  
  const faqData = [
    {
      question: "What is SSYouTube and What Does It Do?",
      answer:
        "SSYouTube is a free online YouTube video downloader that allows you to download videos in multiple formats and resolutions. Enjoy fast downloads, high-quality video and audio, and convenient offline viewing.",
    },
    {
      question: "How Do I Download YouTube Videos with SSYouTube?",
      answer:
        "Copy the YouTube video URL and paste it into the search bar on the SSYouTube website. Select your preferred format and resolution, and click download. It’s that simple!",
    },
    {
      question: "Which Video Formats Does SSYouTube Support?",
      answer:
        "SSYouTube supports various video and audio formats, including MP4, AVI, FLV, MOV, WMV, and more. You can also select different resolutions, such as 720p or 1080p.",
    },
    {
      question:
        "Can I Download YouTube Playlists and Channels with SSYouTube?",
      answer:
        "Yes, you can download entire YouTube playlists and channels using SSYouTube. Copy the playlist or channel URL, paste it into the SSYouTube search bar, select the videos you want, and start your download.",
    },
    {
      question: "Is SSYouTube Safe?",
      answer:
        "Yes, SSYouTube is a secure platform. We prioritize user privacy and do not store any personal information. The site is regularly updated to protect against viruses and malware.",
    },
  ];
  
  const FAQAccordion = () => {
    return (
      <Box py={10} px={6} maxW={'1440px'} margin={'auto'}>
       
        <Heading as="h1" size="xl" textAlign="center" mb={8} display={{ base: 'none', md: 'block' }}>
          FAQ
        </Heading>
        <Accordion allowMultiple>
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              border="1px solid"
              borderColor="#08003A"
              borderRadius="md"
              bg="#08003A"
              color="white"
              mb={4}
              overflow="hidden"
            >
              <h2>
                <AccordionButton _expanded={{ bg: "blue.800" }} px={6} py={5}>
                  <Box flex="1" textAlign="left" fontWeight="medium">
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={5} px={6} bg="white" color="black">
                {faq.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    );
  };
  
  export default FAQAccordion;
  