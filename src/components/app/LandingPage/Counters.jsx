import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  VStack,
  HStack,
} from "@chakra-ui/react";

const CountersClients = () => {
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
    <HStack
    spacing={8}
    pt={4}
    wrap="wrap"
    justify={{ base: "center", md: "start" }}
  >
    <VStack>
      <Text fontSize="50px" fontWeight="bold" color="yellow.300">
        {customers}+
      </Text>
      <Text color="gray.200">SATISFIED CUSTOMERS</Text>
    </VStack>
    <VStack>
      <Text fontSize="50px" fontWeight="bold" color="yellow.300">
        {projects}+
      </Text>
      <Text color="gray.200">SUCCESSFUL PROJECTS</Text>
    </VStack>
    <VStack>
      <Text fontSize="50px" fontWeight="bold" color="yellow.300">
        {years}+
      </Text>
      <Text color="gray.200">YEARS EXPERIENCE</Text>
    </VStack>
  </HStack>
  );
};

export default CountersClients;
