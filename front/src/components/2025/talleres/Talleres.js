import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { Grid, Typography, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Segmento from "../evento/programa/Segmento";
const admin_service = require("../../../helpers/admin_service");

const Talleres = () => {
  const [contador, setContador] = useState(0);
  const [evento, setEvento] = useState({});
  const [loading, setLoading] = useState(false);
  const [programa, setPrograma] = useState(null);
  useEffect(() => {
    admin_service
      .getData("/evento/view-by-hash/" + '1f377385-b7fb-4b32-a2e3-5f906c3c4960')
      .then((data) => {
        setEvento(data.data.response_database.result[0]);
        admin_service
          .getData("/programa/view/" + '1f377385-b7fb-4b32-a2e3-5f906c3c4960')
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
    <Stack spacing={3} alignItems="center" >
      <Grid container p={2}>
        <Grid xs={12} md={12} lg={6} style={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            style={{ color: "#1e3d52", textAlign: "center" }}
          >
            <strong>Talleres PreCongreso</strong>
          </Typography>
          <Typography
            variant="h3"
            style={{ color: "#1e3d52", textAlign: "center" }}
          >
            <strong>
              <CalendarMonthIcon />
              &nbsp;21 de mayo 2025
            </strong>
          </Typography>
          <Typography
            variant="h4"
            style={{ color: "#1e3d52", textAlign: "center" }}
          >
            <strong>
              <LocationOnIcon />
              &nbsp;Hotel Westin Camino Real z.10
            </strong>
          </Typography>
        </Grid>
        <Grid xs={12} md={12} lg={6} style={{ textAlign: "center" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4579.929436469436!2d-90.5184367242587!3d14.598149677135387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5fed3668f4548f%3A0x966beff74fe51ab!2sThe%20Westin%20Camino%20Real%2C%20Guatemala!5e1!3m2!1ses!2sgt!4v1726596420542!5m2!1ses!2sgt"
            width="75%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
      <Stack
        spacing={10}
        style={{ width: "100%" }}
      >
        {programa != null && programa.programa.speakers.slice(0, 1).map((actual, index) => (
          <Segmento
            actual={actual}
            key={`segmento-${index}`}
            speaker={false}
            refreshData={() => {
              setContador(contador + 1);
            }}
          />
        ))}
        <Box
          xs={12}
          md={12}
          lg={12}
          style={{ backgroundColor: "#397d51", width: "100%" }}
          marginBottom={4}
        >
          <Typography
            variant="h3"
            style={{ color: "white", textAlign: "center" }}
          >
            <strong>Sector Bancario</strong>
          </Typography>
        </Box>
        <Typography
          variant="h4"
          style={{ textAlign: "center", color: "#1e3d52" }}
        >
          <strong>Cupo limitado primeras 200 personas*</strong>
        </Typography>
        <Stack spacing={5}>
          {programa != null && programa.programa.speakers.slice(1, 4).map((actual, index) => (
            <Segmento
              actual={actual}
              key={`segmento-${index}`}
              speaker={false}
              refreshData={() => {
                setContador(contador + 1);
              }}
            />
          ))}
        </Stack>
        <Box
          xs={12}
          md={12}
          lg={12}
          style={{ backgroundColor: "#397d51", width: "100%" }}
          marginBottom={4}
        >
          <Typography
            variant="h3"
            style={{ color: "white", textAlign: "center" }}
          >
            <strong>Sector Cooperativas de Ahorro y Crédito            </strong>
          </Typography>
        </Box>
        <Typography
          variant="h4"
          style={{ textAlign: "center", color: "#1e3d52" }}
        >
          <strong>Cupo limitado primeras 100 personas*</strong>
        </Typography>
        <Stack spacing={5}>
          {programa != null && programa.programa.speakers.slice(4, 7).map((actual, index) => (
            <Segmento
              actual={actual}
              key={`segmento-${index}`}
              speaker={false}
              refreshData={() => {
                setContador(contador + 1);
              }}
            />
          ))}
        </Stack>
        <Box
          xs={12}
          md={12}
          lg={12}
          style={{ backgroundColor: "#397d51", width: "100%" }}
          marginBottom={4}
        >
          <Typography
            variant="h3"
            style={{ color: "white", textAlign: "center" }}
          >
            <strong>Sector Otros Sujetos Obligados</strong>
          </Typography>
        </Box>
        <Typography
          variant="h4"
          style={{ textAlign: "center", color: "#1e3d52" }}
        >
          <strong>Cupo limitado primeras 100 personas*</strong>
        </Typography>
        <Stack spacing={5}>
          {programa != null && programa.programa.speakers.slice(7, 10).map((actual, index) => (
            <Segmento
              actual={actual}
              key={`segmento-${index}`}
              speaker={false}
              refreshData={() => {
                setContador(contador + 1);
              }}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Talleres;
