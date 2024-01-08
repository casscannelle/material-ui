import React from "react";
import { Box, Container, Typography } from "@mui/material";
import bgImage from "../../assets/bgImage.webp"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Header = () => {
    return (
      <Container
        maxWidth="false"
        disableGutters
        sx={{
          p: {
            xs: 2,
            sm: 5,
            md: 2,
          },
          background: `url(${bgImage}) center center/cover`,
          minHeight: "630px",
          borderRadius: {
            xs: "0px 0px 27px 27px",
            md: "0px 0px 54px 54px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
        
          <Typography
            sx={{
              color: "#fff",
              FontFamily: "Roboto",
              marginTop: "196.5px",
              textAlign: "center",
              fontWeight: "600",
              fontSize: {
                xs: "38px",
                md: "48px",
              },
              lineHeight: "62px",
              mb: 4,
            }}
          >
            Venha explorar o futuro com a gente
          </Typography>
        </Box>
      </Container>
    );
  };
  
  export default Header;