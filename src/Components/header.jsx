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
const useStyles = makeStyles({});


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
            if (`${object.bookName}`.includes(search.search1)) {
                console.log(true)
                return object
            }
        })
        console.log(arrlist)
        props.searchBook(arrlist)
    }
    return (
        <Box className={classes.header} sx={{ flexGrow: 1, position: 'fixed', zIndex: '5' }}>
            <AppBar className={classes.appBar} position="static" sx={{ backgroundColor: '#A03037', height: '60px', position: 'fixed' }}>
                <Toolbar>
                    <Box className="keep" style={{ border: '0px solid black', width: '50px', position: 'relative', left: '155px' }}>
                        <img src="education.png" alt="logo" />
                    </Box>
                    <div
                        className="topography"
                        variant="h9"
                        noWrap
                        component="div"
                        style={{ width: '10px', height: '10px', fontSize: '18px', color: 'white', position: 'relative', left: '155px', bottom: '10px' }}
                    >
                        Bookstore
                    </div>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderRadius: '2px',
                        backgroundColor: 'white',
                        height: '60%',
                        width: '40%',
                        marginLeft: '265px',
                    }}>
                        <SearchIcon sx={{
                            marginLeft: '10px',
                            color: 'gray',
                        }} onClick={searchInBook}></SearchIcon>
                        <InputBase placeholder='Search...' sx={{ marginLeft: '20px', }} onChange={searchBook}></InputBase>
                    </Box>
                    <Box sx={{ border: "0px solid red", height: "7vh", border: "0px solid black" }} >
                        <Box className="iconsFive" sx={{ display: { xs: "none", md: "flex", border: "0px solid black", width: "10vw", position: "relative", left: "210px", display: "flex", flexDirection: "row", justifyContent: "space-between" }, height: '90%' }}>
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
                                aria-label="show 17 new notifications"
                                color="white"
                                sx={{ color: 'white', display: 'flex', flexDirection: 'column', border: "0px solid black" }}
                            >
                                <ShoppingCartOutlinedIcon />
                                <span style={{ fontSize: "10px", marginTop: '5px' }}>Cart</span>

                            </IconButton>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box >
    )
}
export default Header;