import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "text.primary", py: 5 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, color: "background.default" }}
          >
            Arcstack
          </Typography>
          <Typography variant="body1" sx={{ color: "background.default" }}>
            {t("hero.subtitle")}
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{
              justifyContent: "space-between",
              alignItems: "flex-start",
              mt: 5,
            }}
          >
            <Box sx={{ flex: 1.5 }}>
              <Typography
                variant="h5"
                sx={{ color: "background.default", fontWeight: 700 }}
              >
                Quick Links
              </Typography>
              <Divider
                sx={{ bgcolor: "background.default", width: {xs: "100%", md: "50%"} }}
              ></Divider>
              <Stack direction={"row"} spacing={2} sx={{ mt: 2 }}>
                <Typography
                  component={"label"}
                  sx={{
                    textDecoration: "none",
                    color: "background.default",
                    cursor: "pointer",
                    display: "block",
                  }}
                  onClick={() => {
                    document.getElementById("home")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  {t("navbar.home")}
                </Typography>
                <Typography
                  component={"label"}
                  sx={{
                    textDecoration: "none",
                    color: "background.default",
                    cursor: "pointer",
                    display: "block",
                  }}
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  {t("navbar.about")}
                </Typography>
                <Typography
                  component={"label"}
                  sx={{
                    textDecoration: "none",
                    color: "background.default",
                    cursor: "pointer",
                    display: "block",
                  }}
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  {t("navbar.services")}
                </Typography>
                <Typography
                  component={"label"}
                  sx={{
                    textDecoration: "none",
                    color: "background.default",
                    cursor: "pointer",
                    display: "block",
                  }}
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  {t("navbar.portfolio")}
                </Typography>
                <Typography
                  component={"label"}
                  sx={{
                    textDecoration: "none",
                    color: "background.default",
                    cursor: "pointer",
                    display: "block",
                  }}
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  {t("navbar.contact")}
                </Typography>
              </Stack>
            </Box>
            <Box sx={{ flex: 1, width: "100%", mt: {xs: 2, md: 0} }}>
              <Typography
                variant="h5"
                sx={{ color: "background.default", fontWeight: 700 }}
              >
                Social Media
              </Typography>
              <Divider
                sx={{ bgcolor: "background.default", width: {xs: "100%", md: "50%"} }}
              ></Divider>
              <Stack
                direction={"row"}
                sx={{ alignItems: "center", gap: 0, mt: 1 }}
              >
                <Tooltip title="Instagram: @arcstack">
                  <IconButton>
                    <Instagram sx={{ color: "background.default" }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Facebook: @arcstack">
                  <IconButton>
                    <Facebook sx={{ color: "background.default" }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn: Soon">
                  <IconButton>
                    <LinkedIn sx={{ color: "background.default" }} />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Box>
            <Box sx={{ flex: 1, width: "100%", mt: {xs: 2, md: 0}}}>
              <Typography
                variant="h5"
                sx={{ color: "background.default", fontWeight: 700 }}
              >
                Our details
              </Typography>
              <Divider
                sx={{ bgcolor: "background.default", width: {xs: "100%", md: "50%"} }}
              ></Divider>
              <Stack
                direction={"row"}
                spacing={1}
                sx={{ alignItems: "center", mt: 2 }}
              >
                <Phone sx={{ color: "background.default" }} />
                <Typography
                  variant="body1"
                  sx={{ color: "background.default" }}
                >
                  +90 548 824 42 29
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                spacing={1}
                sx={{ alignItems: "center", mt: 2 }}
              >
                <Email sx={{ color: "background.default" }} />
                <Typography
                  variant="body1"
                  sx={{ color: "background.default" }}
                >
                  Arcstack.swe@gmail.com
                </Typography>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  mt: 2,
                  height: "50px",
                  bgcolor: "background.default",
                  color: "text.primary",
                }}
              >
                START NOW
              </Button>
            </Box>
          </Stack>
          <Typography variant="body1" sx={{color: "background.default", textAlign: "center", mt: 3}}>
            &copy;{new Date().getFullYear()} Arcstack | All Rights Reserved 
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
