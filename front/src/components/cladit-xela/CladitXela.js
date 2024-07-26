import React from "react";
import View from "../evento/View";
import { Stack, Box, Button } from "@mui/material";
import HighlightAltIcon from "@mui/icons-material/HighlightAlt";

const CladitXela = () => {
  return (
    <Stack spacing={5}>
      <Box
        style={{}}
        sx={{
          width: "100%",
          height: { lg: "40vh", md: "20vh", xs: "5vh" },
          overflow: "hidden",
          position: "relative",
        }}
      >
        <video
          autoPlay
          muted
          playsInline
          loop
          style={{
            width: "100vw",
            height: "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <source
            src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/1718318732.mp4"
            type="video/mp4"
          />
        </video>
      </Box>
      <Button
        style={{ backgroundColor: "#292F3B", color: "white", height:'70px' }}
        href={
          process.env.REACT_APP_URL_INSCRIPCION +
          "08c69aa473d0c84349ef86d36f9be213f54dbc4b52f2520ad63c030e5e010603"
        }
        target="_blank"
        startIcon={<HighlightAltIcon />}
      >
        Inscríbete en Línea
      </Button>
      <img
        src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/tarifas.png"
        style={{ width: "100%" }}
      />
      <View evt="08c69aa473d0c84349ef86d36f9be213f54dbc4b52f2520ad63c030e5e010603" />
    </Stack>
  );
};

export default CladitXela;
