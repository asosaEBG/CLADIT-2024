import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

const SelectField = (props) => {
  return (
    <Box style={props.style}>
      <div style={{ width: "100%" }}>
        <FormControl fullWidth  required={props.conf.required}>
          <InputLabel>{props.conf.label}</InputLabel>
          <Select
           
            value={props.conf.value}
            onChange={props.onChange}
            name={props.index + "-" + props.conf.name}
            disabled={props.disabled}
            label={props.conf.label}
            autoWidth
          >
            {props.conf.options &&
              props.conf.options.map((actual, index) => (
                <MenuItem
                  key={`opcion-${index}-${props.conf.name}-${props.index}`}
                  value={actual.value}
                >
                  {actual.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
    </Box>
  );
};

export default SelectField;
