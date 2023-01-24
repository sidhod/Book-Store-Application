import { Box, Pagination } from "@mui/material";
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
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        left: '0',
        bottom: '0',
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
    const [page, setPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setBooksPerPage] = useState(5);

    const numberOfBooks = booksList.length;
    const numberOfPages = Math.ceil(numberOfBooks / booksPerPage);
    const lastBookIndex = currentPage * booksPerPage;
    const firstBookIndex = lastBookIndex - booksPerPage;
    const currentBooks = booksList.slice(firstBookIndex, lastBookIndex)
    return (
        <div>
            <Header />
            <Box style={{ border: '0px solid red', position: 'relative', left: '190px', top: '65px', width: '72%', height: 'auto' }}>
                <div>
                    {
                        toggle == false && <Box style={{ border: '0px solid green', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: '60px', }}>
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
                    toggle ? <BookDetails inputObj={inputObj} /> :
                        <Box style={{ border: '0px solid red', width: '106%', height: 'auto', display: 'flex', flexFlow: 'row wrap' }}>
                            {
                                currentBooks.map((book) => (<BookCard book={book} getBook={getBook} openBookDetailsFunction={openBookSummary} />))
                            }
                        </Box>
                }
                </div>
            </Box>
            {
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '100px', marginBottom: '50px', position: 'relative' }}>
                    <Pagination variant="outlined" sx={{ color: '#8F2B2F' }} shape="rounded" count={numberOfPages} onChange={(event, value) => setCurrentPage(value)} />

                </Box>
            }
            <Box className={classes.footer}>
                <Box className={classes.footertxt}>Copyright @ 2022, Bookstore Private Limited.All Rights Reserved</Box>
            </Box>

        </div >

    )
}
export default Dashboard