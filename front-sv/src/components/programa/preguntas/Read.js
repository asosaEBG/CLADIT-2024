import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { motion, AnimatePresence } from "framer-motion";
import Item from "./Item";

const live_events_service = require("../../../helpers/live_events_service");

const primary = "rgba(101,166,48,1)";
const textMuted = "rgba(12,25,34,0.55)";

const ReadPreguntas = ({ id_speaker }) => {
  const [contador, setContador] = useState(0);
  const [preguntas, setPreguntas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    live_events_service
      .getData("/preguntas/read/" + id_speaker)
      .then((data) => {
        setLoading(false);
        setPreguntas(
          data.data.response.result.sort(
            (a, b) => new Date(b.fecha_registro) - new Date(a.fecha_registro)
          )
        );
      })
      .catch(() => setLoading(false));
  }, [contador, id_speaker]);

  const visible = preguntas.filter((p) => p.estado === 0);

  return (
    <Box>
      <Box
        onClick={() => !loading && setContador((c) => c + 1)}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 0.75,
          px: 1.5,
          py: 0.7,
          borderRadius: 99,
          border: "1.5px solid rgba(101,166,48,0.30)",
          cursor: loading ? "default" : "pointer",
          mb: 2,
          opacity: loading ? 0.5 : 1,
          transition: "opacity 0.2s, background 0.15s",
          "&:active": { background: "rgba(101,166,48,0.06)" },
        }}
      >
        {loading ? (
          <CircularProgress size={12} sx={{ color: primary }} />
        ) : (
          <RefreshIcon sx={{ fontSize: 14, color: primary }} />
        )}
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 600,
            color: primary,
            fontFamily: "'Montserrat', sans-serif",
            userSelect: "none",
          }}
        >
          {loading ? "Cargando..." : "Refrescar"}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <AnimatePresence>
          {visible.map((actual, index) => (
            <motion.div
              key={`pregunta-${actual.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ delay: index * 0.04, duration: 0.22 }}
            >
              <Item
                actual={actual}
                id_speaker={id_speaker}
                refresh={() => setContador((c) => c + 1)}
              />
            </motion.div>
          ))}
        </AnimatePresence>

        {!loading && visible.length === 0 && (
          <Box
            sx={{
              py: 4,
              textAlign: "center",
              background: "rgba(101,166,48,0.03)",
              borderRadius: "12px",
              border: "1.5px solid rgba(101,166,48,0.10)",
            }}
          >
            <Typography
              sx={{
                fontSize: 13,
                color: textMuted,
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              No hay preguntas aún
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ReadPreguntas;
