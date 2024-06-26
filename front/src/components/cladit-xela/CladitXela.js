import React from "react";
import View from "../evento/View";
import { Stack, Box } from "@mui/material";

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
      <View evt="08c69aa473d0c84349ef86d36f9be213f54dbc4b52f2520ad63c030e5e010603" />
    </Stack>
  );
};

export default CladitXela;
