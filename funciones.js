function ocultar(n){
    elemento = document.getElementById(n)
    elemento.style.display = "none"
}
function mostrar(n){
    elemento = document.getElementById(n)
    elemento.style.display = "block"
}

function crearCookie(){
ocultar('form');
auto()
mostrar('tarjetas')
const d = new Date();
d.setTime(d.getTime()+(10*1000));
let expira = d.toUTCString()
usuario = document.getElementById("usuario1").value
contra = document.getElementById("contra1").value
document.cookie = "usuario="+usuario+";expires="+expira+";path=/";
document.cookie = "contra="+contra+";expires="+expira+";path=/";
}

window.onload = function revisarCookie(){
    cadena = document.cookie;
    if (cadena!=''){
        ocultar('form');
        mostrar('tarjetas');
    }
}

function auto(){
    altura = document.getElementById("alt");
    peso = document.getElementById("peso");
    tiempo = document.getElementById("tiempo");

    altura.value = sessionStorage.getItem("altura")
    peso.value = sessionStorage.getItem("peso")
    tiempo.value = sessionStorage.getItem("tiempo")

    altura2 = document.getElementById("alt2");
    peso2 = document.getElementById("peso2");
    tiempo2 = document.getElementById("tiempo2");

    altura2.value = localStorage.getItem("altura")
    peso2.value = localStorage.getItem("peso")
    tiempo2.value = localStorage.getItem("tiempo")
}

function sesion(){
    altura = document.getElementById("alt").value;
    peso = document.getElementById("peso").value;
    tiempo = document.getElementById("tiempo").value;

    sessionStorage.setItem("altura",altura);
    sessionStorage.setItem("peso",peso);
    sessionStorage.setItem("tiempo",tiempo);

    localStorage.setItem("altura",altura);
    localStorage.setItem("peso",peso);
    localStorage.setItem("tiempo",tiempo);
}


function imprimir(cadena){
    console.log(cadena)
}