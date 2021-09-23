import React from 'react';
import { FormControl,Box,Select,MenuItem, Typography,Button ,Paper} from '@mui/material';

import { CustomTextInput,FilledButton, OutLinedButton } from '../../CustomizeComponent';



function UploadTestComponent(props) {
    return (
        <div>


<Paper style={{padding:"20px"}}>
      <Typography variant='h4'  color='primary' gutterBottom>Test Deatils</Typography>
        <Box m={4}/>
  
  
    <FormControl variant="standard" >
    <Typography variant="subtitle1" color='primary' gutterBottom>
        Name of the test
      </Typography>  
        <CustomTextInput  defaultValue="" id="name-test" />
      </FormControl>

      <Box m={4}/>

     
      <FormControl sx={{ minWidth: 380 }}>
      <Typography variant="subtitle1" color='primary' gutterBottom>
        Exam
      </Typography>  
        <Select
          value={10}
        
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
        
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

<Box m={4}/>
        <FormControl variant="standard">

          <Typography variant="subtitle1" color='primary' gutterBottom>
            Topic/Subject
          </Typography>

          <CustomTextInput defaultValue="" id="name-test" />
        </FormControl>

        <Box m={4}/>

        <FormControl variant='stanadrd'>

        <Typography variant="subtitle1" color='primary' gutterBottom>
            Upload Test
          </Typography>


          <input
  accept="image/*"
  
  style={{ display: 'none' }}
  id="raised-button-file"
  multiple
  type="file"
/>
<label htmlFor="raised-button-file">
  <Button variant="raised" component="span" >
    Upload
  </Button>
</label> 




        </FormControl>



        </Paper>

        </div>
    );
}

export default UploadTestComponent;