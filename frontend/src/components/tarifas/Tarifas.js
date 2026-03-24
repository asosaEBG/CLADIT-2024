import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Stack,
  Breadcrumbs,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reel from "../tools/Reel";

const MotionCard = motion(Card);

const primary = "rgba(101,166,48,1)";
const light = "rgba(101,166,48,0.1)";

const tarifas = [
  {
    title: "Tarifa Marzo hasta el día del evento",
    highlight: false,
    data: [
      {
        label: "1 Participante",
        qt: "Q 4,760.00",
        usd: "$ 595.00",
      },
      {
        label: "3 Participantes",
        qt: "Q 4,320.00 c/u",
        usd: "$ 540.00 c/u",
      },
    ],
  },
  {
    title: "Tarifa Early Bird",
    highlight: true,
    note: "Disponible hasta el 31 de marzo",
    data: [
      {
        label: "1 Participante",
        qt: "Q 4,200.00",
        usd: "$ 525.00",
      },
      {
        label: "3 Participantes",
        qt: "Q 3,800.00 c/u",
        usd: "$ 475.00 c/u",
      },
    ],
  },
];

const includes = [
  "Conferencias",
  "Taller Pre Congreso a elección (cupo limitado)",
  "Refrigerios a.m. y p.m.",
  "Almuerzos",
  "Acceso al área de stands",
  "Certificado digital",
  "Grabación de conferencias",
  "Cóctel de bienvenida (sujeto a patrocinio)",
];

export default function Tarifas() {
  return (
    <Stack spacing={5} alignItems='center' style={{ background: "#f5f7f6", width:"100%" }} pt={3}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Inicio
        </Link>

        <Typography
          sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
        >
          <AttachMoneyIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Tarifas
        </Typography>

      </Breadcrumbs>
      <Box sx={{ py: 10 }}>
        <Container>

          {/* HEADER */}
          <Typography variant="h4" fontWeight="bold" sx={{ color: primary }}>
            TARIFAS CLADIT 2026
          </Typography>

          <Box sx={{ width: 80, height: 4, background: primary, my: 2 }} />

          {/* TARJETAS */}
          <Grid container spacing={4}>
            {tarifas.map((item, i) => (
              <Grid item xs={12} key={i}>
                <MotionCard
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    border: item.highlight
                      ? `2px solid ${primary}`
                      : "1px solid #ddd",
                  }}
                >
                  {/* HEADER CARD */}
                  <Box
                    sx={{
                      background: item.highlight ? primary : light,
                      color: item.highlight ? "#fff" : primary,
                      px: 3,
                      py: 2,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography fontWeight="bold">
                      {item.title}
                    </Typography>

                    {item.note && (
                      <Chip
                        label={item.note}
                        sx={{
                          background: "#fff",
                          color: primary,
                          fontWeight: "bold",
                        }}
                      />
                    )}
                  </Box>

                  {/* BODY */}
                  <Box sx={{ p: 3 }}>
                    {item.data.map((row, index) => (
                      <Box key={index}>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={12} md={4}>
                            <Typography fontWeight="bold">
                              {row.label}
                            </Typography>
                          </Grid>

                          <Grid item xs={6} md={4}>
                            <Typography>{row.qt}</Typography>
                          </Grid>

                          <Grid item xs={6} md={4}>
                            <Typography>{row.usd}</Typography>
                          </Grid>
                        </Grid>

                        {index !== item.data.length - 1 && (
                          <Divider sx={{ my: 2 }} />
                        )}
                      </Box>
                    ))}
                  </Box>
                </MotionCard>
              </Grid>
            ))}
          </Grid>

          {/* INCLUYE */}
          <Box mt={10}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: primary, mb: 4 }}
            >
              LA INSCRIPCIÓN INCLUYE
            </Typography>

            <Grid container spacing={4}>
              {/* LISTA */}
              <Grid item xs={12} md={7}>
                <Card sx={{ borderRadius: 4, p: 3 }}>
                  <List>
                    {includes.map((item, i) => (
                      <ListItem key={i}>
                        <ListItemIcon>
                          <CheckCircleIcon sx={{ color: primary }} />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </Grid>

              {/* CUPOS */}
              <Grid item xs={12} md={5}>
                <Card
                  sx={{
                    borderRadius: 4,
                    p: 3,
                    background: light,
                  }}
                >
                  <Typography fontWeight="bold" mb={2}>
                    Cupos Taller Pre Congreso
                  </Typography>

                  <Box display="flex" gap={1} flexWrap="wrap">
                    <Chip label="Bancos: 200 personas" />
                    <Chip label="Cooperativas: 100 personas" />
                    <Chip label="Otros Sujetos Obligados: 100 personas" />
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Stack>
  );
}