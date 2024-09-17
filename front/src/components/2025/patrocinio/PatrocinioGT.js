import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import React, { useEffect, useState } from "react";
import { CircularProgress, Backdrop, Button } from "@mui/material";
const admin_service = require("../../../helpers/admin_service");

const PatrocinioGT = () => {
  const [evento, setEvento] = useState({});
  const [loading, setLoading] = useState(true);
  const [contador] = useState(0);
  useEffect(() => {
    admin_service
      .getData(
        "/evento/view-by-hash/1f377385-b7fb-4b32-a2e3-5f906c3c4960"
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

        <Typography variant="h3" style={{ textAlign: "center" }}>
          BRIEF PATROCINIOS
        </Typography>
        <Divider style={{ backgroundColor: "#397d51", height: "5px" }} />
        <Typography
          variant="h4"
          style={{ color: "#1e3d52", textAlign: "center" }}
        >
          Diamante - US $6,700.00
        </Typography>
        <Typography variant="h5" style={{ textAlign: "left" }}>
          <strong>Derecho a los siguientes beneficios:</strong>
        </Typography>
        <Typography
          variant="p"
          style={{ fontSize: "1.5em", textAlign: "justify" }}
        >
          <ul>
            <li>
              Logotipo de la empresa ubicado en posición adquirida de patrocinio
              en la página del evento, direccionado a su página web
            </li>
            <li>
              1 Speaker* representando a su entidad en el programa académico (1
              conferencia de 30 min a 40 min)
            </li>
            <li>
              Reconocimiento en medios impresos y digitales (incluyendo
              revistas)
            </li>
            <li>Mail masivo del conferencista exclusivo</li>
            <li>
              1 pauta pagada en redes sociales del conferencista designado (con
              mención de marca exclusiva)
            </li>
            <li>Pautas en redes sociales de EBG</li>
            <li>Mails masivos a nuestras bases de datos</li>
            <li>Mención de Patrocinio en la Aplicación de ABG</li>
            <li>Presencia de marca dentro del salón de conferencias</li>
            <li>
              Logotipo en Panel principal sobre pantalla del evento con mención
              del patrocinio
            </li>
            <li>
              Presencia de marca en 1 back panel de 2 x 2 mts. (junto con los
              demás patrocinadores)
            </li>
            <li>Mails masivos en alianza con media partners</li>
            <li>Bases de datos de los participantes en el congreso</li>
            <li>
              Stand en el Área de Exposición de 3 x 2 mts. (opciones en las
              siguientes páginas)
            </li>
            <li>
              Gafetes de staff para su personal para atención del stand y
              conferencista (incluye alimentos y parqueo)
            </li>
            <li>Participaciones de cortesía</li>
            <li>
              Mención especial y promocional de 30 segundos durante la
              conferencia, suministrada por el patrocinador
            </li>
          </ul>
        </Typography>
        <Divider style={{ backgroundColor: "#397d51", height: "5px" }} />

        <Typography
          variant="h4"
          style={{ color: "#1e3d52", textAlign: "center" }}
        >
          Oro - US $5,000.00
        </Typography>
        <Typography variant="h5" style={{ textAlign: "left" }}>
          <strong>Derecho a los siguientes beneficios:</strong>
        </Typography>
        <Typography
          variant="p"
          style={{ fontSize: "1.5em", textAlign: "justify" }}
        >
          <ul>
            <li>
              Logotipo de la empresa ubicado en posición adquirida de patrocinio
              en la página del evento, direccionado a su página web
            </li>
            <li>
              1 Speaker* representando a su entidad en el programa académico (1
              conferencia de 30 min a 40 min)
            </li>
            <li>
              Reconocimiento en medios impresos y digitales (incluyendo
              revistas)
            </li>

            <li>Pautas en redes sociales de EBG</li>
            <li>Mails masivos a nuestras bases de datos</li>
            <li>Mención de Patrocinio en la Aplicación de ABG</li>
            <li>Presencia de marca dentro del salón de conferencias</li>

            <li>
              Presencia de marca en 1 back panel de 2 x 2 mts. (junto con los
              demás patrocinadores)
            </li>
            <li>Mails masivos en alianza con media partners</li>
            <li>Bases de datos de los participantes en el congreso</li>
            <li>
              Stand en el Área de Exposición de 3 x 2 mts. (opciones en las
              siguientes páginas)
            </li>
            <li>
              Gafetes de staff para su personal para atención del stand y
              conferencista (incluye alimentos y parqueo)
            </li>
            <li>Participaciones de cortesía</li>
          </ul>
        </Typography>
        <Divider style={{ backgroundColor: "#397d51", height: "5px" }} />
        <Typography
          variant="h4"
          style={{ color: "#1e3d52", textAlign: "center" }}
        >
          Plata - US $3,900.00
        </Typography>
        <Typography variant="h5" style={{ textAlign: "left" }}>
          <strong>Derecho a los siguientes beneficios:</strong>
        </Typography>
        <Typography
          variant="p"
          style={{ fontSize: "1.5em", textAlign: "justify" }}
        >
          <ul>
            <li>
              Logotipo de la empresa ubicado en posición adquirida de patrocinio
              en la página del evento, direccionado a su página web
            </li>
            <li>
              1 Speaker* representando a su entidad en el programa académico (1
              conferencia de 30 min a 40 min)
            </li>
            <li>
              Reconocimiento en medios impresos y digitales (incluyendo
              revistas)
            </li>

            <li>Pautas en redes sociales de EBG</li>
            <li>Mails masivos a nuestras bases de datos</li>
            <li>Mención de Patrocinio en la Aplicación de ABG</li>
            <li>Presencia de marca dentro del salón de conferencias</li>

            <li>
              Presencia de marca en 1 back panel de 2 x 2 mts. (junto con los
              demás patrocinadores)
            </li>
            <li>Mails masivos en alianza con media partners</li>
            <li>Bases de datos de los participantes en el congreso</li>
            <li>
              Stand en el Área de Exposición de 3 x 2 mts. (opciones en las
              siguientes páginas)
            </li>
            <li>
              Gafetes de staff para su personal para atención del stand y
              conferencista (incluye alimentos y parqueo)
            </li>
          </ul>
        </Typography>
        <Divider style={{ backgroundColor: "#397d51", height: "5px" }} />
        <img
          src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/GALERIA-CLADIT-2024/Captura-de-pantalla-2024-05-16-a-la(s)-12.43.21%E2%80%AFp.%C2%A0m..jpg"
          style={{ width: "100%" }}
        />
      </Stack>
    </Box>
  );
};

export default PatrocinioGT;
