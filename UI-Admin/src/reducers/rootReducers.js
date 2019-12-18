import { combineReducers } from 'redux';
import * as rtReducer from './index';
import * as rtSkill from './skillReducer';
import * as rtContract from './contractReducers';


const rootReducer = combineReducers({
  ...rtReducer,
  ...rtSkill,
  ...rtContract,
});

export default rootReducer;
