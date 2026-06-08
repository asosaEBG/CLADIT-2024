import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function PasswordField(props) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box style={props.style}>
      <div style={{ width: "100%" }}>
        <FormControl
          fullWidth
          variant="outlined"
          required={props.conf.required}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            {props.conf.label}
          </InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            value={props.conf.value}
            onChange={props.onChange}
            name={props.index + "-" + props.conf.name}
            disabled={props.disabled}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={props.conf.label}
          />
        </FormControl>
      </div>
    </Box>
  );
}
