import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Backdrop, CircularProgress, Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Formulario from "../../../../utils/forms/Formulario";
import { v4 } from "uuid";
const admin_service = require("../../../../helpers/admin_service");

const Configuracion = (props) => {
  const [contador] = useState(0);
  const [evento, setEvento] = useState({});
  const [loading, setLoading] = useState(false);
  const [programa, setPrograma] = useState(null);
  const [formConfig, setFormConfig] = useState(null);
  useEffect(() => {
    const jwt = JSON.parse(Cookies.get(process.env.REACT_APP_COOKIE_KEY));
    admin_service
      .getDataAuth(
        "/conferencista/read/" + props.hash,
        jwt.TokenType,
        jwt.accessToken
      )
      .then((data_speakers) => {
        admin_service
          .getDataAuth(
            "/evento/view-by-hash/" + props.hash,
            jwt.TokenType,
            jwt.accessToken
          )
          .then((data) => {
            setEvento(data.data.response_database.result[0]);
            admin_service
              .getDataAuth(
                "/programa/view/" + props.hash,
                jwt.TokenType,
                jwt.accessToken
              )
              .then((datos) => {
                admin_service
                  .getDataAuth(
                    "/medios-programa/read/" + props.hash,
                    jwt.TokenType,
                    jwt.accessToken
                  )
                  .then((datos_medios) => {
                    if (datos.data.response_database == null) {
                      setPrograma(null);
                      setFormConfig({
                        title: `Configuración programa para evento "${data.data.response_database.result[0].Nombre}"`,
                        submitTitle: "Guardar información",
                        formConfig: [
                          {
                            type: 18,
                            required: true,
                            value: [],
                            name: "speakers",
                            title: "Programación de Speakers",
                            master: [
                              {
                                type: 8,
                                required: true,
                                value: "",
                                name: "concepto",
                                label: "Ingrese el concepto del espacio",
                                title: "Concepto de espacio",
                              },
                              {
                                type: 9,
                                required: true,
                                value: "",
                                name: "fecha_inicio",
                                label: "Ingrese la fecha y hora de inicio",
                                title: "Fecha y Hora de Inicio",
                              },
                              {
                                type: 9,
                                required: true,
                                value: "",
                                name: "fecha_fin",
                                label:
                                  "Ingrese la fecha y hora de finalización",
                                title: "Fecha y Hora de Finalización",
                              },
                              {
                                type: 9,
                                required: false,
                                value: "",
                                name: "fecha_real_inicio",
                                label: "Ingrese la fecha y hora real de inicio",
                                title: "Fecha y Hora Real de Inicio",
                              },
                              {
                                type: 3,
                                required: false,
                                value: "",
                                name: "video_introduccion",
                                label: "Seleccione el Video Introductorio",
                                title: "Video Introductorio",
                                options: datos_medios.data.response.result.map(
                                  (actual) => {
                                    return {
                                      label: `${actual.nombre}`,
                                      value: actual.id,
                                    };
                                  }
                                ),
                              },
                              {
                                type: 3,
                                required: false,
                                value: "",
                                name: "video_conferencia",
                                label: "Seleccione el Video de la Conferencia",
                                title: "Video de Conferencia",
                                options: datos_medios.data.response.result.map(
                                  (actual) => {
                                    return {
                                      label: `${actual.nombre} `,
                                      value: actual.id,
                                    };
                                  }
                                ),
                              },
                              {
                                type: 10,
                                required: false,
                                value: null,
                                name: "descripcion",
                                label:
                                  "Ingrese una breve descripción de la conferencia",
                                title: "Descripción de Conferencia",
                              },
                            ],
                            detail: [
                              {
                                type: 3,
                                required: true,
                                value: "",
                                name: "speaker",
                                label: "Seleccione el conferencista",
                                title: "Conferencista",
                                options: data_speakers.data.response.result.map(
                                  (actual) => {
                                    return {
                                      label: `${actual.nombre} (${actual.tipo})`,
                                      value: actual.id,
                                    };
                                  }
                                ),
                              },
                            ],
                          },
                        ],
                      });
                    } else {
                      setPrograma(
                        datos.data.response_database.programa.speakers
                      );
                      setFormConfig({
                        title: `Configuración programa para evento "${data.data.response_database.result[0].Nombre}"`,
                        submitTitle: "Guardar información",
                        formConfig: [
                          {
                            type: 18,
                            required: true,
                            value:
                              datos.data.response_database.programa.speakers,
                            name: "speakers",
                            title: "Programación de Speakers",
                            master: [
                              {
                                type: 8,
                                required: true,
                                value: "",
                                name: "concepto",
                                label: "Ingrese el concepto del espacio",
                                title: "Concepto de espacio",
                              },
                              {
                                type: 9,
                                required: true,
                                value: "",
                                name: "fecha_inicio",
                                label: "Ingrese la fecha y hora de inicio",
                                title: "Fecha y Hora de Inicio",
                              },
                              {
                                type: 9,
                                required: true,
                                value: "",
                                name: "fecha_fin",
                                label:
                                  "Ingrese la fecha y hora de finalización",
                                title: "Fecha y Hora de Finalización",
                              },
                              {
                                type: 9,
                                required: false,
                                value: "",
                                name: "fecha_real_inicio",
                                label: "Ingrese la fecha y hora real de inicio",
                                title: "Fecha y Hora Real de Inicio",
                              },
                              {
                                type: 3,
                                required: false,
                                value: "",
                                name: "video_introduccion",
                                label: "Seleccione el Video Introductorio",
                                title: "Video Introductorio",
                                options: datos_medios.data.response.result.map(
                                  (actual) => {
                                    return {
                                      label: `${actual.nombre}`,
                                      value: actual.id,
                                    };
                                  }
                                ),
                              },
                              {
                                type: 3,
                                required: false,
                                value: "",
                                name: "video_conferencia",
                                label: "Seleccione el Video de la Conferencia",
                                title: "Video de Conferencia",
                                options: datos_medios.data.response.result.map(
                                  (actual) => {
                                    return {
                                      label: `${actual.nombre} `,
                                      value: actual.id,
                                    };
                                  }
                                ),
                              },
                              {
                                type: 10,
                                required: false,
                                value: "",
                                name: "descripcion",
                                label:
                                  "Ingrese una breve descripción de la conferencia",
                                title: "Descripción de Conferencia",
                              },
                            ],
                            detail: [
                              {
                                type: 3,
                                required: true,
                                value: "",
                                name: "speaker",
                                label: "Seleccione el conferencista",
                                title: "Conferencista",
                                options: data_speakers.data.response.result.map(
                                  (actual) => {
                                    return {
                                      label: `${actual.nombre} (${actual.tipo})`,
                                      value: actual.id,
                                    };
                                  }
                                ),
                              },
                            ],
                          },
                        ],
                      });
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
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [contador]);
  const afterSubmit = (body) => {
    return new Promise((resolve, reject) => {
      body.speakers.map((actual, index) => {
        if (actual.id == null) {
          actual.id = v4();
          if (index == body.speakers.length - 1) {
            const jwt = JSON.parse(
              Cookies.get(process.env.REACT_APP_COOKIE_KEY)
            );
            admin_service
              .postDataAuth("/programa", jwt.TokenType, jwt.accessToken, {
                id: props.hash,
                programa: body,
              })
              .then((response_database) => {
                window.location.href = `/evento/programa/${props.hash}`;
                resolve();
              })
              .catch((error) => {
                console.log(error);
                reject(
                  "Ha ocurrido un error al ingresar el programa, por favor intente de nuevo"
                );
              });
          }
        } else {
          if (index == body.speakers.length - 1) {
            const jwt = JSON.parse(
              Cookies.get(process.env.REACT_APP_COOKIE_KEY)
            );
            admin_service
              .postDataAuth("/programa", jwt.TokenType, jwt.accessToken, {
                id: props.hash,
                programa: body,
              })
              .then((response_database) => {
                window.location.href = `/evento/programa/${props.hash}`;
                resolve();
              })
              .catch((error) => {
                console.log(error);
                reject(
                  "Ha ocurrido un error al ingresar el programa, por favor intente de nuevo"
                );
              });
          }
        }
      });
    });
  };
  const afterUpdate = (body) => {
    return new Promise((resolve, reject) => {
      body.speakers.map((actual, index) => {
        if (actual.id == null) {
          actual.id = v4();
          if (index == body.speakers.length - 1) {
            const jwt = JSON.parse(
              Cookies.get(process.env.REACT_APP_COOKIE_KEY)
            );
            admin_service
              .putDataAuth(
                "/programa/" + props.hash,
                jwt.TokenType,
                jwt.accessToken,
                {
                  programa: body,
                }
              )
              .then((response_database) => {
                window.location.href = `/evento/programa/${props.hash}`;
                resolve();
              })
              .catch((error) => {
                console.log(error);
                reject(
                  "Ha ocurrido un error al actualizar el programa, por favor intente de nuevo"
                );
              });
          }
        } else {
          if (index == body.speakers.length - 1) {
            const jwt = JSON.parse(
              Cookies.get(process.env.REACT_APP_COOKIE_KEY)
            );
            admin_service
              .putDataAuth(
                "/programa/" + props.hash,
                jwt.TokenType,
                jwt.accessToken,
                {
                  programa: body,
                }
              )
              .then((response_database) => {
                window.location.href = `/evento/programa/${props.hash}`;
                resolve();
              })
              .catch((error) => {
                console.log(error);
                reject(
                  "Ha ocurrido un error al actualizar el programa, por favor intente de nuevo"
                );
              });
          }
        }
      });
      /*
     

        */
    });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={!loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Stack>
        {" "}
        <Formulario
          afterSubmit={programa == null ? afterSubmit : afterUpdate}
          formConfig={formConfig}
        />
      </Stack>
    </React.Fragment>
  );
};

export default Configuracion;
