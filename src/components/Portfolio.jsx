import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../assets/menex_mockup.webp";
import img2 from "../assets/arcstack_mockup.webp";
import img3 from "../assets/coffee_shop_mockup.webp";
import PortfolioCard from "./PortfolioCard.jsx";

const Portfolio = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: "Restaurant Digital Menu",
      subtitle:
        "Modern QR-based menu platform designed to improve customer experience and simplify restaurant operations.",
      link: "https://ahmedelkhalifa.github.io/Web_page1/",
      image: img1,
    },
    {
      title: "Coffee Shop Website",
      subtitle:
        "A cozy and modern café experience crafted for coffee lovers, featuring handcrafted drinks, fresh pastries, and a warm atmosphere to relax and connect.",
      link: "https://ahmedelkhalifa.github.io/Web_page1/",
      image: img3,
    },
    {
      title: "Business Management Dashboard",
      subtitle:
        "Custom system that helps businesses organize workflows, manage data, and improve efficiency.",
      link: "https://github.com/ahmedelkhalifa/Web_page1",
      image: img2,
    },
  ];
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                bottom: -8,
                left: 0,
                width: "70%",
                height: "6px",
                bgcolor: "secondary.main",
                borderRadius: "999px",
                opacity: 0.9,
              },

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -8,
                left: "72%",
                width: "12px",
                height: "6px",
                bgcolor: "primary.light",
                borderRadius: "999px",
              },
            }}
          >
            {t("portfolio.title")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.primary", lineHeight: 1.6, textAlign: "center" }}
          >
            {t("portfolio.subtitle")}
          </Typography>
        </Box>
        <Grid container sx={{mt: 3, alignItems: "stretch"}} spacing={2}>
          {projects.map(p => (
            <Grid size={{xs: 12, sm: 6, md: 4}} sx={{mt: 2}}>
              <PortfolioCard title={p.title} subtitle={p.subtitle} link={p.link} image={p.image}/>
            </Grid>
          ))}
        </Grid>
        <Box sx={{mt: 4, display: "flex", justifyContent: "center"}}>
          <Button variant="contained" sx={{width: "300px", height: "50px"}}>
            See More 
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Portfolio;
