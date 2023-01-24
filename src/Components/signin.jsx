import React from "react";
import { useState } from "react";
import { makeStyles } from '@mui/styles';
import { Paper, Box, Button, TextField, Divider, InputAdornment, IconButton, FormControl } from "@mui/material";
import { loginApi } from "../services/userServices";
import { useNavigate } from 'react-router-dom';
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const useStyles = makeStyles({
    signinpaper: {
        width: '25vw',
        height: '60vh',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        top: '142px',
        left: '730px',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5
    },
    signincontainer: {
        border: '0px solid red',
        width: '75%',
        height: '98%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    mainbuttons: {
        border: '0px solid blue',
        width: '100%',
        height: '10%',
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    signinbutton: {
        fontSize: '20px !important',
        fontWeight: 'bold !important',
        color: '#0A0102 !Important',
        fontFamily: 'Roboto',
        height: '50px',
        display: 'flex',
        flexDirection: 'column'
    },
    redbar: {
        width: '22px',
        height: '5px',
        background: '#A03037 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        opacity: '1',
    },
    signupbutton: {
        border: '0px solid black',
        fontSize: '20px !important',
        fontWeight: 'bold !important',
        color: '#878787 !Important',
        fontFamily: 'Roboto',
        height: '40px'
    },
    email: {
        border: '0px solid blue',
        width: '95%',
        height: '15%',
        display: 'flex',
        flexDirection: "column",
        marginTop: '18px'
    },
    password: {
        border: '0px solid blue',
        width: '95%',
        height: '15%',
        display: 'flex',
        flexDirection: "column",
        marginTop: '10px'
    },

    text: {
        textAlign: 'left',
        font: 'normal normal normal 10px / 13px Roboto',
        letterSpacing: '0px',
        color: '#0A0102',
        textTransform: 'capitalize',
        opacity: '1'

    },
    forgotpasswordBox: {
        width: '100%',
        height: '12px',
        border: '0px solid red',
        // color: #9D9D9D;
    },
    forgotpassword: {
        height: '100%',
        fontSize: '10px',
        color: '#9D9D9D !important',
        textAlign: 'right',
        border: '0px solid red',

        // color: #9D9D9D;
    },
    loginBox: {
        width: '95%',
        marginTop: '28px',
        border: '0px solid red',

    },
    loginbutton: {
        width: '100%',
        height: '95%',
        color: 'white !important',
        background: '#A03037 !important',
        textTransform: "none !important"
    },
    dividertext: {
        width: '80%',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        fontWeight: 'bold',
        marginTop: '15px'
    },
    fandg: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        height: '8%',
        border: '0px solid red',
        marginTop: '30px'
    },
    facebookbutton: {
        width: '45%',
        height: '100%',
        color: '#4266B2',
        textTransform: "none !important",
        opacity: '1'
    },
    googlebutton: {
        width: '45%',
        height: '100%',
        color: '##F5F5F5',
        textTransform: "none !important"
    }

});
function Signin(props) {
    const classes = useStyles()
    const navigate = useNavigate();
    const [signinObj, setSigninobj] = useState({ email: "", password: "" });
    const [regexObj, setRegexObj] = useState({ emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })
    const takingEmail = (event) => {
        // setSigninobj({ email: event.target.value })

        setSigninobj(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(signinObj)
    }
    const takingPassword = (event) => {
        // setSigninobj({ password: event.target.value });
        setSigninobj(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(signinObj)
    }
    const submit = () => {
        let emailTest = emailRegex.test(signinObj.email);
        let passwordTest = passwordRegex.test(signinObj.password);
        if (emailTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Enter Valid Email"
            }))
        }
        else if (emailTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: false,
                emailHelper: ""
            }))
        }
        if (passwordTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "Enter Valid Password"
            }))
        }
        else if (passwordTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }
        if (emailTest === true && passwordTest === true) {
            loginApi(signinObj)
                .then((response) => {
                    console.log(response);
                    localStorage.setItem('token', response.data.data)
                    navigate('/dashboard')
                })
                .catch((error) => { console.log(error) });
        }
    }
    const toggling = () => {
        props.signin()
    }
    return (
        <Paper elevation={5} className={classes.signinpaper}>
            <Box className={classes.signincontainer}>
                <Box className={classes.mainbuttons}>
                    <Button className={classes.signinbutton}>LOGIN
                        <Box className={classes.redbar}></Box></Button>
                    <Button className={classes.signupbutton} onClick={toggling}>SIGNUP</Button>
                </Box>
                <Box className={classes.email}>
                    <span className={classes.text}>Email id</span>
                    <TextField className={classes.emailtextField} error={regexObj.emailBorder} helperText={regexObj.emailHelper} variant='outlined' size="small" onChange={takingEmail} />
                </Box>
                <Box className={classes.password}>
                    <span className={classes.text}>Password</span>
                    <TextField error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} variant='outlined' type="password" size="small" onChange={takingPassword} />
                    <span className={classes.forgotpassword}>Forgot Password?</span>
                </Box>
                <Box className={classes.loginBox}>
                    <Button className={classes.loginbutton} variant='contained' onClick={submit}>Login</Button>
                </Box>
                <Box className={classes.dividertext}>
                    <Divider sx={{ borderBottomWidth: 2, width: '30%' }} />OR<Divider sx={{ borderBottomWidth: 2, width: '30%' }} />
                </Box>
                <Box className={classes.fandg}>
                    <Button className={classes.facebookbutton} variant='contained' >Facebook</Button>
                    <Button className={classes.googlebutton} variant='outlined' disabled>Google</Button>
                </Box>
            </Box>
        </Paper>
    )
}
export default Signin;