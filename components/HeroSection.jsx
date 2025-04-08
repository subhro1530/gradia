import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Box
      as="section"
      bg="gray.50"
      py={20}
      px={4}
      textAlign="center"
      minH="60vh"
    >
      <Heading
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
        color="blue.700"
      >
        Welcome to Gradia
      </Heading>
      <Text fontSize="lg" maxW="2xl" mx="auto" mt={4} color="gray.600">
        Your AI-powered classroom for smarter, personalized learning. Discover
        study materials, get custom questions, and level up!
      </Text>

      <Stack direction="column" spacing={4} mt={8} align="center">
        <Button colorScheme="blue" size="lg" px={8} _hover={{ bg: "blue.700" }}>
          Get Started
        </Button>
      </Stack>
    </Box>
  );
}
