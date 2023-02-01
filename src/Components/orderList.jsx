import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { DeleteOutlined } from "@mui/icons-material";
import Header from "./header";
import { getWishlist, removeFromWishList } from "../services/wishListService";
import { getOrderList } from "../services/orderService";

const useStyles = makeStyles({
    mainBox: {
        border: '0px solid red', position: 'relative', left: '190px', top: '65px', width: '72%', height: 'auto'
    },
    cartHeader: {
        width: '100%',
        height: '10vh',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    homeText: {
        color: '#9D9D9D',
        fontSize: '16px',
    },
    cartText: {
        color: '#0A0102',
        fontSize: '16px',
        fontWeight: '500',
        position: 'relative',
        left: '8px'
    },
    container: {
        width: '100%',
        height: '78vh',
        border: '0px solid #E4E4E4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    main: {
        width: '100%',
        height: '7vh',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        alignItems: 'center'
    },
    details: {
        color: '#0A0102',
        fontSize: '18px',
        fontWeight: '500',
        textAlign: 'left',
        position: 'relative',
        left: '40px'
    },
    mainWishList: {
        width: '100%',
        height: '25vh',
        border: '1px solid #E4E4E4',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textcart: {
        width: '100%',
        height: '15vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
        left: '40px'
    },
    container2: {
        width: '60%',
        height: '70%',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: '30px'
    },
    bookTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    bookAuthor: {
        fontSize: '14px',
        color: '#878787'
    },
    bookPrice: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '0px solid red',
        width: '110px',
        alignItems: 'center'

    },
    discountPrice: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
    mPrice: {
        fontSize: '14px',
        color: '#878787',
        textDecorationLine: 'line-through'
    },
    orderDetails: {
        border: '0px solid red',
        position: 'relative',
        right: '50px',
        bottom: '35px',
        color: '#0A0102',
        width: '250px',
        font: 'normal normal bold 18px Roboto',

    },
    footer: {
        width: '100vw',
        height: '7vh',
        backgroundColor: '#2E1D1E',
        position: 'relative',
        bottom: '-6vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    footertxt: {
        color: 'white',
        marginLeft: '250px',
        fontSize: '12px'
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        mainBox: {
            border: '0px solid red',
            position: 'relative',
            left: '10px',
            width: '110vw',
            height: 'auto'
        },
        homeText: {
            color: '#9D9D9D',
            fontSize: '18px',
        },
        cartText: {
            fontSize: '18px',
            position: 'relative',
            left: '4px'
        },
        container: {
            width: '98%',
            height: '92vh',
            border: '1px solid #E4E4E4',
            border: '0px solid blue',
        },
        mainWishList: {
            width: '100%',
            height: '18vh',
        },
        textcart: {
            width: '100%',
            height: '15vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            position: 'relative',
            left: '0px',
            border: '0px solid blue',
        },
        container2: {
            width: '100%',
            height: '60%',
            border: '0px solid red',
            marginLeft: '5px'
        },
        bookimage: {
            border: '0px solid red',
            width: '50%',
            marginLeft: '5%'
        },
        footer: {
            width: '113vw',
        },
        footertxt: {
            color: 'white',
            marginLeft: '20px',
            fontSize: '12px'
        },
        orderDetails: {
            border: '0px solid red',
            position: 'relative',
            right: '0px',
            bottom: '30px',
            width: '150px',
            font: 'normal normal bold 15px Roboto',

        },
    },
    ['@media only screen and (min-width: 489px) and (max-width: 789px)']: {
        mainBox: {
            border: '0px solid red',
            position: 'relative',
            left: '10px',
            width: '110vw',
            height: 'auto'
        },
        homeText: {
            color: '#9D9D9D',
            fontSize: '18px',
        },
        cartText: {
            fontSize: '18px',
            position: 'relative',
            left: '4px'
        },
        container: {
            width: '98%',
            height: '92vh',
            border: '1px solid #E4E4E4',
            border: '0px solid blue',
        },
        mainWishList: {
            width: '100%',
            height: '18vh',
        },
        textcart: {
            width: '100%',
            height: '15vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            position: 'relative',
            left: '0px',
            border: '0px solid blue',
        },
        container2: {
            width: '100%',
            height: '60%',
            border: '0px solid red',
            marginLeft: '5px'
        },
        bookimage: {
            border: '0px solid red',
            width: '40%',
            marginLeft: '5%'
        },
        footer: {
            width: '113vw',
        },
        footertxt: {
            color: 'white',
            marginLeft: '20px',
            fontSize: '12px'
        },
        orderDetails: {
            border: '0px solid red',
            position: 'relative',
            right: '0px',
            bottom: '30px',
            width: '200px',
            font: 'normal normal bold 15px Roboto',

        },
    },
    ['@media only screen and (min-width: 789px) and (max-width: 1024px)']: {
        mainBox: {
            border: '0px solid red', position: 'relative', left: '120px', top: '65px', width: '72%', height: 'auto'
        },
        orderDetails: {
            border: '0px solid red',
            position: 'relative',
            right: '10px',
            width: '200px',
            font: 'normal normal bold 15px Roboto',

        },
        footer: {

        },
    },
})

const OrderList = () => {
    const classes = useStyles();
    const [wishList, setWishList] = useState([]);
    const getWishListBooks = () => {
        getOrderList()
            .then(res => {
                console.log(res)
                setWishList(res.data.data[0].books)
            })
            .catch(error => { console.log(error) })
    }
    useEffect(() => {
        getWishListBooks()
    }, [])
    console.log('OrderList======>' + wishList)
    return (

        <div>
            <Header sx={{ position: 'fixed' }} />

            <Box className={classes.mainBox}>
                <Box className={classes.cartHeader}>
                    <Box className={classes.homeText}>Home/</Box>
                    <Box className={classes.cartText}>My Order</Box>
                </Box>
                <Box className={classes.container}>
                    {
                        wishList.map((book) => (
                            <Box className={classes.mainWishList}>
                                <Box className={classes.textcart}>
                                    <Box className={classes.bookimage}>
                                        <img width='100%' height='100%' src={'image 11.png'} />
                                    </Box>
                                    <Box className={classes.container2}>
                                        <Box className={classes.bookTitle}>
                                            {/* Harry potter */}
                                            {book.bookName}
                                        </Box>
                                        <Box className={classes.bookAuthor}>
                                            {/* by J. K. Rowling */}
                                            {book.author}
                                        </Box>
                                        <Box className={classes.bookPrice}>
                                            <Box className={classes.discountPrice}>
                                                {/* Rs.1200 */}
                                                Rs.{book.discountPrice}
                                            </Box>
                                            <Box className={classes.mPrice}>
                                                Rs.{book.price}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={classes.orderDetails}>
                                    <FiberManualRecordIcon style={{ fontSize: '10px', color: '#26A541' }} /> Order Placed on Jan 27
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            <Box className={classes.footer}>
                <Box className={classes.footertxt}>Copyright @ 2022, Bookstore Private Limited.All Rights Reserved</Box>
            </Box>
        </div>
    )
}
export default OrderList;