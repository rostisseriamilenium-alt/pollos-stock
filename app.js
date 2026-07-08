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

// ===============================
// PARTE 2
// Cantidades y venta rápida
// ===============================

// ----- CANTIDADES -----

let cantidades = {

    pollo:1,
    medio:1,
    pack2:1,
    pack3:1,
    pack1:1

};

function actualizarCantidades(){

    document.getElementById("polloCantidad").innerText=cantidades.pollo;
    document.getElementById("medioCantidad").innerText=cantidades.medio;

    document.getElementById("pack2Cantidad").innerText=cantidades.pack2;
    document.getElementById("pack3Cantidad").innerText=cantidades.pack3;
    document.getElementById("pack1Cantidad").innerText=cantidades.pack1;

}

actualizarCantidades();


// BOTONES + Y -

document.querySelectorAll(".mas").forEach(btn=>{

    btn.onclick=()=>{

        let id=btn.dataset.target;

        switch(id){

            case "polloCantidad":
                if(cantidades.pollo<6) cantidades.pollo++;
            break;

            case "medioCantidad":
                if(cantidades.medio<6) cantidades.medio++;
            break;

            case "pack2Cantidad":
                if(cantidades.pack2<6) cantidades.pack2++;
            break;

            case "pack3Cantidad":
                if(cantidades.pack3<6) cantidades.pack3++;
            break;

            case "pack1Cantidad":
                if(cantidades.pack1<6) cantidades.pack1++;
            break;

        }

        actualizarCantidades();

    }

});

document.querySelectorAll(".menos").forEach(btn=>{

    btn.onclick=()=>{

        let id=btn.dataset.target;

        switch(id){

            case "polloCantidad":
                if(cantidades.pollo>1) cantidades.pollo--;
            break;

            case "medioCantidad":
                if(cantidades.medio>1) cantidades.medio--;
            break;

            case "pack2Cantidad":
                if(cantidades.pack2>1) cantidades.pack2--;
            break;

            case "pack3Cantidad":
                if(cantidades.pack3>1) cantidades.pack3--;
            break;

            case "pack1Cantidad":
                if(cantidades.pack1>1) cantidades.pack1--;
            break;

        }

        actualizarCantidades();

    }

});


// ===============================
// VENDER POLLOS
// ===============================

document.getElementById("venderPollo").onclick=()=>{

    if(!estado.iniciado){

        alert("Primero inicia el día");

        return;

    }

    let cantidad=cantidades.pollo;

    if(estado.stock<cantidad){

        alert("No hay suficientes pollos");

        return;

    }

    estado.historial.push(JSON.parse(JSON.stringify(estado)));

    estado.stock-=cantidad;

    actualizarPantalla();

};


// ===============================
// VENDER MEDIOS
// ===============================

document.getElementById("venderMedio").onclick=()=>{

    if(!estado.iniciado){

        alert("Primero inicia el día");

        return;

    }

    let cantidad=cantidades.medio*0.5;

    if(estado.stock<cantidad){

        alert("No hay suficientes pollos");

        return;

    }

    estado.historial.push(JSON.parse(JSON.stringify(estado)));

    estado.stock-=cantidad;

    actualizarPantalla();

};

// ===============================
// PARTE 3
// PACK 2 - PACK 3
// ===============================

let packPendiente = null;

// Elementos del modal
const selectorPatatas=document.getElementById("selectorPatatas");

const btnCaliu = document.getElementById("btnCaliu");
const btnFritas = document.getElementById("btnFritas");
const btnBravas = document.getElementById("btnBravas");

// -------- ABRIR MODAL --------

document.getElementById("pack2").onclick = () => {

    if(!estado.iniciado){
        alert("Primero inicia el día");
        return;
    }

    if(estado.stock < cantidades.pack2){
        alert("No hay suficientes pollos");
        return;
    }

    packPendiente = "pack2";

    selectorPatatas.classList.remove("oculto");

};
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

// ===============================
// PARTE 2
// Cantidades y venta rápida
// ===============================

