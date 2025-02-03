import {
  Heading,
  HStack,
  Image,
  VStack,
  ListItem,
  List,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <Flex
      id="home"
      p={"80px 0"}
      gap={5}
      justify={"space-around"}
      flexDir={{ lg: "row", md: "column", sm: "column", base: "column" }}
    >
      <VStack m={5}>
        <Image
          src={"https://avatars.githubusercontent.com/u/107478598?v=4"}
          borderRadius={"50%"}
        />
      </VStack>
      <VStack
        align={{
          lg: "flex-start",
          md: "center",
          sm: "center",
          base: "center",
        }}
        m={5}
      >
        <Heading
          as="h1"
          fontSize={{
            "2xl": "7xl",
            xl: "6xl",
            lg: "5xl",
            md: "4xl",
            sm: "3xl",
            base: "2xl",
          }}
        >
          Hi, I'm
          <Text
            bgGradient="linear(to-r, purple.200, blue.500)"
            bgClip="text"
            display={"inline"}
          >
            {" "}
            Jitender
          </Text>
          <div className="hand">👋</div>
        </Heading>
        <Heading as="h2" size="lg">
          I'm a
          <Typewriter
            options={{
              strings: [
                "Frontend Developer.",
                "React Developer.",
                "Backend Developer.",
                "MERN Developer.",
              ],
              wrapperClassName: "Typewriter__wrapper",
              autoStart: true,
              loop: true,
            }}
          />
        </Heading>
        <List spacing={3} p={"0 20px"}>
          <ListItem>🌏 Based in India</ListItem>
          <ListItem>👀 I'm looking for a job.</ListItem>
          <ListItem>
            📖 I'm currently learning more about backend development.
          </ListItem>
          <ListItem>☕ Fueled by Coffee</ListItem>
          <ListItem>📧 Jitenderrawat39@gmail.com</ListItem>
        </List>
        <HStack p={"30px 0"} gap={4}>
          <a href="https://github.com/iAmJitenderRawat" target="_blank">
            <BsGithub size={"50px"} />
          </a>
          <a
            href="https://www.aedin.com/in/jitender-b38491217/"
            target="_blank"
          >
            <BsLinkedin size={"50px"} />
          </a>
          <a
            href="https://www.hackerrank.com/jitenderrawat39?hr_r=1"
            target="_blank"
          >
            <FaHackerrank size={"50px"} />
          </a>
          <a href="https://leetcode.com/jitenderrawat39/" target="_blank">
            <SiLeetcode size={"50px"} />
          </a>
        </HStack>
      </VStack>
    </Flex>
  );
};
