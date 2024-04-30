import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

export default function TextArea(props) {
  return (
    <Box style={props.style}>
      <div style={{ width: "100%" }}>
        <FormControl fullWidth variant="outlined">
          <TextField
            label={props.conf.label}
            required={props.conf.required}
            value={props.conf.value}
            onChange={props.onChange}
            name={props.index + "-" + props.conf.name}
            disabled={props.disabled}
            fullWidth
            multiline
            rows={4}
          />
        </FormControl>
      </div>
    </Box>
  );
}
