import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Box, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
const useStyles = makeStyles({
    header: {
        flexGrow: 1,
        position: 'fixed',
        zIndex: '5'
    },
    keep: {
        border: '0px solid black',
        width: '50px',
        position: 'relative',
        left: '155px'
    },
    Bookstore: {
        width: '10px',
        height: '10px',
        fontSize: '18px',
        color: 'white',
        position: 'relative',
        left: '155px',
        bottom: '10px'
    },
    searchBar: {

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '2px',
        backgroundColor: 'white',
        height: '60%',
        width: '40%',
        marginLeft: '265px',

    },
    mainIconBox: {
        border: "0px solid red", height: "7vh"
    },
    iconBox: {
        xs: "none",
        md: "flex",
        border: "0px solid black",
        width: "12vw",
        position: "relative",
        left: "210px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: '90%'
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        header: {
            position: 'fixed',
            top: '0'

        },
        keep: {
            border: '0px solid black',
            position: 'relative',
            left: '0px'
        },
        Bookstore: {
            fontSize: '19px',
            position: 'relative',
            left: '5px',
        },
        searchBar: {
            display: 'none'

        },
        mainIconBox: {
            border: '0px solid black',

        },
        iconBox: {
            xs: "none",
            md: "flex",
            border: "0px solid black",
            width: "12vw",
            position: "relative",
            left: "40vw",
            top: '3px'


        },
    },
    ['@media only screen and (min-width: 489px) and (max-width: 789px)']: {
        header: {
            position: 'fixed',
            top: '0',

        },
        keep: {
            border: '0px solid black',
            position: 'relative',
            left: '0px'
        },
        Bookstore: {
            fontSize: '19px',
            position: 'relative',
            left: '0px',
        },
        searchBar: {
            marginLeft: '110px'

        },
        mainIconBox: {
            border: '1px solid black',

        },
        iconBox: {
            width: "130px",
            position: "relative",
            left: "1%",
            top: '3px'
        },
    },
    ['@media only screen and (min-width: 789px) and (max-width: 1024px)']: {
        header: {
            position: 'fixed',
            top: '0',

        },
        keep: {
            border: '1px solid black',
            position: 'relative',
            left: '15px'
        },
        Bookstore: {
            fontSize: '19px',
            position: 'relative',
            left: '10px',
        },
        searchBar: {
            marginLeft: '150px'

        },
        mainIconBox: {
            border: '1px solid black',

        },
        iconBox: {
            width: "130px",
            position: "relative",
            left: "12%",
            top: '3px'
        },
    }
});


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    position: "relative",
    right: "200px",
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "50%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));


function Header(props) {
    const navigate = useNavigate();
    const classes = useStyles();
    const [search, setsarch] = useState({ search1: "" })
    const searchBook = (event) => {
        setsarch(prevState => ({
            ...prevState,
            search1: event.target.value
        }))
        // console.log(search)
    }
    const searchInBook = () => {
        let arrlist = props.booksList.filter((object) => {
            // console.log(object.bookName)
            console.log(search.search1)
            if (object.bookName.toLowerCase().includes(search.search1.toLowerCase())) {
                console.log(true)
                return object
            }
        })
        console.log(arrlist)
        props.searchBook(arrlist)
    }
    const godashboard = () => {
        navigate('/dashboard')
    }
    const gomycart = () => {
        navigate('/mycard')
    }
    const gowishlist = () => {
        navigate('/wishlist')
    }
    return (
        <Box className={classes.header}>
            <AppBar className={classes.appBar} position="static" sx={{ backgroundColor: '#A03037', height: '60px', position: 'fixed' }}>
                <Toolbar>
                    <Box className={classes.keep} onClick={godashboard}>
                        <img src="education.png" alt="logo" />
                    </Box>
                    <Box
                        className={classes.Bookstore}
                        variant="h9"
                        noWrap
                        component="div"
                    >
                        Bookstore
                    </Box>
                    <Box className={classes.searchBar}>
                        <SearchIcon sx={{
                            marginLeft: '10px',
                            color: 'gray',
                        }} onClick={searchInBook}></SearchIcon>
                        <InputBase placeholder='Search...' sx={{ marginLeft: '20px', }} onChange={searchBook}></InputBase>
                    </Box>

                    <Box className={classes.iconBox}>
                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            sx={{ color: 'white', display: 'flex', flexDirection: 'column', border: "0px solid black", }}
                        >
                            <PersonOutlineOutlinedIcon />
                            <span style={{ fontSize: "10px", marginTop: '5px' }}>Profile</span>
                        </IconButton>
                        <IconButton
                            size="medium"
                            color="white"
                            sx={{ color: 'white', display: 'flex', flexDirection: 'column', border: "0px solid black" }}
                        >
                            <FavoriteIcon onClick={gowishlist} />
                            <span style={{ fontSize: "10px", marginTop: '5px' }}>Wishlist</span>

                        </IconButton>
                        <IconButton
                            size="medium"
                            aria-label="show 17 new notifications"
                            color="white"
                            sx={{ color: 'white', display: 'flex', flexDirection: 'column', border: "0px solid black" }}
                        >
                            <ShoppingCartOutlinedIcon onClick={gomycart} />
                            <span style={{ fontSize: "10px", marginTop: '5px' }}>Cart</span>

                        </IconButton>

                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    )
}
export default Header;