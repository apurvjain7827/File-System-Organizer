const helpModule = require("../commands/help");
const organizeModule = require("../commands/organize");
const treeModule = require("../commands/tree");

let input = process.argv.slice(2);

let inputArr = input; // [organzie , folderpath]

let command = inputArr[0];

switch (command) {
  case "tree":
    treeModule.treeFnKey(inputArr[1]);
    break;
  case "organize":
    organizeModule.organizeFnKey(inputArr[1]);
    break;
  case "help":
    helpModule.helpFnKey();
    break;
  default:
    console.log("Please enter a Valid command");
    break;
}