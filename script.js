//========================================
// FINANSMART
// Proyecto de Matemática Financiera
//========================================

//==============================
// ARREGLOS
//==============================

let clientes = [];
let pagos = [];

//==============================
// VALOR PRESENTE
//==============================

function calcularVP(){

    let vf = parseFloat(document.getElementById("vf").value);
    let tasa = parseFloat(document.getElementById("tvp").value);
    let tiempo = parseFloat(document.getElementById("nvp").value);

    if(isNaN(vf) || isNaN(tasa) || isNaN(tiempo)){
        alert("Complete todos los datos.");
        return;
    }

    tasa = tasa / 100;

    let vp = vf / Math.pow((1+tasa), tiempo);

    document.getElementById("respuestaVP").innerHTML =
    "Valor Presente: $" + vp.toFixed(2);

}

//==============================
// VALOR FUTURO
//==============================

function calcularVF(){

    let vp = parseFloat(document.getElementById("vp").value);
    let tasa = parseFloat(document.getElementById("tvf").value);
    let tiempo = parseFloat(document.getElementById("nvf").value);

    if(isNaN(vp) || isNaN(tasa) || isNaN(tiempo)){
        alert("Complete todos los datos.");
        return;
    }

    tasa = tasa / 100;

    let vf = vp * Math.pow((1+tasa), tiempo);

    document.getElementById("respuestaVF").innerHTML =
    "Valor Futuro: $" + vf.toFixed(2);

}

//==============================
// INTERÉS SIMPLE
//==============================

function interesSimple(){

    let capital =
    parseFloat(document.getElementById("capitalSimple").value);

    let tasa =
    parseFloat(document.getElementById("tasaSimple").value);

    let tiempo =
    parseFloat(document.getElementById("tiempoSimple").value);

    if(isNaN(capital) || isNaN(tasa) || isNaN(tiempo)){
        alert("Ingrese todos los datos.");
        return;
    }

    tasa = tasa / 100;

    let interes = capital * tasa * tiempo;

    let monto = capital + interes;

    document.getElementById("respuestaSimple").innerHTML =
    "Interés: $" + interes.toFixed(2) +
    "<br>Monto Final: $" + monto.toFixed(2);

}

//==============================
// INTERÉS COMPUESTO
//==============================

function interesCompuesto(){

    let capital =
    parseFloat(document.getElementById("capitalCompuesto").value);

    let tasa =
    parseFloat(document.getElementById("tasaCompuesta").value);

    let tiempo =
    parseFloat(document.getElementById("tiempoCompuesto").value);

    if(isNaN(capital) || isNaN(tasa) || isNaN(tiempo)){
        alert("Ingrese todos los datos.");
        return;
    }

    tasa = tasa / 100;

    let monto =
    capital * Math.pow((1+tasa), tiempo);

    let interes = monto - capital;

    document.getElementById("respuestaCompuesto").innerHTML =
    "Interés generado: $" + interes.toFixed(2) +
    "<br>Monto Final: $" + monto.toFixed(2);

}

//==============================
// CUOTA MENSUAL
//==============================

function calcularCuota(){

    let monto =
    parseFloat(document.getElementById("montoCuota").value);

    let tasa =
    parseFloat(document.getElementById("tasaCuota").value);

    let cuotas =
    parseInt(document.getElementById("numeroCuotas").value);

    if(isNaN(monto) || isNaN(tasa) || isNaN(cuotas)){
        alert("Complete todos los datos.");
        return;
    }

    tasa = tasa /100 /12;

    let cuota =
    monto * (tasa*Math.pow(1+tasa,cuotas))
    /(Math.pow(1+tasa,cuotas)-1);

    document.getElementById("respuestaCuota").innerHTML =
    "Cuota mensual: $" + cuota.toFixed(2);

}

//==============================
// REGISTRO CLIENTES
//==============================

function guardarCliente(){

    let cedula =
    document.getElementById("cedula").value;

    let nombre =
    document.getElementById("nombre").value;

    let telefono =
    document.getElementById("telefono").value;

    let correo =
    document.getElementById("correo").value;

    if(
        cedula=="" ||
        nombre=="" ||
        telefono=="" ||
        correo==""
    ){
        alert("Debe completar todos los campos.");
        return;
    }

    clientes.push({

        cedula,
        nombre,
        telefono,
        correo

    });

    mostrarClientes();

}

function mostrarClientes(){

    let tabla =
    document.getElementById("tablaClientes");

    tabla.innerHTML="";

    for(let cliente of clientes){

        tabla.innerHTML +=

        `
        <tr>

        <td>${cliente.cedula}</td>

        <td>${cliente.nombre}</td>

        <td>${cliente.telefono}</td>

        <td>${cliente.correo}</td>

        </tr>
        `;

    }

}
//========================================
// FINANSMART
// Proyecto de Matemática Financiera
//========================================

