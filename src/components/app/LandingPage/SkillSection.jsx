import { Box, Flex, Text, Image, VStack, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

const skills = [
  { name: "Figma", percentage: "Figma, Blender (for game assets)", icon: "/figma.svg" },
  { name: "Framework", percentage: "React, Next.js, Node.js, Django, Laravel", icon: "/react.svg" },
  { name: "Programming", percentage: "Figma, Blender (for game assets)", icon: "/coding.png" },
  { name: "Game Engines", percentage: "Unity, Unreal Engine, Three.js, Godot, Phaser", icon: "/larave.png" },
  { name: "Blockchain", percentage: "Ethereum, Polygon, Solana, Hyperledger", icon: "/blockchain.png" },
  { name: "AI/ML Tools", percentage: "TensorFlow, PyTorch, OpenAI, Hugging Face", icon: "/ai.png" },
  { name: "Cloud", percentage: "AWS, Azure, GCP", icon: "/AWS-Logo.png" },
];

// Motion Box for smooth sliding
const MotionBox = motion(Box);

const SkillsSection = () => {
  return (
    <Container maxW="1340px" id="skills">
      <Box textAlign="center" color="white" py={12}>
        <Text fontSize="48px" fontWeight="bold" color="purple.400">
          My Skills
        </Text>
        <Text fontSize="md" mt={2} opacity={0.8}>
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </Text>

        {/* Slider Wrapper */}
        <Box mt={8} overflow="hidden" w="full" position="relative">
          <MotionBox
            display="flex"
            gap={6}
            animate={{
              x: ["0%", "-100%"], // Moves from 0% to -100%
            }}
            transition={{
              ease: "linear",
              duration: 12, // Speed of animation (Adjust as needed)
              repeat: Infinity,
            }}
            minW="max-content"
          >
            {[...skills, ...skills].map((skill, index) => ( // Duplicate array for infinite loop effect
              <VStack
                key={index}
                bg="#17132b"
                p={6}
                borderRadius="lg"
                minW="320px"
                h="200px"
                justify="center"
                align="center"
                transition="all 0.3s ease"
                border="2px solid transparent"
                _hover={{
                  bg: "#2a1454",
                  borderColor: "#8750f7",
                  color: "white",
                }}
              >
                <Image src={skill.icon} alt={skill.name} boxSize="60px" transition="opacity 0.3s ease" />
                <Text fontSize="18px" color="purple.400" transition="opacity 0.3s ease">
                  {skill.name}
                </Text>
                <Text fontSize="14px" fontWeight="400" transition="opacity 0.3s ease">
                  {skill.percentage}
                </Text>
              </VStack>
            ))}
          </MotionBox>
        </Box>
      </Box>
    </Container>
  );
};

export default SkillsSection;
