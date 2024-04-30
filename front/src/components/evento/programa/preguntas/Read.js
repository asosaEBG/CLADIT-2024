import React, { useEffect, useState } from "react";
import {
  Backdrop,
  CircularProgress,
  Stack,
  Button,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import PersonIcon from "@mui/icons-material/Person";
import RefreshIcon from "@mui/icons-material/Refresh";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
const admin_service = require("../../../../helpers/admin_service");

const ReadPreguntas = (props) => {
  const [contador, setContador] = useState(0);
  const [cambios, setCambios] = useState(0);
  const [preguntas, setPreguntas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    admin_service
      .getData("/preguntas/read/" + props.id_speaker)
      .then((data) => {
        setLoading(false);
        setPreguntas(
          data.data.response.result.sort((a, b) => {
            return new Date(b.fecha_registro) - new Date(a.fecha_registro);
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [contador]);
  useEffect(() => {}, [cambios]);
  const deletePregunta = (id) => {
    setLoading(true);
    setCambios(cambios + 1);
    admin_service
      .deleteData("/preguntas", { rows: [id] })
      .then((data) => {
        setContador(contador + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const checkPregunta = (id) => {
    setLoading(true);
    setCambios(cambios + 1);
    admin_service
      .putData("/preguntas/" + id, { estado: 1 })
      .then((data) => {
        setContador(contador + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const NocheckPregunta = (id) => {
    setLoading(true);
    setCambios(cambios + 1);
    admin_service
      .putData("/preguntas/" + id, { estado: 0 })
      .then((data) => {
        setContador(contador + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Stack spacing={3} paddingTop={2}>
        <Button
          startIcon={<RefreshIcon />}
          onClick={() => {
            setContador(contador + 1);
          }}
        >
          Refrescar
        </Button>
        <List sx={{ width: "100%" }}>
          {preguntas.map((actual, index) => {
            return (
              <ListItem
                style={{
                  backgroundColor:
                    actual.estado == 1 ? "#c7f9cc" : "transparent",
                  color: "black",
                }}
                alignItems="flex-start"
                key={`pregunta-${index}-${props.id_speaker}`}
                secondaryAction={
                  props.speaker && (
                    <ButtonGroup
                      variant="contained"
                      aria-label="Basic button group"
                    >
                      <IconButton
                        onClick={
                          actual.estado == 0
                            ? () => {
                                checkPregunta(actual.id);
                              }
                            : () => {
                                NocheckPregunta(actual.id);
                              }
                        }
                      >
                        {actual.estado == 0 && <CheckIcon />}
                        {actual.estado == 1 && <DoNotDisturbAltIcon />}
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          deletePregunta(actual.id);
                        }}
                      >
                        <DeleteIcon />
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
                  primary={actual.pregunta}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {actual.nombre}
                      </Typography>
                      {actual.institucion && ` — ${actual.institucion}`}
                    </React.Fragment>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Stack>
    </React.Fragment>
  );
};

export default ReadPreguntas;
