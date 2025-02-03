import React from "react";
import {
  Button,
  Flex,
  Image,
  Tab,
  TabList,
  Tabs,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Sidebar } from "./Sidebar";
import PdfModal from "./Modal";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      id="navbar"
      justify={"space-between"}
      align={"center"}
      p={"10px"}
      bgGradient="linear(to-r, purple.200, blue.500)"
    >
      <Sidebar />
      <Image src="../Images/logoGif.gif" w={"60px"} h={"60px"} p={1} />
      <Tabs
        variant="unstyled"
        display={{ lg: "block", md: "block", sm: "none", base: "none" }}
      >
        <TabList>
          <Tab _selected={{ color: "white", bg: "red.500" }}>
            <a href="#home">Home</a>
          </Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>
            <a href="#about">About</a>
          </Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>
            <a href="#skills">Skills</a>
          </Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>
            <a href="#stats">Stats</a>
          </Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>
            <a href="#projects">Projects</a>
          </Tab>
          <Tab _selected={{ color: "white", bg: "red.500" }}>
            <a href="#contact">Contact</a>
          </Tab>
        </TabList>
      </Tabs>
      <PdfModal />
      <Button bg={"Background"} onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  );
};