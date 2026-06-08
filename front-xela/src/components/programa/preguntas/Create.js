import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const live_events_service = require("../../../helpers/live_events_service");

const primary = "rgba(101,166,48,1)";
const primaryDark = "rgba(80,132,38,1)";

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 13,
    "&.Mui-focused fieldset": { borderColor: primary },
  },
  "& label.Mui-focused": { color: primary },
  "& label": { fontFamily: "'Montserrat', sans-serif", fontSize: 13 },
};

const CreatePregunta = ({ id_speaker, goToPreguntas }) => {
  const [nombre, setNombre] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pregunta.trim()) {
      setError("Por favor ingrese su pregunta");
      return;
    }
    setLoading(true);
    setError("");
    live_events_service
      .postData("/preguntas", {
        id_speaker,
        pregunta: pregunta.trim(),
        nombre: nombre.trim(),
        estado: 0,
      })
      .then(() => {
        goToPreguntas();
      })
      .catch(() => {
        setError("Ha ocurrido un error. Intente de nuevo.");
        setLoading(false);
      });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
    >
      <TextField
        label="Su nombre (opcional)"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        size="small"
        fullWidth
        sx={inputSx}
      />
      <TextField
        label="Ingrese su pregunta"
        value={pregunta}
        onChange={(e) => { setPregunta(e.target.value); setError(""); }}
        multiline
        minRows={3}
        size="small"
        fullWidth
        required
        sx={inputSx}
      />
      {error && (
        <Typography
          sx={{
            fontSize: 12,
            color: "#d32f2f",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          {error}
        </Typography>
      )}
      <Button
        type="submit"
        variant="contained"
        disabled={loading}
        endIcon={
          loading ? (
            <CircularProgress size={16} color="inherit" />
          ) : (
            <SendIcon />
          )
        }
        sx={{
          background: primary,
          "&:hover": { background: primaryDark },
          "&:disabled": { background: "rgba(101,166,48,0.4)" },
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          textTransform: "none",
          borderRadius: "10px",
          boxShadow: "none",
        }}
      >
        {loading ? "Enviando..." : "Enviar pregunta"}
      </Button>
    </Box>
  );
};

export default CreatePregunta;
