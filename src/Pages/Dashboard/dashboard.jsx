import { Directions } from "@mui/icons-material";
import { Box, Pagination } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { width } from "@mui/system";
import React, { useEffect, useState } from "react";
import BookCard from "../../Components/bookcard";
import BookDetails from "../../Components/booksDetails";
import Header from "../../Components/header";
import SortMenus from "../../Components/sortby";
import { getAllBooks, getBookInCart } from "../../services/DataService";

const useStyles = makeStyles({
    mainBox: {
        border: '0px solid red',
        position: 'relative',
        left: '190px',
        top: '65px',
        width: '71.4%',
        height: 'auto'
    },
    footer: {
        width: '100vw',
        height: '7vh',
        backgroundColor: '#2E1D1E',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '60px',
    },
    footertxt: {
        color: 'white',
        marginLeft: '180px',
        fontSize: '14px'
    },
    bookItemsBox: {
        border: '0px solid green',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '12%',
        alignItems: 'center'
    },
    booksT: {
        fontSize: '20px',
        fontWeight: 'bold'
    },
    items: {
        color: '#878787'
    },
    books: {
        border: '0px solid red',
        width: '110%',
        height: 'auto',
        display: 'flex',
        flexFlow: 'row wrap'
    },
    pagination: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        border: '0px solid red',
        width: '100%',
        marginTop: '250px',
    },

    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        mainBox: {
            border: '0px solid blue',
            position: 'relative',
            left: '10px',
            top: '65px',
            width: '108%',
            // height: '100vh'
        },
        booksT: {
            fontSize: '20px',
            fontWeight: 'bold'
        },
        items: {
            fontSize: '12px'
        },
        bookItemsBox: {
            width: '34%',
            border: '0px solid red',
        },
        books: {
            border: '0px solid red',
            width: '90%',
            marginLeft: '15px',
            height: 'auto',
            display: 'flex',
            flexFlow: 'column wrap'
        },
        pagination: {
            border: '0px solid red',
            width: '108%',
            position: 'absolute',
            left: '10px',
            top: '750px',
            marginTop: '15px'

        },
        footer: {
            marginTop: '120px',
            width: '115%',
            position: 'absolute',
            bottom: '-160px'
        },
        footertxt: {
            color: 'white',
            marginLeft: '0px',
            fontSize: '13px'
        },
        headerBox: {
            border: '0px solid red',
            width: '93%',
            marginLeft: '10px'
        }
    },
    ['@media only screen and (min-width: 489px) and (max-width: 789px)']: {


        mainBox: {
            border: '0px solid blue',
            position: 'relative',
            left: '15px',
            top: '65px',
            width: '100%',
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center'
        },
        bookItemsBox: {
            width: '28%',
            border: '0px solid red',
        },
        books: {
            border: '0px solid red',
            width: '90%',
            marginLeft: '15px',
            height: 'auto',
            display: 'flex',
            flexFlow: 'column wrap'
        },
        pagination: {
            border: '0px solid red',
            width: '100%',
            position: 'absolute',
            bottom: '-180px',
            left: '0px'
        },
        footer: {

            width: '115%',
            position: 'absolute',
            bottom: '-250px'
        },

        footertxt: {
            color: 'white',
            fontSize: '13px',
            marginLeft: '80px',
        },
        headerBox: {
            border: '0px solid red',
            width: '93%',
            marginLeft: '10px'
        }
    },
    ['@media only screen and (min-width: 789px) and (max-width: 1024px)']: {
        mainBox: {
            border: '0px solid blue',
            position: 'relative',
            left: '120px',
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'

        },
        bookItemsBox: {
            width: '25%',
            border: '0px solid red',
        },
        books: {
            border: '0px solid green',
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
        },
        pagination: {
            border: '0px solid red',
            width: '100%',
            position: 'relative',
            marginTop: '10px',
            bottom: '0px',
            left: '0px'
        },
        footer: {
            position: 'relative',
            bottom: '0px',
            width: '108%'
        },
        footertxt: {
            color: 'white',
            fontSize: '13px',
            marginLeft: '80px',
        },
        headerBox: {
            border: '0px solid red',
            width: '80%',
        }
    }

})
function Dashboard() {
    const classes = useStyles()
    const [booksList, setBookList] = useState([]);
    const [inputObj, setInputObj] = useState({
        bookName: ""
    })
    const [bookarry, setBookArry] = useState([])
    const [toggle, setToggle] = useState(false)
    const [addCartbutton, setaddCartbutton] = useState(false)
    const openBookSummary = (obj) => {
        setToggle(true);
        console.log("from dashboard", obj);
        setInputObj(obj)
    }
    console.log("from input obj", inputObj)
    const searchBook = (list) => {
        setBookList(list)
    }
    const getBook = () => {
        getAllBooks().then(res => {
            console.log(res);
            let obj = res.data.data;
            console.log("=======", obj)
            setBookList(obj)
            setBookArry(obj)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        getBook()
    }, [])
    function autoRefresh() {
        searchBook()
    }
    function homePage() {
        setToggle(false)
    }
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setBooksPerPage] = useState(4);

    const numberOfBooks = booksList.length;
    const numberOfPages = Math.ceil(numberOfBooks / booksPerPage);
    const lastBookIndex = currentPage * booksPerPage;
    const firstBookIndex = lastBookIndex - booksPerPage;
    const currentBooks = booksList.slice(firstBookIndex, lastBookIndex)
    return (
        <Box className={classes.dashboard} style={{ display: 'flex', flexDirection: 'column', height: 'auto', border: '0px solid red' }}>
            <Header booksList={bookarry} searchBook={searchBook} autoRefresh={autoRefresh} />
            <Box className={classes.mainBox}>
                <Box className={classes.headerBox}>
                    {
                        toggle == false && <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: '60px', }}>
                            <Box className={classes.bookItemsBox}>
                                <Box className={classes.booksT}>
                                    Books
                                </Box>
                                <Box className={classes.items}>
                                    ({(currentBooks.length)} items)
                                </Box>
                            </Box>
                            <Box style={{ alignContent: 'center', marginTop: '10px', color: 'black' }}>
                                <SortMenus />
                            </Box>
                        </Box>
                    }
                </Box>

                <div>{
                    toggle ? <BookDetails inputObj={inputObj} homePage={homePage} /> : <Box sx={{ display: 'flex', flexDirection: 'column', height: 'auto' }}>
                        <Box className={classes.books}>
                            {
                                currentBooks.map((book) => (<BookCard book={book} getBook={getBook} openBookDetailsFunction={openBookSummary} />))
                            }
                        </Box>
                    </Box>

                }

                </div>
            </Box >
            <div>
                {
                    toggle ? null : <Box className={classes.pagination}>
                        <Pagination variant="outlined" sx={{ color: '#8F2B2F' }} shape="rounded" count={numberOfPages} onChange={(event, value) => setCurrentPage(value)} />
                    </Box>
                }
            </div>
            <div>
                {
                    toggle ? null : <Box className={classes.footer}>
                        <Box className={classes.footertxt}>Copyright @ 2022, Bookstore Private Limited.All Rights Reserved</Box>
                    </Box>
                }
            </div>


        </Box >

    )
}
export default Dashboard