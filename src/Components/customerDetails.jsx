import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, Box, Button, TextField, OutlinedInput, FormControlLabel, Radio } from "@mui/material";
import { useState } from "react";
import { addCustomer } from "../services/customerService";
const useStyles = makeStyles({
    mainCard: {
        width: '100%',
        height: '80vh',
        border: '1px solid #DBDBDB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px'
    },
    mainContainer: {
        border: '0px solid red',
        width: '88%',
        height: '100%',
    },
    mainHeading: {
        border: '0px solid blue',
        width: '100%',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addNewAddress: {
        color: '#A03037',
    },
    customerDetails: {
        fontSize: '18px',
        fontWeight: 'bold'
    },
    text1: {
        border: '0px solid green',
        width: '78%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '15px'
    },
    text2: {
        width: '78%',
        height: '14%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '0px solid red'
    },
    textcd: {
        textAlign: 'left',
        fontSize: '12px',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column'
    },
    addType: {
        fontWeight: '500',
        position: 'relative',
        top: '10px',
        right: '264px'
    },
    addressdetail: {
        width: '78%',
        height: '20%',
        textAlign: 'left',
        fontSize: '12px',
        border: '0px solid red',
    },
    address: {
        width: '100%',
        height: '80%',
        marginTop: '10px',
        border: '0px solid red',
    },
    text22: {
        width: '78%',
        height: '15%',
        display: 'flex',
        border: '0px solid red',
        justifyContent: 'space-between',
        marginTop: '35px'
    },
    textcd22: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        fontSize: '12px',
    },
    continue: {
        position: 'relative',
        left: '600px',
        top: '40px',
        width: '160px',
        border: '0px solid red'
    },
    radiobutton1: {
        fontWeight: '500',
        marginTop: '8px'
    },
    radio: {
        border: '0px solid blue',
        marginLeft: '50px'
    }
})

const CustomerDetails = (props) => {
    const classes = useStyles();
    const [details, setDetails] = useState(false);
    const [customerDetails, setCustomerDetails] = useState({ name: '', phoneNumber: '', addressType: '', fullAddress: '', city: '', state: '' });

    const openSummary = () => {
        addCustomer(customerDetails).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
        props.openOrderSummary();
        setDetails(true);
    }
    const takeName = (event) => {
        setCustomerDetails({
            ...customerDetails,
            name: event.target.value
        })
    }
    const takeMobileNumber = (event) => {
        setCustomerDetails({
            ...customerDetails,
            phoneNumber: event.target.value
        })
    }
    const takeAddress = (event) => {
        setCustomerDetails({
            ...customerDetails,
            fullAddress: event.target.value
        })
    }
    const takeCity = (event) => {
        setCustomerDetails({
            ...customerDetails,
            city: event.target.value
        })
    }
    const takeState = (event) => {
        setCustomerDetails({
            ...customerDetails,
            state: event.target.value
        })
    }
    const takeAddressType = (event) => {
        setCustomerDetails({
            ...customerDetails,
            addressType: event.target.value
        })
    }
    return (
        <div>
            <Card className={classes.mainCard}>
                <Box className={classes.mainContainer}>
                    <Box className={classes.mainHeading}>
                        <Box className={classes.customerDetails}>
                            Customer Details
                        </Box>
                        <Box className={classes.addNewAddress}>
                            <Button variant='outlined' sx={{ border: '1px solid #A03037', color: '#A03037', textTransform: 'none' }}>Add new Address</Button>
                        </Box>
                    </Box>
                    <Box className={classes.text1}>
                        <Box className={classes.text2}>
                            <Box className={classes.textcd}>
                                <span style={{ marginLeft: '5px', fontSize: '12px', color: '#0A0102', fontWeight: '500' }}>Full Name</span>
                                <TextField variant="outlined" size='small' onChange={takeName} sx={{ marginTop: '3px' }} />
                            </Box>
                            <Box className={classes.textcd}>
                                <span style={{ marginLeft: '5px', fontSize: '12px', color: '#0A0102', fontWeight: '500' }}>Mobile Number</span>
                                <TextField variant="outlined" size='small' onChange={takeMobileNumber} sx={{ marginTop: '3px' }} />
                            </Box>
                        </Box>

                        <Box className={classes.addressdetail}>
                            <Box className={classes.address}>
                                <span style={{ marginLeft: '5px', fontSize: '12px', color: '#0A0102', fontWeight: '500' }}>Address</span>
                                <OutlinedInput variant="outlined" onChange={takeAddress} size='small' sx={{ width: '100%', height: '100% !important', marginTop: '10px' }} />
                            </Box>
                        </Box>
                        <Box className={classes.text22}>
                            <Box className={classes.textcd22}>
                                <span style={{ marginLeft: '5px', fontSize: '12px', color: '#0A0102', fontWeight: '500' }}>city/town</span>
                                <TextField variant="outlined" size='small' onChange={takeCity} sx={{ marginTop: '5px' }} />
                            </Box>
                            <Box className={classes.textcd22}>
                                <span style={{ marginLeft: '5px', fontSize: '12px', color: '#0A0102', fontWeight: '500' }}>State</span>
                                <TextField variant="outlined" size='small' onChange={takeState} sx={{ marginTop: '5px' }} />
                            </Box>

                        </Box>
                        <Box className={classes.radiobuttons} sx={{ display: 'flex', flexDirection: 'row' }}  >
                            <span className={classes.radiobutton1} >Type :</span>
                            <Box className={classes.radio} onChange={takeAddressType}>
                                <FormControlLabel value="Home" name='Type' control={<Radio />} label="Home" />
                                <FormControlLabel value="Office" name='Type' control={<Radio />} label="Office" />
                                <FormControlLabel value="other" name='Type' control={<Radio />} label="Other" />
                            </Box>
                        </Box>

                        <Box className={classes.continue}>
                            {
                                details ? null :
                                    <Button variant='contained' onClick={openSummary} sx={{ width: '100%' }}>Continue</Button>
                            }
                        </Box>
                    </Box>

                </Box>
            </Card>
        </div>
    )
}
export default CustomerDetails;