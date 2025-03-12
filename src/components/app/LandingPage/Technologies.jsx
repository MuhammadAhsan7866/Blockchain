import { useEffect, useState } from "react";
import { Box, Heading, Text, Image, Flex, VStack, HStack } from "@chakra-ui/react";

const TrafficPromotion = () => {
  const [customers, setCustomers] = useState(0);
  const [projects, setProjects] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const animateCount = (setter, target) => {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / target));
      const timer = setInterval(() => {
        start += 1;
        setter(start);
        if (start >= target) clearInterval(timer);
      }, stepTime);
    };

    animateCount(setCustomers, 300);
    animateCount(setProjects, 800);
    animateCount(setYears, 22);
  }, []);

  return (
    <Box
      bgImage="url(/Background-10.jpg)"
      bgSize="cover"
      bgPosition="center"
      color="white"
      pt={'96px'}
    >
      <Flex direction={{ base: "column", md: "row" }} align="center" maxW="1340px" mx="auto">
        <VStack align="start" spacing={4} flex={1}>
          <Text color={"#FF1415"} fontSize={"16px"} fontWeight={"700"}>Welcome to YouSEO</Text>
          <Heading
            as={"h2"}
            fontSize={{ xl: "64px", lg: "42px", base: "42px", md: "42px" }}
            lineHeight={{ xl: "75px", base: "36px", md: "53px" }}
            fontWeight={"900"}
            letterSpacing={"-2%"}
            color={"white"}
          >
            The Best SEO<br />For Your Website
          </Heading>
          <Text fontSize={{ xl: "17px", lg: "17px", base: "14px" }} lineHeight={{ xl: "30px", lg: "30px", base: "26px" }} fontWeight={"500"} color={"#DADADA"}>
            We built effective strategies to help you reach customers and prospect across the entire web and Nunc non bibendum purus.
            Integer in metus at erat luctus.
          </Text>
          <HStack spacing={8} pt={4} wrap="wrap" justify={{ base: "center", md: "start" }}>
            <VStack>
              <Text fontSize="50px" fontWeight="bold" color="yellow.300">{customers}+</Text>
              <Text color="gray.200">SATISFIED CUSTOMERS</Text>
            </VStack>
            <VStack>
              <Text fontSize="50px" fontWeight="bold" color="yellow.300">{projects}+</Text>
              <Text color="gray.200">SUCCESSFUL PROJECTS</Text>
            </VStack>
            <VStack>
              <Text fontSize="50px" fontWeight="bold" color="yellow.300">{years}+</Text>
              <Text color="gray.200">YEARS EXPERIENCE</Text>
            </VStack>
          </HStack>
        </VStack>
        <Box flex={1} mt={{ base: 8, md: 0 }} textAlign="center">
          <Image src="/glaseesgrl.png" alt="Traffic Promotion" borderRadius="md" mx="auto" />
        </Box>
      </Flex>
    </Box>
  );
};

export default TrafficPromotion;
