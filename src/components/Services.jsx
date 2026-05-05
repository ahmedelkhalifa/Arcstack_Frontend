import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import ServiceCard from "./ServiceCard";

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
          sx={{ mt: 3, width: "100%" }}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"stretch"}
          flexWrap={"wrap"}
        >
          <ServiceCard
            title={t("services.service1.title")}
            description={t("services.service1.description")}
          />
          <ServiceCard
            title={t("services.service1.title")}
            description={t("services.service1.description")}
          />
          <ServiceCard
            title={t("services.service1.title")}
            description={t("services.service1.description")}
          />
        </Stack>
      </Container>
    </>
  );
};

export default Services;
