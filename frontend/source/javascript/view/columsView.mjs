'use strict';
import {Utility} from "./utility/Utility.mjs";

export class ColumsView{
    #body


    constructor() {
        this.#body = document.querySelector('body');
    }

    section = Utility.getsection();
    divhacer = Utility.getDiv();
    divhaciendo = Utility.getDiv();
    divHecho = Utility.getDiv();
    h2 = Utility.getH2();

    inicializar(){
        this.divhacer.id="porHacer";
        this.divhaciendo.id = "Haciendo";
        this.divHecho.id = "Hecho";
        this.h2.textContent = "Por hacer";
        this.divhacer.append(this.h2);
        this.h2.textContent = "Haciendo";
        this.divhaciendo.append(this.h2);
        this.h2.textContent = "Hecho";
        this.divHecho.append(this.h2);

    }

    init(data){
        this.inicializar();

       data.forEach((data)=>{
           let index = 0;
            const buton = Utility.getButton();
            buton.textContent="task prueba"/*data[0].listcolumns[0].listTask[0].name;*/
            buton.className ="boton1";
            switch (index){
                case 0:
                    this.divhacer.append(buton);
                    this.section.append(this.divhacer);
                break;
                case 1:this.divhaciendo.append(buton);
                    this.section.append(this.divhaciendo);
                break;
                case 3: this.divHecho.append(buton);
                    this.section.append(this.divHecho);
                break;
            }
            console.log(this.section)

            index++;

        })
        this.#body.append(this.section);

    }

}
