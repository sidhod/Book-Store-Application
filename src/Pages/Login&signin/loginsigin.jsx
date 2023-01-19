import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Image } from '@mui/material';
import Signin from '../../Components/signin';
import Signup from '../../Components/signup';
import { useState } from 'react';
const mainpagestyle = makeStyles({
    mainContainer: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#A8A8A8',
        zIndex: -1
    },
    container1: {
        width: '45%',
        height: '55%',
        backgroundColor: '#F5F5F5',
        position: 'absolute',
        top: "160px",
        left: '390px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderRadius: '20px'
    },
    image: {
        border: '1px solid red',
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    image1: {
        width: '68%',
        height: '60%',
        borderRadius: '120px',
        border: '1px solid black',
        zIndex: '1',
        marginTop: '50px',
        marginLeft: '50px'
    },
    text: {
        marginTop: "35px",
        marginLeft: "10px",
        fontWeight: 'bold',
        fontSize: '20px'
    }
})
function LoginSiginPage() {
    const classes = mainpagestyle()
    const [toggle, setToggle] = useState(false)
    const signin = () => {
        setToggle(true);
    }
    const signup = () => {
        setToggle(false);
    }

    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.container1}>
                <Box className={classes.image}>
                    <img className={classes.image1} src='image1.png' />
                    <Box className={classes.text}>ONLINE BOOK SHOPPING</Box>
                </Box>
            </Box>
            <div>
                {
                    toggle ? <Signup signup={signup} /> : <Signin signin={signin} />
                }

            </div>
        </Box>
    )
}
export default LoginSiginPage;
