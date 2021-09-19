import * as React from 'react';



import './App.css'
import { CustomizeTextInput, GreenButton, WaterMellonButton } from './CustomizeComponent';

import Box from '@mui/material/Box'

import MakeApiRequest from './CustomHooks/MakeApiRequest';

import {checkAuth} from './util/Auth'

export default function App() {
  






  return (
    <div>  
   <Box m={2}>

   <CustomizeTextInput />
    <WaterMellonButton>Login</WaterMellonButton>



   </Box>
  </div>
  );
}
