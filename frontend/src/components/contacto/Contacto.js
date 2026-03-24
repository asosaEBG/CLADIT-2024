import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Stack,
    Divider,
    Breadcrumbs,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CampaignIcon from "@mui/icons-material/Campaign";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

import CallIcon from '@mui/icons-material/Call';
const MotionCard = motion(Card);

const primary = "rgba(101,166,48,1)";
const light = "rgba(101,166,48,0.1)";

export default function Contacto() {
    return (
        <Stack spacing={5} alignItems='center' style={{ background: "#f5f7f6", width: '100%' }} pt={3}>
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
                    <CallIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Contacto
                </Typography>

            </Breadcrumbs>
            <Box sx={{ py: 10, width: "100%" }} >
                <Container maxWidth="lg">

                    {/* HEADER */}
                    <Typography variant="h4" fontWeight="bold" sx={{ color: primary }}>
                        CONTÁCTANOS
                    </Typography>

                    <Typography sx={{ mt: 2, mb: 6, color: "text.secondary" }}>
                        Ya sea que desees participar en el congreso o convertirte en patrocinador, nuestro equipo está listo para ayudarte.
                    </Typography>

                    <Grid container spacing={4} justifyContent='center'>

                        {/* CLIENTES */}
                        <Grid item size ={{xs:12, md:12, lg:6}}>
                            <MotionCard
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                                sx={{ borderRadius: 4, p: 3, height: "100%" }}
                            >
                                <CardContent>
                                    <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                                        <SchoolIcon sx={{ color: primary }} />
                                        <Typography variant="h6" fontWeight="bold">
                                            Información e Inscripciones
                                        </Typography>
                                    </Stack>

                                    <Typography color="text.secondary" mb={3}>
                                        Recibe información sobre tarifas, agenda, cupos y proceso de inscripción al CLADIT 2026.
                                    </Typography>

                                    <Stack spacing={2}>
                                        <Button
                                            startIcon={<PhoneIcon />}
                                            href="tel:+50245124653"
                                            variant="outlined"
                                        >
                                            Llamar
                                        </Button>

                                        <Button
                                            startIcon={<EmailIcon />}
                                            href="mailto:ncuches@ebg.edu.gt?subject=Información%20CLADIT%202026"
                                            variant="outlined"
                                        >
                                            Enviar correo
                                        </Button>

                                        <Button
                                            startIcon={<WhatsAppIcon />}
                                            href="https://wa.me/50245124653?text=Hola,%20deseo%20información%20sobre%20inscripción%20al%20CLADIT%202026"
                                            target="_blank"
                                            variant="contained"
                                            sx={{
                                                background: primary,
                                                "&:hover": { background: primary },
                                            }}
                                        >
                                            WhatsApp
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </MotionCard>
                        </Grid>

                        {/* PATROCINADORES */}
                        <Grid item size ={{xs:12, md:12, lg:6}}>
                            <MotionCard
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                                sx={{
                                    borderRadius: 4,
                                    p: 3,
                                    height: "100%",
                                    border: `2px solid ${primary}`,
                                }}
                            >
                                <CardContent>
                                    <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                                        <CampaignIcon sx={{ color: primary }} />
                                        <Typography variant="h6" fontWeight="bold">
                                            Patrocinios
                                        </Typography>
                                    </Stack>

                                    <Typography color="text.secondary" mb={3}>
                                        Posiciona tu marca frente a líderes del sector financiero y genera oportunidades de negocio en toda la región.
                                    </Typography>

                                    <Typography fontWeight="bold" mb={2}>
                                        Nancy Cuches
                                    </Typography>

                                    <Stack spacing={2}>
                                        <Button
                                            startIcon={<PhoneIcon />}
                                            href="tel:+50245124653"
                                            variant="outlined"
                                        >
                                            (+502) 4512-4653
                                        </Button>

                                        <Button
                                            startIcon={<EmailIcon />}
                                            href="mailto:ncuches@ebg.edu.gt?subject=Interés%20en%20Patrocinio%20CLADIT%202026"
                                            variant="outlined"
                                        >
                                            ncuches@ebg.edu.gt
                                        </Button>

                                        <Button
                                            startIcon={<WhatsAppIcon />}
                                            href="https://wa.me/50245124653?text=Hola,%20me%20interesa%20ser%20patrocinador%20del%20CLADIT%202026"
                                            target="_blank"
                                            variant="contained"
                                            sx={{
                                                background: primary,
                                                "&:hover": { background: primary },
                                            }}
                                        >
                                            WhatsApp directo
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </MotionCard>
                        </Grid>

                    </Grid>

                    {/* CTA FINAL */}
                    <Box textAlign="center" mt={10}>
                        <Typography variant="h5" fontWeight="bold">
                            Sé parte del CLADIT 2026
                        </Typography>

                        <Typography color="text.secondary" mt={1}>
                            Participa como asistente o patrocinador en el evento líder de la región.
                        </Typography>

                        <Button
                            href="mailto:ncuches@ebg.edu.gt"
                            sx={{
                                mt: 3,
                                background: primary,
                                color: "#fff",
                                px: 5,
                                py: 1.5,
                                borderRadius: 3,
                                fontWeight: "bold",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }}
                        >
                            CONTACTAR AHORA
                        </Button>
                    </Box>

                </Container>
            </Box>
        </Stack>
    );
}