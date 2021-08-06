import React from 'react'
import '../Styles/Confirmation.css'
import { companyName, ConfirmationText, MobileAppText } from '../Constants';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux'
import { CancelBookingDetails } from '../Redux/BookingDetails/BookingAction';

function Confirmation(props) {
    const { dateTimeDetails } = props;
    const dispatch = useDispatch();

    const ClickCancel = () => {
        dispatch(CancelBookingDetails());
        props.ToggleTab('one', {});
    }

    const ClickAnotherSchedule = () => {
        props.ToggleTab('one', props.dateTimeDetails);
    }

    return (
        <div className='rootDiv'>
            <div className='labelDiv'>
                {dateTimeDetails?.serviceName}<br></br>
                {dateTimeDetails?.selectedDate}<br />
                {dateTimeDetails?.selectedTime}<br />
                {companyName} {dateTimeDetails?.selectedCosting}<br /><br />
            </div>
            <div className='labelDiv'>
                {<Button variant="contained" color="primary" onClick={ClickCancel} >Cancel</Button>} &nbsp;&nbsp;
                <Button variant="contained" color="primary" onClick={ClickCancel} >Reschedule</Button><br />
            </div>
            <div className='anotherAppointmentBtn'>
            <Button variant="contained" color="primary" onClick={ClickAnotherSchedule} >Schedule another Appointment</Button>
            </div>
            <div className='Div2'>
                <div className='QrDiv'>
                <p>{ConfirmationText}</p>
                <p>{MobileAppText}</p>
                <img src="http://pngimg.com/uploads/qr_code/small/qr_code_PNG39.png" alt='Qr Code'></img>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Confirmation)
