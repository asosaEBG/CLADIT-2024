import React, { useEffect, useState } from "react";
import { Stack, CircularProgress, Box, Backdrop, Button } from "@mui/material";
import Header from "./header/Header";
import ViewPrograma from "./programa/VistaPrevia";
import Patrocinadores from "./patrocinadores/Patrocinadores";
import Carrousel from "./patrocinadores/Carrousel";
import HighlightAltIcon from "@mui/icons-material/HighlightAlt";
const admin_service = require("../../../helpers/admin_service");
const View = (props) => {
  const [contador] = useState(0);
  const [evento, setEvento] = useState({});
  const [programa, setPrograma] = useState({});
  const [patrocinadores, setPatrocinadores] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    admin_service
      .getData("/evento/view-by-hash/" + props.evt)
      .then((response_evt) => {
        admin_service
          .getData("/programa/view/" + props.evt)
          .then((response_programa) => {
            admin_service
              .getData(
                "/patrocinador/view-by-evento/" +
                   props.evt
              )
              .then((response_patrocinador) => {
                setEvento(response_evt.data.response_database.result[0]);
                setPrograma(response_programa.data.response_database);
                setPatrocinadores(response_patrocinador.data.response.result);
                setLoading(false);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [contador]);
  return loading ? (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : (
    <Box>
      <Stack spacing={5} alignItems="center">
        <Carrousel patrocinadores={patrocinadores} />
        <Button
          style={{
            backgroundColor: "#397d51",
            padding: "1%",
            color: "white",
          }}
          href={process.env.REACT_APP_URL_INSCRIPCION + props.evt}
          target="_blank"
          startIcon={<HighlightAltIcon />}
        >
          Inscríbete en Línea
        </Button>
        <Header evt={props.evt} evento={evento} />
        <Button
          style={{
            backgroundColor: "#397d51",
            padding: "1%",
            color: "white",
          }}
          href={process.env.REACT_APP_URL_INSCRIPCION + props.evt}
          target="_blank"
          startIcon={<HighlightAltIcon />}
        >
          Inscríbete en Línea
        </Button>
        <Patrocinadores
          evt={props.evt}
          patrocinadores={patrocinadores}
          pais={props.pais}
        />
      </Stack>
    </Box>
  );
};

export default View;
