import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Image,
  Button,
  Grid,
} from "@chakra-ui/react";
// import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { DownloadIcon } from "@chakra-ui/icons";
import resume from "../assests/pdf/JitenderResume.pdf";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Box>
            <Image src="../Images/logoGif.gif" w={"50%"} />
            <Text>Designed and Developed</Text>
            <Text>by Jitender Rawat</Text>
          </Box>
          <Stack spacing={6}>
            <Text fontSize={"sm"}>
              © {year} Jitender Rawat All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Grid templateColumns={"repeat(2,1fr)"} gap={5}>
            <Link href={"#about"}>About</Link>
            <Link href={"#skills"}>Skills</Link>
            <Link href={"#stats"}>Stats</Link>
            <Link href={"#projects"}>Projects</Link>
            <Link href={"#contact"}>Contact</Link>
          </Grid>
          <Stack align={"flex-start"}>
            <ListHeader>Download Resume From Here</ListHeader>
            <a
              href={resume}
              target="_blank"
            >
              <Button
                bg={useColorModeValue("green.400", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Download"
                leftIcon={<DownloadIcon />}
              >
                Download
              </Button>
            </a>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
