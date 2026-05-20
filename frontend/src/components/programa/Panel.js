import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CreatePregunta from "./preguntas/Create";
import ReadPreguntas from "./preguntas/Read";

const primary = "rgba(101,166,48,1)";

const TABS = ["Hacer pregunta", "Ver preguntas"];

export default function PanelPreguntasRespuestas({ id_speaker }) {
  const [tab, setTab] = useState(1);
  const [cambios, setCambios] = useState(0);

  const goToPreguntas = () => {
    setTab(1);
    setCambios((c) => c + 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Segmented control */}
      <Box
        sx={{
          display: "flex",
          background: "rgba(101,166,48,0.08)",
          borderRadius: "12px",
          p: 0.5,
          mb: 2,
        }}
      >
        {TABS.map((label, i) => (
          <Box
            key={i}
            onClick={() => { setTab(i); setCambios((c) => c + 1); }}
            sx={{
              flex: 1,
              py: 1,
              borderRadius: "10px",
              background: tab === i ? "#fff" : "transparent",
              boxShadow: tab === i ? "0 1px 6px rgba(101,166,48,0.18)" : "none",
              cursor: "pointer",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: tab === i ? 700 : 500,
                color: tab === i ? primary : "rgba(12,25,34,0.45)",
                fontFamily: "'Montserrat', sans-serif",
                transition: "all 0.2s",
                userSelect: "none",
              }}
            >
              {label}
            </Typography>
          </Box>
        ))}
      </Box>

      <AnimatePresence mode="wait">
        {tab === 0 && (
          <motion.div
            key="create"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            <CreatePregunta id_speaker={id_speaker} goToPreguntas={goToPreguntas} />
          </motion.div>
        )}

        {tab === 1 && (
          <motion.div
            key={`read-${cambios}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            <ReadPreguntas id_speaker={id_speaker} />
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
