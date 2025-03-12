import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Img,
  Flex,
  Heading,
} from '@chakra-ui/react';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
<Box
  backdropFilter="blur(10px)"
  bgImage="url('/ftrbg.avif')"
  backgroundSize="cover"
  backgroundPosition="center"
  width="100%"
  borderTopLeftRadius="64px"
  borderTopRightRadius="64px"
  opacity="1"
  borderBottomWidth="0px"
  borderLeftWidth="0px"
  borderRightWidth="0px"
  borderTopWidth="1px"
  borderStyle="solid"
  borderColor="rgba(130, 130, 130, 0.4)"
  p={{ base: '25px', sm: '25px', md: '30px', lg: '40px', xl: '50px', xxl: '70px' }}
>

      <Container as={Stack} maxW={'1440px'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Box>
            <Box>
          <Link href="http://localhost:3000/">
          {/* <Img src="/seologo.png" w={'70%'} mb={'18px'} /> */}
          <Heading fontSize={'32px'} color={'white'} mb={'18px'}>
           Portfolio
          </Heading>
          </Link>
        </Box>
              {/* <Text
                fontSize={"16px"}
                fontWeight={400}
                lineHeight={"24px"}
                mt="15px"
                color={"white"}
                mb={"25px"}
              >
                Innovate today, lead tomorrow.
              </Text> */}
              <Flex flexDirection={"column"} gap={"18px"}>
                <Flex alignItems={"center"} gap={"18px"} mt={"0px !important"}>
                  <Img w={'25%'} src="/023.png" />
                  <Link href={"#"} color={"white"}>
                    Facebook
                  </Link>
                </Flex>
                <Flex alignItems={"center"} gap={"25px"} mt={"0px !important"}>
                  <Img w={'25%'} src="/011.png" />
                  <Link href={"#"} color={"white"}>
                    LinkeDin
                  </Link>
                </Flex>
                <Flex alignItems={"center"} gap={"25px"} mt={"0px !important"}>
                  <Img src="/021.png" w={'25%'}/>
                  <Link href={"#"} color={"white"}>
                  Twitter
                  </Link>
                </Flex>
               
              </Flex>
            </Box>
          </Stack>

          <Stack gap={'14px'} align={'flex-start'}>
            <Box pb={'13px'} borderBottom={'1px solid #253538'} w={'70%'}>
              <Text color={'white'}> Pages</Text>
            </Box>
            
            <Link color={'white'} href={'#'}>About</Link>
            <Link color={'white'} href={'#'}>Project</Link>
            <Link color={'white'} href={'#'}> Contact</Link>
          </Stack>

          <Stack align={'flex-start'} gap={'14px'}>
            <Box pb={'13px'} borderBottom={'1px solid #253538'} w={'70%'}>
              <Text color={'white'}> Services</Text>
            </Box>
            <Link color={'white'} href={'#'}>Support Mariage</Link>
            <Link color={'white'} href={'#'}>Safty Security</Link>
            <Link color={'white'} href={'#'}>Bride Guide</Link>
            <Link color={'white'} href={'#'}>Groom Guide</Link>
          </Stack>

          <Stack align={'flex-start'} gap={'14px'}>
            <Box pb={'13px'} borderBottom={'1px solid #253538'} w={'70%'}>
              <Text color={'white'}> Support</Text>
            </Box>
            <Link color={'white'} href={'#'}>Contact Us </Link>
            <Link color={'white'} href={'#'}>Privacy Policy</Link>
            <Link color={'white'} href={'#'}>Terms of Service</Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={'#253538'}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={'center'}
          align={'center'}
        >
          <Text color={'#7B7A7A'}>Copyright © 2025 Blockchain. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
  );
}
