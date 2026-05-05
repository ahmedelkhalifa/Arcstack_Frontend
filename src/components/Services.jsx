import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import ServiceCard from "./ServiceCard";
import { DesignServices, Terminal, Web } from "@mui/icons-material";

const Services = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                bottom: -8,
                width: "100%",
                height: 3,
                bgcolor: "secondary.main",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                bgcolor: "secondary.main",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                color: "background.paper",
                fontWeight: 700,
              }}
            >
              {t("services.title")}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: "background.default",
              textAlign: "center",
              width: "80%",
            }}
          >
            {t("services.subtitle")}
          </Typography>
        </Box>
        <Stack
          spacing={3}
          direction={{ xs: "column", md: "row" }}
          justifyConternt={"center"}
          alignItems={"center"}
          sx={{ width: "100%", mt: 7 }}
        >
          <ServiceCard
            title={t("services.card1.title")}
            description={t("services.card1.description")}
            icon={<Web sx={{ fontSize: 36, color: "background.default" }} />}
          />
          <ServiceCard
            title={t("services.card2.title")}
            description={t("services.card2.description")}
            icon={
              <Terminal sx={{ fontSize: 36, color: "background.default" }} />
            }
          />
          <ServiceCard
            title={t("services.card3.title")}
            description={t("services.card3.description")}
            icon={
              <DesignServices
                sx={{ fontSize: 36, color: "background.default" }}
              />
            }
          />
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "secondary.main",
              color: "background.default",
              mt: 5,
              width: {xs: "100%", md: "33%"},
              height: 50,
            }}
          >
            All Services
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Services;
