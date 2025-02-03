import { ViewIcon } from "@chakra-ui/icons";
import {
  Grid,
  Heading,
  Box,
  Image,
  GridItem,
  Text,
  Flex,
  Button,
  Divider,
  useColorModeValue,
  Skeleton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { projects } from "../util/data";

export const Projects = () => {
  const bg = useColorModeValue("gray.800", "white");
  const color = useColorModeValue("white", "black");

  return (
    <Box px={{ md: "15%", sm: "10%", base: 5 }} id="projects">
      <Heading className="center ptb-10">Project Section</Heading>
      <Grid
        templateColumns={{
          xl: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          sm: "repeat(1, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        gap={10}
      >
        {projects.length > 0
          ? projects.map((project, i) => {
              const [readmore, setReadmore] = useState(false);
              return (
                <GridItem className="card" key={project.name + i}>
                  <Box>
                    <Skeleton height="200px" isLoaded={!!project.src}>
                      <Image
                        src={`../Images/${project.src}`}
                        alt={project.name}
                      />
                    </Skeleton>
                  </Box>
                  <Skeleton isLoaded={!!project.name}>
                    <Heading fontSize={"xl"} py={5} className="m-10 center">
                      {project.name}
                    </Heading>
                  </Skeleton>

                  <Skeleton isLoaded={!!project.desc}>
                    <Text className="silver">
                      {readmore
                        ? project.desc
                        : project.desc.length > 100 // Check length before slicing
                        ? project.desc.slice(0, 100) + "..."
                        : project.desc}
                      {project.desc.length > 100 && (
                        <Button onClick={() => setReadmore(!readmore)}>
                          {readmore ? "Read Less" : "Read More"}
                        </Button>
                      )}
                    </Text>
                  </Skeleton>

                  <Heading fontSize={"lg"} py={5}>
                    Tech Stack
                  </Heading>
                  <Grid
                    className="burlywood"
                    templateColumns={"repeat(3,1fr)"}
                    gap="5"
                  >
                    {project.tech.length > 0
                      ? project.tech.map((tech, i) => (
                          <GridItem key={tech + i}>{tech}</GridItem>
                        ))
                      : Array(3)
                          .fill("")
                          .map((_, index) => (
                            <Skeleton key={index} height="20px" width="60%" />
                          ))}
                  </Grid>

                  <Divider m={"20px 0"} />

                  <Box>
                    <Flex
                      direction={"column"}
                      justify={"space-between"}
                      align={"center"}
                      gap={4}
                    >
                      <Flex justify={"space-around"} w="100%">
                        <Skeleton isLoaded={!!project.github}>
                          <a href={project.github} target="_blank">
                            <Button
                              leftIcon={<BsGithub />}
                              variant={"outline"}
                              colorScheme={color}
                            >
                              Link
                            </Button>
                          </a>
                        </Skeleton>
                        <Skeleton isLoaded={!!project.website}>
                          <a href={project.website} target="_blank">
                            <Button
                              leftIcon={<ViewIcon />}
                              bg={bg}
                              color={color}
                            >
                              Live
                            </Button>
                          </a>
                        </Skeleton>
                      </Flex>
                    </Flex>
                  </Box>
                </GridItem>
              );
            })
          : // Skeleton for the entire grid
            Array(4)
              .fill("")
              .map((_, index) => (
                <GridItem key={index}>
                  <Box>
                    <Skeleton height="200px" />
                  </Box>
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                  <Divider m={"20px 0"} />
                  <Skeleton height="40px" />
                  <Skeleton height="40px" />
                </GridItem>
              ))}
      </Grid>
    </Box>
  );
};
