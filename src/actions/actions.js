import * as types from './actionTypes';
import controlsApi from '../api/controls';
import commandsApi from '../api/commands';

// COMMANDS
export function loadCommands() {
    return  { type: types.LOAD_COMMANDS, commands: commandsApi.getAllCommands()}; 
}

export function useCommand(command) {
    return { type: types.USE_COMMAND, command: command};
}

// CONTROLS
export function loadControls() {
    return  { type: types.LOAD_CONTROLS, controls: controlsApi.getAllControls()}; 
}

export function linkCommandToControl(command, control) {
    return  { 
        type: types.LINK_COMMAND_TO_CONTROL,
        control: control,
        command: command
    }; 
}

// PRESETS
export function loadPresets() {
    return { type: types.LOAD_PRESETS, presets: controlsApi.getInitPresets()};
}

export function selectPreset(preset){
    return { type: types.SELECT_PRESET, preset };
}

export function addPreset(name){
    return {type: types.ADD_PRESET, name};
}

export function deletePreset(){
    return { type: types.DELETE_PRESET };
}

export function renamePreset(name){
    return { type: types.RENAME_PRESET, name };
}

export function moveUpPreset(){
    return { type: types.MOVEUP_PRESET };
}

export function moveDownPreset(){
    return { type: types.MOVEDOWN_PRESET };
}