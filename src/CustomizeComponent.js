
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button'

export const CustomTextInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(0),
    fontSize:16,
    lineHeight:18,
    color:"#005688"
  },
  '& .MuiInputBase-input': {
  
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    minWdith:350,
    lineHeight:18,
    padding: '14px 16px 14px 16px',
    transition: theme.transitions.create([
      'background-color',
      'box-shadow',
    ]),
  
  },
}));


 export  const OutLinedButton = styled(Button)({
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 600,
    borderRadius:4,
    lineHeight:'22px',
    padding:'6px 14px 6px 14px',
    border: '2px solid',
    color:"#005688",
    borderColor: '#005688',
    backgroundColor:"white",
    '&:hover': {
      backgroundColor: 'none',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
    }
  });


  
export const FilledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontSize: 16,
  borderRadius:5, 
  fontWeight: 600,
  lineHeight:'21px',
  padding: '6px 16px 14px 6px',
  color:"white",
  backgroundColor:'#005688',
  '&:hover': {
    backgroundColor: '#005688',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
  }
}));


