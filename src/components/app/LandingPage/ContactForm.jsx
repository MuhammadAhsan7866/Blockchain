import React, { useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Box,
  Image,
  Text,
  Heading,
  Img,
  Container,
} from "@chakra-ui/react";

const ContactForm = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: JSON.stringify(formData, null, 2),
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container maxW={"1340px"} py={"70px"}>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        gap={{ base: "30px", lg: "40px" }}
      >
        <Box width={{ xl: "50%", base: "100%" }} mt={{ base: "25px", sm: "40px" }}>
          <Text color="#FF1415" fontSize="16px" fontWeight="700" mb="25px">
            Let&rsquo;s Talk
          </Text>
          <Heading
            as="h2"
            fontSize={{ xl: "64px", base: "42px" }}
            lineHeight={{ xl: "75px", base: "53px" }}
            fontWeight="900"
            letterSpacing="-2%"
            color="white"
          >
            Get in Touch!
          </Heading>
          <Text
            fontSize={{ xl: "17px", base: "14px" }}
            lineHeight="30px"
            fontWeight="500"
            color="#DADADA"
            mt="15px"
          >
            Share your project visions and let&rsquo;s sculpt them into reality
            together. From concept to creation, let&rsquo;s shape the future one idea at
            a time.
          </Text>
          <Box mt="30px">
            {[
              {
                img: "/rgbph.png",
                title: "Mail Us 24/7",
                value: "testing@gmail.com",
              },
              {
                img: "/rgbmail.png",
                title: "For Urgent Help",
                value: "+44 555 666 000",
              },
            ].map((contact, index) => (
              <Flex gap="25px" mt={index ? "24px" : "0px"} key={contact.title}>
                <Img src={contact.img} />
                <Box>
                  <Text fontSize="14px" fontWeight="400" lineHeight="17px" color="white">
                    {contact.title}
                  </Text>
                  <Text fontSize="16px" fontWeight="500" lineHeight="20px" color="white">
                    {contact.value}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Box>
        </Box>

        <Box
          borderWidth="1px"
          borderColor="rgba(255,255,255,0.07)"
          borderRadius="20px"
          boxShadow="lg"
          overflow="hidden"
          backdropFilter="blur(0px)"
          bgGradient="linear-gradient(0.07deg, rgba(0, 85, 255, 0.15)  0%, rgba(97, 97, 97, 0.09)  100%)"
          p="30px"
        >
          <form onSubmit={handleSubmit}>
            <Flex  direction={{ base: "column", md: "row" }} gap='12px'  >
              {[
                { name: "firstName", label: "First Name" },
                { name: "lastName", label: "Last Name" },
              ].map((field) => (
                <Flex  direction="column" flex="1" key={field.name}  >
                  <FormControl>
                    <FormLabel fontSize="16px" fontWeight="400" lineHeight="30px" color="white">
                      {field.label}
                    </FormLabel>
                    <Input
                      bg="white"
                      type="text"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Flex>
              ))}
            </Flex>
            <Flex direction={{ base: "column", md: "row" }} gap='12px' mt={4}>
              {[
                { name: "phoneNumber", label: "Phone Number", type: "tel" },
                { name: "email", label: "Email Address", type: "email" },
              ].map((field) => (
                <Flex direction="column" flex="1" key={field.name} >
                  <FormControl>
                    <FormLabel fontSize="16px" fontWeight="400" lineHeight="30px" color="white">
                      {field.label}
                    </FormLabel>
                    <Input
                      bg="white"
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Flex>
              ))}
            </Flex>
            <FormControl mt={4}>
              <FormLabel fontSize="16px" fontWeight="400" lineHeight="30px" color="white">
                Let me know your Project Details
              </FormLabel>
              <Textarea
                bg="white"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </FormControl>
            <Button
              sx={{
                background: "linear-gradient(140deg, #FF6E00, #A629F2)",
                color: "white",
                borderRadius: "150px",
                height: "52px",
                boxShadow: "0px 8px 18px -3px rgba(154, 1, 255, 0.32)",
                transition: "background 0.3s ease",
                _hover: {
                  background: "linear-gradient(260deg, #FF4094, #A629F2)",
                },
              }}
              mt={"25px"}
              w={"100%"}
            >
              <Image src="sms.svg" alt="icon" mr={2} />
              Book a Free Consultation
            </Button>
          </form>
        </Box>
      </Flex>
    </Container>
  );
};

export default ContactForm;
