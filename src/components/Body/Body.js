import React from "react";
import { Box, Container, Typography } from "@mui/material";


const Body = () => {
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        px: {
          xs: 2,
          sm: 5,
          md: 10,
        },
        my: 8,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontWeight: "600",
          fontSize: "32px",
          color: "#161414",
          mb: 8,
          textAlign: {
            xs: "flex-start",
            md: "center",
          },
        }}
      >
        Conheça nossos serviços
      </Typography>
      <Box/>
    </Container>
  );
};

export default Body;