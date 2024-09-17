import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography, Grid } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
const Galeria2023 = () => {
  return (
    <Box>
      <Stack
        spacing={4}
        style={{ padding: "5%" }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h3" style={{ textAlign: "center" }}>
          GALERIA CLADIT 2023
        </Typography>

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

export default Galeria2023;
