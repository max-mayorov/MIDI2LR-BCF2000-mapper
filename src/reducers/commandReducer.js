import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function commandReducer(state = initialState.commands, action) {
  switch (action.type) {
    case types.LOAD_COMMANDS:
      return action.commands;

    case types.USE_COMMAND:
    {
      let newState = [...state];
      newState.splice(
        newState.findIndex(item => item.name == action.command.name), 
        1, 
        Object.assign(
          {}, 
          action.command, 
          {usageCount: typeof(action.command.usageCount)==='undefined' 
              ? 1 
              : action.command.usageCount+1}
        ));
      return newState;
    }
     
    default:
      return state;
  }
} 