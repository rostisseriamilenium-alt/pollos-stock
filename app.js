// ===============================
// CONTROL DE POLLOS
// PARTE 1
// ===============================

// ---------- ESTADO ----------

let estado = JSON.parse(localStorage.getItem("estado")) || {

    iniciado:false,

    stock:0,

    stockInicial:0,

    cocina:{
        caliu:0,
        fritas:0,
        bravas:0,
        mediaCaliu:0,
        pan:0,
        canelones:0
    },

    historial:[]

};


// ---------- ELEMENTOS ----------

const stockActual=document.getElementById("stockActual");

const stockInicial=document.getElementById("stockInicial");

const btnIniciar=document.getElementById("btnIniciar");

const btnReten=document.getElementById("btnReten");


// ---------- GUARDAR ----------

function guardar(){

    localStorage.setItem(
        "estado",
        JSON.stringify(estado)
    );

}


// ---------- ACTUALIZAR ----------

function actualizarPantalla(){

    stockActual.innerText=estado.stock;

    document.getElementById("totalCaliu").innerText=
    estado.cocina.caliu;

    document.getElementById("totalFritas").innerText=
    estado.cocina.fritas;

    document.getElementById("totalBravas").innerText=
    estado.cocina.bravas;

    document.getElementById("totalMediaCaliu").innerText=
    estado.cocina.mediaCaliu;

    document.getElementById("totalPan").innerText=
    estado.cocina.pan;

    document.getElementById("totalCanelones").innerText=
    estado.cocina.canelones;

    if(estado.iniciado){

        stockInicial.disabled=true;

        btnIniciar.disabled=true;

    }

    guardar();

}


// ---------- INICIAR DIA ----------

btnIniciar.onclick=()=>{

    let cantidad=Number(stockInicial.value);

    if(cantidad<=0){

        alert("Introduce el stock inicial");

        return;

    }

    estado.stock=cantidad;

    estado.stockInicial=cantidad;

    estado.iniciado=true;

    actualizarPantalla();

};


// ---------- RETEN ----------

btnReten.onclick=()=>{

    if(!estado.iniciado){

        alert("Primero inicia el día");

        return;

    }

    let cantidad=prompt("¿Cuántos pollos entran de retén?");

    if(cantidad===null)return;

    cantidad=Number(cantidad);

    if(cantidad<=0)return;

    estado.stock+=cantidad;

    actualizarPantalla();

};


// ---------- CARGAR ----------

actualizarPantalla();
