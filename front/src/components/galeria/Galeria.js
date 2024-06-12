import React, { useEffect, useState, useRef } from "react";
import {
  Typography,
  ImageList,
  Grid,
  ImageListItem,
  Stack,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import PropTypes from "prop-types";
import Galeria2023 from "./Galeria2023";
import Galeria2024 from "./Galeria2024";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Galeria = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: { xs: "0%", md: "20%", lg: "15%" } }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="2023" {...a11yProps(0)} />
          <Tab label="2024" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Galeria2023 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Galeria2024 />
      </CustomTabPanel>
    </Box>
  );
};

export default Galeria;
