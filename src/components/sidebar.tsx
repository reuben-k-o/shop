import { Box, Text } from "@chakra-ui/react";

export default function SideBar() {
  return (
    <Box w="12vw" h="100%" minH="100vh" ml="1rem" mt="1.5rem" borderRight="1px solid black">
      <Text>All products</Text>
      <Text>Some products</Text>
      <Text>New products</Text>
    </Box>
  );
}
