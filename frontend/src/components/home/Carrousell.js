import React from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carrousell = () => {
    const varios_arr = [
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/52ae58d7-24cc-4954-ae58-e6a33590d9dd.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/f7bce16e-1a2c-4731-a66b-5a91ecc3eeaa.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/d8d7a616-dab4-44e7-853e-0fff815fceeb.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/431f5b17-fa11-4930-b6ef-3f0b1feb573a.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/451f7bb8-1d05-427e-8f18-4e94145c1e86.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/7b9c2c52-6f0d-40e8-acb3-a6d545b2d6a5.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/47129e5f-2a5e-4348-a0d5-752d53d3ecf4.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/620c27f5-eedc-4a94-b052-c3ee2093c749.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/b6010e2c-5019-4bad-b411-bf8cccc61532.jpeg",
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false, // 👈 más limpio (puedes activarlos si quieres)
        pauseOnHover: true,
    };

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1000px",
                margin: "0 auto",
            }}
        >
            <Slider {...settings}>
                {varios_arr.map((src, index) => (
                    <Box
                        key={index}
                        sx={{
                            height: { xs: 220, sm: 300, md: 400 },
                            borderRadius: "16px",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            component="img"
                            src={src}
                            alt={`slide-${index}`}
                            loading="lazy"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                transition: "transform 0.5s ease",
                                "&:hover": {
                                    transform: "scale(1.05)", // 👈 efecto elegante
                                },
                            }}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};
export default Carrousell;
