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



const useStyles = makeStyles({
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
        marginTop: '80px',
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
    }

})




const MyCart = () => {

    // const navigate = useNavigate();
    const classes = useStyles();
    const [cartList, setCartList] = useState([]);
    const [details, setDetails] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [order, setOrder] = useState(false);

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
            <Box style={{ border: '0px solid red', position: 'relative', left: '190px', top: '65px', width: '72%', height: 'auto' }}>
                <Box style={{ border: '0px solid green', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: '60px' }}>
                    <Box style={{ border: '0px solid green', display: 'flex', flexDirection: 'row', width: '12%', alignItems: 'center' }}>
                        <div style={{ color: '#878787', fontSize: '12px' }}>
                            Home/
                        </div>
                        <div style={{ fontSize: '14px', fontWeight: '500', marginLeft: '5px' }}>
                            My cart
                        </div>
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
                                                    {book.description}
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
                                                <Box>
                                                    <QuantityCounter book={book} autoRefresh={autoRefresh} />
                                                </Box>
                                            </Box>
                                            <Box sx={{ width: '30%' }}>
                                                <Button
                                                    onClick={() => removeBook(book)}
                                                    style={{ fontSize: '14px', color: '#0A0102', fontWeight: 'bold', alignItems: 'flex-end', position: 'relative', top: '140px', right: '160px', textTransform: 'none' }} >Remove</Button>
                                            </Box>
                                        </Box>
                                    ))
                                }
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: '50px' }}>
                                {
                                    details ? null :
                                        <Button sx={{ backgroundColor: '#3371B5' }} variant='contained' onClick={openCustomerDetails}>Palce Order</Button>
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
                                        <Button variant='contained' sx={{ width: '23%' }}>Checkout</Button>
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