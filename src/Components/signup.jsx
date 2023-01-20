import React from "react";
import { useState } from "react";
import { makeStyles } from '@mui/styles';
import { Paper, Box, Button, TextField } from "@mui/material";
import { registerApi } from "../services/userServices";
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstnameRegex = /^[A-Z]{1}[a-z]{4,}$/;
const mobilenumberRegex = /^[6-9]{1}[0-9]{10,}$/;
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
    name: {
        border: '0px solid blue',
        width: '95%',
        height: '15%',
        display: 'flex',
        flexDirection: "column",
        marginTop: '18px'
    },
    email: {
        border: '0px solid blue',
        width: '95%',
        height: '15%',
        display: 'flex',
        flexDirection: "column",
        marginTop: '7px'
    },
    password: {
        border: '0px solid blue',
        width: '95%',
        height: '15%',
        display: 'flex',
        flexDirection: "column",
        marginTop: '5px'
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
        textAlign: 'left',
        border: '0px solid red',
        // color: #9D9D9D;
    },
    forgotpassword: {
        height: '100%',
        fontSize: '10px',
        color: '#9D9D9D !important',
        textAlign: 'right',
        border: '0px solid red',
        marginLeft: '196px',
        marginBottom: '5px'
        // color: #9D9D9D;
    },
    loginBox: {
        width: '95%',
        marginTop: '12px',
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
function Signup(props) {
    const classes = useStyles()
    const [registrationObj, setFirstLastNameObj] = useState({ firstName: "", email: "", password: "", mobileNumber: "" })
    const [regexObj, setRegexObj] = useState({ firstNameBorder: false, firstNameHelper: "", mobileNumberBorder: false, mobileNumberHelper: "", emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })
    const takingFirstName = (event) => {
        // setSigninobj({ email: event.target.value })
        setFirstLastNameObj(prevState => ({
            ...prevState,
            firstName: event.target.value
        }))
    }
    const takingEmail = (event) => {
        // setSigninobj({ password: event.target.value })
        setFirstLastNameObj(prevState => ({
            ...prevState,
            email: event.target.value
        }))
    }
    const takingPassword = (event) => {
        // setSigninobj({ password: event.target.value })
        setFirstLastNameObj(prevState => ({
            ...prevState,
            password: event.target.value
        }))
    }
    const takingMobileNumber = (event) => {
        // setSigninobj({ password: event.target.value })
        setFirstLastNameObj(prevState => ({
            ...prevState,
            mobileNumber: event.target.value
        }))
    }
    const register = () => {
        let firstNameTest = firstnameRegex.test(registrationObj.firstName);
        let mobileNumberTest = mobilenumberRegex.test(registrationObj.mobileNumber);
        let emailTest = emailRegex.test(registrationObj.email);
        let passwordTest = passwordRegex.test(registrationObj.password);
        if (firstNameTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                firstNameBorder: true,
                firstNameHelper: "Enter Valid Name"
            }))
        }
        else if (firstNameTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                firstNameBorder: false,
                firstNameHelper: ""
            }))
        }
        if (mobileNumberTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                mobileNumberBorder: true,
                mobileNumberHelper: "Enter Valid Mobile Number"
            }))
        }
        else if (mobileNumberTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                mobileNumberBorder: false,
                mobileNumberHelper: ""
            }))
        }
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
        if (firstNameTest === true && mobileNumberTest === true && emailTest === true && passwordTest === true) {
            registerApi(registrationObj)
                .then((reponse) => {
                    console.log(reponse)
                })
                .catch((error) => { console.log(error) });
        }
    }
    const toggling = () => {
        props.signup()

    }
    return (
        <Paper elevation={5} className={classes.signinpaper}>
            <Box className={classes.signincontainer}>
                <Box className={classes.mainbuttons}>
                    <Button className={classes.signupbutton} onClick={toggling}>LOGIN
                    </Button>
                    <Button className={classes.signinbutton} >SIGNUP
                        <Box className={classes.redbar}></Box></Button>
                </Box>
                <Box className={classes.name}>
                    <span className={classes.text}>Full Name</span>
                    <TextField className={classes.emailtextField} error={regexObj.firstNameBorder} helperText={regexObj.firstNameHelper} variant='outlined' size="small" onChange={takingFirstName} />
                </Box>
                <Box className={classes.email}>
                    <span className={classes.text}>Email id</span>
                    <TextField className={classes.emailtextField} error={regexObj.emailBorder} helperText={regexObj.emailHelper} variant='outlined' size="small" onChange={takingEmail} />
                </Box>
                <Box className={classes.password}>
                    <span className={classes.text}>Password</span>
                    <TextField error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} variant='outlined' type="password" size="small" onChange={takingPassword} />
                </Box>

                <Box className={classes.email}>
                    <span className={classes.text}>Mobile Number</span>
                    <TextField error={regexObj.mobileNumberBorder} helperText={regexObj.mobileNumberHelper} className={classes.emailtextField} variant='outlined' size="small" onChange={takingMobileNumber} />
                </Box>
                <Box className={classes.loginBox}>
                    <Button className={classes.loginbutton} variant='contained' onClick={register}>Signup</Button>
                </Box>
            </Box>
        </Paper >
    )
}
export default Signup;