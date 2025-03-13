import { Box, Flex, Text, Image, VStack, Container } from "@chakra-ui/react";

const skills = [
  { name: "Figma", percentage:'Figma, Blender (for game assets)', icon: "/figma.svg" },
  {  name: "Framework",percentage:'React, Next.js, Node.js, Django, Laravel',icon: "/react.svg" },
  {  name: "Programming",percentage:'Figma, Blender (for game assets)',icon: "/coding.png" },
  { name: "Game Engines",percentage:'Unity, Unreal Engine, Three.js, Godot, Phaser', icon: "/larave.png" },
  { name: "Blockchain",percentage:'Ethereum, Polygon, Solana, Hyperledger',  icon: "/blockchain.png" },
  { name: "AI/ML Tools",percentage:'TensorFlow, PyTorch, OpenAI, Hugging Face',  icon: "/ai.png" },
  { name: "Cloud",percentage:'AWS, Azure, GCP',  icon: "/AWS-Logo.png" },
];

const SkillsSection = () => {
  return (
    <Container maxW={'1340px'}>
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
            w={{base:'320px',md:'235px'}}
            h="200px"
            justify="center"
            align="center"
            boxShadow={
              skill.highlight ? "0px 0px 15px rgba(128, 0, 128, 0.6)" : "none"
            }
          >
            <Image src={skill.icon} alt={skill.name} boxSize="60px" />
           
            <Text fontSize="18px" color="purple.400">
              {skill.name}
            </Text>
            <Text fontSize="14px" fontWeight="400">
              {skill.percentage}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>
    </Container>
    
  );
};

export default SkillsSection;
