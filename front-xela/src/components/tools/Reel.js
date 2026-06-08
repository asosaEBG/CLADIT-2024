import React from 'react'
import { Box } from '@mui/material'

const Reel = () => {
    const reel_array = [
        'https://escuela-bancaria.s3.us-east-2.amazonaws.com/a5a427fa-64a3-4a76-9456-b63abe3838ee.jpeg',
        'https://escuela-bancaria.s3.us-east-2.amazonaws.com/1c37e27b-243c-4373-be1e-ad704cdb0fe7.jpeg',
        'https://escuela-bancaria.s3.us-east-2.amazonaws.com/9cd1b6b4-83b2-4f12-9aac-01592457f32d.jpeg',
        'https://escuela-bancaria.s3.us-east-2.amazonaws.com/1cd54b7e-d0dd-404c-887d-eb440111905e.jpeg',
        'https://escuela-bancaria.s3.us-east-2.amazonaws.com/50d507b1-8c82-4194-995f-e3cac5138874.jpeg',
        'https://escuela-bancaria.s3.us-east-2.amazonaws.com/932e6553-7f5f-4528-adb2-09ab4444b0fa.jpeg',
        'https://escuela-bancaria.s3.us-east-2.amazonaws.com/5422d9ee-cd8a-410c-9178-a261661a216e.jpeg',
        'https://escuela-bancaria.s3.us-east-2.amazonaws.com/0a5df7b2-21f0-4535-99c1-87d5a63e7c98.jpeg',
        'https://escuela-bancaria.s3.us-east-2.amazonaws.com/0e1688f1-4acc-4fa4-8a78-748d0fb8bc68.jpeg',
        'https://escuela-bancaria.s3.us-east-2.amazonaws.com/ed1e0ec4-9205-4ae0-bed0-841d1d87077c.jpeg',
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/REEL+FOTOS+CLADIT/20250217_082524.jpg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/REEL+FOTOS+CLADIT/20250217_100406.jpg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/REEL+FOTOS+CLADIT/20250217_102114.jpg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/REEL+FOTOS+CLADIT/20250217_103201.jpg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/REEL+FOTOS+CLADIT/20250217_143420.jpg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/REEL+FOTOS+CLADIT/20250217_143736.jpg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/REEL+FOTOS+CLADIT/DSC_1695.JPG",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/REEL+FOTOS+CLADIT/DSC_2118.JPG",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/REEL+FOTOS+CLADIT/DSC_2125.JPG",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/REEL+FOTOS+CLADIT/DSC_7898.JPG",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/REEL+FOTOS+CLADIT/DSC_7905.JPG",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/REEL+FOTOS+CLADIT/DSC_7918.JPG",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/REEL+FOTOS+CLADIT/DSC_7924.JPG",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/REEL+FOTOS+CLADIT/DSC_8098.JPG",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/REEL+FOTOS+CLADIT/DSC_8105.JPG",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/REEL+FOTOS+CLADIT/Ver+fotos+recientes+6.png",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/REEL+FOTOS+CLADIT/Ver+fotos+recientes+7.png",

    ]

    const photos = [...reel_array, ...reel_array]

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '100%',
                overflow: 'hidden',
                py: { xs: 2.5, md: 5 },
                boxSizing: 'border-box',
                position: 'relative',
                '&::before, &::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    width: { xs: 30, md: 120 },
                    height: '100%',
                    zIndex: 2,
                    pointerEvents: 'none',
                },
                '&::before': {
                    left: 0,
                    background: 'linear-gradient(90deg, #f5f7f6 0%, rgba(245,247,246,0) 100%)',
                },
                '&::after': {
                    right: 0,
                    background: 'linear-gradient(270deg, #f5f7f6 0%, rgba(245,247,246,0) 100%)',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: { xs: 1.5, sm: 2, md: 3 },
                    width: 'max-content',
                    animation: 'reelScroll 450s linear infinite',
                    willChange: 'transform',
                    '&:hover': {
                        animationPlayState: 'paused',
                    },
                    '@keyframes reelScroll': {
                        from: { transform: 'translateX(0)' },
                        to: { transform: 'translateX(-50%)' },
                    },
                }}
            >
                {photos.map((item, index) => (
                    <Box
                        key={`${item}-${index}`}
                        sx={{
                            flex: '0 0 auto',
                            width: {
                                xs: '72vw',
                                sm: '46vw',
                                md: '31vw',
                                lg: '24vw',
                                xl: '20vw',
                            },
                            maxWidth: 430,
                            minWidth: { xs: 250, md: 330 },
                            aspectRatio: '16 / 10',
                            borderRadius: { xs: 2.5, md: 3 },
                            overflow: 'hidden',
                            boxShadow: '0 18px 45px rgba(0, 0, 0, 0.16)',
                            transform: index % 2 === 0 ? 'translateY(8px)' : 'translateY(-6px)',
                            transition: 'transform 350ms ease, box-shadow 350ms ease',
                            '&:hover': {
                                transform: 'translateY(-10px) scale(1.025)',
                                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.25)',
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src={`${item}?w=900&fit=crop&auto=format`}
                            srcSet={`${item}?w=900&fit=crop&auto=format&dpr=2 2x`}
                            alt={`Foto del evento ${(index % reel_array.length) + 1}`}
                            loading="lazy"
                            sx={{
                                width: '100%',
                                height: '100%',
                                display: 'block',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Reel
