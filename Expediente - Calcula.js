function sin() {
 const display = document.getElementById('display');
 display.value = Math.sin(display.value * Math.PI / 180);
}

function cos() {
 const display = document.getElementById('display');
 display.value = Math.cos(display.value * Math.PI / 180);
}

function raiz() {
 const display = document.getElementById('display');
 display.value = Math.sqrt(display.value);
}

function abs() {
 const display = document.getElementById('display');
 display.value = Math.abs(display.value);
}

function potencia() {
 const display = document.getElementById('display');
 const valor = prompt('Ingrese el exponente');
 display.value = Math.pow(display.value, valor);
}

function porcentaje() {
 const display = document.getElementById('display');
 display.value = display.value / 100;
}

function limpiar() {
 const display = document.getElementById('display');
 display.value = 0;
}

function calcular() {
 const display = document.getElementById('display');
 display.value = eval(display.value);
}


function volverAlMenu() {
 if (confirm("¿Estas seguro de que desea volver al menu?")) {
 window.location.href = 'MenuPersonal.html';
 }
}

const botonVolverMenu = document.createElement('button');
botonVolverMenu.textContent = 'Volver al menu';
botonVolverMenu.onclick = volverAlMenu;

document.body.appendChild(botonVolverMenu);
