import React from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  Image,
  VStack,
  Container,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Elizabeth Anne",
    role: "Fashion Designer",
    image: "/sliderimg.jpg", // Replace with actual image URL
    quote:
      "Purus eget consectetur massa amet. Hactor bodiam suspendie faucibus posuere dignissim amet to atthe. Vitaer of sollicitudin mauris erat odio macenas mattis praesent.Eget vitae magna condimentum tristique scelerisque",
  },
  {
    name: "Elizabeth Anne",
    role: "Fashion Designer",
    image: "/sliderimg.jpg", // Replace with actual image URL
    quote:
      "Purus eget consectetur massa amet. Hactor bodiam suspendie faucibus posuere dignissim amet to atthe. Vitaer of sollicitudin mauris erat odio macenas mattis praesent.Eget vitae magna condimentum tristique scelerisque",
  },
  {
    name: "Elizabeth Anne",
    role: "Fashion Designer",
    image: "/sliderimg.jpg", // Replace with actual image URL
    quote:
      "Purus eget consectetur massa amet. Hactor bodiam suspendie faucibus posuere dignissim amet to atthe. Vitaer of sollicitudin mauris erat odio macenas mattis praesent.Eget vitae magna condimentum tristique scelerisque",
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <Container maxW={"1340px"} py={'100px'}>
      <Flex
        color="white"
        align="center"
        justify="space-between"
        flexDirection={{ base: "column", md: "row" }}
      >
        {/* Left Side Text */}
        <VStack align="flex-start" maxW="40%" spacing={4}>
          <Text
            fontSize={{ xl: "48px", lg: "42px", base: "38px", md: "42px" }}
            lineHeight={{ xl: "54px", base: "36px", md: "53px" }}
            fontWeight={"900"}
            letterSpacing={"-2%"}
            color={"white"}
          >
            What My Customers <br /> Says About Me
          </Text>
          <Text opacity={0.7} fontSize={"22px"} fontStyle="italic">
            Consectetur. Fusce nunc sit ac sapien mauris vitae. Tortor cras nisl
            molestie malesuada mauris. Quam at sed cras enim adipiscing molestie
            odio.
          </Text>
          {/* <Button
            border="1px solid gold"
            bg="transparent"
            color="white"
            _hover={{ bg: "gold", color: "black" }}
          >
            See All Testimonials
          </Button> */}
          <Button
            sx={{
              background: "linear-gradient(140deg, #FF6E00, #A629F2)",
              color: "white",
              border: "none",
              padding: "15px 30px",
              borderRadius: "150px",
              cursor: "pointer",
              height: "52px",
              boxShadow:
                "0px 8px 18px -3px rgba(153.99999999999997, 0.9999999999999964, 255, 0.32)",
              transition: "background 0.3s ease",
              _hover: {
                background: "linear-gradient(260deg, #FF4094, #A629F2)",
              },
            }}
            w={"45%"}
            mt={'25px'}
          >
           See All Testimonials
          </Button>
        </VStack>

        {/* Right Side Testimonial Slider */}
        <Box
          maxW="50%"
          p={"30px 30px 10px 30px"}
          borderRadius="20px"
          bgGradient={
            "linear-gradient(0.07deg, rgba(0, 85, 255, 0.15)  0%, rgba(97, 97, 97, 0.09)  100%)"
          }
          border={"1px solid white"}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} p={6}>
                <Flex align="center" mb={4}>
                  <Image
                    borderRadius="full"
                    w={"110px"}
                    h={"auto"}
                    src={testimonial.image}
                    alt={testimonial.name}
                    mr={3}
                    border={"1px solid white"}
                    p={"5px"}
                  />
                  <VStack align="flex-start">
                    <Text fontSize="40px" fontWeight="bold">
                      {testimonial.name}
                    </Text>
                    <Text fontSize="20px" opacity={0.7}>
                      {testimonial.role}
                    </Text>
                  </VStack>
                </Flex>
                <Text fontSize={"22px"} fontStyle="italic">
                  {testimonial.quote}
                </Text>
              </Box>
            ))}
          </Slider>
        </Box>
      </Flex>
    </Container>
  );
};

export default TestimonialSlider;
