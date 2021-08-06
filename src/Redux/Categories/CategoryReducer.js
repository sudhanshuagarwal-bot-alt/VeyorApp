import { GET_CATEGORY_LIST, ADD_CATEGORY_LIST, GET_TIMING_LIST } from "./CategoryTypes"
 import { Services, Timings } from "../../DataModels"

const initialState = {
    categoryList: Services,
    timingList: Timings
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY_LIST: return {
            ...state,
            categoryList: action.payLoad
        }
        case GET_CATEGORY_LIST: return {
            categoryList: state.categoryList
        }
        case GET_TIMING_LIST: return {
            timingList: state.timingList
        }
        default: {
            return {
                state
            }
        }
    }
}

export default CategoryReducer