// ----- CANTIDADES -----

let cantidades = {

    pollo:1,
    medio:1,
    pack2:1,
    pack3:1,
    pack1:1

};

function actualizarCantidades(){

    document.getElementById("polloCantidad").innerText=cantidades.pollo;
    document.getElementById("medioCantidad").innerText=cantidades.medio;

    document.getElementById("pack2Cantidad").innerText=cantidades.pack2;
    document.getElementById("pack3Cantidad").innerText=cantidades.pack3;
    document.getElementById("pack1Cantidad").innerText=cantidades.pack1;

}

actualizarCantidades();


// BOTONES + Y -

document.querySelectorAll(".mas").forEach(btn=>{

    btn.onclick=()=>{

        let id=btn.dataset.target;

        switch(id){

            case "polloCantidad":
                if(cantidades.pollo<6) cantidades.pollo++;
            break;

            case "medioCantidad":
                if(cantidades.medio<6) cantidades.medio++;
            break;

            case "pack2Cantidad":
                if(cantidades.pack2<6) cantidades.pack2++;
            break;

            case "pack3Cantidad":
                if(cantidades.pack3<6) cantidades.pack3++;
            break;

            case "pack1Cantidad":
                if(cantidades.pack1<6) cantidades.pack1++;
            break;

        }

        actualizarCantidades();

    }

});

document.querySelectorAll(".menos").forEach(btn=>{

    btn.onclick=()=>{

        let id=btn.dataset.target;

        switch(id){

            case "polloCantidad":
                if(cantidades.pollo>1) cantidades.pollo--;
            break;

            case "medioCantidad":
                if(cantidades.medio>1) cantidades.medio--;
            break;

            case "pack2Cantidad":
                if(cantidades.pack2>1) cantidades.pack2--;
            break;

            case "pack3Cantidad":
                if(cantidades.pack3>1) cantidades.pack3--;
            break;

            case "pack1Cantidad":
                if(cantidades.pack1>1) cantidades.pack1--;
            break;

        }

        actualizarCantidades();

    }

});


// ===============================
// VENDER POLLOS
// ===============================

document.getElementById("venderPollo").onclick=()=>{

    if(!estado.iniciado){

        alert("Primero inicia el día");

        return;

    }

    let cantidad=cantidades.pollo;

    if(estado.stock<cantidad){

        alert("No hay suficientes pollos");

        return;

    }

    estado.historial.push(JSON.parse(JSON.stringify(estado)));

    estado.stock-=cantidad;

    actualizarPantalla();

};


// ===============================
// VENDER MEDIOS
// ===============================

document.getElementById("venderMedio").onclick=()=>{

    if(!estado.iniciado){

        alert("Primero inicia el día");

        return;

    }

    let cantidad=cantidades.medio*0.5;

    if(estado.stock<cantidad){

        alert("No hay suficientes pollos");

        return;

    }

    estado.historial.push(JSON.parse(JSON.stringify(estado)));

    estado.stock-=cantidad;

    actualizarPantalla();

};

// ===============================
// PARTE 3
// PACK 2 - PACK 3
// ===============================

let packPendiente = null;

// Elementos del modal
const selectorPatatas=document.getElementById("selectorPatatas");

const btnCaliu = document.getElementById("btnCaliu");
const btnFritas = document.getElementById("btnFritas");
const btnBravas = document.getElementById("btnBravas");

// -------- ABRIR MODAL --------

document.getElementById("pack2").onclick = () => {

    if(!estado.iniciado){
        alert("Primero inicia el día");
        return;
    }

    if(estado.stock < cantidades.pack2){
        alert("No hay suficientes pollos");
        return;
    }

    packPendiente = "pack2";

    selectorPatatas.classList.remove("oculto");

};


document.getElementById("pack3").onclick = () => {

    if(!estado.iniciado){
        alert("Primero inicia el día");
        return;
    }

    if(estado.stock < cantidades.pack3){
        alert("No hay suficientes pollos");
        return;
    }

    packPendiente = "pack3";

    selectorPatatas.classList.add("oculto");

};

