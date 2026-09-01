import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { motion, AnimatePresence } from "framer-motion";
import Item from "./Item";

const live_events_service = require("../../../helpers/live_events_service");

const primary = "rgba(101,166,48,1)";
const textMuted = "rgba(12,25,34,0.55)";

const ReadRespuesta = ({ id_pregunta }) => {
  const [contador, setContador] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    live_events_service
      .getData("/respuestas/read/" + id_pregunta)
      .then((data) => {
        setLoading(false);
        setRespuestas(
          data.data.response.result.sort(
            (a, b) => new Date(b.fecha_registro) - new Date(a.fecha_registro)
          )
        );
      })
      .catch(() => setLoading(false));
  }, [contador, id_pregunta]);

  return (
    <Box>
      {/* Header con contador y refresh */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 1.5,
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 700,
            color: "rgba(12,25,34,0.45)",
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          {loading
            ? "Cargando..."
            : `${respuestas.length} respuesta${respuestas.length !== 1 ? "s" : ""}`}
        </Typography>

        <Box
          onClick={() => !loading && setContador((c) => c + 1)}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.6,
            px: 1.25,
            py: 0.55,
            borderRadius: 99,
            border: "1.5px solid rgba(101,166,48,0.30)",
            cursor: loading ? "default" : "pointer",
            opacity: loading ? 0.5 : 1,
            transition: "opacity 0.2s",
            "&:active": { background: "rgba(101,166,48,0.05)" },
          }}
        >
          {loading ? (
            <CircularProgress size={11} sx={{ color: primary }} />
          ) : (
            <RefreshIcon sx={{ fontSize: 13, color: primary }} />
          )}
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 600,
              color: primary,
              fontFamily: "'Montserrat', sans-serif",
              userSelect: "none",
            }}
          >
            Refrescar
          </Typography>
        </Box>
      </Box>

      {/* Lista de respuestas */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
        <AnimatePresence>
          {respuestas.map((actual, index) => (
            <motion.div
              key={`resp-${actual.id || index}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.04, duration: 0.2 }}
            >
              <Item actual={actual} />
            </motion.div>
          ))}
        </AnimatePresence>

        {!loading && respuestas.length === 0 && (
          <Box
            sx={{
              py: 3.5,
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
              Aún no hay respuestas
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ReadRespuesta;
