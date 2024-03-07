import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
const Patrocinio = () => {
  return (
    <Box>
      <Stack spacing={4} style={{ padding: "5%" }}>
        <Typography variant="h3" style={{ textAlign: "center" }}>
          PLANOS STAND
        </Typography>
        <img
          src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/unnamed+(4).jpg"
          style={{ width: "100%" }}
          loading="lazy"
        />

        <Typography variant="h3" style={{ textAlign: "center" }}>
          BRIEF PATROCINIOS
        </Typography>
        <Typography
          variant="h4"
          style={{ color: "#1e3d52", textAlign: "center" }}
        >
          Diamante - US$6,700*
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
        <Typography
          variant="h4"
          style={{ color: "#1e3d52", textAlign: "center" }}
        >
          {" "}
          Oro - US$5,000*
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

        <Typography
          variant="h4"
          style={{ color: "#1e3d52", textAlign: "center" }}
        >
          Plata - US$3,900*
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
        <img
          src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/a536ba50-a89d-4477-850a-5657ec42197b+(2).JPG"
          style={{ width: "100%" }}
        />
      </Stack>
    </Box>
  );
};

export default Patrocinio;

{
  /*<Box component="section" className="video-section">
          <Grid container></Grid>
          <video autoPlay muted loop id="myVideo">
            <source
              src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/RESUMEN+CLADIT+2023.mp4"
              type="video/mp4"
            />
          </video>
  </Box>*/
}
