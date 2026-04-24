import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const live_events_service = require('../../helpers/live_events_service');
const helpers = require("../../helpers/helpers");

// ─── Configuración de niveles ───────────────────────────────────────────────
const NIVEL_CONFIG = {
    DIAMANTE: {
        order: 0,
        color: "#b9f2ff",
        bg: "linear-gradient(135deg, #0a1628 0%, #0d2040 50%, #0a1628 100%)",
        badge: "linear-gradient(90deg, #67e8f9, #a78bfa, #67e8f9)",
        badgeText: "#0a0a0a",
        glow: "0 0 32px rgba(103,232,249,0.35), 0 0 64px rgba(167,139,250,0.15)",
        border: "transparent",
        logoMaxWidth: 280,
        logoMaxHeight: 160,
        shimmer: true,
    },
    PLATINO: {
        order: 1,
        color: "#e2e8f0",
        bg: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        badge: "linear-gradient(90deg, #cbd5e1, #94a3b8, #cbd5e1)",
        badgeText: "#0f172a",
        glow: "0 0 24px rgba(203,213,225,0.2)",
        border: "transparent",
        logoMaxWidth: 240,
        logoMaxHeight: 140,
        shimmer: true,
    },
    ORO: {
        order: 2,
        color: "#fbbf24",
        bg: "linear-gradient(135deg, #1a0f00 0%, #2d1a00 50%, #1a0f00 100%)",
        badge: "linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b)",
        badgeText: "#1a0800",
        glow: "0 0 24px rgba(251,191,36,0.25)",
        border: "transparent",
        logoMaxWidth: 200,
        logoMaxHeight: 120,
        shimmer: false,
    },
    PLATA: {
        order: 3,
        color: "#94a3b8",
        bg: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)",
        badge: "linear-gradient(90deg, #64748b, #94a3b8, #64748b)",
        badgeText: "#0d1117",
        glow: "0 0 16px rgba(148,163,184,0.15)",
        border: "transparent",
        logoMaxWidth: 180,
        logoMaxHeight: 100,
        shimmer: false,
    },
    "APOYO INSTITUCIONAL": {
        order: 4,
        color: "#34d399",
        bg: "linear-gradient(135deg, #001a12 0%, #00241a 50%, #001a12 100%)",
        badge: "linear-gradient(90deg, #059669, #34d399, #059669)",
        badgeText: "#001a10",
        glow: "0 0 16px rgba(52,211,153,0.15)",
        border: "transparent",
        logoMaxWidth: 160,
        logoMaxHeight: 90,
        shimmer: false,
    },
    "ALIANZA ESTRATÉGICA": {
        order: 5,
        color: "#818cf8",
        bg: "linear-gradient(135deg, #0d0a1a 0%, #1a1530 50%, #0d0a1a 100%)",
        badge: "linear-gradient(90deg, #6366f1, #818cf8, #6366f1)",
        badgeText: "#0d0a1a",
        glow: "0 0 16px rgba(129,140,248,0.15)",
        border: "transparent",
        logoMaxWidth: 155,
        logoMaxHeight: 88,
        shimmer: false,
    },
    "MEDIA PARTNER": {
        order: 6,
        color: "#f472b6",
        bg: "linear-gradient(135deg, #1a001a 0%, #2d002d 50%, #1a001a 100%)",
        badge: "linear-gradient(90deg, #db2777, #f472b6, #db2777)",
        badgeText: "#1a001a",
        glow: "0 0 16px rgba(244,114,182,0.15)",
        border: "transparent",
        logoMaxWidth: 150,
        logoMaxHeight: 85,
        shimmer: false,
    },
};

// ─── Variantes de animación ─────────────────────────────────────────────────
const slideVariants = {
    enter: (dir) => ({
        x: dir > 0 ? "100%" : "-100%",
        opacity: 0,
        scale: 0.96,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (dir) => ({
        x: dir < 0 ? "100%" : "-100%",
        opacity: 0,
        scale: 0.96,
        transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

const logoVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const badgeVariants = {
    hidden: { opacity: 0, y: -12, scale: 0.85 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
    },
};

// ─── Shimmer animado para diamante/platino ──────────────────────────────────
const ShimmerBadge = ({ config, nivel }) => (
    <motion.div
        variants={badgeVariants}
        initial="hidden"
        animate="visible"
        style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 20px",
            borderRadius: 999,
            background: config.badge,
            backgroundSize: "200% 100%",
            position: "relative",
            overflow: "hidden",
            boxShadow: config.glow,
            marginBottom: 4,
        }}
    >
        {config.shimmer && (
            <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
                    pointerEvents: "none",
                }}
            />
        )}
        <span style={{ fontSize: 11, letterSpacing: "0.18em", fontWeight: 800, color: config.badgeText, textTransform: "uppercase" }}>
            ✦ {nivel}
        </span>
    </motion.div>
);

// ─── Puntos de navegación ───────────────────────────────────────────────────
const NavDots = ({ total, current, onSelect, patrocinadores }) => (
    <div style={{ display: "flex", gap: 6, justifyContent: "center", alignItems: "center", paddingTop: 20, flexWrap: "wrap", maxWidth: "80%", margin: "0 auto" }}>
        {patrocinadores.map((pat, i) => {
            const cfg = NIVEL_CONFIG[pat.tipo] ?? NIVEL_CONFIG["PLATA"];
            return (
                <motion.button
                    key={i}
                    onClick={() => onSelect(i)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        width: i === current ? 28 : 8,
                        height: 8,
                        borderRadius: 999,
                        background: i === current ? cfg.color : "rgba(255,255,255,0.2)",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        transition: "width 0.3s ease, background 0.3s ease",
                        boxShadow: i === current ? `0 0 12px ${cfg.color}66` : "none",
                    }}
                />
            );
        })}
    </div>
);

