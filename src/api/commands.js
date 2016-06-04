import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const commands = [
  {
    type: "slider",
    name: "exposure",
    text: "EXP"
  },
  {
    type: "slider",
    name: "contrast",
    text: "CONTR"
  },
  {
    type: "button",
    name: "nextImage",
    text: "Next"
  },
  {
    type: "button",
    name: "prevImage",
    text: "Prev"
  },
];


class CommandsApi {
  static getAllCommands() {
    return commands;
  }
}

export default CommandsApi;
