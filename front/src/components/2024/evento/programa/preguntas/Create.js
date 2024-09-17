import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Formulario from "../../../../../utils/forms/Formulario";
import { Box } from "@mui/material";
const admin_service = require("../../../../../helpers/admin_service");

const CreatePregunta = (props) => {
  const afterSubmit = (body) => {
    return new Promise((resolve, reject) => {
      body.id_speaker = props.id_speaker;
      body.estado = 0;
      admin_service
        .postData("/preguntas", body)
        .then((response_database) => {
          props.goToPreguntas();
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject(
            "Ha ocurrido un error al guardar la imagen del conferencista, intente de nuevo"
          );
        });
    });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Box p={2}>
        <Formulario
          afterSubmit={afterSubmit}
          formConfig={{
            title: `Registrar Pregunta`,
            submitTitle: "Registrar",
            formConfig: [
              {
                type: 8,
                required: true,
                value: "",
                name: "pregunta",
                label: "Ingrese su pregunta",
                title: "Pregunta",
              },
            ],
          }}
        />
      </Box>
    </React.Fragment>
  );
};

export default CreatePregunta;
