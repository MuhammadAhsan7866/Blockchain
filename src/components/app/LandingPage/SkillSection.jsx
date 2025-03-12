import { Box, Flex, Text, Image, VStack } from "@chakra-ui/react";

const skills = [
  { name: "Figma",  icon: "/figma.svg" },
  {  name: "Programming",icon: "/react.svg" },
  {  name: "Programmin",icon: "/blockchain.png" },
  { name: "Programming", icon: "/larave.png" },
  { name: "Programming",  icon: "/js.svg" },
];

const SkillsSection = () => {
  return (
    <Box textAlign="center"  color="white" py={12}>
      <Text fontSize="48px" fontWeight="bold" color="purple.400">
        My Skills
      </Text>
      <Text fontSize="md" mt={2} opacity={0.8}>
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and your customers.
      </Text>
      <Flex justify="center" mt={8} wrap="wrap" gap={6} >
        {skills.map((skill, index) => (
          <VStack
            key={index}
            bg={skill.highlight ? "purple.600" : "#17132b"}
            p={6}
            borderRadius="lg"
            w={'300px'}
            h="200px"
            justify="center"
            align="center"
            boxShadow={
              skill.highlight ? "0px 0px 15px rgba(128, 0, 128, 0.6)" : "none"
            }
          >
            <Image src={skill.icon} alt={skill.name} boxSize="76px" />
            <Text fontSize="lg" fontWeight="bold">
              {skill.percentage}
            </Text>
            <Text fontSize="sm" color="purple.400">
              {skill.name}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>
  );
};

export default SkillsSection;
