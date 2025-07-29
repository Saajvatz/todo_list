export function header(){

    let header = document.createElement('header');

    let h1 = document.createElement('h1');
    h1.innerText = " Todo-List";
    header.appendChild(h1);
    
    let divTareas = document.createElement('div');
    divTareas.className = "div-tareas";

    let spanTexto = document.createElement('span');
    spanTexto.className = "texto-pendientes";
    spanTexto.innerText = "Pendientes";
    divTareas.appendChild(spanTexto);

    let spanNumero = document.createElement('span');
    spanNumero.className = "numero-tareas";
    spanNumero.innerText = "8";
    divTareas.appendChild(spanNumero);
    header.appendChild(divTareas);
    
    let divLogoUser = document.createElement('div');
    divLogoUser.className = "div-logo-user";
    divLogoUser.innerText = "👤";
    header.appendChild(divLogoUser);
    
    return header;


    let header = document.createElement('header')
    let h1 = document.createElement('h1');
    h1.innerText = "todo-list";
    header.appendChild(h1);

    let divTareas = document.createElement("div");
    divTareas.className = "div-tareas";
    header.appendChild(divTareas);

    let divLogoUsuario = document.createElement('div');
    divLogoUsuario.className = "div-logo-usuario";
    divLogoUsuario.innerText = "🤨";
    header.appendChild(divLogoUsuario);

    return header

}