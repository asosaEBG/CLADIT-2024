import React, { useEffect, useState } from "react";
import {
  Backdrop,
  CircularProgress,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Segmento from "./Segmento";
const admin_service = require("../../../../helpers/admin_service");
const VistaPrevia = (props) => {
  const [contador, setContador] = useState(0);
  const [evento, setEvento] = useState({});
  const [loading, setLoading] = useState(false);
  const [programa, setPrograma] = useState(null);
  useEffect(() => {
    admin_service
      .getData("/evento/view-by-hash/" + props.hash)
      .then((data) => {
        setEvento(data.data.response_database.result[0]);
        admin_service
          .getData("/programa/view/" + props.hash)
          .then((datos) => {
            if (datos.data.response_database == null) {
              setPrograma(null);
            } else {
              setPrograma(datos.data.response_database);
            }
            setLoading(true);
          })
          .catch((err) => {
            console.log(err);
          });
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
        open={!loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {programa == null ? (
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h3"></Typography>
          </Grid>
        </Grid>
      ) : (
        <Stack spacing={5}>
          {programa.programa.speakers.slice(12).map((actual, index) => (
            <Segmento
              actual={actual}
              key={`segmento-${index}`}
              speaker={props.speaker}
              refreshData={() => {
                setContador(contador + 1);
              }}
            />
          ))}
        </Stack>
      )}
    </React.Fragment>
  );
};

export default VistaPrevia;
