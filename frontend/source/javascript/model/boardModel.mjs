'use strict';

import {columnModel} from "../model/columnModel.mjs";

export class BoardModel{
    #name;
    #listColumns = new Array(columnModel);


    constructor(name) {
        this.#name = name;

    }

    get listColumns() {
        return this.#listColumns;
    }

    set listColumns(value) {
        this.#listColumns = value;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }
}
