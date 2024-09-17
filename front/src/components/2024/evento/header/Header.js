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
      </Grid>
    </Stack>
  );
};

export default Header;
