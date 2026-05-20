import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Conferencista from "./Conferencista";
import PanelPreguntasRespuestas from "./Panel";

const PULSE_CSS = `
  @keyframes ebg-dot-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.45; transform: scale(0.78); }
  }
`;

const primary = "rgba(101,166,48,1)";

const Segmento = ({ segmento }) => {
  const [expanded, setExpanded] = useState(false);

  const isLive = segmento.master[7] === "HABILITADAS";

  const formatHour = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("es-GT", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <>
      <style>{PULSE_CSS}</style>
      <Box>
        <Stack>
          {/* Fila de hora + pill EN VIVO */}
          <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap">
            <Stack direction="row" alignItems="center">
              <AccessTimeIcon sx={{ fontSize: 18, color: primary }} />
              <Typography variant="h6" color="text.secondary">
                {formatHour(segmento.master[1])} - {formatHour(segmento.master[2])}
              </Typography>
            </Stack>

            {isLive && (
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.65,
                  px: 1.25,
                  py: 0.45,
                  borderRadius: 99,
                  background: "rgba(101,166,48,0.09)",
                  border: "1.5px solid rgba(101,166,48,0.35)",
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: primary,
                    animation: "ebg-dot-pulse 1.2s ease-in-out infinite",
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: primary,
                    fontFamily: "'Montserrat', sans-serif",
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  En Vivo
                </Typography>
              </Box>
            )}
          </Stack>

          {/* Título del segmento */}
          <Typography variant="h6" color="text.primary" fontWeight="bold">
            {segmento.master[0]}
          </Typography>

          {/* Conferencistas */}
          {segmento.detail &&
            segmento.detail.map((item, i) => (
              <Conferencista speaker={item} key={i} />
            ))}

          {/* Accordion Q&A — solo cuando HABILITADAS */}
          {isLive && (
            <Box
              sx={{
                mt: 1,
                border: "1.5px solid rgba(101,166,48,0.28)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Accordion
                expanded={expanded}
                onChange={(_, isExpanded) => setExpanded(isExpanded)}
                disableGutters
                elevation={0}
                sx={{
                  background: "transparent",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff", fontSize: 18 }} />}
                  sx={{
                    background: `linear-gradient(90deg, ${primary}, rgba(80,160,30,0.88))`,
                    minHeight: 44,
                    px: 2,
                    "& .MuiAccordionSummary-content": { my: 0 },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#fff",
                        animation: "ebg-dot-pulse 1.2s ease-in-out infinite",
                        flexShrink: 0,
                      }}
                    />
                    <DeviceUnknownIcon sx={{ fontSize: 16, color: "#fff" }} />
                    <Typography
                      sx={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#fff",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      Panel de preguntas · En vivo
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 2, background: "rgba(101,166,48,0.02)" }}>
                  <PanelPreguntasRespuestas id_speaker={segmento.id} />
                </AccordionDetails>
              </Accordion>
            </Box>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default Segmento;
