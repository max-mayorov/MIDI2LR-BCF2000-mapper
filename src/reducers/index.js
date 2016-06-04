import {combineReducers} from 'redux';
import commands from './commandReducer';
//import authors from './authorReducer';

const rootReducer = combineReducers({
  commands
});

export default rootReducer;
