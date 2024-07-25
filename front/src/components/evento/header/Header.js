import React from "react";
import { Grid, Typography, Button, Modal, Box, Stack } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
const Header = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    height: "90vh",
    bgcolor: "transparent",

    p: 4,
  };
  return (
    <Stack>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        paddingTop="2%"
      >
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
        {/* <Grid xs={12} md={12} lg={6} style={{ textAlign: "center" }}>
        <img
          src={props.evento.flier}
          style={{ width: "75%" }}
          alt={props.evt}
          loading="lazy"
        />
      </Grid>*/}
        <Grid xs={12} md={12} lg={12} style={{ textAlign: "center" }}>
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
              onClick={handleOpen}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={props.evento.planos}
            alt={props.evt}
            style={{ width: "100%", objectFit: "contain", height: "100%" }}
            loading="lazy"
          />
        </Box>
      </Modal>
    </Stack>
  );
};

export default Header;
