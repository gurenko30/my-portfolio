import './footer.css';

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
<div id="root"></div>
const Footer = () => {
  return (
    <Box
      className="footer"
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "black",

      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" variant="h6">
              Приморский край, грод Артём
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="white" variant="subtitle1">
              {`${new Date().getFullYear()} | создатель | Гуренко Кристина | Дипломный проект`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};


export default Footer;
