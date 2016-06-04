import * as types from './actionTypes';
import commandsApi from '../api/commands';

export function loadCommands() {
    return  { type: types.LOAD_COMMANDS, commands: commandsApi.getAllCommands()}; 
}

export function useCommand(command) {
    return { type: types.USE_COMMAND, command: command};
}