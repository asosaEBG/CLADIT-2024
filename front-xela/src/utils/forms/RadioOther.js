import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function RadioButtonsGroup(props) {
  const [otherValue, setOtherValue] = React.useState("");
  const [selectedValue, setSelectedValue] = React.useState(props.conf.value);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (value === "other") {
      props.onChange({ target: { value: otherValue, name: event.target.name } });
    } else {
      props.onChange(event);
    }
  };

  const handleOtherChange = (event) => {
    setOtherValue(event.target.value);
    props.onChange({ target: { value: event.target.value, name: props.index + "-" + props.conf.name } });
  };

  return (
    <Box style={props.style}>
      <div style={{ width: "100%" }}>
        <FormControl fullWidth style={{ color: 'white' }}>
          <RadioGroup
            aria-labelledby={props.index + "-" + props.conf.name}
            onChange={handleChange}
            disabled={props.disabled}
            name={props.index + "-" + props.conf.name}
            value={selectedValue}
            style={{ color: "white" }}
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
                  required={props.conf.required && props.conf.value === ""}
                  name={props.index + "-" + props.conf.name}
                />
              ))}
            <FormControlLabel
              value="Otro"
              sx={{
                color: "white", // Label color
              }}
              control={<Radio sx={{
                color: "white", // Default color
                "&.Mui-checked": {
                  color: "white", // Selected color
                },
              }} />}
              label="Otro"
            />
          </RadioGroup>
          {selectedValue === "Otro" && (
            <TextField
              value={otherValue}
              onChange={handleOtherChange}
              placeholder="Por favor, especifique"
              fullWidth
              style={{ marginTop: "8px" }}
              InputProps={{
                style: {
                  color: 'white',
                  backgroundColor: 'transparent',
                  border: '1px solid white',
                },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}

              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                    boxShadow: "none", // Remove blue shadow
                  },
                },
              }}
            />
          )}
        </FormControl>
      </div>
    </Box>
  );
}
