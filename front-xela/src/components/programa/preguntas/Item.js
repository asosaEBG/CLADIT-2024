import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { AnimatePresence, motion } from "framer-motion";
import ReadRespuesta from "../respuestas/Read";

const primary = "rgba(101,166,48,1)";
const text = "#0c1922";
const textMuted = "rgba(12,25,34,0.62)";
const border = "rgba(101,166,48,0.18)";

function getInitial(name) {
  return (name || "?")?.[0]?.toUpperCase() || "?";
}

const Item = ({ actual }) => {
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <>
      {/* Question card */}
      <Box
        sx={{
          background: "#fff",
          border: `1.5px solid ${border}`,
          borderRadius: "14px",
          p: 1.75,
          display: "flex",
          gap: 1.5,
          alignItems: "flex-start",
          boxShadow: "0 2px 8px rgba(101,166,48,0.06)",
        }}
      >
        {/* Avatar inicial */}
        <Box
          sx={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "rgba(101,166,48,0.10)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: 14,
            fontWeight: 700,
            color: primary,
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          {getInitial(actual.nombre)}
        </Box>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          {actual.nombre && (
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 700,
                color: primary,
                fontFamily: "'Montserrat', sans-serif",
                mb: 0.4,
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
            {actual.pregunta}
          </Typography>
        </Box>

        {/* Botón ver respuestas */}
        <Box
          onClick={() => setOpenSheet(true)}
          sx={{
            flexShrink: 0,
            width: 34,
            height: 34,
            borderRadius: "10px",
            background: "rgba(101,166,48,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.15s",
            "&:active": { background: "rgba(101,166,48,0.20)" },
          }}
        >
          <QuestionAnswerIcon sx={{ fontSize: 16, color: primary }} />
        </Box>
      </Box>

      {/* Bottom-sheet de respuestas */}
      <AnimatePresence>
        {openSheet && (
          <motion.div
            key="sheet-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(12,25,34,0.48)",
              zIndex: 1400,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            onClick={() => setOpenSheet(false)}
          >
            <motion.div
              key="sheet-panel"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 360, damping: 40 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#fff",
                borderRadius: "20px 20px 0 0",
                width: "100%",
                maxWidth: 600,
                maxHeight: "82vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Handle */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  pt: 1.5,
                  pb: 0.75,
                  flexShrink: 0,
                }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 4,
                    borderRadius: 2,
                    background: "rgba(12,25,34,0.12)",
                  }}
                />
              </Box>

              {/* Header */}
              <Box sx={{ px: 2.5, pb: 1.5, flexShrink: 0 }}>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: text,
                    fontFamily: "'Montserrat', sans-serif",
                    mb: 0.5,
                  }}
                >
                  Respuestas
                </Typography>
                <Box
                  sx={{
                    background: "rgba(101,166,48,0.04)",
                    border: `1px solid ${border}`,
                    borderRadius: "10px",
                    p: 1.25,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: textMuted,
                      fontFamily: "'Montserrat', sans-serif",
                      lineHeight: 1.5,
                      fontStyle: "italic",
                    }}
                  >
                    "{actual.pregunta}"
                  </Typography>
                </Box>
              </Box>

              {/* Contenido scrolleable */}
              <Box sx={{ flex: 1, overflow: "auto", px: 2.5, pb: 2 }}>
                <ReadRespuesta id_pregunta={actual.id} />
              </Box>

              {/* Cerrar */}
              <Box
                sx={{
                  flexShrink: 0,
                  px: 2.5,
                  py: 2,
                  borderTop: "1px solid rgba(12,25,34,0.08)",
                }}
              >
                <Box
                  onClick={() => setOpenSheet(false)}
                  sx={{
                    width: "100%",
                    py: 1.4,
                    borderRadius: "14px",
                    background: "rgba(101,166,48,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    "&:active": { opacity: 0.7 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: primary,
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    Cerrar
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Item;
