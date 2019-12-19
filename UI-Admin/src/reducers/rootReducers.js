import { combineReducers } from 'redux';
import * as rtReducer from './index';
import * as rtSkill from './skillReducer';
import * as rtContract from './contractReducers';
import * as rtComplaint from './complaint'


const rootReducer = combineReducers({
  ...rtReducer,
  ...rtSkill,
  ...rtContract,
  ...rtComplaint,
});

export default rootReducer;
