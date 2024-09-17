import * as React from "react";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

export default function CheckBox(props) {
  return (
    <Box style={props.style}>
      <div style={{ width: "100%" }}>
        <FormControl
          fullWidth
          variant="outlined"
          error={props.conf.required && props.conf.value.length == 0}
        >
          {props.conf.options &&
            props.conf.options.map((actual, indice) => (
              <FormControlLabel
                aria-labelledby={props.index + "-" + props.conf.name}
                key={`checkbox-${props.index}-${props.conf.name}-${indice}`}
                required={props.conf.required && props.conf.value.length == 0}
                control={
                  <Checkbox
                    onChange={props.onChange}
                    disabled={props.disabled}
                    name={props.index + "-" + props.conf.name + "-" + indice}
                    inputProps={{
                      "aria-labelledby": `checkbox-${props.index}-${props.conf.name}-${indice}`,
                    }}
                    value={actual.value}
                    checked={
                      props.conf.value.find((item) => item == actual.value) !=
                      undefined
                    }
                  />
                }
                label={`${actual.value}`}
              />
            ))}
        </FormControl>
      </div>
    </Box>
  );
}
