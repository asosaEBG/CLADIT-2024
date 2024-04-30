import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Textfield from "./TextField";
import SmileMetter from "./SmileMeter";
import CheckBox from "./CheckBox";
import RadioButtonsGroup from "./Radio";
import HoverRating from "./Raiting";
import CustomizedRating from "./CustomizedRating";
import DOMPurify from "dompurify";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import PasswordField from "./PasswordField";
import Select from "./Select";
import EmailField from "./Email";
import DateField from "./Date";
import FileField from "./File";
import NumberField from "./Number";
import TextArea from "./TextArea";
import DateTimeField from "./DateTime";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TableSelect from "./TableSelect";
import SimpleList from "./SimpleList";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import Alert from "@mui/material/Alert";
import MasterDetail from "./MasterDetail";
const helpers = require("../../../helpers/helpers");
const Formulario = (props) => {
  const [cambios, setCambios] = useState([]);
  const [formConfig, setFormConfig] = useState({});
  const [validated, setValidated] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mensaje, setMensaje] = useState("");
  useEffect(() => {
    setFormConfig(props.formConfig);
    if (props.formConfig != null) {
      setLoaded(true);
    }
  }, [props.formConfig]);
  useEffect(() => {}, [cambios]);

  const onChangeCheck = async (evt) => {
    let indice = evt.target.name.split("-")[0];
    let newFormConfig = formConfig;
    if (evt.target.checked == true) {
      newFormConfig.formConfig[indice].value.push(evt.target.value);
      setFormConfig(newFormConfig);
      setCambios(cambios + 1);
    } else {
      newFormConfig.formConfig[indice].value = newFormConfig.formConfig[
        indice
      ].value.filter((actual) => actual != evt.target.value);
    }
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const onChange = async (evt) => {
    let indice = evt.target.name.split("-")[0];
    let newFormConfig = formConfig;
    if (evt.target.files) {
      newFormConfig.formConfig[indice].value = await helpers
        .getBase64(evt.target.files[0])
        .catch((err) => {
          console.log(err);
        });
    } else {
      newFormConfig.formConfig[indice].value = evt.target.value;
    }
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const onSubmit = (evt) => {
    const form = evt.currentTarget;
    if (form.checkValidity() === false) {
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      evt.preventDefault();
      setCargando(true);
      let body = {};
      formConfig.formConfig.map((actual, indice) => {
        if (indice == formConfig.formConfig.length - 1) {
          body[actual.name] = actual.value;
          props
            .afterSubmit(body)
            .then((res) => {
              setFormConfig(null);
              setFormConfig(props.formConfig);
              setCargando(false);
            })
            .catch((err) => {
              //window.location.reload();
              console.log(err);
              setCargando(false);
              setShowModal(true);
              setMensaje(err);
            });
        } else {
          body[actual.name] = actual.value;
        }
      });
    }
    setCambios(cambios + 1);
  };
  const addToList = (index) => {
    let newFormConfig = formConfig;
    newFormConfig.formConfig[index].value.push({
      value: "",
    });
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const pushValue = (evt) => {
    let index = evt.target.name.split("-")[2];
    let newFormConfig = formConfig;
    if (evt.target.checked) {
      newFormConfig.formConfig[index].value.push(evt.target.value);
    } else {
      newFormConfig.formConfig[index].value = newFormConfig.formConfig[
        index
      ].value.filter((actual) => actual != evt.target.value);
    }
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const checkAll = (evt) => {
    let index = evt.target.name.split("-")[2];
    let newFormConfig = formConfig;
    if (evt.target.checked) {
      evt.target.value.split(",").map((actual) => {
        if (
          newFormConfig.formConfig[index].value.find(
            (search) => search == actual
          ) == null
        ) {
          newFormConfig.formConfig[index].value.push(actual);
        }
      });
    } else {
      newFormConfig.formConfig[index].value = newFormConfig.formConfig[
        index
      ].value.filter(
        (actual) =>
          evt.target.value.split(",").find((curr) => curr == actual) == null
      );
    }
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const addToListList = (index) => {
    let newFormConfig = formConfig;
    newFormConfig.formConfig[index].value.push(
      formConfig.formConfig[index].fields.map((actual) => {
        if (actual.type != 6) {
          return { value: "" };
        } else {
          return { value: null };
        }
      })
    );
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const delFromList = (index, list_index) => {
    let newFormConfig = formConfig;
    newFormConfig.formConfig[index].value.splice(list_index, 1);
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const onChangeList = async (evt) => {
    let index = evt.target.name.split("-")[0];
    let list_index = evt.target.name.split("-")[1];
    let newFormConfig = formConfig;
    if (evt.target.files) {
      newFormConfig.formConfig[index].value[list_index].value = await helpers
        .getBase64(evt.target.files[0])
        .catch((err) => {
          console.log(err);
        });
    } else {
      newFormConfig.formConfig[index].value[list_index].value =
        evt.target.value;
    }
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const onChangeListList = async (evt) => {
    let index = evt.target.name.split("-")[0];
    let list_index = evt.target.name.split("-")[1];
    let field_index = evt.target.name.split("-")[2];
    let newFormConfig = formConfig;
    if (evt.target.files) {
      newFormConfig.formConfig[index].value[list_index][field_index].value =
        await helpers.getBase64(evt.target.files[0]).catch((err) => {
          console.log(err);
        });
    } else {
      newFormConfig.formConfig[index].value[list_index][field_index].value =
        evt.target.value;
    }
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const addToMasterRowList = (index) => {
    let newFormConfig = formConfig;
    newFormConfig.formConfig[index].value.push({
      head: newFormConfig.formConfig[index].head.map(() => {
        return { value: "" };
      }),
      rows: [],
    });
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const onChangeMaster = async (evt) => {
    let index = evt.target.name.split("-")[0];
    let list_index = evt.target.name.split("-")[1];
    let head_index = evt.target.name.split("-")[2];
    let newFormConfig = formConfig;
    if (evt.target.files) {
      newFormConfig.formConfig[index].value[list_index].head[head_index].value =
        await helpers.getBase64(evt.target.files[0]).catch((err) => {
          console.log(err);
        });
    } else {
      newFormConfig.formConfig[index].value[list_index].head[head_index].value =
        evt.target.value;
    }
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };

  const addRow = (index, list_index) => {
    let newFormConfig = formConfig;
    newFormConfig.formConfig[index].value[list_index].rows.push(
      formConfig.formConfig[index].fields.map((actual) => {
        if (actual.type != 6) {
          return { value: "" };
        } else {
          return { value: null };
        }
      })
    );
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const delRow = (index, list_index, row_index) => {
    let newFormConfig = formConfig;
    newFormConfig.formConfig[index].value[list_index].rows.splice(row_index, 1);
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const onChangeRow = async (evt) => {
    let index = evt.target.name.split("-")[0];
    let list_index = evt.target.name.split("-")[1];
    let row_index = evt.target.name.split("-")[2];
    let field_index = evt.target.name.split("-")[3];
    let newFormConfig = formConfig;
    if (evt.target.files) {
      newFormConfig.formConfig[index].value[list_index].rows[row_index][
        field_index
      ].value = await helpers.getBase64(evt.target.files[0]).catch((err) => {
        console.log(err);
      });
    } else {
      newFormConfig.formConfig[index].value[list_index].rows[row_index][
        field_index
      ].value = evt.target.value;
    }
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const onEditorChange = async (value, editor) => {
    let indice = editor.iframeElement.id.split("-")[0];
    let newFormConfig = formConfig;
    newFormConfig.formConfig[indice].value = value;
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const onEditorChangeListList = async (value, editor) => {
    let index = editor.iframeElement.id.split("-")[0];
    let list_index = editor.iframeElement.id.split("-")[1];
    let field_index = editor.iframeElement.id.split("-")[2].split("_")[0];
    let newFormConfig = formConfig;
    newFormConfig.formConfig[index].value[list_index][field_index].value =
      value;
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const onChangeEditorRow = async (value, editor) => {
    console.log(editor.iframeElement.id);
    let index = editor.iframeElement.id.split("-")[0];
    let list_index = editor.iframeElement.id.split("-")[1];
    let row_index = editor.iframeElement.id.split("-")[2];
    let field_index = editor.iframeElement.id.split("-")[3].split("_")[0];
    let newFormConfig = formConfig;
    newFormConfig.formConfig[index].value[list_index].rows[row_index][
      field_index
    ].value = value;
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const onChangeEditorMaster = async (value, editor) => {
    let index = editor.iframeElement.id.split("-")[0];
    let list_index = editor.iframeElement.id.split("-")[1];
    let head_index = editor.iframeElement.id.split("-")[2].split("_")[0];
    let newFormConfig = formConfig;
    newFormConfig.formConfig[index].value[list_index].head[head_index].value =
      value;
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const onChangeEditorList = async (value, editor) => {
    let index = editor.iframeElement.id.split("-")[0];
    let list_index = editor.iframeElement.id.split("-")[1].split("_")[0];
    let newFormConfig = formConfig;
    newFormConfig.formConfig[index].value[list_index].value = value;
    setFormConfig(newFormConfig);
    setCambios(cambios + 1);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return !loaded ? (
    <Grid
      container
      spacing={5}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid item xs={12}>
        <Box>
          <Typography
            component="h3"
            variant="h3"
            style={{ textAlign: "center", color: "#1e3d52" }}
          >
            cargando, por favor espere
          </Typography>{" "}
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <CircularProgress />
        </Box>
      </Grid>
    </Grid>
  ) : (
    <Box
      component="form"
      onSubmit={onSubmit}
      autoComplete="off"
      style={{ backgroundColor: "transparent" }}
    >
      <Stack spacing={2}>
        <Typography component="h5" variant="h5" style={{ textAlign: "center" }}>
          {props.formConfig.title}
        </Typography>
        <Box>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.formConfig.descripcion),
            }}
          ></div>
        </Box>
        {props.formConfig.formConfig &&
          props.formConfig.formConfig.map((actual, index) => (
            <Stack
              key={`form-field-${index}`}
              alignItems="center"
              justifyContent="center"
            >
              <Paper
                style={{
                  width: "100%",
                  padding: "1%",
                  borderLeft: "5px solid #1e3d52",
                  backgroundColor: "transparent",
                }}
                elevation={3}
              >
                <Stack spacing={5}>
                  <Stack direction="row" spacing={2} style={{ width: "100%" }}>
                    {actual.required && (
                      <Chip
                        label="*"
                        color="error"
                        variant="outlined"
                        style={{ maxWidth: "35%" }}
                      />
                    )}
                    <Typography
                      component="strong"
                      variant="p"
                      style={{ textAlign: "justify" }}
                    >
                      {`${index + 1}) ${actual.title}`}
                    </Typography>
                  </Stack>
                  {actual.type == 1 && (
                    <Textfield
                      index={index}
                      conf={actual}
                      style={{ width: "100%" }}
                      onChange={onChange}
                      disabled={
                        cargando ||
                        actual.lock ||
                        props.formConfig.locked ||
                        props.lockForm
                      }
                    />
                  )}
                  {actual.type == 2 && (
                    <PasswordField
                      index={index}
                      conf={actual}
                      style={{ width: "100%" }}
                      onChange={onChange}
                      disabled={
                        cargando ||
                        actual.lock ||
                        props.formConfig.locked ||
                        props.lockForm
                      }
                    />
                  )}
                  {actual.type == 3 && (
                    <Select
                      index={index}
                      conf={actual}
                      style={{ width: "100%" }}
                      onChange={onChange}
                      disabled={
                        cargando ||
                        actual.lock ||
                        props.formConfig.locked ||
                        props.lockForm
                      }
                    />
                  )}
                  {actual.type == 4 && (
                    <EmailField
                      index={index}
                      conf={actual}
                      style={{ width: "100%" }}
                      onChange={onChange}
                      disabled={
                        cargando ||
                        actual.lock ||
                        props.formConfig.locked ||
                        props.lockForm
                      }
                    />
                  )}
                  {actual.type == 5 && (
                    <DateField
                      index={index}
                      conf={actual}
                      style={{ width: "100%" }}
                      onChange={onChange}
                      disabled={
                        cargando ||
                        actual.lock ||
                        props.formConfig.locked ||
                        props.lockForm
                      }
                    />
                  )}
                  {actual.type == 6 && (
                    <FileField
                      index={index}
                      conf={actual}
                      style={{ width: "100%" }}
                      onChange={onChange}
                      disabled={
                        cargando ||
                        actual.lock ||
                        props.formConfig.locked ||
                        props.lockForm
                      }
                    />
                  )}
                  {actual.type == 7 && (
                    <NumberField
                      index={index}
                      conf={actual}
                      style={{ width: "100%" }}
                      onChange={onChange}
                      disabled={
                        cargando ||
                        actual.lock ||
                        props.formConfig.locked ||
                        props.lockForm
                      }
                    />
                  )}
                  {actual.type == 8 && (
                    <TextArea
                      index={index}
                      conf={actual}
                      style={{ width: "100%" }}
                      onChange={onChange}
                      disabled={
                        cargando ||
                        actual.lock ||
                        props.formConfig.locked ||
                        props.lockForm
                      }
                    />
                  )}
                  {actual.type == 9 && (
                    <DateTimeField
                      index={index}
                      conf={actual}
                      style={{ width: "100%" }}
                      onChange={onChange}
                      disabled={
                        cargando ||
                        actual.lock ||
                        props.formConfig.locked ||
                        props.lockForm
                      }
                    />
                  )}

                  {actual.type == 11 && (
                    <CheckBox
                      index={index}
                      conf={actual}
                      style={{ width: "100%" }}
                      onChange={onChangeCheck}
                      disabled={
                        cargando ||
                        actual.lock ||
                        props.formConfig.locked ||
                        props.lockForm
                      }
                    />
                  )}
                  {actual.type == 12 && (
                    <TableSelect
                      index={index}
                      conf={actual}
                      style={{ width: "100%" }}
                      onChange={onChange}
                      disabled={
                        cargando ||
                        actual.lock ||
                        props.formConfig.locked ||
                        props.lockForm
                      }
                    />
                  )}
                  {actual.type == 13 && (
                    <HoverRating
                      index={index}
                      conf={actual}
                      style={{ width: "100%" }}
                      onChange={onChange}
                      disabled={
                        cargando ||
                        actual.lock ||
                        props.formConfig.locked ||
                        props.lockForm
                      }
                    />
                  )}
                  {actual.type == 14 && (
                    <SmileMetter
                      index={index}
                      conf={actual}
                      style={{ width: "100%" }}
                      onChange={onChange}
                      disabled={
                        cargando ||
                        actual.lock ||
                        props.formConfig.locked ||
                        props.lockForm
                      }
                    />
                  )}
                  {actual.type == 15 && (
                    <CustomizedRating
                      index={index}
                      conf={actual}
                      style={{ width: "100%" }}
                      onChange={onChange}
                      disabled={
                        cargando ||
                        actual.lock ||
                        props.formConfig.locked ||
                        props.lockForm
                      }
                    />
                  )}
                  {actual.type == 16 && (
                    <RadioButtonsGroup
                      index={index}
                      conf={actual}
                      style={{ width: "100%" }}
                      onChange={onChange}
                      disabled={
                        cargando ||
                        actual.lock ||
                        props.formConfig.locked ||
                        props.lockForm
                      }
                    />
                  )}
                  {actual.type == 17 && (
                    <SimpleList
                      index={index}
                      conf={actual}
                      style={{ width: "100%" }}
                      onChange={onChange}
                      disabled={
                        cargando ||
                        actual.lock ||
                        props.formConfig.locked ||
                        props.lockForm
                      }
                    />
                  )}
                  {actual.type == 18 && (
                    <MasterDetail
                      index={index}
                      conf={actual}
                      style={{ width: "100%" }}
                      onChange={onChange}
                      disabled={
                        cargando ||
                        actual.lock ||
                        props.formConfig.locked ||
                        props.lockForm
                      }
                    />
                  )}
                </Stack>
              </Paper>
            </Stack>
          ))}
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Button
            variant="outlined"
            type="submit"
            disabled={cargando || props.formConfig.locked || props.lockForm}
            style={
              props.formConfig.buttonStyle != null
                ? props.formConfig.buttonStyle
                : { width: "100%" }
            }
          >
            {props.formConfig.submitTitle}
          </Button>
        </Grid>
      </Stack>
      <Modal open={showModal}>
        <Box sx={style}>
          <Stack spacing={5}>
            <Alert severity="error">Ha ocurrido un error.</Alert>
            <Typography variant="p">
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(mensaje.msg),
                }}
              ></div>
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                setShowModal(false);
                setCambios(cambios + 1);
                window.location.reload();
              }}
            >
              Ok
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default Formulario;
