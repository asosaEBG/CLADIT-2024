import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography, Button, Grid } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const Galeria = () => {
  const [cambios, setCambios] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {}, [cambios]);
  const handleTogglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setCambios(cambios + 1);
  };
  return (
    <Box>
      <Stack
        spacing={4}
        style={{ padding: "5%" }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h3" style={{ textAlign: "center" }}>
          GALERIA CLADIT
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

        <ImageList cols={2}>
          <ImageListItem>
            <img
              src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_2127.jpg`}
              alt="galeria-img"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_2128.jpg`}
              alt="galeria-img"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_2129.jpg`}
              alt="galeria-img"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_2132.jpg`}
              alt="galeria-img"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_2133.jpg`}
              alt="galeria-img"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_2134.jpg`}
              alt="galeria-img"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_2135.jpg`}
              alt="galeria-img"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_2136.jpg`}
              alt="galeria-img"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_2143.jpg`}
              alt="galeria-img"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_2130.jpg`}
              alt="galeria-img"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_2131.jpg`}
              alt="galeria-img"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_2144.jpg`}
              alt="galeria-img"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
      </Stack>
    </Box>
  );
};

export default Galeria;
