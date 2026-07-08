// ===== CONTROL DE STOCK =====

let estado = JSON.parse(localStorage.getItem("estado")) || {
    iniciado:false,
    stock:0
};

// ELEMENTOS

const stockActual=document.getElementById("stockActual");
const stockInicial=document.getElementById("stockInicial");

const btnIniciar=document.getElementById("btnIniciar");
const btnReten=document.getElementById("btnReten");

const btnPollo=document.getElementById("venderPollo");
const btnMedio=document.getElementById("venderMedio");

// CANTIDADES

let polloCantidad=1;
let medioCantidad=1;

document.getElementById("polloCantidad").innerText=1;
document.getElementById("medioCantidad").innerText=1;

// GUARDAR

function guardar(){

    localStorage.setItem("estado",JSON.stringify(estado));

}

// ACTUALIZAR

function actualizar(){

    stockActual.innerText=estado.stock;

    stockInicial.disabled=estado.iniciado;
    btnIniciar.disabled=estado.iniciado;

    guardar();

}

actualizar();


// BOTONES + -

document.querySelectorAll(".mas").forEach(b=>{

    b.onclick=()=>{

        switch(b.dataset.target){

            case "polloCantidad":

                if(polloCantidad<6){

                    polloCantidad++;

                    document.getElementById("polloCantidad").innerText=polloCantidad;

                }

            break;

            case "medioCantidad":

                if(medioCantidad<6){

                    medioCantidad++;

                    document.getElementById("medioCantidad").innerText=medioCantidad;

                }

            break;

        }

    }

});

document.querySelectorAll(".menos").forEach(b=>{

    b.onclick=()=>{

        switch(b.dataset.target){

            case "polloCantidad":

                if(polloCantidad>1){

                    polloCantidad--;

                    document.getElementById("polloCantidad").innerText=polloCantidad;

                }

            break;

            case "medioCantidad":

                if(medioCantidad>1){

                    medioCantidad--;

                    document.getElementById("medioCantidad").innerText=medioCantidad;

                }

            break;

        }

    }

});


// INICIAR DIA

btnIniciar.onclick=()=>{

    let cantidad=Number(stockInicial.value);

    if(cantidad<=0){

        alert("Introduce el stock inicial");

        return;

    }

    estado.stock=cantidad;

    estado.iniciado=true;

    actualizar();

};


// RETEN

btnReten.onclick=()=>{

    if(!estado.iniciado){

        alert("Primero inicia el día");

        return;

    }

    let cantidad=prompt("¿Cuántos pollos añades?");

    if(cantidad===null)return;

    cantidad=Number(cantidad);

    if(cantidad>0){

        estado.stock+=cantidad;

        actualizar();

    }

};


// VENDER POLLOS

btnPollo.onclick=()=>{

    if(estado.stock<polloCantidad){

        alert("No hay stock");

        return;

    }

    estado.stock-=polloCantidad;

    actualizar();

};


// VENDER MEDIOS

btnMedio.onclick=()=>{

    let venta=medioCantidad*0.5;

    if(estado.stock<venta){

        alert("No hay stock");

        return;

    }

    estado.stock-=venta;

    actualizar();

};


// REINICIAR

document.getElementById("reiniciar").onclick=()=>{

    if(confirm("¿Reiniciar día?")){

        localStorage.removeItem("estado");

        estado={

            iniciado:false,

            stock:0

        };

        stockInicial.disabled=false;
        btnIniciar.disabled=false;
        stockInicial.value="";

        actualizar();

    }

};
