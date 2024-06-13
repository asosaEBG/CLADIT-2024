import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
const Header = (props) => {
  return (
    <Grid container alignItems="center" justifyContent="center" paddingTop="2%">
      <Grid xs={12} md={12} lg={12}>
        <video
          autoPlay
          muted
          playsInline
          loop
          style={{
            width: "100%",
          }}
        >
          <source src={props.evento.video_promo} type="video/mp4" />
        </video>
      </Grid>
      <Grid xs={12} md={12} lg={6} style={{ textAlign: "center" }}>
        <img
          src={props.evento.flier}
          style={{ width: "75%" }}
          alt={props.evt}
          loading="lazy"
        />
      </Grid>
      <Grid xs={12} md={12} lg={6} style={{ textAlign: "center" }}>
        <Typography variant="h3">{props.evento.Nombre}</Typography>
        <Typography variant="p" component="strong">
          {props.evento.Descripcion}
        </Typography>
        <br />
        <br />
        <br />
        {props.evento.planos && (
          <img
            src={props.evento.planos}
            alt={props.evt}
            style={{ width: "90%" }}
            loading="lazy"
          />
        )}
        <br />
        <br />
        <br />
        <Button
          startIcon={<PictureAsPdfIcon />}
          href={props.evento.enlace}
          target="_blank"
        >
          Click para ver Programa Académico
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
