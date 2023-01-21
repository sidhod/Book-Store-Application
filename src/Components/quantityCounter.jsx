import React from "react";

import { makeStyles } from "@mui/styles";
import { Box, Button } from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { fontSize } from "@mui/system";
import { Margin } from "@mui/icons-material";
const useStyles = makeStyles({
    counterButtons: {
        border: '0px solid red',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    decrement: {
    },
    count: {
        border: '1px solid #DBDBDB',
        width: '40px',
        height: '30px',
        fontSize: '22px'
    },
    increment: {
    }
})

const QuantityCounter = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.counterButtons}>
            <Button className={classes.decrement} style={{ color: '#DBDBDB' }}><RemoveCircleOutlineOutlinedIcon fontSize="large" /></Button>
            <Box className={classes.count}>1</Box>
            <Button className={classes.increment} style={{ color: '#DBDBDB' }} ><AddCircleOutlineOutlinedIcon fontSize="large" /></Button>
        </Box>
    )
}
export default QuantityCounter;