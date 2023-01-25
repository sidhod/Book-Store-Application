import { Box, Button, Divider, Rating } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Header from "./header";
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { fontSize } from "@mui/system";
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import QuantityCounter from "./quantityCounter";
import { addToBag, decreaseQuantity, getAllBooksCart, getBookInCart, increaseQuantity } from "../services/DataService";
import { addToWishList, getWishlist } from "../services/wishListService";
import BookDetailsCounter from "./bookdetailcounter";
// import Textarea from '@mui/joy/Textarea';
const useStyles = makeStyles({
    smallImage: {
        width: '10%',
        height: '115px',
        border: '0px solid blue'
    },
    smallImage1: {
        width: '100%',
        height: '48%',
        border: '2px solid #7C1E1E',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    smallImage2: {
        width: '100%',
        height: '48%',
        border: '2px solid #D1D1D1',
        marginTop: '2px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    smallpic: {
        width: '80%',
        height: '85%',
    },
    imageMain: {
        width: '80%',
        height: '85%',
        position: 'relative',
        top: '25px'
    },
    buttonBox: {
        width: '101%',
        border: '0px solid #D1D1D1',
        height: '40px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    buttonCart: {
        width: '47%',
        height: '100%',
        color: '#FFFFFF !important',
        background: '#A03037 !important',
        textTransform: "none !important"
    },
    buttonwishList: {
        width: '47%',
        height: '100%',
        color: '#FFFFFF !important',
        background: '#333333 !important',
        textTransform: "none !important"
    },
    containDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        border: '0px solid red',
        width: '60%',
        height: '100%'

    },
    bookTitle: {
        // fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '28px',
        color: '#0A0102',
        paddingTop: '0px',
        border: '0px solid red',
    },
    bookAuthor: {
        fontSize: '18px',
        color: '#878787',
        fontWeight: '500',
        marginTop: '5px'
    },
    bookRatings: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10px',
    },
    ratings: {
        display: 'flex',
        flexDirection: 'row',
        border: '0px solid black',
        background: '#388E3C',
        width: '50px',
        height: '22px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    qty: {
        border: '0px solid red',
        width: '30px',
        fontSize: '17px',
        color: '#878787',
        fontWeight: '500',
    },
    bookPrice: {
        display: 'flex',
        flexDirection: 'row',
        border: '0px solid red',
        width: '100%',
        alignItems: 'center',
        marginTop: '15px'
    },
    discountPrice: {
        fontSize: '30px',
        fontWeight: '500',
    },
    mPrice: {
        fontSize: '15px',
        fontWeight: '500',
        color: '#878787',
        textDecorationLine: 'line-through',
        marginLeft: '15px'

    },
    describtionBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '20px'
    },
    bookDescription: {
        color: '#878787',
        fontSize: '15px'
    },
    description: {
        fontSize: '12px',
        color: '#373434',
        marginTop: '6px',
        marginLeft: '12px',
        fontWeight: '500',
        border: '0px solid red',
        height: '70px',
        textAlign: 'start',
    },
    ratingBox: {
        marginTop: '15px',
        width: '100%',
        height: '22%',
        borderRadius: '8px',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        flexDirection: 'column'
    },
    counterButtons: {
        border: '0px solid red',
        height: '100%',
        display: 'flex',
        width: '35%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    decrement: {
    },
    count: {
        border: '1px solid #DBDBDB',
        width: '45px',
        height: '30px',
        fontSize: '22px'
    },
    increment: {
    }
})
function BookDetails(props) {
    const classes = useStyles();
    console.log("BookDetails=========>" + props.inputObj._id)
    const [value, setValue] = useState(3);
    const [cartList, setCartList] = useState();
    const [cardToggle, setcardToggle] = useState();
    const [wishListToggle, setwishlistToggle] = useState(false);
    const [toggleList, settoggleList] = useState([]);
    const [toggleWishList, settoggleWishList] = useState([]);
    const addWishList = () => {
        let bookId = props.inputObj._id
        console.log("from booksummary to wishlists:", bookId)
        addToWishList(bookId).then(res => {
            console.log(res);
            setwishlistToggle(true);
            autoRefresh();

        }).catch(err => {
            console.log(err);
            setwishlistToggle(true)
        })
    }
    const increaseQ = () => {
        let bookId = props.inputObj._id
        console.log("from booksummary to cart:", bookId)
        increaseQuantity(bookId).then(res => {
            console.log(res.data.data.books);
            autoRefresh()
        }).catch(err => {
            console.log(err)
        })
    }
    const decreaseQ = () => {
        let bookId = props.inputObj._id
        console.log("from booksummary to cart:", bookId)
        decreaseQuantity(bookId).then(res => {
            console.log(res)
            autoRefresh()
        }).catch(err => {
            console.log(err)
        })
    }

    const addCard = () => {
        setcardToggle(true)
        let bookId = props.inputObj._id
        console.log("from booksummary to cart:", bookId)
        addToBag(bookId)
            .then(res => {
                console.log(res)
                setCartList(res.data.data)
                autoRefresh()

            })
            .catch(err => {
                console.log(err);
            })
    }
    const getCartList = () => {
        getAllBooksCart()
            .then(res => {
                console.log(res)
                console.log(res.data.data[0].books)
                let data = res.data.data[0].books.filter((object) => {
                    if (props.inputObj._id == object.productId) {
                        console.log("output===>" + object._id)
                        settoggleList(object._id)
                        setcardToggle(object.quantity)

                    }
                })
            })
            .catch(error => { console.log(error) });
    }
    const getWishListBooks = () => {
        getWishlist()
            .then(res => {
                console.log(res)
                let data = res.data.data[0].books.filter((object) => {
                    if (props.inputObj._id == object.productId) {
                        console.log("output===>" + object._id)
                        settoggleWishList(object._id)
                    }
                })
            })
            .catch(error => { console.log(error) })
    }
    console.log("list==========>", toggleList)
    useEffect(() => {
        getCartList()
        getWishListBooks()
    }, [])
    function autoRefresh() {
        getCartList()
        getWishListBooks()
    }
    return (
        <div>
            <Box style={{ border: '0px solid red', width: '100%', height: 'auto' }}>
                <Box style={{ border: '0px solid green', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: '60px' }}>
                    <Box style={{ border: '0px solid green', display: 'flex', flexDirection: 'row', width: '12%', alignItems: 'center' }}>
                        <div style={{ color: '#878787', fontSize: '12px' }}>
                            Home/
                        </div>
                        <div style={{ fontSize: '14px', fontWeight: '500', marginLeft: '5px' }}>
                            Book
                        </div>
                    </Box>
                </Box>
                <Box style={{ border: '0px solid red', width: '100%', height: '110vh', display: 'flex' }}>
                    <Box style={{ width: '40%', border: '0px solid blue' }}>
                        <Box style={{ width: '100%', border: '0px solid yellow', height: '500px', display: 'flex' }}>
                            <Box className={classes.smallImage}>
                                <Box className={classes.smallImage1}>
                                    <img className={classes.smallpic} src={'image 11@2x.png'} />
                                </Box>
                                <Box className={classes.smallImage2}>
                                    <img className={classes.smallpic} src={'image 46.png'} />
                                </Box>
                            </Box>
                            <Box style={{ border: '0px solid black', width: '75%', height: '93%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '4px' }}>
                                <Box style={{ width: '100%', border: '2px solid #D1D1D1', height: '400px' }}>
                                    <img className={classes.imageMain} src={'image 11@2x.png'} />
                                </Box>
                                <Box className={classes.buttonBox}>
                                    {

                                        (toggleList.length != 0) ? <Box className={classes.counterButtons}>
                                            <Button className={classes.decrement} style={{ color: '#DBDBDB' }} onClick={decreaseQ}><RemoveCircleOutlineOutlinedIcon fontSize="large" /></Button>
                                            <Box className={classes.count}>{cardToggle}</Box>
                                            <Button className={classes.increment} style={{ color: '#DBDBDB' }} onClick={increaseQ}><AddCircleOutlineOutlinedIcon fontSize="large" /></Button>
                                        </Box> : <Button className={classes.buttonCart} onClick={addCard}>ADD TO BAG</Button>

                                    }

                                    {

                                        (toggleWishList.length != 0) ? <Box style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>Added in WishList</Box> : <Button className={classes.buttonwishList} variant='contained' onClick={addWishList}><FavoriteIcon sx={{ fontSize: 'medium', marginRight: '10px' }} variant='contained' />WISHLIST</Button>
                                    }
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                    <Box className={classes.containDetails}>
                        <Box className={classes.bookTitle}>
                            {props.inputObj.bookName}
                        </Box>
                        <Box className={classes.bookAuthor}>
                            {props.inputObj.author}
                        </Box>
                        <Box className={classes.bookRatings}>
                            <Box className={classes.ratings}>
                                <Box sx={{ fontSize: '14px', color: 'white' }}>4.5</Box>
                                <StarIcon sx={{ width: '14px', height: '13px', marginLeft: '3px', color: 'white' }} />
                            </Box>
                            <Box className={classes.qty}>
                                ({props.inputObj.quantity})
                            </Box>
                        </Box>
                        <Box className={classes.bookPrice}>
                            <Box className={classes.discountPrice}>
                                Rs.{props.inputObj.discountPrice
                                }
                            </Box>
                            <Box className={classes.mPrice}>
                                Rs.{props.inputObj.price
                                }
                            </Box>

                        </Box>
                        <Divider sx={{ borderBottomWidth: 2, width: '100%', marginTop: '12px' }} />
                        <Box style={{ height: '18%' }}>
                            <Box className={classes.describtionBox}>
                                <FiberManualRecordIcon style={{ fontSize: '10px', color: '#878787' }} />
                                <Box className={classes.bookDescription}>
                                    Book Detail
                                </Box>
                            </Box>
                            <Box className={classes.description}>
                                <span>{props.inputObj.description}</span>
                            </Box>
                        </Box>

                        <Divider sx={{ borderBottomWidth: 2, width: '100%', marginTop: '0px' }} />
                        <Box style={{ width: '150px', height: '24px', border: '0px solid red', color: '#0A0102', fontWeight: '500', marginTop: '10px' }}>
                            Customer Feedback
                        </Box>
                        <Box className={classes.ratingBox}>
                            <Box style={{ margin: '15px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Box style={{ fontSize: '12px', fontWeight: '500' }}>Overall rating</Box>
                                <Rating name="no-value" value={null} style={{ marginTop: '6px' }} />
                                <textarea placeholder="Write your review" minRows={2} style={{ marginTop: '10px', width: '100%', height: '50px' }} />
                                <Button variant="contained" size="small" style={{ width: '10px', height: '25px', borderRadius: '0px', marginTop: '10px', marginLeft: '560px' }}>
                                    Submit
                                </Button>
                            </Box>
                        </Box>

                        <Box style={{ border: '0px solid red', width: '94%', height: '100px', display: 'flex', marginTop: '13px' }}>
                            <Box style={{
                                width: '27px',
                                height: '27px',
                                backgroundColor: '#F5F5F5',
                                borderRadius: '100%',
                                border: '0px solid red',
                                color: '#707070',
                                fontSize: '12px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}><span>AC</span></Box>
                            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10px' }}>
                                <Box style={{ fontSize: '15px', color: '#0A0102', fontWeight: '500' }}>Aniket Chile</Box>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    style={{ marginTop: '5px' }}
                                />

                                <span style={{
                                    width: '516px',
                                    height: '40px',
                                    color: '#707070',
                                    fontSize: '12px',
                                    textAlign: 'start',
                                    border: '0px solid red',

                                }}>The following npm package, @mui/icons-material, includes the 2,100+ official Material Icons converted to SvgIcon components.</span>

                            </Box>

                        </Box>
                        <Box style={{ border: '0px solid red', width: '94%', height: '100px', display: 'flex', marginTop: '0px' }}>
                            <Box style={{
                                width: '27px',
                                height: '27px',
                                backgroundColor: '#F5F5F5',
                                borderRadius: '100%',
                                border: '0px solid red',
                                color: '#707070',
                                fontSize: '12px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}><span>SK</span></Box>
                            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10px' }}>
                                <Box style={{ fontSize: '15px', color: '#0A0102', fontWeight: '500' }}>Sidhodhan Kamble</Box>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    style={{ marginTop: '5px' }}
                                />

                                <span style={{
                                    width: '516px',
                                    height: '40px',
                                    color: '#707070',
                                    fontSize: '12px',
                                    textAlign: 'start',
                                    border: '0px solid red',

                                }}>The following npm package, @mui/icons-material, includes the 2,100+ official Material Icons converted to SvgIcon components.</span>

                            </Box>

                        </Box>
                    </Box>

                </Box>
            </Box>
        </div >
    )
}
export default BookDetails;