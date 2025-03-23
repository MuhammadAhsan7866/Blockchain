import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  Image
} from "@chakra-ui/react";

const Info = () => {
  const formats = [
    { name: "MP4", image: "/icon1.webp" },
    { name: "MP3",image: "/icon2.webp" },
    { name: "3GP", image: "/icon3.webp" },
    { name: "WEBM",image: "/icon4.webp" },
    { name: "M4A", image: "/icon5.webp" }
  ];

  return (
    <Box
      maxW="1140px"
      mx="auto"
      p={6}
      mt={'50px'}
      color="gray.800"
      borderRadius="lg"
     
    >
      <Heading as="h1" size="lg" mb={4} textAlign="center" color={'white'}>
        Download YouTube Videos Free with YT1s
      </Heading>

      <Flex justify="center" wrap="wrap" gap={'30px'} my={8}>
        {formats.map((format) => (
          <Box
            key={format.name}
        
          >
            <Image src={format.image} alt={format.name}  mx="auto" />
          </Box>
        ))}
      </Flex>

      <Text mb={4} textAlign="justify" color={'white'}>
        YT1s gives users the ability to download YouTube videos in a variety of
        qualities, including standard definition (SD), high definition (HD), and
        even 4K resolution, depending on the original video quality on YouTube.
        This flexibility empowers users to choose the quality that best suits
        their preferences and device capabilities. One of the main advantages of
        YT1s’ multiple quality options is the flexibility it provides to users
        with varying internet speeds and storage capacities. Users can choose
        lower quality to save data or disk space, while those with fast
        connections or devices capable of displaying clear visuals can enjoy
        videos in the highest resolution available. This flexibility ensures an
        optimal viewing experience for every user, regardless of their device or
        internet connection, making YT1s a versatile and user-oriented platform
        for downloading YouTube videos.
      </Text>
      <Flex justifyContent={'center'} alignItems={'center'} mt={'30px'}>
      <Button
         sx={{
          background: "linear-gradient(140deg, #FF6E00, #A629F2)",
          color: "white",
          padding: "15px 30px",
          borderRadius: "150px",
          height: "52px",
          boxShadow: "0px 8px 18px -3px rgba(153, 1, 255, 0.32)",
          transition: "background 0.3s ease",
          _hover: {
            background: "linear-gradient(260deg, #FF4094, #A629F2)",
          },
        }}
        >

          Convert Now
        </Button>

      </Flex>
     

      <Heading as="h2" size="md" mt={8} mb={4} textAlign="center" color={'white'}>
        Download YouTube Videos Online in 3 Simple Steps
      </Heading>
      <List spacing={2} styleType="decimal" pl={4}>
        <ListItem color={'white'}>
          Enter a keyword or paste a YouTube video link into the input box.
        </ListItem >
        <ListItem color={'white'}>
          Select the desired MP4 or MP3 format and click the Download button.
        </ListItem>
        <ListItem color={'white'}>
          Wait a moment for the conversion to complete, then download. Fast,
          simple, and hassle-free.
        </ListItem>
      </List>
    </Box>
  );
};

export default Info;