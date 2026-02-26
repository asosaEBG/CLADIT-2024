import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#1e3d52",
  },
  "& .MuiRating-iconHover": {
    color: "#1e3d52",
  },
});

export default function CustomizedRating(props) {
  return (
    <Box style={props.style}>
      <div style={{ width: "100%" }}>
        <StyledRating
          style={{ color: 'white' }}
          required={props.conf.required}
          value={parseFloat(props.conf.value)}
          onChange={props.onChange}
          name={props.index + "-" + props.conf.name}
          disabled={props.disabled}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={0.5}
          icon={
            props.conf.icon == 0 ? (
              <EmojiEventsIcon fontSize="inherit" style={{ color: 'white' }}
              />
            ) : (
              <ThumbUpIcon fontSize="inherit" style={{ color: 'white' }}
              />
            )
          }
          emptyIcon={
            props.conf.icon == 0 ? (
              <EmojiEventsOutlinedIcon fontSize="inherit" style={{ color: 'white' }}
              />
            ) : (
              <ThumbUpOutlinedIcon fontSize="inherit" style={{ color: 'white' }}
              />
            )
          }
        />
      </div>
    </Box>
  );
}
