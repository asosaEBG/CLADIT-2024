import {
    Card,
    CardActionArea,
    CardMedia,
    Grid,
    Stack,
    Typography,
    Divider,
    Box
} from "@mui/material";
import React, { useEffect, useState } from "react";
const live_events_service = require('../../helpers/live_events_service')
const helpers = require("../../helpers/helpers");
const Patrocinadores = () => {
    const [contador] = useState(0);
    const [patrocinadores, setPatrocinadores] = useState([]);
    useEffect(() => {
        live_events_service
            .getData(
                "/patrocinador/view-by-evento/" +
                process.env.REACT_APP_EVT
            )
            .then((response_patrocinador) => {
                setPatrocinadores(helpers.classifyByField(response_patrocinador.data.response.result, "tipo"));
            })
            .catch((error) => {
                console.log(error);
            });

    }, [contador]);
    return (
        <Box p={15}>
            {patrocinadores.map((actual, indice) => (
                <Stack spacing={2} key={`FILA-PATROCINADORES-${indice}`} >
                    <Typography variant="h6">
                        PATROCINADORES
                        NIVEL {actual[0].tipo}
                    </Typography>
                    <Divider
                        style={{
                            backgroundColor: "#397d51",
                            height: "3px",
                            width: "100%",
                        }}
                    />
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        key={`segmento-patrocinadores-${indice}`}
                    >
                        {actual.map((curr) => (
                            actual[0].tipo === "DIAMANTE" ?
                                <Grid
                                    key={curr.UniqueID}
                                    size={{ xs: 3, md: 3, lg: 3 }}
                                    style={{ textAlign: "center" }}
                                    p={2}
                                >
                                    <img src={curr.promocional_landing} alt="sponsor-img" style={{ width: "100%", objectFit: "contain" }} />
                                </Grid> : <Grid
                                    key={curr.UniqueID}
                                    size={{ xs: 1, md: 1, lg: 1 }}
                                    style={{ textAlign: "center" }}
                                    p={2}
                                >
                                    <img src={curr.promocional_landing} alt="sponsor-img" style={{ width: "100%", objectFit: "contain" }} />
                                </Grid>
                        ))}
                        <Grid size={{ xs: 12, md: 12, lg: 12 }} style={{ textAlign: "center" }} p={2}>

                        </Grid>
                    </Grid>
                </Stack>

            ))}
        </Box>
    );
};

export default Patrocinadores;
