import React from "react";
import Navbar from "./../components/Navbar";
import Hero from "../components/Hero.jsx";
import { Box } from "@mui/material";
import backgroundImage from "../assets/background.jpg";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Features from "../components/Features.jsx";
import Portfolio from "../components/Portfolio.jsx";
const Home = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
          '&::after': {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "background.default",
            opacity: 0.8,
            zIndex: 0,
          }
        }}
      >
        <Navbar active="home" />
        <Hero />
      </Box>
      <Box id="about" sx={{py: 10}}>
        <About />
      </Box>
      <Box id="features" sx={{py: 10}}>
        <Features />
      </Box>
      <Box id="services" sx={{py: 10, bgcolor: "primary.main", color: "background.default"}}>
        <Services />
      </Box>
      <Box id="portfolio" sx={{py: 10}}>
        <Portfolio />
      </Box>
    </>
  );
};

export default Home;
