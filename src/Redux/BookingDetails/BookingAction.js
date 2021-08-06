import { SET_SELECTED_DETAILS, GET_BOOKING_DETAILS, CANCEL_BOOKING_DETAILS } from "./BookingTypes"

export const SetSelectedDetails = (details) =>{
    return {
        type: SET_SELECTED_DETAILS,
        payload: details
    }
}

export const CancelBookingDetails = () =>{
    return {
        type: CANCEL_BOOKING_DETAILS,
    }
}


export const GetBookingDetails = () =>{
    return {
        type: GET_BOOKING_DETAILS,
    }
}