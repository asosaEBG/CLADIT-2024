import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Formulario from "../../../../../utils/forms/Formulario";
import { Box } from "@mui/material";
const admin_service = require("../../../../../helpers/admin_service");

const CreateRespuesta = (props) => {
  const afterSubmit = (body) => {
    return new Promise((resolve, reject) => {
      body.id_pregunta = props.id_pregunta;
      admin_service
        .postData("/respuestas", body)
        .then((response_database) => {
          props.goToRespuestas();
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
            title: `Registrar Respuesta`,
            submitTitle: "Registrar",
            formConfig: [
              {
                type: 8,
                required: true,
                value: "",
                name: "respuesta",
                label: "Ingrese su respuesta",
                title: "respuesta",
              },
            ],
          }}
        />
      </Box>
    </React.Fragment>
  );
};

export default CreateRespuesta;
