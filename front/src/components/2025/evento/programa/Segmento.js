import React, { useEffect, useState } from "react";
import ViewSpeaker from "./ViewSpeaker";
import moment from "moment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InfoIcon from "@mui/icons-material/Info";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Stack,
  Paper,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PanelPreguntasRespuestas from "./Panel";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";
import EncuestaSatisfaccion from "./EncuestaSatisfaccion";
const Segmento = (props) => {
  const [contador, setContador] = useState(0);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => { }, [contador]);
  const handleChange = (panel) => (event, isExpanded) => {
    props.refreshData();
    setExpanded(isExpanded ? panel : false);
    setContador(contador + 1);
  };
  return (
    <Paper
      elevation={5}
      sx={{
        backgroundColor: props.actual.detail.length > 0 ? "white" : "#397d51",
        color: props.actual.detail.length > 0 ? "black" : "white",
      }}
    >
      <Stack spacing={3}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon
                  style={{
                    color: props.actual.detail.length > 0 ? "black" : "white",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={moment(props.actual.master[1]).format("L")}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccessTimeIcon
                  style={{
                    color: props.actual.detail.length > 0 ? "black" : "white",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={`${moment(props.actual.master[1]).format(
                  "LT"
                )} - ${moment(props.actual.master[2]).format("LT")}`}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon
                  style={{
                    color: props.actual.detail.length > 0 ? "black" : "white",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h4" style={{ textAlign: "justify" }}>
                  <strong>{props.actual.master[0]}</strong>
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        {props.actual.detail.map((speaker, indice) => (
          <ViewSpeaker id={speaker} key={speaker} />
        ))}
        {((props.actual.master[4] != "" && props.actual.master[4] != null) ||
          (props.actual.master[5] != "" && props.actual.master[5] != null) ||
          (props.actual.master[6] != "" && props.actual.master[6] != null) ||
          (props.actual.master[7] != "" && props.actual.master[7] != null)) && (
            <Box>
              {props.actual.master[7] == "HABILITADAS" && (
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    style={{ backgroundColor: "#397d51", color: "white" }}
                  >
                    <Typography
                      sx={{ width: "100%", flexShrink: 0, textAlign: "center" }}
                    >
                      <DeviceUnknownIcon fontSize="small" /> &nbsp;Panel de
                      preguntas
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <PanelPreguntasRespuestas
                      id_speaker={props.actual.id}
                      speaker={props.speaker}
                      preguntas={props.actual.master[7]}
                    />
                  </AccordionDetails>
                </Accordion>
              )}
            </Box>
          )}
        {props.actual.encuesta != null && <Box>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              style={{ backgroundColor: "#397d51", color: "white" }}
            >
              <Typography
                sx={{ width: "100%", flexShrink: 0, textAlign: "center" }}
              >
                <DeviceUnknownIcon fontSize="small" />Encuesta de Satisfacción
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <EncuestaSatisfaccion id={props.actual.encuesta} />
            </AccordionDetails>
          </Accordion></Box>}
      </Stack>
    </Paper>
  );
};

export default Segmento;
