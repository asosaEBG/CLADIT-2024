import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
export default function FileField(props) {
  return (
    <Box style={{ ...props.style }}>
      <div style={{ width: "100%" }}>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          disabled={props.disabled}
          startIcon={<CloudUploadIcon />}
        >
          Seleccionar archivo
          <VisuallyHiddenInput
            type="file"
            required={props.conf.required}
            onChange={props.onChange}
            name={props.index + "-" + props.conf.name}
            disabled={props.disabled}
            fullWidth
          />
        </Button>
        {((props.conf.required && props.conf.value == null) ||
          props.conf.value == null) && (
          <p>No se ha seleccionado ningún archivo</p>
        )}
        {props.conf.value != null && (
          <p>1 archivo seleccionado:&nbsp;{props.conf.value.split(";")[0]}</p>
        )}
        {<p></p>}
      </div>
    </Box>
  );
}
