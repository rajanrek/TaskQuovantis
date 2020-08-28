import {ADD_FOOD, ADD_CATG} from '../actionType/index';

const initialState = {
  foods: [],
  catg:[]
};

const Foodreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      return Object.assign({}, state, {
        foods: action.payload,
      });

    case ADD_CATG:
      return Object.assign({}, state, {
        catg: action.payload,
      });
    default:
      return state;
  }
};
export default Foodreducer;
