import React from "react";
import Box from "@mui/material/Box";
import ViewPrograma from "../evento/programa/Programa";
const ProgramaQZ = () => {
  return (
    <Box
      sx={{
        paddingLeft: { lg: "5%", xs: "1%", md: "3%" },
        paddingRight: { lg: "5%", xs: "1%", md: "3%" },
      }}
    >
      <ViewPrograma
        speaker={false}
        hash="08c69aa473d0c84349ef86d36f9be213f54dbc4b52f2520ad63c030e5e010603"
      />
    </Box>
  );
};

export default ProgramaQZ;

{
  /*<Box component="section" className="video-section">
          <Grid container></Grid>
          <video autoPlay muted loop id="myVideo">
            <source
              src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/RESUMEN+CLADIT+2023.mp4"
              type="video/mp4"
            />
          </video>
  </Box>*/
}
