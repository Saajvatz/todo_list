import { tarea } from "../../moduls/itemTarea/itemTarea";



export function tareas(){
    let div = document.createElement('div')
    div.className = "tareas"

    tareasDb.forEach((e)=>{
        div.appendChild(tarea(e.titulo));
    })

    

    return div;
}