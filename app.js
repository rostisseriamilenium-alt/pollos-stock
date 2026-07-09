// ===== CONTROL DE STOCK =====

let estado = JSON.parse(localStorage.getItem("estado")) || {
    iniciado: false,
    stock: 0,

    cocina:{
        caliu:0,
        fritas:0,
        bravas:0,
        pan:0,
        canelones:0,
        pack1:0
    }
};

const stockActual = document.getElementById("stockActual");
const stockInicial = document.getElementById("stockInicial");
const btnIniciar = document.getElementById("btnIniciar");
const btnReten = document.getElementById("btnReten");
// =======================
// BOTONES VENTA
// =======================

const btnPollo = document.getElementById("venderPollo");
const btnMedio = document.getElementById("venderMedio");

let cantidadPollo = 1;
let cantidadMedio = 1;

document.getElementById("polloCantidad").textContent = cantidadPollo;
document.getElementById("medioCantidad").textContent = cantidadMedio;

function guardar() {
    localStorage.setItem("estado", JSON.stringify(estado));
}
function actualizar() {

    stockActual.textContent = estado.stock;

    document.getElementById("totalCaliu").textContent = estado.cocina.caliu;
    document.getElementById("totalFritas").textContent = estado.cocina.fritas;
    document.getElementById("totalBravas").textContent = estado.cocina.bravas;
    document.getElementById("totalPan").textContent = estado.cocina.pan;
    document.getElementById("totalCanelones").textContent = estado.cocina.canelones;
    document.getElementById("totalMediaCaliu").textContent = estado.cocina.pack1;

    stockInicial.disabled = estado.iniciado;
    btnIniciar.disabled = estado.iniciado;

    guardar();
}

btnIniciar.addEventListener("click", () => {

    const cantidad = parseInt(stockInicial.value);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Introduce el stock inicial");
        return;
    }

    estado.stock = cantidad;
    estado.iniciado = true;

    actualizar();

});

btnReten.addEventListener("click", () => {

    if (!estado.iniciado) {
        alert("Primero inicia el día");
        return;
    }

    const txt = prompt("¿Cuántos pollos añades?");

    if (txt === null) return;

    const cantidad = parseInt(txt);

    if (isNaN(cantidad) || cantidad <= 0) return;

    estado.stock += cantidad;

    actualizar();

});

document.getElementById("reiniciar").addEventListener("click", () => {

    if (!confirm("¿Reiniciar día?")) return;

    localStorage.removeItem("estado");

 estado = {
    iniciado:false,
    stock:0,

    cocina:{
        caliu:0,
        fritas:0,
        bravas:0,
        pan:0,
        canelones:0,
        pack1:0
    }
};

    stockInicial.value = "";

    actualizar();

});

actualizar();
// =======================
// BOTONES + Y -
// =======================

document.querySelectorAll(".mas").forEach(btn=>{

    btn.onclick=()=>{

        if(btn.dataset.target==="polloCantidad"){

            if(cantidadPollo<6){

                cantidadPollo++;

                document.getElementById("polloCantidad").textContent=cantidadPollo;

            }

        }

        if(btn.dataset.target==="medioCantidad"){

            if(cantidadMedio<6){

                cantidadMedio++;

                document.getElementById("medioCantidad").textContent=cantidadMedio;

            }

        }

    }

});


document.querySelectorAll(".menos").forEach(btn=>{

    btn.onclick=()=>{

        if(btn.dataset.target==="polloCantidad"){

            if(cantidadPollo>1){

                cantidadPollo--;

                document.getElementById("polloCantidad").textContent=cantidadPollo;

            }

        }

        if(btn.dataset.target==="medioCantidad"){

            if(cantidadMedio>1){

                cantidadMedio--;

                document.getElementById("medioCantidad").textContent=cantidadMedio;

            }

        }

    }

});
