import {createStore, combineReducers} from 'redux'

import foodReducer from '../reducer/food'

const rootReducer = combineReducers({
    food:foodReducer
});

const configStore = () =>{
    return createStore(rootReducer);
}

export default configStore