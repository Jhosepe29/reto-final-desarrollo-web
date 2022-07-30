"use strict";

import {Config} from "../config/config.mjs";

import {boardServices} from "../model/services/boardService.mjs";

import {ColumsView} from "../view/columsView.mjs";


class ControllerColumns{
    #urlBoard;
    #view ;

    constructor() {
        this.#urlBoard = Config.URLTRELLO;
        this.#view = new ColumsView();
    }

    async init(){
        const servicioBoard = new boardServices(this.#urlBoard);
        const boards = await servicioBoard.getBoard();
        console.log(boards);
        this.#view.init(boards);
    }
}
export const instance = new ControllerColumns();
instance.init();