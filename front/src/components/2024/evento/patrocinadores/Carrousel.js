import React, { useState, useEffect } from "react";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { Grid, CardActionArea, Box, Card, CardMedia } from "@mui/material";
const helpers = require("../../../../helpers/helpers");
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const Carrousel = (props) => {
  const [cambios, setCambios] = useState(0);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const arr_patrocinadores = helpers.chunkArray(props.patrocinadores, 1);
  useEffect(() => {}, [cambios]);
  const handleStepChange = (step) => {
    setActiveStep(step);
    setCambios(cambios + 1);
  };
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid xs={12} md={12} lg={12}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={5000}
        >
          {arr_patrocinadores.map((actual, index) => (
            <Box
              alignItems="center"
              justifyContent="center"
              key={index}
              style={{ width: "100%" }}
            >
              {Math.abs(activeStep - index) <= 2 ? (
                <Grid container justifyContent="center" alignItems="stretch">
                  {actual.map((patrocinador, indice) => (
                    <Grid
                      xs={6}
                      md={6}
                      lg={2}
                      item
                      key={`patrocinador-${indice}`}
                      style={{
                        display: "flex",
                        backgroundColor: "transparent",
                      }}
                      p={5}
                    >
                      <Card
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                          backgroundColor: "transparent",
                        }}
                      >
                        <CardActionArea
                          onClick={() => {
                            window.open(patrocinador.url, "_blank");
                          }}
                        >
                          <CardMedia
                            component="img"
                            style={{
                              width: "100%",
                              height: "140px",
                              objectFit: "contain",
                              padding: "5%",
                            }}
                            image={patrocinador.promocional_landing}
                            alt={`logo ${patrocinador.nombre}`}
                          />
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              ) : null}
            </Box>
          ))}
        </AutoPlaySwipeableViews>
      </Grid>
    </Grid>
  );
};

export default Carrousel;
