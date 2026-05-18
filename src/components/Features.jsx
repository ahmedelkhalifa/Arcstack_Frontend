import {
    alpha,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import responsiveImage from "../assets/responsive.webp";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ alignItems: "center", width: "100%", gap: 5 }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{ color: "text.primary" }}
            >
              {t("features.feature1.title")}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "primary.main",
                fontWeight: 900,
                fontSize: { xs: "2.5rem", md: "3rem" },
              }}
            >
              {t("features.feature1.title2")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontWeight: 400,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: 1.6,
                mt: 2,
              }}
            >
              {t("features.feature1.description")}
            </Typography>
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                width: "50%",
                borderColor: "text.primary",
                color: "text.primary",
                height: "50px",
                position: "relative",
                transition: "0.3s ease",
                "&:hover .button-hover": {
                  width: "100%",
                },
                "&:hover": {
                  color: "background.default",
                },
              }}
            >
              {t("features.feature1.button")}
              <Box
                className="button-hover"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "0%",
                  bgcolor: "text.primary",
                  zIndex: -1,
                  transition: "0.3s ease",
                }}
              />
            </Button>
          </Box>
          <Box
            sx={{
              flex: 1,
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: -10,
                left: -10,
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                bgcolor: "primary.main",
                opacity: 0.9,
                zIndex: -1,
              },
            }}
          >
            <Box
              component={"img"}
              src={responsiveImage}
              alt="Responsive Design"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Stack>
        {/* <Divider
          sx={{ borderWidth: 2, borderColor: "secondary.main", mt: 2, mb: 3 }}
        /> */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ alignItems: "center", gap: 3, mt: 3 }}
        >
          <Box
            sx={{
              flex: 1,
              bgcolor: "primary.main",
              p: 3,
              borderRadius: 2,
              borderBottomRightRadius: "30%",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                color: "background.default",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              {t("features.feature2.title")}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "secondary.main",
                fontWeight: 900,
                fontSize: { xs: "1.8rem", md: "2.5rem" },
              }}
            >
              {t("features.feature2.title2")}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              border: "2px solid",
              borderColor: "primary.main",
              p: 3,
              borderRadius: 2,
              borderTopRightRadius: "30%",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                color: "text.primary",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              {t("features.feature3.title")}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "primary.main",
                fontWeight: 900,
                fontSize: { xs: "1.8rem", md: "2.5rem" },
              }}
            >
              {t("features.feature3.title2")}
            </Typography>
          </Box>
        </Stack>
        <Divider
          sx={{ borderWidth: 2, borderColor: "secondary.main", mt: 10, mb: 10 }}
        />
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ alignItems: "center", gap: 5 }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
              cursor: "pointer",
              transition: "0.3s ease",
              p: 2,
              borderRadius: 5,
              "&:hover": (theme) => ({
                transform: "translateY(-5px)",
                boxShadow: `0 10px 25px ${alpha(theme.palette.secondary.main, 0.3)}`,
                transition: "0.3s ease",
              }),
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  border: "2px solid",
                  borderColor: "secondary.main",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 900, color: "secondary.main" }}
                >
                  1
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flex: 5 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, fontSize: { xs: "1.5rem", md: "2rem" } }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.6, mt: 1 }}
              >
                Reach us using the form in Contact section or directly via our
                whatsapp number
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
              cursor: "pointer",
              transition: "0.3s ease",
              p: 2,
              borderRadius: 5,
              "&:hover": (theme) => ({
                transform: "translateY(-5px)",
                boxShadow: `0 10px 25px ${alpha(theme.palette.secondary.main, 0.3)}`,
                transition: "0.3s ease",
              }),
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  border: "2px solid",
                  borderColor: "secondary.main",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 900, color: "secondary.main" }}
                >
                  2
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flex: 5 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, fontSize: { xs: "1.5rem", md: "2rem" } }}
              >
                Get a Free Design
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.6, mt: 1 }}
              >
                Our Team will create a free design for your project and send it
                to you within 24 hours
              </Typography>
            </Box>
          </Box>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ alignItems: "center", gap: 5, mt: 3 }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
              cursor: "pointer",
              transition: "0.3s ease",
              p: 2,
              borderRadius: 5,
              "&:hover": (theme) => ({
                transform: "translateY(-5px)",
                boxShadow: `0 10px 25px ${alpha(theme.palette.secondary.main, 0.3)}`,
                transition: "0.3s ease",
              }),
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  border: "2px solid",
                  borderColor: "secondary.main",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 900, color: "secondary.main" }}
                >
                  3
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flex: 5 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, fontSize: { xs: "1.5rem", md: "2rem" } }}
              >
                You Approve, We Build
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.6, mt: 1 }}
              >
                Approve the design and we will start building your project
                immediately.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
              cursor: "pointer",
              transition: "0.3s ease",
              p: 2,
              borderRadius: 5,
              "&:hover": (theme) => ({
                transform: "translateY(-5px)",
                boxShadow: `0 10px 25px ${alpha(theme.palette.secondary.main, 0.3)}`,
                transition: "0.3s ease",
              }),
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  border: "2px solid",
                  borderColor: "secondary.main",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 900, color: "secondary.main" }}
                >
                  4
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flex: 5 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, fontSize: { xs: "1.5rem", md: "2rem" } }}
              >
                Have Support 24/7
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.6, mt: 1 }}
              >
                Our service doesn't end when we deliver, reach us if any
                problems happen :)
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Features;
