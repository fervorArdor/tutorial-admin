import React from 'react';
import { Paper, Typography, Box } from '@mui/material'

function VerifyTestComponent(props) {
    return (
        <Paper style={{padding:"20px"}}>
            <Typography variant='h6'  color='primary' style={{fontWeight: 'bold'}} gutterBottom>
                Permutation & Combination, Probability, Complex Number
            </Typography>
            <Box m={4}/>
        </Paper>
    );
}

export default VerifyTestComponent;