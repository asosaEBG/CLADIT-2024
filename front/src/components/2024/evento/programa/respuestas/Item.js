import React from "react";
import { IconButton, ButtonGroup } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import PersonIcon from "@mui/icons-material/Person";

import DeleteIcon from "@mui/icons-material/Delete";

const admin_service = require("../../../../../helpers/admin_service");

const Item = (props) => {
  const deleteRespuesta = (id) => {
    props.loading();
    admin_service
      .deleteData("/respuestas", { rows: [id] })
      .then((data) => {
        props.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <ListItem
        alignItems="flex-start"
        key={`pregunta-${props.index}-${props.id_pregunta}`}
      >
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.actual.respuesta} />
      </ListItem>
    </React.Fragment>
  );
};

export default Item;
