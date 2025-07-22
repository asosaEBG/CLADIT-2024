import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
const helpers = require("../../../../helpers/helpers");
const Patrocinadores = (props) => {
  const [contador] = useState(0);
  const [patrocinadores, setPatrocinadores] = useState([]);
  useEffect(() => {
    setPatrocinadores(helpers.classifyByField(props.patrocinadores, "tipo"));
  }, [contador]);
  return (
    <Stack spacing={5} p={5}>
      {patrocinadores.map((actual, indice) => (
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          key={`segmento-patrocinadores-${indice}`}
        >
          <Grid xs={12} md={12} lg={12} style={{ textAlign: "left" }} p={2}>
            <Typography variant="h4">
              {actual[0].tipo}
            </Typography>
          </Grid>
          {actual.map((curr) => (
            <Grid
              key={curr.UniqueID}
              xs={12}
              md={12}
              lg={2}
              style={{ textAlign: "center" }}
              p={2}
            >
              <Card>
                <CardActionArea
                  onClick={() => {
                    window.open(curr.url, "_blank");
                  }}
                >
                  <CardMedia
                    style={actual[0].tipo == 'DIAMANTE' ? {
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                    } : {
                      width: "100%",
                      height: "150px",
                      objectFit: "contain",
                      padding: "3%",
                    }}
                    component="img"
                    image={curr.promocional_landing}
                    alt="sponsor-img"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
          <Grid xs={12} md={12} lg={12} style={{ textAlign: "center" }} p={2}>
            <Divider
              style={{
                backgroundColor: "#397d51",
                height: "5px",
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
      ))}
    </Stack>
  );
};

export default Patrocinadores;
