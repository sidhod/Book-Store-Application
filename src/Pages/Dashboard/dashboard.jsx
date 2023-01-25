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
    footer: {
        width: '100vw',
        height: '7vh',
        backgroundColor: '#2E1D1E',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '125px',
        position: 'fixed',
        bottom: '0px'


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
    const [page, setPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setBooksPerPage] = useState(4);

    const numberOfBooks = booksList.length;
    const numberOfPages = Math.ceil(numberOfBooks / booksPerPage);
    const lastBookIndex = currentPage * booksPerPage;
    const firstBookIndex = lastBookIndex - booksPerPage;
    const currentBooks = booksList.slice(firstBookIndex, lastBookIndex)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', border: '0px solid red' }}>
            <Header booksList={bookarry} searchBook={searchBook} autoRefresh={autoRefresh} />
            <Box style={{ border: '0px solid red', position: 'relative', left: '190px', top: '65px', width: '72%', height: 'auto' }}>
                <div>
                    {
                        toggle == false && <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: '60px', }}>
                            <Box style={{ border: '0px solid green', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '12%', alignItems: 'center' }}>
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                                    Books
                                </div>
                                <div style={{ color: '#878787' }}>
                                    ({(currentBooks.length)} items)
                                </div>
                            </Box>
                            <Box style={{ alignContent: 'center', marginTop: '10px', color: 'black' }}>
                                <SortMenus />
                            </Box>
                        </Box>
                    }
                </div>

                <div>{
                    toggle ? <BookDetails inputObj={inputObj} /> : <Box sx={{ display: 'flex', flexDirection: 'column', height: 'auto' }}>
                        <Box style={{ border: '0px solid red', width: '110%', height: 'auto', display: 'flex', flexFlow: 'row wrap' }}>
                            {
                                currentBooks.map((book) => (<BookCard book={book} getBook={getBook} openBookDetailsFunction={openBookSummary} />))
                            }
                        </Box>
                        {
                            <Box sx={{
                                display: 'flex', flexDirection: 'row', justifyContent: 'center', border: '0px solid red', width: '100%', marginTop: '30px', position: 'fixed',
                                bottom: '110px', left: '0px'
                            }}>
                                <Pagination variant="outlined" sx={{ color: '#8F2B2F' }} shape="rounded" count={numberOfPages} onChange={(event, value) => setCurrentPage(value)} />
                            </Box>
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