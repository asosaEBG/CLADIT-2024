import React, { useState, useRef } from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Box,
  Stack
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FilePreviewModal({ open, onClose, url, title }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const startPos = useRef({ x: 0, y: 0 });

  if (!url) return null;

  const isPdf = url.toLowerCase().includes(".pdf");
  const isImage = /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(url);

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    setScale((prev) => Math.min(Math.max(prev + delta, 1), 5));
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    startPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - startPos.current.x,
      y: e.clientY - startPos.current.y
    });
  };

  const handleMouseUp = () => setDragging(false);

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.3, 5));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.3, 1));
  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
      <AppBar sx={{ position: "relative", backgroundColor: "#65a630" }}>
        <Toolbar>
          <Typography sx={{ flex: 1 }} variant="h6">
            {title || "Vista previa"}
          </Typography>
          <IconButton edge="end" color="inherit" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {isPdf && (
          <iframe
            src={url}
            title="PDF Viewer"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        )}

        {isImage && (
          <>
            {/* Tools flotantes */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                zIndex: 10,
                background: "rgba(0,0,0,0.6)",
                padding: "6px 10px",
                borderRadius: "12px"
              }}
            >
              <IconButton onClick={zoomOut} sx={{ color: "white" }}>
                <ZoomOutIcon />
              </IconButton>
              <IconButton onClick={zoomIn} sx={{ color: "white" }}>
                <ZoomInIcon />
              </IconButton>
              <IconButton onClick={resetZoom} sx={{ color: "white" }}>
                <RestartAltIcon />
              </IconButton>
            </Stack>

            {/* Imagen */}
            <Box
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: dragging ? "grabbing" : "grab"
              }}
            >
              <Box
                component="img"
                src={url}
                alt="Preview"
                sx={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  transition: dragging ? "none" : "transform 0.2s ease",
                  userSelect: "none",
                  pointerEvents: "none",
                  maxWidth: "100%",
                  maxHeight: "100%"
                }}
              />
            </Box>
          </>
        )}

        {!isPdf && !isImage && (
          <Typography color="white">
            Tipo de archivo no soportado.
          </Typography>
        )}
      </Box>
    </Dialog>
  );
}