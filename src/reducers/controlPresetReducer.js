import * as types from '../actions/actionTypes';
import initialState from './initialState';
import controlsApi from '../api/controls';

export default function presetsReducer(state = initialState.controlPreset, action) {
  switch (action.type) {
    case types.LOAD_PRESETS:
      return {
        presets: action.presets,
        presetIdx: 0
      };

    case types.ADD_PRESET:
    {
        const newState = Object.assign({}, state);
        newState.presets = [...state.presets];
        newState.presets.push({
            name: action.name,
            controls: Object.assign({}, controlsApi.getAllControls())
        }); 
        return newState;
    }

    case types.SELECT_PRESET:
    {
        return  Object.assign({}, state, {
          presetIdx: action.preset}
        );
    }

    case types.LINK_COMMAND_TO_CONTROL:
    {
      const newState2 = Object.assign({}, state);

      newState2.presets = [...state.presets];

      const controls = Object.assign({}, 
        newState2.presets[newState2.presetIdx].controls);

      //TODO: Get rid of this hack with propName
      const propName = action.control.type.toLowerCase() + "s";
      controls[propName] = [...controls[propName]];
      
      controls[propName].splice(
        controls[propName].findIndex(item => item.type == action.control.type 
                                  && item.id == action.control.id), 
        1, 
        Object.assign(
          {}, 
          action.control, 
          {command: action.command}
        ));

      newState2.presets[newState2.presetIdx].controls = controls;

      return newState2;
    }


    

    default:
      return state;
  }
} 