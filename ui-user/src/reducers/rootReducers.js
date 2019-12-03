import { combineReducers } from 'redux';
import * as userReducer from './index';
// import  from './index';

const rootReducer = combineReducers({
    ...userReducer
});

export default rootReducer;
