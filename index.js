const {LIVE, DEAD} = require("./models/states");
const Board = require("./models/Board");

const rows = 4;
const columns = 8;
const modelo = "........\n....*...\n...**...\n........"

const board = new Board(rows, columns, modelo);
let tablero = board.printBoard();
console.log(tablero);
board.generateNewGeneration();
tablero = board.printBoard();
console.log(tablero);

