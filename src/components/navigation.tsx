import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import Link from "next/link";

export default function Navigation() {
  return (
    <Flex justify="space-between">
      <Box>Logo</Box>
      <Flex>
        <List>
          <ListItem>
            <Link href="/" title="Home" />
          </ListItem>
          <ListItem>
            <Link href="/products" title="Products" />
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
}
