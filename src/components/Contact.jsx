import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import ContactImg from "../assets/contact_us.jpg";
import { Email, Phone } from "@mui/icons-material";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  function sendMessage() {
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: nameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
        },
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  }
  return (
    <>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          minHeight: "100vh",
          alignItems: "stretch",
          // overflow: "hidden",
        }}
      >
        {/* LEFT IMAGE */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            height: { xs: "300px", md: "100vh" },
            overflow: "hidden",
            borderTopRightRadius: { xs: 0, md: 200 },
            borderBottomRightRadius: { xs: 100, md: 200 },
            borderBottomLeftRadius: { xs: 100, md: 0 },
          }}
        >
          <Box
            component="img"
            src={ContactImg}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "primary.main",
              opacity: 0.5,
            }}
          />
        </Box>

        {/* RIGHT CONTENT */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 3, md: 6 },
            py: { xs: 5, md: 0 },
            bgcolor: "background.default",
            height: "100vh",
          }}
        >
          <Stack spacing={3} sx={{ width: "100%", maxWidth: "600px" }}>
            {/* CONTACT INFO */}

            {/* FORM */}
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "primary.main",
                }}
              >
                Let's Work Together
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: "text.secondary",
                }}
              >
                Have a project in mind? Get in touch and let’s build something
                great together.
              </Typography>

              <Divider
                sx={{
                  my: 3,
                  borderColor: "secondary.main",
                  borderWidth: 2,
                }}
              />

              <Stack spacing={3}>
                <TextField label="Name" fullWidth inputRef={nameRef} />

                <TextField label="Email" fullWidth inputRef={emailRef} />

                <TextField
                  label="Message"
                  fullWidth
                  multiline
                  rows={5}
                  inputRef={messageRef}
                />

                <Button
                  variant="contained"
                  sx={{
                    height: "50px",
                    fontWeight: 700,
                  }}
                  onClick={() => sendMessage()}
                >
                  Send Message
                </Button>
              </Stack>
            </Paper>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                sx={{ justifyContent: "center" }}
                spacing={3}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Phone />
                  <Typography fontWeight={600}>+90 548 824 42 29</Typography>
                </Stack>

                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Email />
                  <Typography fontWeight={600}>
                    arcstack.swe@gmail.com
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Contact;
