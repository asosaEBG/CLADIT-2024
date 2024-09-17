import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  CircularProgress,
  Stack,
  Button,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const admin_service = require("../../../../helpers/admin_service");

const VideoView = (props) => {
  const [cambios, setCambios] = useState(0);
  const [contador] = useState(0);
  const [video, setVideo] = useState({});
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {}, [cambios]);

  const handleClose = () => {
    setOpen(false);
    setCambios(cambios + 1);
  };
  useEffect(() => {
    admin_service
      .getData("/medios-programa/view/" + props.id)
      .then((data) => {
        setVideo(data.data.response_database.result[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [contador]);

  const handleClickOpen = () => {
    setOpen(true);
    setCambios(cambios + 1);
  };
  return loading ? (
    <Grid
      container
      spacing={5}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Box>
          <Typography
            component="h3"
            variant="h3"
            style={{ textAlign: "center", color: "#1e3d52" }}
          >
            cargando, por favor espere
          </Typography>{" "}
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <CircularProgress />
        </Box>
      </Grid>
    </Grid>
  ) : (
    <Stack>
      <Button
        startIcon={<VisibilityIcon />}
        aria-label="Click para ver"
        onClick={handleClickOpen}
      >
        Click para ver
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          VIDEO
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <video controls style={{ width: "100%" }}>
            <source src={video.video} type="video/mp4" />
          </video>
        </DialogContent>
      </BootstrapDialog>
    </Stack>
  );
};

export default VideoView;
