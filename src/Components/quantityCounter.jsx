import React, { useEffect } from "react";

import { makeStyles } from "@mui/styles";
import { Box, Button } from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { fontSize } from "@mui/system";
import { Margin } from "@mui/icons-material";
import { decreaseQuantity, getBookInCart, increaseQuantity } from "../services/DataService";
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
    },
    // ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
    //     count: {
    //         width: '30px',
    //         height: '20px',
    //         fontSize: '16px'
    //     },
    // }
})

const QuantityCounter = (props) => {
    const classes = useStyles();
    const [quantity, setquantity] = React.useState();

    const increaseQ = () => {
        let bookId = props.book.productId
        console.log(props.book.productId)
        console.log("from booksummary to cart:", bookId)
        increaseQuantity(bookId).then(res => {
            console.log(res.data.data.books);
            props.autoRefresh()
        }).catch(err => {
            console.log(err)
        })
    }
    const decreaseQ = () => {
        let bookId = props.book.productId
        console.log("from booksummary to cart:", bookId)
        decreaseQuantity(bookId).then(res => {
            console.log(res);
            props.autoRefresh()
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <Box className={classes.counterButtons}>
            <Button className={classes.decrement} style={{ color: '#DBDBDB' }}><RemoveCircleOutlineOutlinedIcon fontSize="large" onClick={decreaseQ} /></Button>
            <Box className={classes.count}>{props.book.quantity}</Box>
            <Button className={classes.increment} style={{ color: '#DBDBDB' }} ><AddCircleOutlineOutlinedIcon fontSize="large" onClick={increaseQ} /></Button>
        </Box>
    )
}
export default QuantityCounter;