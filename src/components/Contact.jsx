import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, Button, Flex, Heading, Image, useToast } from "@chakra-ui/react";

export const Contact = () => {
  const form = useRef();
  const [loading, setLoading]=useState(false);
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((res) => setLoading(false))
      .catch((err) => console.log('err', err));
    toast({
      title: "Mail Sent!",
      description: "Thanks for contacting me. I will get back to you soon.",
      position: "top",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box className="center ptb-10" id="contact">
      <Heading>Contact</Heading>
      <Flex
        flexDir={{
          xl: "row",
          lg: "row",
          md: "column",
          sm: "column",
          base: "column",
        }}
      >
        <Box
          w={{ xl: "40%", lg: "45%", md: "85%", sm: "95%", base: "98%" }}
          m={"auto"}
        >
          <Image src="../Images/contact.png" m={"auto"} />
        </Box>
        <Box
          id="form"
          w={{ xl: "40%", lg: "45%", md: "85%", sm: "95%", base: "99%" }}
          m={"auto"}
        >
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" required />
            <label>Email</label>
            <input type="email" name="email" required />
            <label>Message</label>
            <textarea type="text" name="message" rows={3} required />
            <Button type="submit" isLoading={loading} loadingText="Sending...">Send</Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};