// ---------- ELEGIR PATATAS ----------

btnCaliu.onclick = ()=> procesarPack("caliu");

btnFritas.onclick = ()=> procesarPack("fritas");

btnBravas.onclick = ()=> procesarPack("bravas");


// ---------- PROCESAR ----------

function procesarPack(tipoPatata){

    estado.historial.push(
        JSON.parse(JSON.stringify(estado))
    );

    if(packPendiente==="pack2"){

        let c = cantidades.pack2;

        estado.stock -= c;

        estado.cocina.pan += c;

        estado.cocina[tipoPatata] += c;

    }

    if(packPendiente==="pack3"){

        let c = cantidades.pack3;

        estado.stock -= c;

        estado.cocina.pan += c;

        estado.cocina[tipoPatata] += c;

        estado.cocina.canelones += c;

    }

    selectorPatatas.classList.add("oculto");

    actualizarPantalla();

}
// ===============================
// PARTE 4
// PACK 1/2
// ===============================

document.getElementById("pack1").onclick=()=>{

    if(!estado.iniciado){

        alert("Primero inicia el día");

        return;

    }

    let cantidad=cantidades.pack1;

    let pollos=cantidad*0.5;

    if(estado.stock<pollos){

        alert("No hay suficientes pollos");

        return;

    }

    estado.historial.push(
        JSON.parse(JSON.stringify(estado))
    );

    estado.stock-=pollos;

    estado.cocina.mediaCaliu+=pollos;

    actualizarPantalla();

};
// ===============================
// PARTE 5
// DESHACER Y REINICIAR
// ===============================

// ---------- DESHACER ----------

document.getElementById("deshacer").onclick = () => {

    if (estado.historial.length === 0) {
        alert("No hay ninguna venta para deshacer");
        return;
    }

    estado = estado.historial.pop();

    actualizarPantalla();

};


// ---------- REINICIAR DÍA ----------

document.getElementById("reiniciar").onclick = () => {

    if (!confirm("¿Seguro que quieres reiniciar el día?")) {
        return;
    }

    localStorage.removeItem("estado");

    estado = {

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

    stockInicial.disabled=false;
    btnIniciar.disabled=false;
    stockInicial.value="";

    actualizarPantalla();

};

// ---------- CANCELAR ----------

cerrarModal.onclick = () => {

    modalPatatas.classList.add("oculto");

};


// ---------- ELEGIR PATATAS ----------

btnCaliu.onclick = ()=> procesarPack("caliu");

btnFritas.onclick = ()=> procesarPack("fritas");

btnBravas.onclick = ()=> procesarPack("bravas");


// ---------- PROCESAR ----------

function procesarPack(tipoPatata){

    estado.historial.push(
        JSON.parse(JSON.stringify(estado))
    );

    if(packPendiente==="pack2"){

        let c = cantidades.pack2;

        estado.stock -= c;

        estado.cocina.pan += c;

        estado.cocina[tipoPatata] += c;

    }

    if(packPendiente==="pack3"){

        let c = cantidades.pack3;

        estado.stock -= c;

        estado.cocina.pan += c;

        estado.cocina[tipoPatata] += c;

        estado.cocina.canelones += c;

    }

    modalPatatas.classList.add("oculto");

    actualizarPantalla();

}
// ===============================
// PARTE 5
// DESHACER Y REINICIAR
// ===============================

// ---------- DESHACER ----------

document.getElementById("deshacer").onclick = () => {

    if (estado.historial.length === 0) {
        alert("No hay ninguna venta para deshacer");
        return;
    }

    estado = estado.historial.pop();

    actualizarPantalla();

};


// ---------- REINICIAR DÍA ----------

document.getElementById("reiniciar").onclick = () => {

    if (!confirm("¿Seguro que quieres reiniciar el día?")) {
        return;
    }

    localStorage.removeItem("estado");

    estado = {

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

    stockInicial.disabled=false;
    btnIniciar.disabled=false;
    stockInicial.value="";

    actualizarPantalla();

};
