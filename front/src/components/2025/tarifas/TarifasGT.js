import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Box,
  Backdrop,
  Typography,
  Stack,
  Card,
  Chip,
  Divider,
  Grid,
} from "@mui/material";
const admin_service = require("../../../helpers/admin_service");
const TarifasGT = (props) => {
  const [contador] = useState(0);
  const [tarifas, setTarifas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    admin_service
      .getData("/evento/view-by-hash/" + props.evt)
      .then((response_evt) => {
        admin_service
          .getData(
            "/tarifa/client/" +
              response_evt.data.response_database.result[0].UniqueID
          )
          .then((response_tarifa) => {
            setTarifas(response_tarifa.data.response);
            setLoading(false);
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
      <Stack spacing={3}>
        <Typography textAlign="center" variant="h3">
          Tarifas
        </Typography>
        <Typography variant="h4">Todas las tarifas incluyen:</Typography>
        <ul>
          <li>Conferencias</li>
          <li>
            Taller Pre Congreso a elección del participante, cupo limitado.
            Bancos 200 personas; Cooperativas 100 personas y Otros Sujetos
            Obligados 100 personas
          </li>
          <li>Refrigerios a.m., y p.m.</li>
          <li>Almuerzos</li>
          <li>Acceso al área de stands</li>
          <li>Certificado de participación digital</li>
          <li>Grabación de conferencias</li>
          <li>Cóctel de Bienvenida (Sujeto a patrocinio)</li>
        </ul>
        {tarifas.map((actual) => {
          return (
            <Box padding={3}>
              <Typography variant="h4">{actual.tarifa}</Typography>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                mt={4}
              >
                {actual.costos.map((tarifa) => {
                  return (
                    <Grid xs={12} md={6} lg={3}>
                      <Card variant="outlined">
                        <Box sx={{ p: 2 }}>
                          <Stack
                            direction="row"
                            sx={{
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              COSTO TARIFA:
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="div"
                            >
                              {tarifa.precio}
                            </Typography>
                          </Stack>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            {tarifa.descripcion}
                          </Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ p: 2 }}>
                          <Stack direction="row" spacing={1}>
                            <Chip label={actual.tarifa} size="small" />
                            {tarifa.adicional != "" && (
                              <Chip label={tarifa.adicional} size="small" />
                            )}
                          </Stack>
                        </Box>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default TarifasGT;
