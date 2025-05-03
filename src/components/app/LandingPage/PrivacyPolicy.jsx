import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const policySections = [
  {
    title: "1. Data we collect",
    content: [
      "The information we collect can be generally placed in following categories: data on how you use our Service and aggregate data on content you engage with. We may use this information to personalize and improve our services, to fulfill your requests and to analyze how you use our Service. We may provide this information to our partners, so that they, too, can provide you with an optimal experience, but we never disclose information to a partner in a manner that would identify you personally.",
      "Unless stated otherwise in this Privacy Policy, the personal data that you provide us will only be stored for as long as it is necessary for us to fulfill our obligations in respect of the provision of the Service. We process your personal data only if you have provided consent, or processing is necessary for execution of the agreement, public interest, or legal obligations.",
      "We take technical, organisational and other measures to protect your personal data from unauthorized or accidental access, use, transfer, or destruction. A secure HTTPS connection is used to ensure a high degree of data security.",
    ],
  },
  {
    title: "2. Purposes of collection",
    content: [
      "We use the information we collect about you to analyze service performance, develop marketing strategies, improve features, and personalize content. We may also correspond with you directly regarding any issues you raise.",
      "We do not collect special categories of personal data or perform automated profiling.",
    ],
  },
  {
    title: "3. Use of Cookies",
    content: [
      "We use cookies and similar technologies like web beacons and pixel tags to improve service functionality. Cookies identify your device but do not collect personal user data directly.",
      "You can configure your browser to accept, notify, or reject cookies. Restricting cookies may impact functionality.",
      "We work with analytics partners to analyze usage via cookies. By using our Service, you agree to this.",
    ],
  },
  {
    title: "4. Children's protection",
    content: [
      <>
        If we learn that we&rsquo;ve collected personal data from a child, we will
        take steps to delete it. Parents or legal guardians can request removal
        by contacting us at{" "}
        <Link href="mailto:contact@Seyoutube.com" color="blue.500">
          contact@Seyoutube.com
        </Link>
        .
      </>,
    ].map((jsx, i) => ({ jsx, key: `child-protection-${i}` })),
  },
  {
    title: "5. Parties we may share your data with",
    list: [
      "Our affiliates for service development, maintenance, and customer support.",
      "Business partners to provide personalized advertisements using non-identifiable data.",
      "Third parties for analytical or research purposes using anonymous usage data.",
      "External links may lead to third-party websites; their privacy policies apply.",
    ],
  },
  {
    title: "6. Rights under GDPR",
    content: [
      "If you are in the EEA, you have rights under GDPR including access, rectification, erasure, restriction, objection, data portability, and withdrawal of consent.",
      "We ensure that data transfers outside the EEA comply with applicable legal safeguards.",
    ],
  },
  {
    title: "7. Rights under CCPA",
    content: [
      "California residents have rights under CCPA including knowledge, deletion, and opting out. We do not sell personal information in the traditional sense.",
      "You have the right to request details about our data practices and request deletion of your personal information.",
    ],
  },
  {
    title: "8. Contact information",
    content: [
      <>
        For any data-related requests or questions about this Privacy Policy,
        email us at{" "}
        <Link href="mailto:contact@Seyoutube.com" color="blue.500">
          contact@Seyoutube.com
        </Link>
        .
      </>,
      <Text fontWeight="bold" key="effective-date">
        Effective July 1, 2021
      </Text>,
    ].map((jsx, i) => ({ jsx, key: `contact-${i}` })),
  },
];

const PrivacyPolicy = () => (
  <Box maxW="1240px" mx="auto" p={6} pt={"120px"}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" mb={4}>
        PRIVACY POLICY
      </Heading>
      <Text>
        This Privacy Policy explains how we collect, use and share your personal
        information while you use the Service. By using the Service you agree to
        the collection and use of your personal information in accordance with
        this policy.
      </Text>

      {policySections.map((section, index) => (
        <Box key={index}>
          <Heading as="h2" size="md" mt={4} mb={2}>
            {section.title}
          </Heading>
          {section.content &&
            section.content.map((para, idx) =>
              typeof para === "string" ? (
                <Text key={idx} mb={3}>
                  {para}
                </Text>
              ) : (
                <Text key={para.key} mb={3}>
                  {para.jsx}
                </Text>
              )
            )}
          {section.list && (
            <UnorderedList spacing={3}>
              {section.list.map((item, idx) => (
                <ListItem key={idx}>{item}</ListItem>
              ))}
            </UnorderedList>
          )}
        </Box>
      ))}
    </VStack>
  </Box>
);

export default PrivacyPolicy;
