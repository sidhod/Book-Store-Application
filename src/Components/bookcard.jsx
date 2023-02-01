import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Paper } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
// import { Buffer } from "buffer";

const useStyles = makeStyles({
    mainPaper: {
        width: '228px',
        height: '265px',
        display: 'flex',
        flexDirection: 'column',
        marginRight: '60px',
        marginBottom: '20px',
        border: '0px solid red'
    },
    container1: {
        width: '100%',
        height: '60%',
        border: '0px solid red',
        background: '#F5F5F5',
    },
    imageMain: {
        width: '50%',
        height: '82%',
        position: 'relative',
        top: '15px'
    },
    container2: {
        width: '100%',
        height: '35%',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: '15px'
    },
    bookTitle: {
        marginTop: '12px',
        fontSize: '15px',
        fontWeight: 'bold',
    },
    bookAuthor: {
        fontSize: '13px',
        color: '#878787'
    },
    bookRatings: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ratings: {
        display: 'flex',
        flexDirection: 'row',
        border: '0px solid black',
        background: '#388E3C',
        width: '40px',
        height: '20px',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    qty: {
        border: '0px solid red',
        width: '30px',
        fontSize: '12px',
        color: '#878787'
    },
    bookPrice: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '0px solid red',
        width: '90px',
        alignItems: 'center'

    },
    discountPrice: {
        fontSize: '14px',
        fontWeight: 'bold',
    },
    mPrice: {
        fontSize: '12px',
        color: '#878787',
        textDecorationLine: 'line-through'
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        mainPaper: {
            width: '100%',
            height: '140px',
            display: 'flex',
            flexDirection: 'row',
            marginRight: '60px',
            marginBottom: '20px',
            border: '0px solid red'
        },
        container1: {
            width: '100%',
            height: '100%',
            border: '0px solid red',
        },

    },
    ['@media only screen and (min-width: 489px) and (max-width: 789px)']: {

        mainPaper: {
            width: '100%',
            height: '160px',
            display: 'flex',
            flexDirection: 'row',
            marginRight: '60px',
            marginBottom: '20px',
            border: '0px solid red'
        },
        container1: {
            width: '80%',
            height: '100%',
            border: '0px solid red',
        },
        container2: {
            width: '100%',
            height: '70%',
            border: '0px solid red',
            marginLeft: '15px'
        },
    },
    ['@media only screen and (min-width: 789px) and (max-width: 1024px)']: {
        mainPaper: {
            marginRight: '20px',
            marginLeft: '20px'
        },
        container1: {
            width: '100%',
            height: '100%',
            border: '0px solid red',
        },
    }

});

const BookCard = (props) => {
    const classes = useStyles();
    // const image = Buffer.from(props.book.bookImage).toString();
    function openBookDetails() {
        console.log("from book", props.book)
        props.openBookDetailsFunction(props.book)
    }
    return (
        <Paper elevation={2} className={classes.mainPaper} onClick={openBookDetails}>
            <Box className={classes.container1}>
                <img className={classes.imageMain} src={'image 11.png'} />
            </Box>
            <Box className={classes.container2}>
                <Box className={classes.bookTitle}>
                    {props.book.bookName}
                </Box>
                <Box className={classes.bookAuthor}>
                    {props.book.author}
                </Box>
                <Box className={classes.bookRatings}>
                    <Box className={classes.ratings}>
                        <Box sx={{ fontSize: '13px', color: 'white' }}>4.5</Box>
                        <StarIcon sx={{ width: '13px', height: '13px', color: 'white' }} />
                    </Box>
                    <Box className={classes.qty}>
                        ({props.book.quantity})
                    </Box>
                </Box>
                <Box className={classes.bookPrice}>
                    <Box className={classes.discountPrice}>
                        Rs.{props.book.discountPrice}
                    </Box>
                    <Box className={classes.mPrice}>
                        Rs.{props.book.price}
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}
export default BookCard;