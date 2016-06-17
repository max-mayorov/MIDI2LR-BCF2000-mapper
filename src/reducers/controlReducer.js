import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function controlReducer(state = initialState.controls, action) {
  switch (action.type) {
    case types.LOAD_CONTROLS:
      return action.controls;

    case types.LINK_COMMAND_TO_CONTROL:
    {
      let newState = Object.assign({}, state);

      var propName = action.control.type.toLowerCase() + "s";
      //TODO: Get rid of this hack 
      newState[propName] = [...newState[propName]];
      
      newState[propName].splice(
        newState[propName].findIndex(item => item.type == action.control.type 
                                  && item.id == action.control.id), 
        1, 
        Object.assign(
          {}, 
          action.control, 
          {command: action.command}
        ));
      return newState;
    }


    default:
      return state;
  }
} 