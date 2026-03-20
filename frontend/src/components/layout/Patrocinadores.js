import {
    Grid,
    Stack,
    Typography,
    Divider,
    Box
} from "@mui/material";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'
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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        // activa el movimiento automático
        autoplaySpeed: 3000,
    };
    return (
        <Box sx={{ width: "100%", margin: "0 auto" }}>
            <Slider {...settings}>
                {patrocinadores.map((actual, indice) => (
                    <Box sx={{ p: 2 }}>

                        <Stack spacing={2} key={`FILA-PATROCINADORES-${indice}`} >
                            <Typography variant="h5">
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
                                alignContent='center'
                                justifyItems='center'
                                key={`segmento-patrocinadores-${indice}`}
                            >
                                {actual.map((curr) => (

                                    <Grid
                                        key={curr.UniqueID}
                                        size={actual[0].tipo == 'DIAMANTE' ? { xs: 4, md: 4, lg: 4 } : actual[0].tipo == 'PLATINO' ? { xs: 3, md: 3, lg: 3 } : actual[0].tipo == 'ORO' ? { xs: 2, md: 2, lg: 2 } : { xs: 1, md: 1, lg: 1 }}
                                        style={{ textAlign: "center" }}
                                        p={2}
                                    >
                                        <img src={curr.promocional_landing} alt="sponsor-img" style={actual[0].tipo == 'DIAMANTE' ? { width: "100%", objectFit: "contain" } : actual[0].tipo == 'PLATINO' ? { width: "100%", objectFit: "contain" } : actual[0].tipo == 'ORO' ? { width: "100%", objectFit: "contain" } : { width: "100%", objectFit: "contain" }} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Stack>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default Patrocinadores;
