import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography, Grid } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
const s3Helper = require("../../../helpers/S3.controller");
const helpers = require("../../../helpers/helpers");
const Galeria2024 = () => {
  const [contador] = useState(0);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    s3Helper
      .listFolderFilesUrl("GALERIA-CLADIT-2024")
      .then((files) => {
        setFiles(helpers.shuffleArray(files));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [contador]);
  return (
    <Box>
      <Stack
        spacing={4}
        style={{ padding: "5%" }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h3" style={{ textAlign: "center" }}>
          GALERIA CLADIT 2024
        </Typography>

        <Grid container alignItems="center" justifyContent="center">
          <Grid xs={12} md={12} lg={6}>
            <video controls style={{ width: "100%" }}>
              <source
                src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/Video+Juan+Medrano+final+3.mp4"
                type="video/mp4"
              />
            </video>
          </Grid>
          <Grid xs={12} md={12} lg={6}>
            <video controls style={{ width: "100%" }}>
              <source
                src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/Video+Alberto+Lozano++final+2.mp4"
                type="video/mp4"
              />
            </video>
          </Grid>
          <Grid xs={12} md={12} lg={6}>
            <video controls style={{ width: "100%" }}>
              <source
                src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/Video+Ana+de+Alba+final+2.mp4"
                type="video/mp4"
              />
            </video>
          </Grid>
        </Grid>
        <ImageList cols={2} variant="woven">
          {files.map((actual, index) => (
            <ImageListItem>
              <img
                src={actual}
                alt={`img-galeria-cladit-2024-${index}`}
                loading="lazy"
                style = {{objectFit:'contain'}}
              />{" "}
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </Box>
  );
};

export default Galeria2024;
