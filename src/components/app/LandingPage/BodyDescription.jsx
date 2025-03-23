import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";

const features = [
  {
    icon: "⏱️",
    title: "Efficient Video Downloads",
    description:
      "YT1s enables quick and efficient downloading of YouTube videos, allowing users to save their favorite content for offline viewing hassle-free. Its streamlined process ensures prompt access to videos, enhancing user convenience and satisfaction.",
  },
  {
    icon: "🔄",
    title: "User-Friendly Interface",
    description:
      "With its simple and intuitive interface, YT1s makes the video downloading process accessible to users of all technical levels. Clear instructions and easy navigation contribute to a seamless experience, enabling even novice users to download videos effortlessly.",
  },
  {
    icon: "🔒",
    title: "Cross-Platform Compatibility",
    description:
      "YT1s is compatible with various devices and operating systems, including desktop computers, laptops, smartphones, and tablets. This broad compatibility ensures users can access the platform and download videos regardless of their preferred device, enhancing accessibility and convenience.",
  },
  {
    icon: "🔒",
    title: "Cross-Platform Compatibility",
    description:
      "YT1s is compatible with various devices and operating systems, including desktop computers, laptops, smartphones, and tablets. This broad compatibility ensures users can access the platform and download videos regardless of their preferred device, enhancing accessibility and convenience.",
  },
  {
    icon: "🔒",
    title: "Cross-Platform Compatibility",
    description:
      "YT1s is compatible with various devices and operating systems, including desktop computers, laptops, smartphones, and tablets. This broad compatibility ensures users can access the platform and download videos regardless of their preferred device, enhancing accessibility and convenience.",
  },
  {
    icon: "🔒",
    title: "Cross-Platform Compatibility",
    description:
      "YT1s is compatible with various devices and operating systems, including desktop computers, laptops, smartphones, and tablets. This broad compatibility ensures users can access the platform and download videos regardless of their preferred device, enhancing accessibility and convenience.",
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <Box bg="#011936" p={"30px"} borderRadius="lg" boxShadow="md">
    <Image
      src={`https://openui.fly.dev/openui/100x100.svg?text=${icon}`}
      alt={title}
      mx="auto"
      mb={4}
    />
    <Heading as="h2" size="md" mb={2} textAlign={"center"} color={"white"}>
      {title}
    </Heading>
    <Text color={"white"} textAlign={"center"} mb={"35px"} >
      {description}
    </Text>
  </Box>
);

const BodySection = () => {
  return (
    <Container maxW="1140px" py={6} px={4}  borderRadius="lg">
      <Heading as="h1" size="xl" textAlign="center" mb={6} color={'white'}>
        Best YouTube Video Downloader
      </Heading>
      {[
        "YT1s offers a convenient solution for downloading YouTube videos effortlessly. As an increasingly popular YouTube downloader, YT1s provides users with a seamless experience to access their favorite content offline.",
        "One of the key advantages of YT1s is its compatibility with various devices and operating systems, making it accessible to a broad audience. Whether you're using a desktop computer, laptop, smartphone, or tablet, YT1s ensures a smooth downloading process.",
        "Moreover, YT1s prioritizes user satisfaction by continually optimizing its platform for performance and reliability. With fast download speeds and high-quality output, users can enjoy their downloaded videos without compromising on viewing experience.",
      ].map((text, index) => (
        <Text key={index} color={'white'} mb={4} fontSize="18px" >
          {text}
        </Text>
      ))}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={8}>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default BodySection;
