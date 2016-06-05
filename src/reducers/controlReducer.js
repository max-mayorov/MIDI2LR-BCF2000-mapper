import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function controlReducer(state = initialState.controls, action) {
  switch (action.type) {
    case types.LOAD_CONTROLS:
      return action.controls;

    default:
      return state;
  }
} 