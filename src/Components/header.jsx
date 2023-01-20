import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Box, Toolbar } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { fontSize, height } from "@mui/system";
const useStyles = makeStyles({

});

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "25vw !important",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
        position: "relative",
        left: "70px",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
}));

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


function Header() {
    const classes = useStyles();
    return (
        <Box className={classes.header} sx={{ flexGrow: 1 }}>
            <AppBar className={classes.appBar} position="static" sx={{ backgroundColor: '#A03037', height: '8vh' }}>
                <Toolbar>
                    <div className="keep" style={{ border: '0px solid black', width: '50px', position: 'relative', left: '155px' }}>
                        <img src="education.png" alt="logo" />
                    </div>
                    <div
                        className="topography"
                        variant="h9"
                        noWrap
                        component="div"
                        style={{ width: '10px', height: '10px', fontSize: '18px', color: 'white', position: 'relative', left: '155px', bottom: '10px' }}
                    >
                        Bookstore
                    </div>
                    <Search className="searchIcon" style={{ color: 'black', width: '30vw', border: '0px solid black', position: 'relative', left: '300px' }}>
                        <SearchIconWrapper className="wrapper" sx={{ background: 'white', height: '100%', width: '30vw', borderRadius: '5px' }}>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                            sx={{ height: '35px', border: '0px solid red', width: '10% !important', marginRight: '0px', position: 'relative', right: '80px' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1, border: "0px solid red", height: "7vh", width: '10vw' }} >
                        <Box className="iconsFive" sx={{ display: { xs: "none", md: "flex", border: "0px solid black", width: "10vw", position: "relative", left: "520px", display: "flex", flexDirection: "row", justifyContent: "space-between" }, height: '90%' }}>
                            {/* <Box sx={{}}> */}
                            <IconButton
                                size="large"
                                aria-label="show 4 new mails"
                                sx={{ color: 'white', display: 'flex', flexDirection: 'column', border: "0px solid black", }}
                            >
                                <PersonOutlineOutlinedIcon />
                                <span style={{ fontSize: "10px" }}>Profile</span>

                            </IconButton>
                            {/* 
                            </Box> */}

                            <IconButton
                                size="medium"
                                aria-label="show 17 new notifications"
                                color="white"
                                sx={{ color: 'white', display: 'flex', flexDirection: 'column', border: "0px solid black" }}
                            >

                                <ShoppingCartOutlinedIcon />
                                <span style={{ fontSize: "10px" }}>Profile</span>

                            </IconButton>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box >
    )
}
export default Header;