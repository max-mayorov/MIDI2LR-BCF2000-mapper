import delay from './delay';
import * as types from './commandTypes';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const commands = [
  {
    type: types.SLIDER,
    name: "exposure",
    text: "EXP"
  },
  {
    type: types.SLIDER,
    name: "contrast",
    text: "CONTR"
  },
  {
    type: types.BUTTON,
    name: "nextImage",
    text: "Next"
  },
  {
    type: types.BUTTON,
    name: "prevImage",
    text: "Prev"
  }
];


class CommandsApi {
  static getAllCommands() {
    return commands;
  }
}

export default CommandsApi;
