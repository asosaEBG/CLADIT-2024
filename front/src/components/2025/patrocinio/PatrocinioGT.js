import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Grid, Card, CardContent, Backdrop, CircularProgress, Button } from "@mui/material";
import { motion } from "framer-motion";
import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from '@mui/icons-material/Email';
const sponsorships = [
  {
    title: "Diamante",
    price: "",
    benefits: [
      "Stand de 6x2 metros con infraestructura",
      "3 gafetes de staff y 1 gafete para conferencista (incluye alimentos)",
      "Presencia de marca en material promocional impreso y digital",
      "Presencia de marca en back panel de 2x2 metros",
      "Presencia de marca dentro del salón de conferencias en la pantalla principal",
      "Mención especial y promocional de 30 segundos durante la conferencia",
      "Bases de datos de los participantes en el congreso",
      "Producción y edición de un video exclusivo del conferencista",
      "1 pauta pagada en redes sociales de EBG",
      "Promoción del evento en plataformas digitales de EBG (orgánica y pagada)",
      "E-mail marketing a nuestras bases de datos ABG y EBG",
      "Mención de patrocinio en la aplicación de ABG",
      "1 Speaker representando a su entidad en el programa académico (1 conferencia de 30-40 min, previa alineación con el Comité Académico)"
    ],
    color: "#f2b440",
  },
  {
    title: "Oro",
    price: "",
    benefits: [
      "Stand de 3x2 metros con infraestructura",
      "2 gafetes de staff y 1 gafete para conferencista (incluye alimentos)",
      "Presencia de marca en material promocional impreso y digital",
      "Presencia de marca en back panel de 2x2 metros",
      "Presencia de marca dentro del salón de conferencias en la pantalla principal",
      "Mención especial y promocional de 30 segundos durante la conferencia",
      "Bases de datos de los participantes en el congreso",
      "Producción y edición de un video exclusivo del conferencista",
      "1 pauta pagada en redes sociales de EBG",
      "Promoción del evento en plataformas digitales de EBG (orgánica y pagada)",
      "E-mail marketing a nuestras bases de datos ABG y EBG",
      "Mención de patrocinio en la aplicación de ABG"
    ],
    color: "#c9b037",
  },
  {
    title: "Plata",
    price: "",
    benefits: [
      "Stand de 3x2 metros con infraestructura",
      "2 gafetes de staff (incluye alimentos)",
      "Presencia de marca en material promocional impreso y digital",
      "Presencia de marca en back panel de 2x2 metros",
      "Presencia de marca dentro del salón de conferencias en la pantalla principal",
      "Mención especial y promocional de 30 segundos durante la conferencia",
      "Bases de datos de los participantes en el congreso",
      "Promoción del evento en plataformas digitales de EBG (orgánica y pagada)",
      "E-mail marketing a nuestras bases de datos ABG y EBG",
      "Mención de patrocinio en la aplicación de ABG"
    ],
    color: "#a8a8a8",
  },
];

const admin_service = require("../../../helpers/admin_service");

const PatrocinioGT = () => {
  const [evento, setEvento] = useState({});
  const [loading, setLoading] = useState(true);
  const [contador] = useState(0);
  useEffect(() => {
    admin_service
      .getData(
        "/evento/view-by-hash/" + process.env.REACT_APP_EVT
      )
      .then((response_evt) => {
        setEvento(response_evt.data.response_database.result[0]);
        setLoading(false);
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
      <Stack spacing={4} style={{ padding: "5%" }}>
        {evento.planos && (
          <Typography variant="h3" style={{ textAlign: "center" }}>
            PLANOS STAND
          </Typography>
        )}
        {evento.planos && (
          <img
            src={evento.planos}
            alt={"planos"}
            style={{ width: "90%" }}
            loading="lazy"
          />
        )}
        <Container maxWidth >
          <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 1 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom color='#397d51'>
              Patrocinios CLADIT 2026
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: 2 }} color='#397d51'>
              Oportunidad de patrocinio en los eventos más importantes de tecnología y seguridad bancaria.
            </Typography>
          </motion.div>
          <Grid container spacing={3} justifyContent="center">
            {sponsorships.map((sponsor, index) => (
              <Grid item size={{ xs: 12, md: 3, lg: 4 }} key={index} display="flex">
                <motion.div whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }} style={{ width: '100%', height: '100%' }}>
                  <Card sx={{
                    background: "linear-gradient(-45deg, #1b3d2b, #397d51, #1b3d2b, #0e2a1d)",
                    backgroundSize: "400% 400%",
                    animation: "gradientBG 6s ease infinite", color: "white", borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'  // Ajuste clave aquí
                    , width: '100%'
                  }}>
                    <CardContent>
                      <Typography variant="h5" fontWeight="bold" gutterBottom>
                        {sponsor.title}
                      </Typography>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {sponsor.price}
                      </Typography>
                      {sponsor.benefits.map((benefit, i) => (
                        <Typography key={i} variant="body1">
                          - {benefit}
                        </Typography>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={3} justifyContent="center" p={5}>
            <Grid item size={{ xs: 6, md: 6, lg: 6 }}>
              <motion.div
                whileHover={{ scale: 1.08, rotate: -3 }}
                initial={{ opacity: 0, y: 50, rotate: 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 5, type: "spring", stiffness: 120 }}
                style={{ width: '100%', height: '100%' }}
              >
                <Button style={{ color: '#397d51' }} href='mailto:ncuches@ebg.edu.gt?subject=Solicitud%20de%20información%20sobre%20patrocinio%20para%20CLADIT&body=Buenos%20días,%0A%0ANecesito%20más%20información%20sobre%20una%20propuesta%20de%20patrocinio%20para%20CLADIT.%0A%0AGracias.' target="_blank" startIcon={<EmailIcon />}>Click para solicitar más información</Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
};

export default PatrocinioGT;
