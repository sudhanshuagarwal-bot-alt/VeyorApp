import { GET_CATEGORY_LIST, ADD_CATEGORY_LIST, GET_TIMING_LIST } from "./CategoryTypes"

export const GetCategoryList = () =>{
    return {
        type: GET_CATEGORY_LIST
    }
}

export const GetTimingList = () =>{
    return {
        type: GET_TIMING_LIST
    }
}

export const AddCategoryList = (List) =>{
    return {
        type: ADD_CATEGORY_LIST,
        payLoad: List
    }
}