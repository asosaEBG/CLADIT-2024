import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const CladitXela = () => {
  return (
    <Box>
      <Grid container alignItems="center" justifyContent="center">
        <Grid xs={12} md={12} lg={6} style={{ textAlign: "center" }}>
          <Typography variant="h2">Muy pronto más información</Typography>
        </Grid>
        <Grid xs={12} md={12} lg={6} style={{ textAlign: "center" }}>
          {" "}
          <img
            src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/1714668428125-CLADIT%20XELA%202024%20%282%29.jpg"
            style={{ width: "100%", padding: "10%" }}
            alt="img-cladit-xela"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CladitXela;
