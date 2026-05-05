import { Web } from "@mui/icons-material";
import { Button, Divider, Paper, Typography, Box } from "@mui/material";
import React from "react";

const ServiceCard = (props) => {
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          px: 3,
          py: 5,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          position: "relative",
          "&:nth-child(1)": {
            borderTopLeftRadius: {xs: 6, md: 50},
          },
          "&:nth-child(3)": {
            borderTopRightRadius: {xs: 6, md: 50},
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, textAlign: "center", mt: 2 }}
        >
          {props.title}
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body1" sx={{ flexGrow: 1, textAlign: "center" }}>
          {props.description}
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ bgcolor: "primary.main", color: "background.default", mt: 2 }}
        >
          Learn More
        </Button>
        <Box
          sx={{
            content: '""',
            position: "absolute",
            top: "-1%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            bgcolor: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.icon}
        </Box>
      </Paper>
    </>
  );
};

export default ServiceCard;
