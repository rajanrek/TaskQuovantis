import {ADD_FOOD,ADD_CATG} from '../actionType/index'

export const addFood = param =>{
    return {
        type:ADD_FOOD,
        payload:param
    }
}
export const addcategories = param =>{
    return {
        type:ADD_CATG,
        payload:param
    }
}