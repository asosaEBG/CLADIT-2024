import React, { useState, useEffect } from "react";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import {
  Grid,
  CardActionArea,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
const helpers = require("../../helpers/helpers");
const admin_service = require("../../helpers/admin_service");

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const Carrousel = (props) => {
  const [contador] = useState(0);
  const [cambios, setCambios] = useState(0);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [conferencistas, setConferencistas] = useState([]);
  useEffect(() => {
    admin_service
      .getData(
        "/conferencista/read/08c69aa473d0c84349ef86d36f9be213f54dbc4b52f2520ad63c030e5e010603"
      )
      .then((response) => {
        setConferencistas(response.data.response.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [contador]);

  useEffect(() => {}, [cambios]);
  const handleStepChange = (step) => {
    setActiveStep(step);
    setCambios(cambios + 1);
  };
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Typography variant="h4">Conferencistas</Typography>
      <Grid xs={12} md={12} lg={12}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={5000}
        >
          {conferencistas.map((actual, index) => (
            <Box
              alignItems="center"
              justifyContent="center"
              key={index}
              style={{ width: "100%" }}
            >
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  container
                  justifyContent="center"
                  alignItems="stretch"
                  key={index}
                >
                  <Card
                    style={{
                      width: "100%",
                      backgroundColor: "transparent",
                    }}
                  >
                    <CardMedia
                      component="img"
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "contain",
                      }}
                      image={actual.foto}
                      alt={`logo ${actual.nombre}`}
                    />
                    <CardContent style={{ textAlign: "center" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {actual.nombre}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {actual.puesto}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {actual.institucion}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {actual.pais}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ) : null}
            </Box>
          ))}
        </AutoPlaySwipeableViews>
      </Grid>
    </Grid>
  );
};

export default Carrousel;
