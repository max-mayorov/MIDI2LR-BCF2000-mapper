import {combineReducers} from 'redux';
import commands from './commandReducer';
import controls from './controlReducer';
import controlPreset from './controlPresetReducer';
//import authors from './authorReducer';

const rootReducer = combineReducers({
  commands,
  controls,
  controlPreset
});

export default rootReducer;
