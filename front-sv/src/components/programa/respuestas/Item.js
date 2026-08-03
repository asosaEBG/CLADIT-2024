import React from "react";
import { Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const primary = "rgba(101,166,48,1)";
const text = "#0c1922";
const border = "rgba(101,166,48,0.18)";

const Item = ({ actual }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.25,
        alignItems: "flex-start",
        background: "rgba(101,166,48,0.03)",
        border: `1.5px solid ${border}`,
        borderRadius: "12px",
        p: 1.5,
      }}
    >
      {/* Avatar icono */}
      <Box
        sx={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: "rgba(101,166,48,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <PersonIcon sx={{ fontSize: 16, color: primary }} />
      </Box>

      {/* Texto */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        {actual.nombre && (
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 700,
              color: primary,
              fontFamily: "'Montserrat', sans-serif",
              mb: 0.35,
            }}
          >
            {actual.nombre}
          </Typography>
        )}
        <Typography
          sx={{
            fontSize: 13,
            color: text,
            lineHeight: 1.55,
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          {actual.respuesta}
        </Typography>
      </Box>
    </Box>
  );
};

export default Item;
