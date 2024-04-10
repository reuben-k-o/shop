import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import Link from "next/link";

export default function Navigation() {
  return (
    <Flex border="1px solid green" justify="space-between">
      <Flex>Logo</Flex>
      <Flex flexDir="row">
        <List flexDir="row">
          <ListItem>
            <Link href="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link href="/products">Products </Link>
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
}
