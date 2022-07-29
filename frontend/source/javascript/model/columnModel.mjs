'use strict';

import {taskModel} from "./taskModel.mjs";

export class ColumnModel{
    #name
    #listaTask = new Array(taskModel);


    constructor(name) {
        this.#name = name;
        this._name = name;
    }

    get listaTask() {
        return this.#listaTask;
    }

    set listaTask(value) {
        this.#listaTask = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}