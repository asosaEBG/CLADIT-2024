import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import FormControl from "@mui/material/FormControl";

const labels = {
  0.5: "Malo",
  1: "Malo+",
  1.5: "Pobre",
  2: "Pobre+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Bueno",
  4: "Bueno+",
  4.5: "Excelente",
  5: "Excelente+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function HoverRating(props) {
  const [hover, setHover] = React.useState(-1);

  return (
    <Box style={props.style}>
      <div style={{ width: "100%" }}>
        <Rating
          required={props.conf.required}
          label={props.conf.label}
          value={parseFloat(props.conf.value)}
          onChange={props.onChange}
          name={props.index + "-" + props.conf.name}
          disabled={props.disabled}
          precision={0.5}
          getLabelText={getLabelText}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55, color: 'white' }} fontSize="inherit" />}
        />
        {props.conf.value !== null && (
          <Box sx={{ ml: 2, color: 'white' }}>
            {labels[hover !== -1 ? hover : props.conf.value]}
          </Box>
        )}
      </div>
    </Box>
  );
}
