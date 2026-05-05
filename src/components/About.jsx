import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import image from "../assets/about_img.jpg";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ alignItems: "center" }}
          spacing={5}
        >
          <Box
            sx={{
              flex: 1,
              width: "100%",
              height: "400px",
              position: "relative",
            }}
          >
            <Box
              component={"img"}
              src={image}
              alt="About Us"
              sx={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: 2,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: { xs: "-15%", md: "0" },
                left: { xs: "0", md: "-10%" },
                height: { xs: "50px", md: "100%" },
                width: { xs: "100%", md: "50px" },
                bgcolor: "primary.main",
                borderRadius: 2,
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, color: "primary.main" }}
            >
              {t("about.title")}
            </Typography>
            <Typography variant="body1" sx={{color: "text.secondary", lineHeight: 1.6}}>{t("about.subtitle")}</Typography>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default About;
