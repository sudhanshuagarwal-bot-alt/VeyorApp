import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import { SetSelectedDetails } from '../Redux/BookingDetails/BookingAction';

const useStyles = makeStyles(theme => ({
    LastName: {
        marginLeft: '1em',
        width: '67%'
    },
    PhoneAndEmail: {
        width: '97%'
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    RootDiv: {
        textAlign: 'left',
        marginTop: '4%'
    },
    LabelClass : {
        fontSize: 'small',
        fontWeight: 'bold'
    }
}))


function YourInfo(props) {
    const { dateTimeDetails } = props
    const dispatch = useDispatch();
    const classes = useStyles();
    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setemail] = useState('');

    const HandleFnameChange = (event) => {
        setFname(event);
    }
    const HandleLnameChange = (event) => {
        setLname(event);
    }
    const HandlePhoneChange = (event) => {
        setPhone(event);
    }
    const HandleEmailChange = (event) => {
        setemail(event);
    }

    const HandleSubmit = (event) => {
        const personInfo = {
            firstName:fName,
            lastName: lName,
            phone: phone,
            email:email,
            dateTimeDetails: dateTimeDetails
        }
        dispatch(SetSelectedDetails(personInfo));
        props.ToggleTab('three', dateTimeDetails);
    }

    return (
        <div className={classes.RootDiv}>
            <div className= {classes.LabelClass}>
                <label>{dateTimeDetails?.serviceName} {dateTimeDetails?.selectedDate} {dateTimeDetails?.selectedTime}</label>
            </div>
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField required id="standard-required" label="First Name" onChange={(event) => HandleFnameChange(event.target.value)} />
                    <TextField id="standard-required" label="Last Name" onChange={(event) => HandleLnameChange(event.target.value)} /><br />
                    <TextField id="standard-required" label="Phone" onChange={(event) => HandlePhoneChange(event.target.value)} /><br />
                    <TextField required id="standard-required" label="Email" onChange={(event) => HandleEmailChange(event.target.value)} /><br /><br />
                    <Button variant="contained" color="primary" onClick={HandleSubmit}>Primary</Button>
                </form>
            </div>
        </div>
    )
}

export default React.memo(YourInfo)
