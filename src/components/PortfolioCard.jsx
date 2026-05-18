import React from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const PortfolioCard = (props) => {
  const {t} = useTranslation();
  return (
    <>
      <Paper
        sx={{
          width: "100%",
          height: { xs: "60vh", md: "70vh" },
          borderRadius: 5,
          overflow: "hidden",
          cursor: "pointer",
          transition: "0.3s ease",
          "&:hover": { transform: "translateY(-10px)" },
          "&:hover .portfolio-btn-hover": { width: "100%" },
          "&:hover .portfolio-btn": { color: "background.default" },
          "&:hover .image": { transform: "scale(1.2)" },
        }}
        elevation={3}
        onClick={() => {
                  window.open(props.link, "_blank");
                }}
      >
        <Stack sx={{ gap: 2, height: "100%" }}>
          <Box sx={{ flex: 3, overflow: "hidden" }}>
            <Box
              className="image"
              component={"img"}
              src={props.image}
              loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "0.3s ease",
              }}
            />
          </Box>
          <Box sx={{ flex: 2 }}>
            <Box sx={{ px: 4, mt: 2 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: "text.primary", fontSize: 24 }}
              >
                {props.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mt: 2,
                  lineHeight: 1.6,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                  overflow: "hidden",
                }}
              >
                {props.subtitle}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ px: 4 }}>
              <Button
                className="portfolio-btn"
                variant="outlined"
                sx={{
                  width: "100%",
                  borderColor: "text.primary",
                  color: "text.primary",
                  height: "50px",
                  position: "relative",
                  zIndex: 1,
                  transition: "0.3s ease",
                }}
                onClick={() => {
                  window.open(props.link, "_blank");
                }}
              >
                {t("portfolio.button")}
                <Box
                  className="portfolio-btn-hover"
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
          </Box>
        </Stack>
      </Paper>
    </>
  );
};

export default PortfolioCard;
