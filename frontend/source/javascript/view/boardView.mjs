'use strict';

import {Utility} from "../view/utility/Utility.mjs";

export class BoardView{
    #body

    constructor() {
        this.#body = document.querySelector('body');
    }

    agregar = Utility.getButton();
    section = Utility.getsection();
    p = Utility.getP();
    h1 =Utility.getTitle();

    hola(){window.location.href = 'http://localhost:63342/frontend/source/colunms.html?_ijt=744fmrd54if5srk92m694mfne1'
    }

    init(board){
        this.inicializar();
        this.section.append(this.p)
        board.forEach((board)=>{
            const buton = Utility.getButton();
            buton.textContent=board.name;
            buton.className ="boardButton";
            buton.addEventListener("click",()=>this.hola())
            this.section.append(buton);

        })
        this.#body.append(this.h1);
        this.#body.append(this.agregar);
        this.#body.append(this.section);

    }

    inicializar(){
        this.agregar.id = "ButtonAdd";
        this.agregar.textContent= "Agregar Board";
        this.p.textContent = "Boards";
        this.h1.textContent = "Krello";

    }



}