import React, { useState } from 'react'
import { styled } from '@mui/styles'
import { Card, CardActions, Collapse, CardContent, Toolbar, IconButton, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(90deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))


const DescriptionSection = () => {    
    const [expanded, setExpanded] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded)
    }
    return (
        <div>
            <Card>
            <CardActions>
                <Toolbar>
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                    <KeyboardArrowRightIcon />
                </ExpandMore>
                <Typography variant='subtitle2' fontWeight='bold' color='primary'>Description</Typography>
                </Toolbar>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent style={{paddingLeft:"50px"}}>
                    <Typography variant='subtitle2'>
                        The given grid is a map of roads from A  B. There are 'n + 1' vertical and ' n + 1' horizontal lines. Let 2 people A and B are standing at A (0, 0) and B (n, n) at t = 0 and they start walking towards each other without turning backwards. Then answer the following questions:
                    </Typography>
                </CardContent>
            </Collapse>

            </Card>
        </div>
    )
}

export default DescriptionSection
