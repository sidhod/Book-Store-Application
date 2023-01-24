import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import BookCard from "../../Components/bookcard";
import BookDetails from "../../Components/booksDetails";
import Header from "../../Components/header";
import SortMenus from "../../Components/sortby";
import { getAllBooks, getBookInCart } from "../../services/DataService";

const useStyles = makeStyles({
    footer: {
        width: '100vw',
        height: '7vh',
        backgroundColor: '#2E1D1E',
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    footertxt: {
        color: 'white',
        marginLeft: '180px',
        fontSize: '14px'
    }
})
function Dashboard() {
    const classes = useStyles()
    const [booksList, setBookList] = useState([]);
    const [inputObj, setInputObj] = useState({
        bookName: ""
    })
    const [toggle, setToggle] = useState(false)
    const [addCartbutton, setaddCartbutton] = useState(false)
    const openBookSummary = (obj) => {
        setToggle(true);
        console.log("from dashboard", obj);
        setInputObj(obj)
        // getBookInCart(obj._id)
        //     .then(res => {
        //         console.log("responce card==>", res.data.data)
        //         if (res.data.data[0] == null) {
        //             setaddCartbutton(true)
        //             console.log("yes")
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }
    console.log("from input obj", inputObj)
    const getBook = () => {
        getAllBooks().then(res => {
            console.log(res);
            let obj = res.data.data;
            console.log("=======", obj)
            setBookList(obj)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        getBook()
    }, [])
    return (
        <div>
            <Header />
            <Box style={{ border: '0px solid red', position: 'relative', left: '190px', top: '65px', width: '72%', height: 'auto' }}>
                <div>
                    {
                        toggle == false && <Box style={{ border: '0px solid green', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: '60px' }}>
                            <Box style={{ border: '0px solid green', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '12%', alignItems: 'center' }}>
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                                    Books
                                </div>
                                <div style={{ color: '#878787' }}>
                                    ({(booksList.length)} items)
                                </div>
                            </Box>
                            <Box style={{ alignContent: 'center', marginTop: '10px', color: 'black' }}>
                                <SortMenus />
                            </Box>
                        </Box>
                    }
                </div>

                <div>{
                    toggle ? <BookDetails inputObj={inputObj} /> :
                        <Box style={{ border: '0px solid red', width: '106%', height: 'auto', display: 'flex', flexFlow: 'row wrap' }}>
                            {
                                booksList.map((book) => (<BookCard book={book} getBook={getBook} openBookDetailsFunction={openBookSummary} />))
                            }
                        </Box>
                }
                </div>
            </Box>
            <Box className={classes.footer}>
                <Box className={classes.footertxt}>Copyright @ 2022, Bookstore Private Limited.All Rights Reserved</Box>
            </Box>

        </div >

    )
}
export default Dashboard