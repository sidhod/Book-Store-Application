import React, { useEffect } from "react";

import { makeStyles } from "@mui/styles";
import { Box, Button } from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { fontSize } from "@mui/system";
import { Margin } from "@mui/icons-material";
import { decreaseQuantity, getAllBooksCart, getBookInCart, increaseQuantity } from "../services/DataService";
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

const BookDetailsCounter = (props) => {
    const classes = useStyles();
    const [quantity, setquantity] = React.useState();
    // const getquantity = () => {
    //     let bookId = props.inputObj._id
    //     getBookInCart(bookId).then(res => {
    //         console.log(res);
    //         setquantity(res.data.data.quantity)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }
    // const autoRefresh = () => {
    //     getquantity()
    // }

    // useEffect(() => {
    //     getquantity();
    // }, [])
    const increaseQ = () => {
        let bookId = props.inputObj._id
        console.log("from booksummary to cart:", bookId)
        increaseQuantity(bookId).then(res => {
            console.log(res.data.data.books);
        }).catch(err => {
            console.log(err)
        })
    }
    const decreaseQ = () => {
        let bookId = props.inputObj._id
        console.log("from booksummary to cart:", bookId)
        decreaseQuantity(bookId).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <Box className={classes.counterButtons}>
            <Button className={classes.decrement} style={{ color: '#DBDBDB' }}><RemoveCircleOutlineOutlinedIcon fontSize="large" onClick={decreaseQ} /></Button>
            <Box >{props.counter}</Box>
            <Button className={classes.increment} style={{ color: '#DBDBDB' }} ><AddCircleOutlineOutlinedIcon fontSize="large" onClick={increaseQ} /></Button>
        </Box>
    )
}
export default BookDetailsCounter;