import React from "react";
import TextType from "./TextType";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Container,
  IconButton,
  keyframes,
  Stack,
  Typography,
} from "@mui/material";
import heroImage from "../assets/hero_img.webp";
import { KeyboardArrowDown } from "@mui/icons-material";

const Hero = () => {
  const { t } = useTranslation();
  const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
`;
  return (
    <>
      <Box sx={{ height: "100%", zIndex: 1 }}>
        <Container
          maxWidth="lg"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Stack
            sx={{
              gap: { xs: 5, md: 5 },
              flexDirection: { xs: "column", lg: "row" },
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                color: "primary.main",
                flex: 1,
                textAlign: { xs: "center", md: "left" },
                position: "relative",
                zIndex: 1
              }}
            >
              <Typography variant="h2" sx={{ fontWeight: 900, color: "text.primary" }}>
                {t("hero.title")}
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 900, mb: 3, color: "secondary.main" }}>
                {t("hero.title2")}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 400, color: "text.secondary" }}
              >
                {t("hero.subtitle")}
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  mt: 3,
                  width: "250px",
                  bgcolor: "text.primary",
                  color: "background.default",
                  height: "50px",
                }}
              >
                {t("hero.button")}
              </Button>
            </Box>
            <Box
              sx={{
                flex: 1.5,
                bgcolor: "primary.main",
                borderRadius: 2,
                p: 2,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 85%)",
              }}
            >
              <Box
                component={"img"}
                src={heroImage}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Stack>
        </Container>
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton
            sx={{
              animation: `${bounce} 1.5s infinite ease-in-out`,
            }}
            onClick={() => {
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
          >
            <KeyboardArrowDown fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