//==============================
// ARREGLOS
//==============================

let clientes = [];
let pagos = [];

//==============================
// VALOR PRESENTE
//==============================

function calcularVP(){

    let vf = parseFloat(document.getElementById("vf").value);
    let tasa = parseFloat(document.getElementById("tvp").value);
    let tiempo = parseFloat(document.getElementById("nvp").value);

    if(isNaN(vf) || isNaN(tasa) || isNaN(tiempo)){
        alert("Complete todos los datos.");
        return;
    }

    tasa = tasa / 100;

    let vp = vf / Math.pow((1+tasa), tiempo);

    document.getElementById("respuestaVP").innerHTML =
    "Valor Presente: $" + vp.toFixed(2);

}

//==============================
// VALOR FUTURO
//==============================

function calcularVF(){

    let vp = parseFloat(document.getElementById("vp").value);
    let tasa = parseFloat(document.getElementById("tvf").value);
    let tiempo = parseFloat(document.getElementById("nvf").value);

    if(isNaN(vp) || isNaN(tasa) || isNaN(tiempo)){
        alert("Complete todos los datos.");
        return;
    }

    tasa = tasa / 100;

    let vf = vp * Math.pow((1+tasa), tiempo);

    document.getElementById("respuestaVF").innerHTML =
    "Valor Futuro: $" + vf.toFixed(2);

}

//==============================
// INTERÉS SIMPLE
//==============================

function interesSimple(){

    let capital =
    parseFloat(document.getElementById("capitalSimple").value);

    let tasa =
    parseFloat(document.getElementById("tasaSimple").value);

    let tiempo =
    parseFloat(document.getElementById("tiempoSimple").value);

    if(isNaN(capital) || isNaN(tasa) || isNaN(tiempo)){
        alert("Ingrese todos los datos.");
        return;
    }

    tasa = tasa / 100;

    let interes = capital * tasa * tiempo;

    let monto = capital + interes;

    document.getElementById("respuestaSimple").innerHTML =
    "Interés: $" + interes.toFixed(2) +
    "<br>Monto Final: $" + monto.toFixed(2);

}

//==============================
// INTERÉS COMPUESTO
//==============================

function interesCompuesto(){

    let capital =
    parseFloat(document.getElementById("capitalCompuesto").value);

    let tasa =
    parseFloat(document.getElementById("tasaCompuesta").value);

    let tiempo =
    parseFloat(document.getElementById("tiempoCompuesto").value);

    if(isNaN(capital) || isNaN(tasa) || isNaN(tiempo)){
        alert("Ingrese todos los datos.");
        return;
    }

    tasa = tasa / 100;

    let monto =
    capital * Math.pow((1+tasa), tiempo);

    let interes = monto - capital;

    document.getElementById("respuestaCompuesto").innerHTML =
    "Interés generado: $" + interes.toFixed(2) +
    "<br>Monto Final: $" + monto.toFixed(2);

}

//==============================
// CUOTA MENSUAL
//==============================

function calcularCuota(){

    let monto =
    parseFloat(document.getElementById("montoCuota").value);

    let tasa =
    parseFloat(document.getElementById("tasaCuota").value);

    let cuotas =
    parseInt(document.getElementById("numeroCuotas").value);

    if(isNaN(monto) || isNaN(tasa) || isNaN(cuotas)){
        alert("Complete todos los datos.");
        return;
    }

    tasa = tasa /100 /12;

    let cuota =
    monto * (tasa*Math.pow(1+tasa,cuotas))
    /(Math.pow(1+tasa,cuotas)-1);

    document.getElementById("respuestaCuota").innerHTML =
    "Cuota mensual: $" + cuota.toFixed(2);

}

//==============================
// REGISTRO CLIENTES
//==============================

function guardarCliente(){

    let cedula =
    document.getElementById("cedula").value;

    let nombre =
    document.getElementById("nombre").value;

    let telefono =
    document.getElementById("telefono").value;

    let correo =
    document.getElementById("correo").value;

    if(
        cedula=="" ||
        nombre=="" ||
        telefono=="" ||
        correo==""
    ){
        alert("Debe completar todos los campos.");
        return;
    }

    clientes.push({

        cedula,
        nombre,
        telefono,
        correo

    });

    mostrarClientes();

}

function mostrarClientes(){

    let tabla =
    document.getElementById("tablaClientes");

    tabla.innerHTML="";

    for(let cliente of clientes){

        tabla.innerHTML +=

        `
        <tr>

        <td>${cliente.cedula}</td>

        <td>${cliente.nombre}</td>

        <td>${cliente.telefono}</td>

        <td>${cliente.correo}</td>

        </tr>
        `;

    }

}