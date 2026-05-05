import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Language, Menu } from "@mui/icons-material";
import i18n from "../i18n.js";

const Navbar = ({ active }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  function changeLanguage() {
    const newLang = i18n.language === "en" ? "tr" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  }
  return (
    <>
      <AppBar
        position="static"
        sx={{
          py: 2,
          px: 10,
          bgcolor: "background.default",
          color: "text.primary",
          zIndex: 10,
          display: { xs: "none", md: "block" },
        }}
        elevation={5}
      >
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Typography variant="h4">{t("navbar.logo")}</Typography>
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Typography
              component={"a"}
              href="#"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                ":after":
                  active === "home"
                    ? {
                        content: '""',
                        display: "block",
                        width: "100%",
                        height: 2,
                        bgcolor: "secondary.main",
                      }
                    : {},
              }}
            >
              {t("navbar.home")}
            </Typography>
            <Typography
              component={"label"}
              sx={{
                textDecoration: "none",
                color: "text.primary",
                cursor: "pointer",
                ":after":
                  active === "about"
                    ? {
                        content: '""',
                        display: "block",
                        width: "100%",
                        height: 2,
                        bgcolor: "secondary.main",
                      }
                    : {},
              }}
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({
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
                color: "text.primary",
                cursor: "pointer",
                ":after":
                  active === "services"
                    ? {
                        content: '""',
                        display: "block",
                        width: "100%",
                        height: 2,
                        bgcolor: "secondary.main",
                      }
                    : {},
              }}
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({
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
                color: "text.primary",
                cursor: "pointer",
                ":after":
                  active === "portfolio"
                    ? {
                        content: '""',
                        display: "block",
                        width: "100%",
                        height: 2,
                        bgcolor: "secondary.main",
                      }
                    : {},
              }}
              onClick={() => {
                document.getElementById("portfolio")?.scrollIntoView({
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
                color: "text.primary",
                cursor: "pointer",
                ":after":
                  active === "contact"
                    ? {
                        content: '""',
                        display: "block",
                        width: "100%",
                        height: 2,
                        bgcolor: "secondary.main",
                      }
                    : {},
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
            <IconButton
              onClick={() => changeLanguage()}
              sx={{ color: "text.primary" }}
            >
              <Language />
              <Typography sx={{ ml: 1, fontWeight: 700 }}>
                {i18n.language === "en" ? "EN" : "TR"}
              </Typography>
            </IconButton>
          </Box>
        </Stack>
      </AppBar>
      <Box
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
          alignItems: "center",
          justifyContent: "space-between",
          py: 3,
          px: 5,
          zIndex: 10,
        }}
      >
        <Typography variant="h4">{t("navbar.logo")}</Typography>
        <IconButton onClick={() => setOpen(!open)}>
          <Menu />
        </IconButton>
      </Box>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: "50vw", height: "100vh", bgcolor: "background.default" }}
        >
          <Stack direction="column" sx={{ px: 3, py: 5, gap: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              {t("navbar.logo")}
            </Typography>
            <Typography
              component={"a"}
              href="#"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                position: "relative",
                "&::after":
                  active === "home"
                    ? {
                        position: "absolute",
                        bottom: -6,
                        content: '""',
                        display: "block",
                        width: "100%",
                        height: "2px",
                        bgcolor: "secondary.main",
                      }
                    : {},
              }}
            >
              {t("navbar.home")}
            </Typography>
            <Typography
              component={"a"}
              href="#"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                position: "relative",
                "&::after":
                  active === "about"
                    ? {
                        position: "absolute",
                        bottom: -6,
                        content: '""',
                        display: "block",
                        width: "100%",
                        height: "2px",
                        bgcolor: "secondary.main",
                      }
                    : {},
              }}
            >
              {t("navbar.about")}
            </Typography>
            <Typography
              component={"a"}
              href="#"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                position: "relative",
                "&::after":
                  active === "services"
                    ? {
                        position: "absolute",
                        bottom: -6,
                        content: '""',
                        display: "block",
                        width: "100%",
                        height: "2px",
                        bgcolor: "secondary.main",
                      }
                    : {},
              }}
            >
              {t("navbar.services")}
            </Typography>
            <Typography
              component={"a"}
              href="#"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                position: "relative",
                "&::after":
                  active === "portfolio"
                    ? {
                        position: "absolute",
                        bottom: -6,
                        content: '""',
                        display: "block",
                        width: "100%",
                        height: "2px",
                        bgcolor: "secondary.main",
                      }
                    : {},
              }}
            >
              {t("navbar.portfolio")}
            </Typography>
            <Typography
              component={"a"}
              href="#"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                position: "relative",
                "&::after":
                  active === "contact"
                    ? {
                        position: "absolute",
                        bottom: -6,
                        content: '""',
                        display: "block",
                        width: "100%",
                        height: "2px",
                        bgcolor: "secondary.main",
                      }
                    : {},
              }}
            >
              {t("navbar.contact")}
            </Typography>
            <IconButton
              onClick={() => changeLanguage()}
              sx={{ color: "text.primary", justifyContent: "flex-start" }}
            >
              <Language />
              <Typography sx={{ ml: 1, fontWeight: 700 }}>
                {i18n.language === "en" ? "EN" : "TR"}
              </Typography>
            </IconButton>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
