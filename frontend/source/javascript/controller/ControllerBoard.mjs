"use strict";

import {Config} from "../config/config.mjs";

import {boardServices} from "../model/services/boardService.mjs";

import {BoardView} from "../view/boardView.mjs";

class ControllerBoard{
    #urlBoard;
    #view ;


    constructor() {
        this.#urlBoard = Config.URLTRELLO;
        this.#view = new BoardView();
    }

    async init(){
        const servicioBoard = new boardServices(this.#urlBoard);
        const boards = await servicioBoard.getBoard();
        console.log(boards);
        this.#view.init(boards);
    }
}
export const instance = new ControllerBoard();
instance.init();