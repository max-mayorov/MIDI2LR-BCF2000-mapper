import * as types from './actionTypes';
import controlsApi from '../api/controls';

export function loadControls() {
    return  { type: types.LOAD_CONTROLS, controls: controlsApi.getAllControls()}; 
}
