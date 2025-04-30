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
        "SSYouTube is a tool that allows you to download YouTube videos easily by modifying the video URL or using their site.",
    },
    {
      question: "How Do I Download YouTube Videos with SSYouTube?",
      answer:
        "Simply add 'ss' to the YouTube URL before 'youtube.com' to initiate the download page.",
    },
    {
      question: "Which Video Formats Does SSYouTube Support?",
      answer:
        "SSYouTube supports MP4, WebM, 3GP, and other common formats depending on the video availability.",
    },
    {
      question:
        "Can I Download YouTube Playlists and Channels with SSYouTube?",
      answer:
        "Currently, SSYouTube supports downloading individual videos. Playlist and channel downloading may not be supported.",
    },
    {
      question: "Is SSYouTube Safe?",
      answer:
        "Yes, SSYouTube is safe to use as long as you avoid clicking on any misleading ads or pop-ups.",
    },
  ];
  
  const FAQAccordion = () => {
    return (
      <Box py={10} px={6} maxW={'1440px'} margin={'auto'}>
        <Heading textAlign="center" mb={8}>
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
  