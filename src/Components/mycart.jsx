import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import { useEffect } from 'react';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Button } from '@mui/material';
import CustomerDetails from './customerDetails';
import Header from './header';
import QuantityCounter from './quantityCounter';
import { getAllBooksCart, removeFromBagDirectly } from '../services/DataService';
import { useNavigate } from 'react-router';
import { addToOrder } from '../services/orderService';



const useStyles = makeStyles({
    mainBox: {
        border: '0px solid red',
        position: 'relative',
        left: '190px',
        top: '65px',
        width: '72%',
        height: 'auto'
    },
    headerc: {
        border: '0px solid green',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '60px'
    },
    home: {
        color: '#878787', fontSize: '12px'
    },
    cart: {
        fontSize: '14px', fontWeight: '500', marginLeft: '5px'
    },
    headertext: {
        border: '0px solid green',
        display: 'flex',
        flexDirection: 'row',
        width: '12%',
        alignItems: 'center'
    },
    cartHeader: {
        width: '60vw',
        height: '10vh',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        left: '190px'
    },
    Remove: {
        fontSize: '14px !important',
        color: '#0A0102 !important',
        fontWeight: 'bold !important',
        alignItems: 'flex-end !important',
        position: 'absolute !important',
        top: '270px',
        left: '350px',
        textTransform: 'none'
    },
    homeText: {
        color: '#9D9D9D',
        fontSize: '16px',
    },
    cartText: {
        color: '#0A0102',
        fontSize: '18px',
        fontWeight: '500',
        position: 'relative',
        left: '8px'
    },
    container: {
        width: '80%',
        height: 'auto',
        border: '0px solid black',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    mainCard: {
        width: '100%',
        height: 'auto',
        border: '0px solid #DBDBDB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px'
    },
    details: {
        width: '90%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        border: '0px solid red'
    },
    cartLocation: {
        display: 'flex',
        height: '50px',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textcart: {
        width: '70%',
        height: '25vh',
        border: '0px solid blue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: '50px'
    },
    bookimage: {
        border: '0px solid red',
        marginTop: '10px'
    },
    container2: {
        width: '60%',
        height: '100%',
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
        width: '50px',
        height: '25px',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    qty: {
        border: '0px solid red',
        width: '30px',
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
    addressdetailscart: {
        width: '100%',
        height: '40px',
        border: '1px solid #DBDBDB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    btn: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '20px'
    },
    footer: {
        marginTop: '87px',
        width: '100vw',
        height: '7vh',
        backgroundColor: '#2E1D1E',
        // position: 'relative',
        // top: '30px',
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
            left: '0px',
            width: '112%',
            height: 'auto'
        },
        headertext: {
            border: '0px solid green',
            display: 'flex',
            flexDirection: 'row',
            width: '35%',
            alignItems: 'center'
        },
        home: {
            border: '0px solid green',
            fontSize: '18px !important',
        },
        cart: {
            fontSize: '18px',
        },
        container: {
            width: '100%',
            height: 'auto',
            border: '0px solid black',
        },
        mainCard: {
            width: '98%',
            height: 'auto',
            border: '1px solid #DBDBDB',
            marginTop: '15px'
        },
        details: {
            width: '90%',
            height: '90%',
            border: '0px solid red'
        },
        cartLocation: {
            height: '50px',
            border: '0px solid red'
        },
        textcart: {
            width: '100%',
            height: '25vh',
            border: '0px solid blue',
            marginBottom: '50px',
            display: 'flex',
            justifyContent: 'space-between'
        },
        bookimage: {
            border: '0px solid red',
            width: '30%',
            marginTop: '2px'
        },
        container2: {
            width: '60%',
            height: '100%',
            border: '0px solid red',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginLeft: '0px'
        },
        counterbox: {
            width: '20px'
        },
        btn: {
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '20px',
            fontSize: '12px'
        },
        footer: {
            position: 'relative',
            bottom: '-7vh',
            width: '112vw'
        },
        footertxt: {
            color: 'white',
            marginLeft: '10px',
            fontSize: '12px'
        },
        Remove: {
            fontSize: '14px !important',
            color: '#0A0102 !important',
            fontWeight: 'bold !important',
            alignItems: 'flex-end !important',
            position: 'absolute !important',
            top: '245px',
            left: '280px',
            textTransform: 'none'
        },

    },
    ['@media only screen and (min-width: 489px) and (max-width: 789px)']: {
        mainBox: {
            border: '0px solid red',
            position: 'relative',
            left: '0px',
            width: '112%',
            height: 'auto'
        },
        headertext: {
            border: '0px solid green',
            display: 'flex',
            flexDirection: 'row',
            width: '35%',
            alignItems: 'center',
            marginLeft: '10px'
        },
        home: {
            border: '0px solid green',
            fontSize: '18px !important',
        },
        cart: {
            fontSize: '18px',
        },
        container: {
            width: '100%',
            height: 'auto',
            border: '0px solid black',
        },
        mainCard: {
            width: '98%',
            height: 'auto',
            border: '1px solid #DBDBDB',
            marginTop: '0px'
        },
        details: {
            width: '90%',
            height: '90%',
            border: '0px solid red'
        },
        cartLocation: {
            height: '50px',
            border: '0px solid red'
        },
        textcart: {
            width: '100%',
            height: '25vh',
            border: '0px solid blue',
            marginBottom: '50px',
            display: 'flex',
            justifyContent: 'space-between'
        },
        bookimage: {
            border: '0px solid red',
            width: '30%',
            height: '230px',
            marginTop: '10px'

        },
        container2: {
            width: '60%',
            height: '100%',
            border: '0px solid red',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginLeft: '0px'
        },
        counterbox: {
            width: '20px'
        },
        btn: {
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '20px',
            fontSize: '12px'
        },
        footer: {
            position: 'relative',
            bottom: '-7vh',
            width: '112vw'
        },
        footertxt: {
            color: 'white',
            marginLeft: '30px',
            // fontSize: '12px'
        },
        Remove: {
            fontSize: '14px !important',
            color: '#0A0102 !important',
            fontWeight: 'bold !important',
            alignItems: 'flex-end !important',
            position: 'absolute !important',
            top: '245px',
            left: '350px',
            textTransform: 'none'
        },

    },
    ['@media only screen and (min-width: 789px) and (max-width: 1024px)']: {
        mainBox: {

            position: 'relative',
            left: '100px',
            width: '80%',
            height: 'auto'
        },
        mainCard: {
            height: 'auto',
            border: '1px solid #DBDBDB',
            marginTop: '0px'
        },
        headertext: {

            display: 'flex',
            flexDirection: 'row',
            width: '35%',
            alignItems: 'center',
            marginLeft: '10px'
        },
        home: {

            fontSize: '18px !important',
        },
        cart: {
            fontSize: '18px',
        },
        container: {
            width: '100%',
            height: 'auto',
            border: '0px solid black',
        },
        mainCard: {
            width: '98%',
            height: 'auto',
            border: '1px solid #DBDBDB',
            marginTop: '0px'
        },
        details: {
            width: '90%',
            height: '90%',

        },
        cartLocation: {
            height: '50px',

        },
        textcart: {
            width: '100%',
            height: '25vh',
            border: '0px solid blue',
            marginBottom: '50px',
            display: 'flex',
            justifyContent: 'space-between'
        },
        bookimage: {
            border: '0px solid red',
            width: '30%',
            height: '230px',
            marginTop: '10px'

        },
        container2: {
            width: '60%',
            height: '100%',
            border: '0px solid red',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginLeft: '0px'
        },
        counterbox: {
            width: '20px'
        },
        btn: {
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '20px',
            fontSize: '12px'
        },
        footer: {
            position: 'relative',
            bottom: '0vh',
            width: '112vw'
        },
        footertxt: {
            color: 'white',
            marginLeft: '30px',
        },
        Remove: {
            fontSize: '14px !important',
            color: '#0A0102 !important',
            fontWeight: 'bold !important',
            alignItems: 'flex-end !important',
            position: 'absolute !important',
            top: '245px',
            left: '390px',
            textTransform: 'none'
        },
    }


})




const MyCart = () => {

    // const navigate = useNavigate();
    const classes = useStyles();
    const [cartList, setCartList] = useState([]);
    const [details, setDetails] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [order, setOrder] = useState(false);
    const navigate = useNavigate();
    const addorder = () => {
        cartList.map((book) => (
            addToOrder(book.productId)
                .then(res => { console.log(res) })
                .catch(error => { console.log(error) })
        ))
        navigate('/order')
    }

    const openCustomerDetails = () => {
        setDetails(true)
        setToggle(true)
    }
    const openOrderSummary = () => {
        setOrder(true)
    }

    const removeBook = (book) => {
        console.log(book.id)
        removeFromBagDirectly(book.productId).then(res => {
            console.log(res);
            autoRefresh()
        }).catch(err => {
            console.log(err)
        })
    }


    const getCartList = () => {
        getAllBooksCart().then(res => {
            console.log(res)
            console.log(res.data.data[0].books);
            setCartList(res.data.data[0].books)
            console.log("cartlist==>" + cartList)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        getCartList()
    }, [])
    function autoRefresh() {
        getCartList()
    }
    return (
        <Box>
            <Header />
            <Box className={classes.mainBox}>
                <Box className={classes.headerc}>
                    <Box className={classes.headertext}>
                        <Box className={classes.home}>
                            Home/
                        </Box>
                        <Box className={classes.cart}>
                            My cart
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.container}>
                    <Card className={classes.mainCard} variant='outlined'>
                        <Box className={classes.details}>
                            <Box className={classes.cartLocation}>
                                <Box sx={{ fontSize: '18px', fontWeight: '500', }}>My cart ({cartList.length})</Box>
                            </Box>
                            <Box>

                                {
                                    cartList.map((book) => (
                                        <Box>
                                            <Box className={classes.textcart}>
                                                <Box className={classes.bookimage}>
                                                    <img width='95%' height='65%' src={'image 11.png'} />
                                                </Box>
                                                <Box className={classes.container2}>
                                                    <Box className={classes.bookTitle}>

                                                        {book.bookName}
                                                    </Box>
                                                    <Box className={classes.bookAuthor}>
                                                        {/* by J. K. Rowling */}
                                                        {book.author}
                                                    </Box>
                                                    <Box className={classes.bookRatings}>
                                                        <Box className={classes.ratings}>
                                                            <Box sx={{ fontSize: '16px', color: 'white' }}>4.5</Box>
                                                            <StarBorderOutlinedIcon sx={{ width: '15px', height: '13px', color: 'white' }} />
                                                        </Box>
                                                        <Box className={classes.qty}>
                                                            {/* (20) */}
                                                            ({book.quantity})
                                                        </Box>
                                                    </Box>
                                                    <Box className={classes.bookPrice}>
                                                        <Box className={classes.discountPrice}>
                                                            {/* Rs.1200 */}
                                                            Rs.{book.discountPrice}
                                                        </Box>
                                                        <Box className={classes.mPrice}>
                                                            {/* Rs.2000 */}
                                                            Rs.{book.price}
                                                        </Box>

                                                    </Box>
                                                    <Box className={classes.counterbox}>
                                                        <QuantityCounter book={book} autoRefresh={autoRefresh} />
                                                    </Box>
                                                </Box>

                                            </Box>
                                            <Box sx={{ width: '30%' }}>
                                                <Button
                                                    onClick={() => removeBook(book)}
                                                    className={classes.Remove} >Remove</Button>
                                            </Box>
                                        </Box>

                                    ))
                                }
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: '50px' }}>
                                {
                                    details ? null :
                                        <Button sx={{ backgroundColor: '#3371B5' }} variant='contained' onClick={openCustomerDetails}>PlACE ORDER</Button>
                                }

                            </Box>
                        </Box>
                    </Card>
                    {
                        toggle ? <CustomerDetails openOrderSummary={openOrderSummary} />
                            :
                            <Card className={classes.addressdetailscart} variant="outlined">
                                <span className={classes.textmycart}>Address Details</span>
                            </Card>
                    }
                    {order ?
                        <Card className={classes.mainCard} variant='outlined'>
                            <Box className={classes.details}>
                                <Box className={classes.cartLocation}>
                                    <Box sx={{ fontSize: '18px', fontWeight: '500', }}>Order Summary ({cartList.length})</Box>
                                </Box>
                                <Box>
                                    {
                                        cartList.map((book) => (

                                            <Box className={classes.textcart} style={{ height: '30%' }}>
                                                <Box className={classes.bookimage} style={{ height: '110px' }}>
                                                    <img width='100%' height='100%' src={'image 11.png'} />
                                                </Box>
                                                <Box className={classes.container2} style={{ height: '20%' }}>
                                                    <Box className={classes.bookTitle}>
                                                        {/* Harry potter */}
                                                        {book.bookName}
                                                    </Box>
                                                    <Box className={classes.bookAuthor}>
                                                        {/* by J. K. Rowling */}
                                                        {book.description}
                                                    </Box>
                                                    <Box className={classes.bookRatings}>
                                                        <Box className={classes.ratings}>
                                                            <Box sx={{ fontSize: '16px', color: 'white' }}>4.5</Box>
                                                            <StarBorderOutlinedIcon sx={{ width: '15px', height: '13px', color: 'white' }} />
                                                        </Box>
                                                        <Box className={classes.qty}>

                                                            ({book.quantity})
                                                        </Box>
                                                    </Box>
                                                    <Box className={classes.bookPrice}>
                                                        <Box className={classes.discountPrice}>
                                                            {/* Rs.1200 */}
                                                            Rs.{book.discountPrice}
                                                        </Box>
                                                        <Box className={classes.mPrice}>
                                                            {/* Rs.2000 */}
                                                            Rs.{book.price}
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        ))

                                    }
                                    <Box className={classes.btn}>
                                        <Button variant='contained' sx={{ width: '23%' }} onClick={addorder}>Checkout</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                        :
                        <Card className={classes.addressdetailscart} variant="outlined">
                            <span className={classes.textmycart}>Order summery</span>
                        </Card>
                    }
                </Box>
            </Box>
            <Box className={classes.footer}>
                <Box className={classes.footertxt}>Copyright @ 2022, Bookstore Private Limited.All Rights Reserved</Box>
            </Box>
        </Box>
    )
}
export default MyCart;