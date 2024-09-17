import React from "react";
import { Box } from "@mui/material";
import VistaPrevia from "./VistaPrevia";
import CssBaseline from "@mui/material/CssBaseline";

export default function ViewPrograma(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ width: "100%" }} paddingTop={5} paddingBottom={5}>
        <VistaPrevia hash={props.hash} speaker={props.speaker} />
      </Box>
    </React.Fragment>
  );
}
