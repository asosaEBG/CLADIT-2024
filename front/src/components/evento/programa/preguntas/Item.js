import React, { useEffect, useState } from "react";
import { Modal, Box, IconButton, ButtonGroup } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ReadRespuesta from "../respuestas/Read";
import CreateRespuesta from "../respuestas/Create";
import ClearIcon from "@mui/icons-material/Clear";

const admin_service = require("../../../../helpers/admin_service");
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Item = (props) => {
  const [cambios, setCambios] = useState(0);
  const [openFormRespuesta, setOpenFormRespuesta] = React.useState(false);
  const [openRespuestas, setOpenRespuestas] = React.useState(false);

  const handleOpenFormRespuesta = () => {
    setOpenFormRespuesta(true);
    setCambios(cambios + 1);
  };
  const handleCloseFormRespuesta = () => {
    setOpenFormRespuesta(false);
    setCambios(cambios + 1);
  };
  const handleOpenRespuestas = () => {
    setOpenRespuestas(true);
    setCambios(cambios + 1);
  };
  const handleCloseRespuestas = () => {
    setOpenRespuestas(false);
    setCambios(cambios + 1);
  };

  useEffect(() => {}, [cambios]);
  const checkPregunta = (id) => {
    props.loading();
    admin_service
      .putData("/preguntas/" + id, { estado: 1 })
      .then((data) => {
        props.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <ListItem
        style={{
          backgroundColor: props.actual.estado == 1 ? "#c7f9cc" : "transparent",
        }}
        alignItems="flex-start"
        key={`pregunta-${props.index}-${props.id_speaker}`}
        secondaryAction={
          props.speaker == true ? (
            <ButtonGroup variant="contained" aria-label="Basic button group">
              <IconButton
                onClick={() => {
                  checkPregunta(props.actual.id);
                }}
              >
                <ClearIcon />
              </IconButton>

              <IconButton
                onClick={() => {
                  handleOpenFormRespuesta();
                }}
              >
                <ContactSupportIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  handleOpenRespuestas();
                }}
              >
                <QuestionAnswerIcon />
              </IconButton>
            </ButtonGroup>
          ) : (
            <ButtonGroup variant="contained" aria-label="Basic button group">
              <IconButton
                onClick={() => {
                  handleOpenRespuestas();
                }}
              >
                <QuestionAnswerIcon />
              </IconButton>
            </ButtonGroup>
          )
        }
      >
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.actual.pregunta}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {props.actual.nombre}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Modal
        open={openFormRespuesta}
        onClose={handleCloseFormRespuesta}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateRespuesta
            id_pregunta={props.actual.id}
            goToRespuestas={() => {
              handleCloseFormRespuesta();
              handleOpenRespuestas();
            }}
          />
        </Box>
      </Modal>
      <Modal
        open={openRespuestas}
        onClose={handleCloseRespuestas}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            RESPUESTAS
          </Typography>
          <ReadRespuesta id_pregunta={props.actual.id} speaker={props.speaker}/>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default Item;
