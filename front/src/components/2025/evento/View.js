import React, { useEffect, useState } from "react";
import { Stack, CircularProgress, Box, Backdrop } from "@mui/material";
import Header from "./header/Header";
import Patrocinadores from "./patrocinadores/Patrocinadores";
import Carrousel from "./patrocinadores/Carrousel";
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
                  response_evt.data.response_database.result[0].UniqueID
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
        <Header evt={props.evt} evento={evento} />
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
