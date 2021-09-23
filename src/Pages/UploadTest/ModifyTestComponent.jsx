import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { CustomTextInput, FilledButton, OutLinedButton } from '../../CustomizeComponent'
import { Paper, Typography, Box, Card, CardActions, Collapse, IconButton, CardContent, FormControl, Toolbar, TextField, Grid } from '@mui/material'
import { MdKeyboardArrowRight } from 'react-icons/md'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(90deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

function ModifyTestComponent(props) {
    const [expanded, setExpanded] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <Paper style={{padding:"20px"}}>
            <Typography variant='h6'  color='primary' gutterBottom>
                Permutation & Combination, Probability, Complex Number
            </Typography>
            <Box m={4}/>

            <Card>
            <CardActions disableSpacing>
                <Toolbar>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                    <MdKeyboardArrowRight />
                </ExpandMore>
                <Typography variant='subtitle1' style={{fontWeight: 'bold'}}>Instructions</Typography>
                </Toolbar>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent style={{paddingLeft:"50px"}}>
                </CardContent>
            </Collapse>

            </Card>
        </Paper>
    );
}

export default ModifyTestComponent;