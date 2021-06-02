module.export = class Board{
    constructor(rows,colums,model) {
        this.rows = rows;
        this.colums = colums;
        this.model = model;
        this.board = null;
    }

    generateBoard(){
        this.board = this.model.split('\n');
    }



}