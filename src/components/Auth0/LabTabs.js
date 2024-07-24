import * as React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const {isAuthenticated} = useAuth0();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    isAuthenticated && (
    <Box sx={{ width: '100%', background: "#f2f2f2", padding: "40px 5% 120px" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} variant="scrollable"
  scrollButtons="auto"
  aria-label="tabs example"
  TabIndicatorProps={{
    style: {
      backgroundColor: "#61bcba"
    }
  }}
        >
            <Tab label="Appointments" value="1" />
            <Tab label="Prescriptions" value="2" />
            <Tab label="Lab Tests" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">There are no appointments yet</TabPanel>
        <TabPanel value="2">You have no current prescriptions</TabPanel>
        <TabPanel value="3">You have no lab test results</TabPanel>
      </TabContext>
    </Box>
  )
)}
