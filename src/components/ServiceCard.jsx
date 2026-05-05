import { Button, Divider, Paper, Typography } from "@mui/material";
import React from "react";

const ServiceCard = (props) => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          p: 3,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {props.title}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          {props.description}
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ bgcolor: "primary.main", color: "background.default" }}
        >
          Learn More
        </Button>
      </Paper>
    </>
  );
};

export default ServiceCard;
