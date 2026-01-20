import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const primaryColor = "#397d51";

const pricingData = [
  {
    category: "Tarifa Marzo hasta el día del evento",
    rows: [
      { participants: "1 Participante", gtq: "Q 4,760.00", usd: "$ 595.00" },
      { participants: "3 Participantes", gtq: "Q 4,320.00", usd: "$ 540.00" }
    ]
  },
  {
    category: "Tarifa Early Bird",
    highlight: true,
    rows: [
      { participants: "1 Participante", gtq: "Q 4,200.00", usd: "$ 525.00" },
      { participants: "3 Participantes", gtq: "Q 3,800.00", usd: "$ 475.00" }
    ]
  }
];

export default function TarifasGT() {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      sx={{ p: { xs: 2, md: 4 } }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 4, color: primaryColor }}
      >
        CLADIT 2026 · Tarifas de Inscripción
      </Typography>

      {pricingData.map((section, index) => (
        <MotionPaper
          key={index}
          elevation={section.highlight ? 6 : 2}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          sx={{
            mb: 4,
            borderRadius: 3,
            overflow: "hidden",
            border: section.highlight
              ? `2px solid ${primaryColor}`
              : "1px solid #e0e0e0"
          }}
        >
          <Box
            sx={{
              p: 2,
              backgroundColor: section.highlight
                ? primaryColor
                : `${primaryColor}15`
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              color={section.highlight ? "white" : primaryColor}
            >
              {section.category}
            </Typography>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Participantes</strong></TableCell>
                  <TableCell align="right"><strong>Precio (Q)</strong></TableCell>
                  <TableCell align="right"><strong>Precio (USD)</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {section.rows.map((row, i) => (
                  <TableRow
                    key={i}
                    hover
                    sx={{
                      "&:hover": {
                        backgroundColor: `${primaryColor}10`
                      }
                    }}
                  >
                    <TableCell>{row.participants}</TableCell>
                    <TableCell align="right">{row.gtq}</TableCell>
                    <TableCell align="right">{row.usd}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </MotionPaper>
      ))}

      {/* INCLUYE */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 2, color: primaryColor }}
        >
          La inscripción incluye
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <List>
              {[
                "Conferencias",
                "Taller Pre Congreso a elección del participante (cupo limitado)",
                "Refrigerios a.m. y p.m.",
                "Almuerzos",
                "Acceso al área de stands",
                "Certificado de participación digital",
                "Grabación de conferencias",
                "Cóctel de Bienvenida (sujeto a patrocinio)"
              ].map((item, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: primaryColor }} />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 2,
                borderRadius: 3,
                backgroundColor: `${primaryColor}10`,
                border: `1px solid ${primaryColor}30`
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Cupos Taller Pre Congreso
              </Typography>
              <Chip label="Bancos: 200 personas" sx={{ mb: 1, mr: 1 }} />
              <Chip label="Cooperativas: 100 personas" sx={{ mb: 1, mr: 1 }} />
              <Chip label="Otros Sujetos Obligados: 100 personas" />
            </Box>
          </Grid>
        </Grid>
      </MotionBox>
    </MotionBox>
  );
}
