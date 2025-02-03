import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
  Button,
  Link,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        aria-label="HamburgerIcon"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        display={{ md: "none", sm: "block", base: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        display={{ md: "none", sm: "block", base: "block" }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bgGradient="linear(to-r, purple.200, blue.500)">
            Sections
          </DrawerHeader>

          <DrawerBody bgGradient="linear(to-r, purple.200, blue.500)">
            <VStack>
              <Button
                border={"none"}
                bgGradient="linear(to-r, purple.200, blue.500)"
                _hover={{ color: "white", bg: "red.500" }}
                w={"80%"}
                m={"auto"}
              >
                <Link href="#home">Home</Link>
              </Button>
              <Button
                border={"none"}
                bgGradient="linear(to-r, purple.200, blue.500)"
                _hover={{ color: "white", bg: "red.500" }}
                w={"80%"}
                m={"auto"}
              >
                <Link href="#about">About</Link>
              </Button>
              <Button
                border={"none"}
                bgGradient="linear(to-r, purple.200, blue.500)"
                _hover={{ color: "white", bg: "red.500" }}
                w={"80%"}
                m={"auto"}
              >
                <Link href="#skills">Skills</Link>
              </Button>
              <Button
                border={"none"}
                bgGradient="linear(to-r, purple.200, blue.500)"
                _hover={{ color: "white", bg: "red.500" }}
                w={"80%"}
                m={"auto"}
              >
                <Link href="#stats">Stats</Link>
              </Button>
              <Button
                border={"none"}
                bgGradient="linear(to-r, purple.200, blue.500)"
                _hover={{ color: "white", bg: "red.500" }}
                w={"80%"}
                m={"auto"}
              >
                <Link href="#projects">Projects</Link>
              </Button>
              <Button
                border={"none"}
                bgGradient="linear(to-r, purple.200, blue.500)"
                _hover={{ color: "white", bg: "red.500" }}
                w={"80%"}
                m={"auto"}
              >
                <Link href="#contact">Contact</Link>
              </Button>
            </VStack>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
