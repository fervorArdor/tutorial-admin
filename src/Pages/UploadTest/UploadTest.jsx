import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import UploadTestComponent from './UploadTestComponent';
import ModifyTestComponent from './ModifyTestComponent';
import VerifyTestComponent from './VerifyTestComponent';
import Rules from './Rules';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
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

export default function UplodTest() {
  const [value, setValue] = React.useState(0);
  const [Title,setTitle]=React.useState('Upload')

  const handleChange = async (event, newValue) => {
    await setValue(newValue);

 await   SetTitle(value)


  };

  const SetTitle=(value)=>{
      
    switch (value) {
        case 0:
            setTitle('Upload')
            break;
    
        case 1:
            setTitle('Modify')
            break;
    
            case 2:
                setTitle('Verify')
                break;
            
                case 3:
                    setTitle('Rules')
                    break;
            

        default:
            setTitle('Upload')
            break;
    }

  }

  return (
        <>

<Box sx={{ width: '100%' }}>

      <Box sx={{ border: 1, borderColor: 'divider' }}>
      <h1>{Title}</h1>
        <Tabs value={value} onChange={handleChange} aria-label="uploadtest-handler">
          <Tab label={ <Typography component='subtitle2'>1. Upload Test</Typography> }  {...a11yProps(0)} />
          <Tab label="2. Verify Test" {...a11yProps(1)} />
          <Tab label="3. Modify Test" {...a11yProps(2)} />
          <Tab label="4. Rules" {...a11yProps(3)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <UploadTestComponent/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ModifyTestComponent/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <VerifyTestComponent/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <Rules/>
      </TabPanel>
    </Box>
 
        </>

    );
}