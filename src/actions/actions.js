import * as types from './actionTypes';
import controlsApi from '../api/controls';
import commandsApi from '../api/commands';


export function loadCommands() {
    return  { type: types.LOAD_COMMANDS, commands: commandsApi.getAllCommands()}; 
}


export function useCommand(command) {
    return { type: types.USE_COMMAND, command: command};
}

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
