import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
const Registro = () => {
  return (
    <Box>
      <Stack spacing={4}>
        <Grid container>
          <Grid
            xs={12}
            md={6}
            lg={6}
            style={{ padding: "5%", textAlign: "justify" }}
          >
            <Stack spacing={4}>
              <Typography variant="h1">Registro</Typography>
              <Typography variant="p" style={{ fontSize: "1.5em" }}>
                Si presenta alguna dificultad o inconveniente para registrarse o
                si necesita inscribir a un grupo de personas, favor escribanos a
                ebg@ebg.edu.gt para asistirle
              </Typography>
              <Typography
                variant="p"
                style={{ fontSize: "1.5em", color: "red" }}
              >
                Necesitará usar un e-mail diferente para cada persona. Si elige
                la inscripción grupal el sistema le hará la sumatoria con los
                descuentos que correspondan por volumen y la Asociación Bancaria
                le enviará al administrador de dicho grupo una nota de cargo
                para que tramite el pago correspondiente.
              </Typography>
              <Button
                startIcon={<DriveFileRenameOutlineIcon />}
                onClick={() => {
                  window.open(
                    "https://ebg.edu.gt/inscripcion/129f0d0c6df63b15f4c71caef724c6cbd0101c7c62123b5f3a78e50411555a2f",
                    "_blank"
                  );
                }}
              >
                Click para registrarse
              </Button>
            </Stack>
          </Grid>
          <Grid xs={12} md={6} lg={6} style={{ padding: "5%" }}>
            <img
              src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_7466+(1).jpg"
              loading="lazy"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Registro;

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
