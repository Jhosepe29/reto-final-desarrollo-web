'use strict';



export class ColumnModel{
    #name
    #listaTask


    constructor(name, listaTask) {
        this.#name = name;
        this.#listaTask = listaTask;
    }

    get listaTask() {
        return this.#listaTask;
    }

    set listaTask(value) {
        this.#listaTask = value;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }
}