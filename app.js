// ===== VARIABLES =====

let stock = Number(localStorage.getItem("stock")) || 0;

let cocina = JSON.parse(localStorage.getItem("cocina")) || {
    caliu:0,
    fritas:0,
    bravas:0,
    panes:0,
    canelones:0
};

// ===== ELEMENTOS =====

const stockActual=document.getElementById("stockActual");
const stockInicial=document.getElementById("stockInicial");

const btnAgregar=document.getElementById("btnAgregar");

const polloEntero=document.getElementById("polloEntero");
const medioPollo=document.getElementById("medioPollo");

// ===== ACTUALIZAR PANTALLA =====

function actualizar(){

    stockActual.innerText=stock;

    document.getElementById("caliu").innerText=cocina.caliu;
    document.getElementById("fritas").innerText=cocina.fritas;
    document.getElementById("bravas").innerText=cocina.bravas;
    document.getElementById("panes").innerText=cocina.panes;
    document.getElementById("canelones").innerText=cocina.canelones;

    localStorage.setItem("stock",stock);
    localStorage.setItem("cocina",JSON.stringify(cocina));

}

// ===== AÑADIR STOCK =====

btnAgregar.onclick=()=>{

    let cantidad=Number(stockInicial.value);

    if(cantidad<=0) return;

    stock+=cantidad;

    stockInicial.value="";

    actualizar();

};

// ===== POLLO ENTERO =====

polloEntero.onclick=()=>{

    if(stock>=1){

        stock-=1;

        actualizar();

    }

};

// ===== MEDIO POLLO =====

medioPollo.onclick=()=>{

    if(stock>=0.5){

        stock-=0.5;

        actualizar();

    }

};

actualizar();
