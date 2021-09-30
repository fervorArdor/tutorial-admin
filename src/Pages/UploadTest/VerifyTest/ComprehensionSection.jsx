import React, { useState } from 'react'
import { styled } from '@mui/styles'
import { Card, CardActions, Collapse, CardContent, Toolbar, IconButton, Typography, Box } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import DescriptionSection from './DescriptionSection'
import QuestionsComponent from './QuestionsComponent'
import PaperDescription from './PaperDescription'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(90deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

const ComprehensionSection = () => {    
    const [expanded, setExpanded] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded)
    }
    return (
        <div>
            <Card style={{marginBottom: '21px'}}>
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
                <Typography variant='subtitle2' fontWeight='bold'>
                    Comprehension # 1 (Q. 1 to 3)
                </Typography>
                </Toolbar>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <PaperDescription />
                    <Box m={4} />
                    <img src={'/static/images/Diagram.png'} alt="" />
                    <DescriptionSection />
                    <QuestionsComponent />
                </CardContent>
            </Collapse>

            </Card>
        </div>
    )
}

export default ComprehensionSection
