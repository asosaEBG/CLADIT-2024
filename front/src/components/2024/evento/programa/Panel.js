import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Box, Alert } from "@mui/material";
import CreatePregunta from "./preguntas/Create";
import ReadPreguntas from "./preguntas/Read";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PanelPreguntasRespuestas(props) {
  const [value, setValue] = useState(1);
  const [cambios, setCambios] = useState(0);
  useEffect(() => {}, [cambios]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCambios(cambios + 1);
  };

  const goToPreguntas = () => {
    setValue(1);
    setCambios(cambios + 1);
  };
  return !props.speaker ? (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Registrar Pregunta" {...a11yProps(0)} />
          <Tab label="Todas las Preguntas" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {props.preguntas == "HABILITADAS" && (
          <CreatePregunta
            id_speaker={props.id_speaker}
            goToPreguntas={goToPreguntas}
          />
        )}
        {props.preguntas == "INHABILITADAS" && (
          <Box p={5}>
            {" "}
            <Alert severity="warning">Preguntas no habilitadas</Alert>
          </Box>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ReadPreguntas id_speaker={props.id_speaker} speaker={props.speaker} />
      </CustomTabPanel>
    </Box>
  ) : (
    <Box sx={{ width: "100%" }}>
      <ReadPreguntas id_speaker={props.id_speaker} speaker={props.speaker} />
    </Box>
  );
}
