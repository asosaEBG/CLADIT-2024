import React from "react";
import Button from "@mui/material/Button";

export default function CustomMenuList(props) {
  return (
    <div>
      <Button
        onClick={() => {
          window.location.href = props.href;
        }}
        style={{ color: "#1e3d52", fontWeight: "bold" }}
      >
        {props.title}
      </Button>
    </div>
  );
}
