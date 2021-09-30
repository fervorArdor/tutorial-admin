import React from 'react'
import { Paper, Typography, Box } from '@mui/material'
import Instructions from './Instructions'
import ComprehensionSection from './ComprehensionSection'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import useStyles from './styles'

function ModifyTestComponent(props) {
    const classes = useStyles()

    return (
        <Paper style={{padding:"20px"}} elevation={0}>
            <Typography variant='h5'  color='primary' gutterBottom>
                Permutation & Combination, Probability, Complex Number
            </Typography>
            <Box m={4}/>
            <Instructions />
            {[1, 2, 3].map(counter => (
                <ComprehensionSection />
            ))}
            <Box m={2} />
            <div className={classes.flex}>
                <AddCircleIcon color='primary' style={{width: '49px', height: '49px'}} />
                <Typography variant='subtitle2' color='primary' fontWeight='bold'>
                    Add new section
                </Typography> 
            </div>
        </Paper>
    );
}

export default ModifyTestComponent;