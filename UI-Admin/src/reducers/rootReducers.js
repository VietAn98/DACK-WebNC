import { combineReducers } from 'redux';
import * as rtReducer from './index';
import * as rtSkill from './skillReducer';
import * as rtContract from './contractReducers';
import * as rtComplaint from './complaint';
import * as rdStatistics from './statisticsReducers';


const rootReducer = combineReducers({
  ...rtReducer,
  ...rtSkill,
  ...rtContract,
  ...rtComplaint,
  ...rdStatistics
});

export default rootReducer;
