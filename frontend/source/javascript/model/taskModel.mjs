'use strict';

import {logmodel} from  "../model/logModel.mjs";

export class taskModel{
    #name;
    #description;
    #deliveryDate;
    #logTask = new Array(logmodel);


    constructor(name, description, deliveryDate) {
        this.#name = name;
        this.#description = description;
        this.#deliveryDate = deliveryDate;

    }

    get logTask() {
        return this.#logTask;
    }

    set logTask(value) {
        this.#logTask = value;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get description() {
        return this.#description;
    }

    set description(value) {
        this.#description = value;
    }

    get deliveryDate() {
        return this.#deliveryDate;
    }

    set deliveryDate(value) {
        this.#deliveryDate = value;
    }
}
