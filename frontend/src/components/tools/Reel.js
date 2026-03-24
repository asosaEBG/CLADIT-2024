import { ImageList, ImageListItem } from '@mui/material'
import React from 'react'

const Reel = () => {
    const reel_array = [
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/a5a427fa-64a3-4a76-9456-b63abe3838ee.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/1c37e27b-243c-4373-be1e-ad704cdb0fe7.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/9cd1b6b4-83b2-4f12-9aac-01592457f32d.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/1cd54b7e-d0dd-404c-887d-eb440111905e.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/50d507b1-8c82-4194-995f-e3cac5138874.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/932e6553-7f5f-4528-adb2-09ab4444b0fa.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/5422d9ee-cd8a-410c-9178-a261661a216e.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/0a5df7b2-21f0-4535-99c1-87d5a63e7c98.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/0e1688f1-4acc-4fa4-8a78-748d0fb8bc68.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/ed1e0ec4-9205-4ae0-bed0-841d1d87077c.jpeg",

    ]
    return (
        <ImageList cols={10}>
            {reel_array.map((item) => (
                <ImageListItem key={item}>
                    <img
                        srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item}?w=248&fit=crop&auto=format`}
                        alt={item}
                        loading="lazy"
                        style={{ objectFit: 'cover' }}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default Reel