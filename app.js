// ===== CONTROL DE STOCK =====

let estado = JSON.parse(localStorage.getItem("estado")) || {
    iniciado: false,
    stock: 0
};

const stockActual = document.getElementById("stockActual");
const stockInicial = document.getElementById("stockInicial");
const btnIniciar = document.getElementById("btnIniciar");
const btnReten = document.getElementById("btnReten");

function guardar() {
    localStorage.setItem("estado", JSON.stringify(estado));
}

function actualizar() {
    stockActual.textContent = estado.stock;

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
        iniciado: false,
        stock: 0
    };

    stockInicial.value = "";

    actualizar();

});

actualizar();
