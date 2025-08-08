import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

export default function RadioButtonsGroupRow(props) {
  return (
    <Box style={{ width: "100%", textAlign: "right" }}>
      <FormControl>
        <RadioGroup
          aria-labelledby={props.index + "-" + props.conf.name}
          onChange={props.onChange}
          disabled={props.disabled}
          name={props.index + "-" + props.conf.name}
          value={props.conf.value}

          row
        >
          {props.conf.options &&
            props.conf.options.map((actual, indice) => (
              <FormControlLabel
                sx={{
                  color: "white", // Label color
                }}
                key={`radio-${props.index}-${props.conf.name}-${indice}`}
                value={actual.value}
                control={<Radio sx={{
                  color: "white", // Default color
                  "&.Mui-checked": {
                    color: "white", // Selected color
                  },
                }} />}
                label={actual.label}
                required={props.conf.required && props.conf.value == ""}
                name={props.index + "-" + props.conf.name}
              />
            ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
