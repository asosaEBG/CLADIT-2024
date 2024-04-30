import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

export default function NumberField(props) {
  return (
    <Box style={props.style}>
      <div style={{ width: "100%" }}>
        <FormControl
          fullWidth
          variant="outlined"
          required={props.conf.required}
        >
          <TextField
            label={props.conf.label}
            value={props.conf.value}
            onChange={props.onChange}
            name={props.index + "-" + props.conf.name}
            disabled={props.disabled}
            fullWidth
            type="number"
            step={props.conf.step}
          />
        </FormControl>
      </div>
    </Box>
  );
}
