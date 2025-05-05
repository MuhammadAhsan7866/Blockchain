// components/app/LandingPage/YouTubeDownloaderInfo.jsx

import { Box, Heading, Text, Stack } from "@chakra-ui/react";

const YouTubeDownloaderInfo = ({ sections }) => {
  return (
    <Box p={8}>
      <Stack spacing={10}>
        {sections.map((section, index) => (
          <Box key={index}>
            <Heading as="h2" size="xl" textAlign="center">
              {section.title}
            </Heading>
            <Stack spacing={4} mt={4}>
              {section.content.map((paragraph, idx) => (
                <Text
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default YouTubeDownloaderInfo;
