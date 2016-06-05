import {combineReducers} from 'redux';
import commands from './commandReducer';
import controls from './controlReducer';
//import authors from './authorReducer';

const rootReducer = combineReducers({
  commands,
  controls
});

export default rootReducer;
