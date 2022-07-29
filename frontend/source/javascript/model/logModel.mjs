'use strict';

export class LogModel{
    #createAt
    #curret
    #previus

    constructor(createAt, curret, previus) {
        this.#createAt = createAt;
        this.#curret = curret;
        this.#previus = previus;

    }

    get createAt() {
        return this.#createAt;
    }

    set createAt(value) {
        this.#createAt = value;
    }

    get curret() {
        return this.#curret;
    }

    set curret(value) {
        this.#curret = value;
    }

    get previus() {
        return this.#previus;
    }

    set previus(value) {
        this.#previus = value;
    }
}