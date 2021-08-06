import { SET_SELECTED_DETAILS, GET_BOOKING_DETAILS, CANCEL_BOOKING_DETAILS } from "./BookingTypes"

const initialState = {
    bookingList: []
}

const BookingReducer = (state = initialState, action) => {
    let obj = {}
    if (action?.payload) {
        const personalInfoObj = {
            firstName: action.payload.firstName,
            lastName: action.payload.firstName,
            phone: action.payload.phone,
            email: action.payload.email,
        }
        obj = { personalInfo: personalInfoObj, dateTimeDetails: action?.payload.dateTimeDetails };
    }
    switch (action.type) {
        case SET_SELECTED_DETAILS: return {
            ...state,
            bookingList: state?.state?.bookingList?.push(obj)
        }
        case GET_BOOKING_DETAILS: return {
            bookingList: state?.state?.bookingList
        }
        case CANCEL_BOOKING_DETAILS: return {
            bookingList: state?.state?.bookingList?.splice(state?.state?.bookingList?.length - 1, 1)
        }
        default: {
            return {
                state
            }
        }
    }
}

export default BookingReducer