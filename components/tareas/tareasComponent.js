import { tarea } from "../../moduls/itemTarea/itemTarea";

let tareas[ 
    {titulo: "Hola"},
    {titulo: "Hola2"},
    {titulo: "Hola3"}
];

export function tareas(){
    let div = document.createElement('div')
    div.className = "tareas"

    

    return div;
}