import React from 'react'
import { Paper, Typography, Box } from '@mui/material'
import Instructions from './Instructions'
import ComprehensionSection from './ComprehensionSection'

function VerifyTestComponent(props) {

    return (
        <Paper style={{padding:"20px"}} elevation={0}>
            <Typography variant='h5'  color='primary' gutterBottom>
                Permutation & Combination, Probability, Complex Number
            </Typography>
            <Box m={4}/>
            <Instructions />
            {[1, 2].map(counter => (
                <ComprehensionSection />
            ))}
        </Paper>
    );
}

export default VerifyTestComponent