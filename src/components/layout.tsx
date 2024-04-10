import { Box } from "@chakra-ui/react";
import Navigation from "./navigation";
import { ReactNode } from "react";
import SideBar from "./sidebar";

export default function Layout(props: { children: ReactNode }) {
  return (
    <Box>
      <Navigation />
      <main style={{ display: "flex", height: "100vh", width: "100vw" }}>
        <SideBar />
        {props.children}
      </main>
    </Box>
  );
}