// ─── Flechas de navegación ──────────────────────────────────────────────────
const NavArrow = ({ dir, onClick, color }) => (
    <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.15, x: dir === "left" ? -2 : 2 }}
        whileTap={{ scale: 0.9 }}
        style={{
            position: "absolute",
            top: "50%",
            [dir === "left" ? "left" : "right"]: 12,
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "transparent",
            border: `1px solid #25D366`,
            borderRadius: "50%",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: color ?? "#25D366",
            fontSize: 18,
            backdropFilter: "blur(8px)",
            boxShadow: `0 0 16px #25D366`,
        }}
    >
        {dir === "left" ? "‹" : "›"}
    </motion.button>
);

// ─── Componente principal ───────────────────────────────────────────────────
const Patrocinadores = () => {
    const [contador] = useState(0);
    // Lista plana de todos los patrocinadores ordenada por jerarquía de nivel
    const [patrocinadores, setPatrocinadores] = useState([]);
    const [slide, setSlide] = useState(0);
    const [direction, setDirection] = useState(1);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        live_events_service
            .getData("/patrocinador/view-by-evento/" + process.env.REACT_APP_EVT)
            .then((res) => {
                const todos = res.data.response.result;
                // Ordenar por jerarquía de nivel y luego por nombre dentro del mismo nivel
                const sorted = [...todos].sort((a, b) => {
                    const orderA = NIVEL_CONFIG[a.tipo]?.order ?? 99;
                    const orderB = NIVEL_CONFIG[b.tipo]?.order ?? 99;
                    return orderA - orderB;
                });
                setPatrocinadores(sorted);
            })
            .catch(console.error);
    }, [contador]);

    const goTo = useCallback((next) => {
        setDirection(next > slide ? 1 : -1);
        setSlide(next);
    }, [slide]);

    const prev = useCallback(() => goTo((slide - 1 + patrocinadores.length) % patrocinadores.length), [slide, patrocinadores.length, goTo]);
    const next = useCallback(() => goTo((slide + 1) % patrocinadores.length), [slide, patrocinadores.length, goTo]);

    // Autoplay
    useEffect(() => {
        if (paused || patrocinadores.length === 0) return;
        const timer = setInterval(() => {
            setDirection(1);
            setSlide((s) => (s + 1) % patrocinadores.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [paused, patrocinadores.length]);

    if (patrocinadores.length === 0) return null;

    const patActual = patrocinadores[slide];
    const nivel = patActual?.tipo ?? "";
    const config = NIVEL_CONFIG[nivel] ?? NIVEL_CONFIG["PLATA"];

    return (
        <div
            style={{
                width: "100%",
                fontFamily: "'Inter', 'Segoe UI', sans-serif",
                userSelect: "none",
            }}
        >
            {/* Contenedor del carrusel */}
            <div
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 20,
                    minHeight: 280,
                }}
            >
                {/* Flecha izquierda */}
                {patrocinadores.length > 1 && (
                    <NavArrow dir="left" onClick={prev} />
                )}

                {/* Slide animado — un patrocinador a la vez */}
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={slide}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        style={{
                            position: "relative",
                            zIndex: 2,
                            padding: "32px 60px 28px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        {/* Badge de nivel */}
                        <div style={{ textAlign: "center", marginBottom: 20 }}>
                            <ShimmerBadge config={config} nivel={nivel} />
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                style={{
                                    margin: "6px 0 0",
                                    fontSize: 11,
                                    letterSpacing: "0.2em",
                                    color: "black",
                                    textTransform: "uppercase",
                                    fontWeight: 600,
                                }}
                            >
                                Patrocinadores
                            </motion.p>
                        </div>

                        {/* Separador animado */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            style={{
                                width: "100%",
                                height: 1,
                                background: `linear-gradient(90deg, transparent, #25D366, transparent)`,
                                marginBottom: 32,
                                transformOrigin: "center",
                            }}
                        />

                        {/* Logo individual centrado */}
                        <motion.div
                            variants={logoVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.07, filter: `drop-shadow(0 0 12px #25D366)` }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: 20,
                                borderRadius: 16,
                                background: "rgba(255,255,255,0.04)",
                                transition: "filter 0.3s",
                                cursor: "default",
                                minHeight: 120,
                            }}
                        >
                            <img
                                loading="lazy"
                                src={patActual.promocional_landing}
                                alt="sponsor"
                                style={{
                                    maxWidth: config.logoMaxWidth,
                                    maxHeight: config.logoMaxHeight,
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                    filter: "brightness(0.92) contrast(1.05)",
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* Flecha derecha */}
                {patrocinadores.length > 1 && (
                    <NavArrow dir="right" onClick={next} color="#25D366" />
                )}
            </div>

            {/* Dots de navegación */}
            {patrocinadores.length > 1 && (
                <NavDots
                    total={patrocinadores.length}
                    current={slide}
                    onSelect={goTo}
                    patrocinadores={patrocinadores}
                />
            )}

            {/* Indicador de posición actual */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`label-${slide}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        textAlign: "center",
                        marginTop: 10,
                        fontSize: 11,
                        color: config.color,
                        letterSpacing: "0.15em",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        opacity: 0.7,
                    }}
                >
                    {slide + 1} / {patrocinadores.length}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Patrocinadores;