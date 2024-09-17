import React, { useEffect, useState } from "react";
import { Backdrop, CircularProgress, Stack, Button } from "@mui/material";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import RefreshIcon from "@mui/icons-material/Refresh";
import Item from "./Item";
const admin_service = require("../../../../../helpers/admin_service");

const ReadPreguntas = (props) => {
  const [contador, setContador] = useState(0);
  const [preguntas, setPreguntas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cambios, setCambios] = useState(0);
  useEffect(() => {}, [cambios]);

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
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {preguntas.map((actual, index) => {
            if (actual.estado == 0) {
              return (
                <Item
                  speaker={props.speaker}
                  actual={actual}
                  index={index}
                  id_speaker={props.id_speaker}
                  refresh={() => {
                    setContador(contador + 1);
                  }}
                  loading={() => {
                    setLoading(true);
                    setCambios(cambios + 1);
                  }}
                />
              );
            }
          })}
        </List>
      </Stack>
    </React.Fragment>
  );
};

export default ReadPreguntas;
