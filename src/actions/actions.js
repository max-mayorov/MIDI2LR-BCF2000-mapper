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

export function deletePreset(preset){
    return { type: types.DELETE_PRESET, preset };
}

export function renamePreset(preset, name){
    return { type: types.RENAME_PRESET, preset, name };
}

export function moveUpPreset(preset){
    return { type: types.MOVEUP_PRESET, preset };
}

export function moveDownPreset(preset){
    return { type: types.MOVEDOWN_PRESET, preset };
}