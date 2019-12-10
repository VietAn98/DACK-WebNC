import { combineReducers } from 'redux';
import * as rtReducer from './index';
import * as rtSkill from './skillReducer';


const rootReducer = combineReducers({
  ...rtReducer,
  ...rtSkill,
});

export default rootReducer;
