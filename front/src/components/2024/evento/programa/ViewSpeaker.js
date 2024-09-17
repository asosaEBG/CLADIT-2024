import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

const admin_service = require("../../../../helpers/admin_service");

const ViewSpeaker = (props) => {
  const [contador] = useState(0);
  const [speaker, setSpeaker] = useState({});
  useEffect(() => {
    admin_service
      .getData("/conferencista/view/" + props.id)
      .then((data) => {
        setSpeaker(data.data.response_database.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [contador]);
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid xs={2} md={2} lg={2}>
        <img src={speaker.foto} style={{ width: "100%" }} />
      </Grid>
      <Grid xs={8} md={8} lg={8} style={{ paddingLeft: "2%" }}>
        <Typography variant="h5" component="strong">
          <strong>{speaker.nombre}</strong>
          <br />
        </Typography>
        <Typography variant="h5">
          {speaker.puesto}
          <br />
        </Typography>
        <Typography variant="h5">
          {speaker.institucion}
          <br />
        </Typography>
        <Typography variant="h5">
          <strong>{speaker.pais && speaker.pais.toUpperCase()}</strong>
          <br />
        </Typography>
        <Typography variant="h5">
          {(speaker.tipo == "MODERADOR" || speaker.tipo == "MODERADORA") && (
            <strong>{speaker.tipo}</strong>
          )}
          <br />
        </Typography>
        {speaker.bandera && (
          <img
            src={`https://flagcdn.com/h240/${speaker.bandera}.png`}
            alt="bandera"
            style={{ width: "10%" }}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default ViewSpeaker;
