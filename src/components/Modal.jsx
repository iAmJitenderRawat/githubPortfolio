import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import resume from "../assests/pdf/JitenderResume.pdf";

const PdfModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button leftIcon={<ViewIcon />} onClick={onOpen} bg={"blue.600"}>
        Resume
      </Button>
      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Resume</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <iframe
              // src={"https://arxiv.org/pdf/quant-ph/0410100.pdf"}
              src={resume}
              width={"100%"}
              height={window?.innerHeight ?? "600px"}
              type="application/pdf"
            ></iframe> */}
            <object
              data={resume}
              type="application/pdf"
              width="100%"
              height="600px"
            >
              <p>Your browser does not support PDF viewing.</p>{" "}
              {/* Fallback message */}
            </object>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PdfModal;
