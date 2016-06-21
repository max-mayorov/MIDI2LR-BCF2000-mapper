import delay from './delay';
import * as types from './commandTypes';
import * as groups from './commandGroups';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const commands = [
  {
    type: types.SLIDER,
    group: groups.BASIC,
    name: "exposure",
    text: "EXP"
  },
  {
    type: types.SLIDER,
    group: groups.BASIC,
    name: "contrast",
    text: "CONTR"
  },
  {
    type: types.BUTTON,
    group: groups.NAV,
    name: "nextImage",
    text: "Next"
  },
  {
    type: types.BUTTON,
    group: groups.NAV,
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
