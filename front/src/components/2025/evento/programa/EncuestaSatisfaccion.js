import React, { useEffect, useState } from "react";
import Formulario from "../../../../utils/forms/Formulario";
import DOMPurify from "dompurify";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
const form_service = require("../../../../helpers/form_service");
const EncuestaSatisfaccion = (props) => {
    const id = props.id;
    const [contador] = useState(0);
    const [formConfig, setFormConfig] = useState({});
    const [info, setInfo] = useState({});
    useEffect(() => {
        form_service
            .getData(`/form/client/${id}`)
            .then((response) => {
                if (parseInt(response.data.response_database.estado) == 0) {
                    window.location.href = "/not-found";
                } else {
                    setInfo(response.data.response_database);
                    let preguntas_simples = [];
                    if (response.data.response_database.preguntas) {
                        preguntas_simples = response.data.response_database.preguntas.map(
                            (actual) => {
                                if (parseInt(actual[2]) == 4) {
                                    return {
                                        type: 4,
                                        required: actual[1] == 1 ? true : false,
                                        value: "",
                                        name: actual[3],
                                        label: "Por favor, ingrese lo solicitado",
                                        title: actual[0],
                                    };
                                } else if (parseInt(actual[2]) == 8) {
                                    return {
                                        type: 8,
                                        required: actual[1] == 1 ? true : false,
                                        value: "",
                                        name: actual[3],
                                        label: "Por favor, ingrese lo solicitado",
                                        title: actual[0],
                                    };
                                } else if (parseInt(actual[2]) == 13) {
                                    return {
                                        type: 13,
                                        required: actual[1] == 1 ? true : false,
                                        value: "",
                                        name: actual[3],
                                        label: "Por favor, ingrese lo solicitado",
                                        title: actual[0],
                                    };
                                } else if (parseInt(actual[2]) == 14) {
                                    return {
                                        type: 14,
                                        required: actual[1] == 1 ? true : false,
                                        value: "",
                                        name: actual[3],
                                        label: "Por favor, ingrese lo solicitado",
                                        title: actual[0],
                                    };
                                } else if (parseFloat(actual[2]) == 15.1) {
                                    return {
                                        type: 15,
                                        required: actual[1] == 1 ? true : false,
                                        value: "",
                                        name: actual[3],
                                        label: "Por favor, ingrese lo solicitado",
                                        title: actual[0],
                                        icon: 1,
                                    };
                                } else if (parseInt(actual[2]) == 15) {
                                    return {
                                        type: 15,
                                        required: actual[1] == 1 ? true : false,
                                        value: "",
                                        name: actual[3],
                                        label: "Por favor, ingrese lo solicitado",
                                        title: actual[0],
                                        icon: 0,
                                    };
                                } else {
                                    return {
                                        type: 16,
                                        required: actual[1] == 1 ? true : false,
                                        value: "",
                                        name: actual[3],
                                        label: "Por favor, ingrese lo solicitado",
                                        title: actual[0],
                                        options: [
                                            { label: "Sí", value: "Sí" },
                                            { label: "No", value: "No" },
                                        ],
                                    };
                                }
                            }
                        );
                    }
                    let preguntas_multiple = [];
                    if (response.data.response_database.preguntas_multiple_seleccion) {
                        preguntas_multiple =
                            response.data.response_database.preguntas_multiple_seleccion.map(
                                (actual) => {
                                    if (parseInt(actual.master[2]) == 0) {
                                        return {
                                            type: 3,
                                            required: parseInt(actual.master[1]) == 1 ? true : false,
                                            value: "",
                                            name: actual.id,
                                            label: "Seleccione una opción",
                                            title: actual.master[0],
                                            options: actual.detail.map((opcion) => {
                                                return {
                                                    label: opcion[0],
                                                    value: opcion[0],
                                                };
                                            }),
                                        };
                                    } else {
                                        return {
                                            type: 16,
                                            required: parseInt(actual.master[1]) == 1 ? true : false,
                                            value: "",
                                            name: actual.id,
                                            label: "Seleccione una opción",
                                            title: actual.master[0],
                                            options: actual.detail.map((opcion) => {
                                                return {
                                                    label: opcion[0],
                                                    value: opcion[0],
                                                };
                                            }),
                                        };
                                    }
                                }
                            );
                    }
                    let questions = preguntas_simples.concat(preguntas_multiple);
                    setFormConfig({
                        title: "",
                        submitTitle: "Registrar Respuesta",
                        formConfig: questions,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [contador]);

    const afterSubmit = (body) => {
        return new Promise((resolve, reject) => {
            body.formulario = id;
            form_service
                .postData("/respuesta/client", {
                    respuesta_form: body,
                })
                .then((response) => {
                    resolve();
                    window.location.reload();
                })
                .catch((error) => {
                    reject(
                        `Ha ocurrido un error al registrar formulario, intente de nuevo.`
                    );
                });
        });
    };
    return (
        <Box
            style={{
                paddingTop: "25px",
                paddingBottom: "25px",
                backgroundImage:
                    info.fondo != null
                        ? `url(${info.fondo})`
                        : ``,
                backgroundRepeat: "no-repeat",
                width: "100w",
                overflowY: "scroll",
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                ...(info.fondo != null && {
                    scrollbarColor: "white transparent",
                    scrollbarWidth: "thin",
                }),
            }}
        >
            <Container>
                <Stack spacing={5}>
                    <Paper elevation={info.fondo == null ? 5 : 0} style={{ backgroundColor: "transparent" }}>
                        <Stack spacing={2}>
                            <Grid container alignItems='center'>
                                <Grid xs={12} md={6} lg={6}>
                                    {info && info.fondo == null && <img
                                        src="https://test-escuelabancaria.s3.us-east-2.amazonaws.com/Medios+General/Logotipos+Finales+ABG+2022-01.png"
                                        loading="lazy"
                                        style={{ width: "100%" }}
                                    />}
                                    {info && info.fondo != null && <img
                                        src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/logo+ABG+blanco.png"
                                        loading="lazy"
                                        style={{ width: "100%" }}
                                    />}
                                </Grid>
                                <Grid xs={12} md={6} lg={6}>
                                    {info && (
                                        <Typography variant="h5" style={{ color: info.fondo == null ? 'black' : 'white' }}>
                                            {info.titulo}
                                            <br />
                                            {info.evt_name}
                                        </Typography>
                                    )}
                                </Grid>
                            </Grid>
                            {info && (
                                <div
                                    style={{ padding: "2%" }}
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(info.instrucciones),
                                    }}
                                ></div>
                            )}
                        </Stack>
                    </Paper>
                    <Formulario afterSubmit={afterSubmit} formConfig={formConfig} />
                </Stack>
            </Container>
        </Box>
    );
}

export default EncuestaSatisfaccion