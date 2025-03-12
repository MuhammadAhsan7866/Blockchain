import { Box, SimpleGrid, Text, Heading, Container } from "@chakra-ui/react";
import { FaChartLine, FaChartBar, FaVideo, FaCreditCard } from "react-icons/fa";

const features = [
  { icon: FaChartLine, title: "SEO OPTIMIZATION", description: "Cras nec luctus nibh, ac cursus ligula. Donec hendrerit." },
  { icon: FaChartBar, title: "TRAFFIC ANALYTICS", description: "Cras nec luctus nibh, ac cursus ligula. Donec hendrerit." },
  { icon: FaVideo, title: "VIDEO MARKETING", description: "Cras nec luctus nibh, ac cursus ligula. Donec hendrerit." },
  { icon: FaCreditCard, title: "PAYMENT SYSTEM", description: "Cras nec luctus nibh, ac cursus ligula. Donec hendrerit." }
];

const ServiceCards = () => {
  return (
    <Box 
      py={'100px'} 
      bg="linear-gradient(200deg, #0F0F0F, #1B1B1B)" 
      backgroundImage="url('/Overlay-13.png')" 
      backgroundSize="cover" 
      backgroundPosition="center"
     
    >
      <Container maxW="1340px">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          {features.map((feature, index) => (
            <Box
              key={index}
              p={'30px'}
              borderRadius="lg"
              boxShadow="lg"
              bgGradient={index === 1 ? "linear-gradient(200deg, #151521AB 25%, #FF404047 100%)" : "linear-gradient(200deg, #1B0A52CC 0%, #151521A8 68%)"}
              textAlign="left"
              _hover={{
                bgGradient: "linear-gradient(200deg, #151521AB 25%, #FF404047 100%)",
                '.icon': { color: 'white' }
              }}
              minH={'260px'}
              display={'flex'}
              flexDir={'column'}
              alignItems={'flex-start'}
              justifyContent={'center'}
              gap={'10px'}
            >
              <Box className="icon" as={feature.icon} color="red.500" boxSize={10} m="0 0" transition="color 0.3s ease-in-out" textAlign={'left'}/>
              <Heading size="md" color="white" mb={'10px'}>
                {feature.title}
              </Heading>
              <Text color="white"  mb={'10px'}>{feature.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ServiceCards;
