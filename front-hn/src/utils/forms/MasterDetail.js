import React, { useEffect, useState } from "react";
import { Box, Grid, Divider } from "@mui/material";
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
const MasterDetail = (props) => {
  const onEditorChange = async (value, editor) => {
    let index = editor.iframeElement.id.split("-")[2].split("_")[0];
    let indice = editor.iframeElement.id.split("-")[0];
    let newValue = props.conf.value;
    newValue[index].master[indice] = value;
    props.onChange({
      target: { value: newValue, name: props.index + "-" + props.conf.name },
    });
  };
  const onChangeCheck = async (evt) => {
    let index = evt.target.name.split("-")[2];
    let indice = evt.target.name.split("-")[0];
    let newValue = props.conf.value;
    if (evt.target.checked == true) {
      newValue[index].master[indice].push(evt.target.value);
    } else {
      newValue[index].master[indice] = newValue[index].master[indice].filter(
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
      newValue[index].master[indice] = await helpers
        .getBase64(evt.target.files[0])
        .catch((err) => {
          console.log(err);
        });
    } else {
      newValue[index].master[indice] = evt.target.value;
    }
    props.onChange({
      target: { value: newValue, name: props.index + "-" + props.conf.name },
    });
  };
  const addItem = () => {
    let newValue = props.conf.value;
    let newItem = {};
    newItem.master = props.conf.master.map((actual, index) => {
      return actual.value;
    });
    newItem.detail = [];
    newValue.push(newItem);
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
  const onChangeDetail = async (evt) => {
    let pos = evt.target.name.split("-")[3];
    let index = evt.target.name.split("-")[2];
    let indice = evt.target.name.split("-")[0];
    let newValue = props.conf.value;
    if (evt.target.files) {
      newValue[index].detail[pos][indice] = await helpers
        .getBase64(evt.target.files[0])
        .catch((err) => {
          console.log(err);
        });
    } else {
      newValue[index].detail[pos][indice] = evt.target.value;
    }
    props.onChange({
      target: { value: newValue, name: props.index + "-" + props.conf.name },
    });
  };
  const onEditorChangeDetail = async (value, editor) => {
    let pos = editor.iframeElement.id.split("-")[3].split("_")[0];
    let index = editor.iframeElement.id.split("-")[2].split("_")[0];
    let indice = editor.iframeElement.id.split("-")[0];
    let newValue = props.conf.value;
    newValue[index].detail[pos][indice] = value;
    props.onChange({
      target: { value: newValue, name: props.index + "-" + props.conf.name },
    });
  };
  const onChangeCheckDetail = async (evt) => {
    let pos = evt.target.name.split("-")[3];
    let index = evt.target.name.split("-")[2];
    let indice = evt.target.name.split("-")[0];
    let newValue = props.conf.value;
    if (evt.target.checked == true) {
      newValue[index].detail[pos][indice].push(evt.target.value);
    } else {
      newValue[index].detail[pos][indice] = newValue[index].detail[indice][
        pos
      ].filter((actual) => actual != evt.target.value);
    }
    props.onChange({
      target: { value: newValue, name: props.index + "-" + props.conf.name },
    });
  };
  const addDetail = (index) => {
    let newValue = props.conf.value;
    let newDetail = props.conf.detail.map((actual, index) => {
      return actual.value;
    });
    newValue[index].detail.push(newDetail);
    props.onChange({
      target: { value: newValue, name: props.index + "-" + props.conf.name },
    });
  };
  const goUpDetail = (index, indice) => {
    let newValue = props.conf.value;
    let temp = newValue[index].detail[indice];
    newValue[index].detail[indice] = newValue[index].detail[indice - 1];
    newValue[index].detail[indice - 1] = temp;
    props.onChange({
      target: { value: newValue, name: props.index + "-" + props.conf.name },
    });
  };
  const goDownDetail = (index, indice) => {
    let newValue = props.conf.value;
    let temp = newValue[index].detail[indice];
    newValue[index].detail[indice] = newValue[index].detail[indice + 1];
    newValue[index].detail[indice + 1] = temp;
    props.onChange({
      target: { value: newValue, name: props.index + "-" + props.conf.name },
    });
  };
  const deleteDetail = (index, indice) => {
    let newValue = props.conf.value;
    newValue[index].detail.splice(indice, 1);
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
                    <Typography component="strong" variant="p">
                      {`#${indice + 1}`}
                    </Typography>
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
                  <Grid container justifyContent="center" alignItems="center">
                    {props.conf.master &&
                      props.conf.master.map((actual, index) => {
                        let conf = { ...actual };
                        conf.name = `${conf.name}-${indice}`;
                        conf.value = current_value.master[index];
                        return (
                          <Grid xs={12} md={12} lg={12} item p={3}>
                            <Stack
                              spacing={2}
                              style={{ width: "100%" }}
                              key={`value-${props.index}-${indice}-${index}`}
                            >
                              <Stack spacing={2} style={{ width: "100%" }}>
                                {actual.required && (
                                  <Chip
                                    label="* Obligatorio"
                                    color="error"
                                    variant="outlined"
                                    style={{ maxWidth: "35%" }}
                                  />
                                )}
                                <Typography component="strong" variant="p">
                                  {`${actual.title}`}
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
                          </Grid>
                        );
                      })}
                  </Grid>
                  <Divider style={{ width: "100%" }} />
                  {current_value.detail.map((current_detail, pos) => (
                    <Stack
                      spacing={2}
                      key={`value-${props.index}-${indice}-${pos}`}
                      style={{ width: "100%" }}
                    >
                      <Stack direction="row" spacing={5}>
                        {pos > 0 && (
                          <IconButton
                            onClick={() => {
                              goUpDetail(indice, pos);
                            }}
                          >
                            <ArrowUpwardIcon />
                          </IconButton>
                        )}
                        {pos < current_value.detail.length - 1 && (
                          <IconButton
                            onClick={() => {
                              goDownDetail(indice, pos);
                            }}
                          >
                            <ArrowDownwardIcon />
                          </IconButton>
                        )}
                        <IconButton
                          color="error"
                          onClick={() => {
                            deleteDetail(indice, pos);
                          }}
                        >
                          <DeleteOutlineIcon />
                        </IconButton>
                      </Stack>
                      <Grid container justifyContent="center">
                        {props.conf.detail &&
                          props.conf.detail.map((actual, det_pos) => {
                            let conf = { ...actual };
                            conf.name = `${conf.name}-${indice}-${pos}`;
                            conf.value = current_detail[det_pos];
                            return (
                              <Grid xs={12} md={6} lg={12} item>
                                <Stack
                                  spacing={2}
                                  style={{ width: "100%" }}
                                  key={`value-${props.index}-${indice}-${det_pos}`}
                                >
                                  <Stack spacing={2} style={{ width: "100%" }}>
                                    {actual.required && (
                                      <Chip
                                        label="* Obligatorio"
                                        color="error"
                                        variant="outlined"
                                        style={{ maxWidth: "35%" }}
                                      />
                                    )}
                                    <Typography component="strong" variant="p">
                                      {`${actual.title}`}
                                    </Typography>
                                  </Stack>
                                  <Stack>
                                    {actual.type == 1 && (
                                      <Textfield
                                        index={det_pos}
                                        conf={conf}
                                        onChange={onChangeDetail}
                                        disabled={props.disabled}
                                      />
                                    )}
                                    {actual.type == 2 && (
                                      <PasswordField
                                        index={det_pos}
                                        conf={conf}
                                        onChange={onChangeDetail}
                                        disabled={props.disabled}
                                      />
                                    )}
                                    {actual.type == 3 && (
                                      <SelectField
                                        index={det_pos}
                                        conf={conf}
                                        onChange={onChangeDetail}
                                        disabled={props.disabled}
                                      />
                                    )}
                                    {actual.type == 4 && (
                                      <EmailField
                                        index={det_pos}
                                        conf={conf}
                                        onChange={onChangeDetail}
                                        disabled={props.disabled}
                                      />
                                    )}
                                    {actual.type == 5 && (
                                      <DateField
                                        index={det_pos}
                                        conf={conf}
                                        onChange={onChangeDetail}
                                        disabled={props.disabled}
                                      />
                                    )}
                                    {actual.type == 6 && (
                                      <FileField
                                        index={det_pos}
                                        conf={conf}
                                        onChange={onChangeDetail}
                                        disabled={props.disabled}
                                      />
                                    )}
                                    {actual.type == 7 && (
                                      <NumberField
                                        index={det_pos}
                                        conf={conf}
                                        onChange={onChangeDetail}
                                        disabled={props.disabled}
                                      />
                                    )}
                                    {actual.type == 8 && (
                                      <TextArea
                                        index={det_pos}
                                        conf={conf}
                                        onChange={onChangeDetail}
                                        disabled={props.disabled}
                                      />
                                    )}
                                    {actual.type == 9 && (
                                      <DateTimeField
                                        index={det_pos}
                                        conf={conf}
                                        onChange={onChangeDetail}
                                        disabled={props.disabled}
                                      />
                                    )}
                                    {actual.type == 11 && (
                                      <CheckBox
                                        index={det_pos}
                                        conf={conf}
                                        onChange={onChangeCheckDetail}
                                        disabled={props.disabled}
                                      />
                                    )}
                                    {actual.type == 12 && (
                                      <TableSelect
                                        index={det_pos}
                                        conf={conf}
                                        onChange={onChangeDetail}
                                        disabled={props.disabled}
                                      />
                                    )}
                                    {actual.type == 13 && (
                                      <HoverRating
                                        index={det_pos}
                                        conf={conf}
                                        onChange={onChangeDetail}
                                        disabled={props.disabled}
                                      />
                                    )}
                                    {actual.type == 14 && (
                                      <SmileMetter
                                        index={det_pos}
                                        conf={conf}
                                        onChange={onChangeDetail}
                                        disabled={props.disabled}
                                      />
                                    )}
                                    {actual.type == 15 && (
                                      <CustomizedRating
                                        index={det_pos}
                                        conf={conf}
                                        onChange={onChangeDetail}
                                        disabled={props.disabled}
                                      />
                                    )}
                                    {actual.type == 16 && (
                                      <RadioButtonsGroup
                                        index={det_pos}
                                        conf={conf}
                                        onChange={onChangeDetail}
                                        disabled={props.disabled}
                                      />
                                    )}
                                  </Stack>
                                </Stack>
                              </Grid>
                            );
                          })}
                      </Grid>
                    </Stack>
                  ))}
                  <Divider style={{ width: "100%" }} />
                  <Button
                    variant="outlined"
                    startIcon={<AddIcon />}
                    onClick={() => {
                      addDetail(indice);
                    }}
                  >
                    Agregar detalle
                  </Button>
                  <Divider
                    style={{
                      width: "100%",
                      backgroundColor: "black",
                      height: "5px",
                    }}
                  />
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

export default MasterDetail;
