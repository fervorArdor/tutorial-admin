
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button'

export const CustomizeTextInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        
      borderRadius: 5,
      lineHeight:17,
      padding:'16px 15px 16px 15px',
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      boxShadow:'0px 2px 4px rgba(128, 139, 150, 0.25)',
    
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
    },
  }));


 export  const GreenButton = styled(Button)({
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
    textTransform: 'none',
    fontSize: 18,
    borderRadius:5,
    lineHeight:'22px',
    paddingTop: '12px',
    paddingBottom:12,
    border: '1px solid',
    color:"white",
    borderColor: 'none',
    background: 'linear-gradient(89.39deg, #6FBD44 23.58%, #01C2F3 133.24%);',
    '&:hover': {
      backgroundColor: '#0069d9',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
    }
  });



  
 export  const WaterMellonButton = styled(Button)({
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
    textTransform: 'none',
    fontSize: 18,
    borderRadius:5,
    lineHeight:'22px',
    padding:"12px 20px 12px 20px ",
    border: '1px solid',
    color:"white",
    borderColor: 'none',
    background: ' linear-gradient(89.39deg, rgba(237, 35, 48, 0.95) 23.58%, #F37521 133.24%)',
    '&:hover': {
      backgroundColor: '#0069d9',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
    }
  });
  
