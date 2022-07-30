
import {BoardModel} from "../boardModel.mjs";

export class boardServices{
    #url;

    constructor(url) {
        this.#url = url;
    }

     jsonPrueba = {
        "data":[
            {
                name: "boardPrueba",listcolumns:[{name:"porhacer",listTask:[{name:"hacerEjecicio",description:"",deliveryDate:"2021:07:30:12:43"}]},
                    {name:"Haciendo",listTask:[{name:"limpiar",description:"",deliveryDate:"2021:07:29:12:48"}]}
                ]
        },
            {
                name: "boardPrueba2",listcolumns:[{name:"porhacer",listTask:[{name:"hacerEjecicio",description:"",deliveryDate:"2021:07:30:12:43"}]},
                    {name:"Haciendo",listTask:[{name:"limpiar",description:"",deliveryDate:"2021:07:29:12:48"}]}
                ]
            }

        ]

    }
    async getBoard() {
        const boardData = this.jsonPrueba//await this.#getData();
        const arrayBoard = new Array();
        boardData.data.forEach((board) => {
            arrayBoard.push(new BoardModel(board.name, board.listcolumns));
        });
        return arrayBoard;
    }

    async #getData(){
        return fetch(`${this.#url}/api/v1/board`).then(response =>response.json());
    }
}