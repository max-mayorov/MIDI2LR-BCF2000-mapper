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
        newState.presetIdx = newState.presets.length - 1;
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

    case types.DELETE_PRESET:
    {
      if(state.presets.length < 2)
        return state;

      const newState2 = Object.assign({}, state);
      newState2.presets = [...state.presets];
      newState2.presets.splice(newState2.presetIdx, 1);
      newState2.presetIdx--;
      return newState2;
    }
    case types.RENAME_PRESET:
    {
      const newState2 = Object.assign({}, state);
      newState2.presets = [...state.presets];
      newState2.presets[newState2.presetIdx] = Object.assign({}, 
        newState2.presets[newState2.presetIdx],
        {name: action.name});
      return newState2;
    }
    case types.MOVEUP_PRESET:
    {
      if(state.presets.length < 2)
        return state;
      if(state.presetIdx < 1)
        return state;

      const newState3 = Object.assign({}, state);
      newState3.presets = [...state.presets];
      const prev = newState3.presets.splice(newState3.presetIdx-1, 1);
      newState3.presets.splice(newState3.presetIdx, 0, prev[0]); 
      newState3.presetIdx--;
      return newState3;
    }
    case types.MOVEDOWN_PRESET:
    {
      if(state.presets.length < 2)
        return state;
      if(state.presetIdx >= state.presets.length-1)
        return state;

      const newState4 = Object.assign({}, state);
      newState4.presets = [...state.presets];
      const next = newState4.presets.splice(newState4.presetIdx+1, 1);
      newState4.presets.splice(newState4.presetIdx, 0, next[0]); 
      newState4.presetIdx++;
      return newState4;      
    }



    

    default:
      return state;
  }
} 