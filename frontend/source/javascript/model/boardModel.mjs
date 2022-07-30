'use strict';


export class BoardModel{
    #name;
    #listColumns;


    constructor(name, listColumns) {
        this.#name = name;
        this.#listColumns = listColumns;
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
