import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import AddIcon from "@mui/icons-material/Add";
import TableSelect from "./TableSelect";
import CheckBox from "./CheckBox";
import DateTimeField from "./DateTime";
import TextArea from "./TextArea";
import NumberField from "./Number";
import FileField from "./File";
import DateField from "./Date";
import EmailField from "./Email";
import SelectField from "./Select";
import PasswordField from "./PasswordField";
import Textfield from "./TextField";
import RadioButtonsGroup from "./Radio";
import CustomizedRating from "./CustomizedRating";
import SmileMetter from "./SmileMeter";
import HoverRating from "./Raiting";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";

const helpers = require("../../helpers/helpers");
const SimpleList = (props) => {
  const onEditorChange = async (value, editor) => {
    let index = editor.iframeElement.id.split("-")[2].split("_")[0];
    let indice = editor.iframeElement.id.split("-")[0];
    let newValue = props.conf.value;
    newValue[index][indice] = value;
    props.onChange({
      target: { value: newValue, name: props.index + "-" + props.conf.name },
    });
  };
  const onChangeCheck = async (evt) => {
    let index = evt.target.name.split("-")[2];
    let indice = evt.target.name.split("-")[0];
    let newValue = props.conf.value;
    if (evt.target.checked == true) {
      newValue[index][indice].push(evt.target.value);
    } else {
      newValue[index][indice] = newValue[index][indice].filter(
        (actual) => actual != evt.target.value
      );
    }
    props.onChange({
      target: { value: newValue, name: props.index + "-" + props.conf.name },
    });
  };
  const onChange = async (evt) => {
    let index = evt.target.name.split("-")[2];
    let indice = evt.target.name.split("-")[0];
    let newValue = props.conf.value;
    if (evt.target.files) {
      newValue[index][indice] = await helpers
        .getBase64(evt.target.files[0])
        .catch((err) => {
          console.log(err);
        });
    } else {
      newValue[index][indice] = evt.target.value;
    }
    props.onChange({
      target: { value: newValue, name: props.index + "-" + props.conf.name },
    });
  };
  const addItem = () => {
    let newValue = props.conf.value;
    let newItem = [];
    props.conf.fields.map((actual, index) => {
      newItem.push(actual.value);
      if (index == props.conf.fields.length - 1) {
        newValue.push(newItem);
      }
    });
    props.onChange({
      target: { value: newValue, name: props.index + "-" + props.conf.name },
    });
  };
  const goUp = (index) => {
    let newValue = props.conf.value;
    let temp = newValue[index];
    newValue[index] = newValue[index - 1];
    newValue[index - 1] = temp;
    props.onChange({
      target: { value: newValue, name: props.index + "-" + props.conf.name },
    });
  };
  const goDown = (index) => {
    let newValue = props.conf.value;
    let temp = newValue[index];
    newValue[index] = newValue[index + 1];
    newValue[index + 1] = temp;
    props.onChange({
      target: { value: newValue, name: props.index + "-" + props.conf.name },
    });
  };
  const deleteItem = (index) => {
    let newValue = props.conf.value;
    newValue.splice(index, 1);
    props.onChange({
      target: { value: newValue, name: props.index + "-" + props.conf.name },
    });
  };
  return (
    <Box style={props.style}>
      <div style={{ width: "100%" }}>
        <Stack spacing={2} style={{ width: "100%" }}>
          {props.conf.value &&
            props.conf.value.map((current_value, indice) => {
              return (
                <Stack
                  spacing={2}
                  key={`value-${props.index}-${indice}`}
                  style={{ width: "100%" }}
                >
                  <Stack direction="row" spacing={5}>
                    {indice > 0 && (
                      <IconButton
                        onClick={() => {
                          goUp(indice);
                        }}
                      >
                        <ArrowUpwardIcon />
                      </IconButton>
                    )}
                    {indice < props.conf.value.length - 1 && (
                      <IconButton
                        onClick={() => {
                          goDown(indice);
                        }}
                      >
                        <ArrowDownwardIcon />
                      </IconButton>
                    )}
                    <IconButton
                      color="error"
                      onClick={() => {
                        deleteItem(indice);
                      }}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Stack>
                  {props.conf.fields &&
                    props.conf.fields.map((actual, index) => {
                      let conf = { ...actual };
                      conf.name = `${conf.name}-${indice}`;
                      conf.value = current_value[index];
                      return (
                        <Stack
                          spacing={2}
                          style={{ width: "100%" }}
                          key={`value-${props.index}-${indice}-${index}`}
                        >
                          <Stack
                            direction="row"
                            spacing={2}
                            style={{ width: "100%" }}
                          >
                            {actual.required && (
                              <Chip
                                label="* Obligatorio"
                                color="error"
                                variant="outlined"
                                style={{ maxWidth: "35%" }}
                              />
                            )}
                            <Typography component="p" variant="p">
                              {`${props.index + 1}.${indice + 1}.${
                                index + 1
                              }. ${actual.title}`}
                            </Typography>
                          </Stack>
                          <Stack>
                            {actual.type == 1 && (
                              <Textfield
                                index={index}
                                conf={conf}
                                onChange={onChange}
                                disabled={props.disabled}
                              />
                            )}
                            {actual.type == 2 && (
                              <PasswordField
                                index={index}
                                conf={conf}
                                onChange={onChange}
                                disabled={props.disabled}
                              />
                            )}
                            {actual.type == 3 && (
                              <SelectField
                                index={index}
                                conf={conf}
                                onChange={onChange}
                                disabled={props.disabled}
                              />
                            )}
                            {actual.type == 4 && (
                              <EmailField
                                index={index}
                                conf={conf}
                                onChange={onChange}
                                disabled={props.disabled}
                              />
                            )}
                            {actual.type == 5 && (
                              <DateField
                                index={index}
                                conf={conf}
                                onChange={onChange}
                                disabled={props.disabled}
                              />
                            )}
                            {actual.type == 6 && (
                              <FileField
                                index={index}
                                conf={conf}
                                onChange={onChange}
                                disabled={props.disabled}
                              />
                            )}
                            {actual.type == 7 && (
                              <NumberField
                                index={index}
                                conf={conf}
                                onChange={onChange}
                                disabled={props.disabled}
                              />
                            )}
                            {actual.type == 8 && (
                              <TextArea
                                index={index}
                                conf={conf}
                                onChange={onChange}
                                disabled={props.disabled}
                              />
                            )}
                            {actual.type == 9 && (
                              <DateTimeField
                                index={index}
                                conf={conf}
                                onChange={onChange}
                                disabled={props.disabled}
                              />
                            )}                    
                            {actual.type == 11 && (
                              <CheckBox
                                index={index}
                                conf={conf}
                                onChange={onChangeCheck}
                                disabled={props.disabled}
                              />
                            )}
                            {actual.type == 12 && (
                              <TableSelect
                                index={index}
                                conf={conf}
                                onChange={onChange}
                                disabled={props.disabled}
                              />
                            )}
                            {actual.type == 13 && (
                              <HoverRating
                                index={index}
                                conf={conf}
                                onChange={onChange}
                                disabled={props.disabled}
                              />
                            )}
                            {actual.type == 14 && (
                              <SmileMetter
                                index={index}
                                conf={conf}
                                onChange={onChange}
                                disabled={props.disabled}
                              />
                            )}
                            {actual.type == 15 && (
                              <CustomizedRating
                                index={index}
                                conf={conf}
                                onChange={onChange}
                                disabled={props.disabled}
                              />
                            )}
                            {actual.type == 16 && (
                              <RadioButtonsGroup
                                index={index}
                                conf={conf}
                                onChange={onChange}
                                disabled={props.disabled}
                              />
                            )}
                          </Stack>
                        </Stack>
                      );
                    })}
                </Stack>
              );
            })}
          <Button variant="outlined" startIcon={<AddIcon />} onClick={addItem}>
            Agregar item a lista
          </Button>
        </Stack>
      </div>
    </Box>
  );
};

export default SimpleList;
