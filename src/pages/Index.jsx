import { Box, Button, Container, Flex, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh" bg="white">
        {/* Navigation Bar */}
        <Box as="nav" w="full" py={4} px={8} boxShadow="sm">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg" color="gray.800">
              Creative Agency
            </Heading>
            <Stack direction="row" spacing={4}>
              <Link href="#" p={2} fontSize="md" fontWeight="medium" color="gray.600">
                Home
              </Link>
              <Link href="#" p={2} fontSize="md" fontWeight="medium" color="gray.600">
                Services
              </Link>
              <Link href="#" p={2} fontSize="md" fontWeight="medium" color="gray.600">
                Portfolio
              </Link>
              <Link href="#" p={2} fontSize="md" fontWeight="medium" color="gray.600">
                About
              </Link>
              <Link href="#" p={2} fontSize="md" fontWeight="medium" color="gray.600">
                Contact
              </Link>
            </Stack>
          </Flex>
        </Box>

        {/* Hero Section */}
        <Flex align="center" justify="center" flex="1" p={8}>
          <VStack spacing={6}>
            <Heading as="h2" size="2xl" fontWeight="bold" textAlign="center" color="gray.800">
              Unleashing Creativity with Every Project
            </Heading>
            <Text fontSize="lg" color="gray.500">
              We help brands stand out in the digital age.
            </Text>
            <Button rightIcon={<FaRocket />} colorScheme="purple" size="lg">
              Get Started
            </Button>
          </VStack>
        </Flex>

        {/* Footer */}
        <Box as="footer" bg="gray.100" py={6}>
          <Flex justify="space-around" align="center">
            <Text fontSize="sm" color="gray.600">
              © 2023 Creative Agency. All rights reserved.
            </Text>
            <Stack direction="row" spacing={4}>
              <Link href="#" fontSize="sm" color="gray.600">
                Privacy Policy
              </Link>
              <Link href="#" fontSize="sm" color="gray.600">
                Terms of Service
              </Link>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
