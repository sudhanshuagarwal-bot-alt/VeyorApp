import { createStore } from "redux";
import { combineReducers } from "redux";
import CategoryReducer from '../Redux/Categories/CategoryReducer'
import BookingReducer from '../Redux/BookingDetails/BookingReducer'

const rootReducer = combineReducers({
    Categories: CategoryReducer,
    BookingDetails: BookingReducer
})
const Store = createStore(rootReducer);

export default Store