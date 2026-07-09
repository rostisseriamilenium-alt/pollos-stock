// ======================================
// APP.JS - PARTE 1
// Estado + Stock + Venta rápida
// ======================================

// ---------- ESTADO ----------

let estado = JSON.parse(localStorage.getItem("estado")) || {
    iniciado: false,
    stock: 0,

    cocina: {
        caliu: 0,
        fritas: 0,
        bravas: 0,
        pan: 0,
        canelones: 0,
        pack1: 0
    },

    historial: []
};

// ---------- ELEMENTOS ----------

const stockActual = document.getElementById("stockActual");
const stockInicial = document.getElementById("stockInicial");
const btnIniciar = document.getElementById("btnIniciar");
const btnReten = document.getElementById("btnReten");

// ---------- CANTIDADES ----------

let cantidades = {
    pollo: 1,
    medio: 1,
    pack2: 1,
    pack3: 1,
    pack1: 1
};

// ---------- GUARDAR ----------

function guardar() {
    localStorage.setItem("estado", JSON.stringify(estado));
}

// ---------- ACTUALIZAR ----------

function actualizar() {

    stockActual.textContent = estado.stock;

    document.getElementById("polloCantidad").textContent = cantidades.pollo;
    document.getElementById("medioCantidad").textContent = cantidades.medio;
    document.getElementById("pack2Cantidad").textContent = cantidades.pack2;
    document.getElementById("pack3Cantidad").textContent = cantidades.pack3;
    document.getElementById("pack1Cantidad").textContent = cantidades.pack1;

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

// ---------- INICIAR DÍA ----------

btnIniciar.onclick = () => {

    const cantidad = Number(stockInicial.value);

    if (cantidad <= 0) {
        alert("Introduce el stock inicial");
        return;
    }

    estado.stock = cantidad;
    estado.iniciado = true;

    actualizar();

};

// ---------- RETÉN ----------

btnReten.onclick = () => {

    if (!estado.iniciado) {
        alert("Primero inicia el día");
        return;
    }

    let cantidad = prompt("¿Cuántos pollos entran de retén?");

    if (cantidad === null) return;

    cantidad = Number(cantidad);

    if (cantidad <= 0) return;

    estado.stock += cantidad;

    actualizar();

};

// ---------- BOTONES + / - ----------

document.querySelectorAll(".mas").forEach(btn => {

    btn.onclick = () => {

        const id = btn.dataset.target;

        if (id === "polloCantidad" && cantidades.pollo < 6) cantidades.pollo++;
        if (id === "medioCantidad" && cantidades.medio < 6) cantidades.medio++;
        if (id === "pack2Cantidad" && cantidades.pack2 < 6) cantidades.pack2++;
        if (id === "pack3Cantidad" && cantidades.pack3 < 6) cantidades.pack3++;
        if (id === "pack1Cantidad" && cantidades.pack1 < 6) cantidades.pack1++;

        actualizar();

    };

});

document.querySelectorAll(".menos").forEach(btn => {

    btn.onclick = () => {

        const id = btn.dataset.target;

        if (id === "polloCantidad" && cantidades.pollo > 1) cantidades.pollo--;
        if (id === "medioCantidad" && cantidades.medio > 1) cantidades.medio--;
        if (id === "pack2Cantidad" && cantidades.pack2 > 1) cantidades.pack2--;
        if (id === "pack3Cantidad" && cantidades.pack3 > 1) cantidades.pack3--;
        if (id === "pack1Cantidad" && cantidades.pack1 > 1) cantidades.pack1--;

        actualizar();

    };

});

// ---------- VENDER POLLO ----------

document.getElementById("venderPollo").onclick = () => {

    if (!estado.iniciado) {
        alert("Primero inicia el día");
        return;
    }

    if (estado.stock < cantidades.pollo) {
        alert("No hay suficientes pollos");
        return;
    }

    estado.stock -= cantidades.pollo;

    actualizar();

};

// ---------- VENDER MEDIO ----------

document.getElementById("venderMedio").onclick = () => {

    if (!estado.iniciado) {
        alert("Primero inicia el día");
        return;
    }

    const venta = cantidades.medio * 0.5;

    if (estado.stock < venta) {
        alert("No hay suficientes pollos");
        return;
    }

    estado.stock -= venta;

    actualizar();

};

actualizar();
