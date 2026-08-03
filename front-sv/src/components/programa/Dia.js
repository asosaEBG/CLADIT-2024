import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SunnyIcon from '@mui/icons-material/Sunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Edicion from './Edicion';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ width: '100%' }}
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function Dia({ config, programa }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange} sx={{
        '& .MuiTabs-indicator': {
          backgroundColor: 'rgba(101,166,48,1)',
        },
        '& .Mui-selected': {
          color: 'rgba(101,166,48,1) !important',
        },
      }}>
        <Tab icon={<SunnyIcon />} label="Por la mañana"   {...a11yProps(0)} />
        <Tab icon={<WbTwilightIcon />} label="Por la Tarde" {...a11yProps(1)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Edicion config={config.morning} programa={programa} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Edicion config={config.afternoon} programa={programa} />
      </CustomTabPanel>
    </Box>
  );
}