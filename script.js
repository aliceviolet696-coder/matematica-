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
// SIMULADOR DE CRÉDITO
//========================================

function simularCredito(){

    let cliente = document.getElementById("clienteCredito").value;
    let monto = parseFloat(document.getElementById("montoCredito").value);
    let tasa = parseFloat(document.getElementById("tasaCredito").value);
    let meses = parseInt(document.getElementById("mesesCredito").value);

    if(cliente=="" || isNaN(monto) || isNaN(tasa) || isNaN(meses)){
        alert("Complete todos los datos.");
        return;
    }

    let tasaMensual = tasa/100/12;

    let cuota = monto *
    (tasaMensual*Math.pow(1+tasaMensual,meses))
    /(Math.pow(1+tasaMensual,meses)-1);

    let total = cuota * meses;
    let intereses = total - monto;

    document.getElementById("resultadoCredito").innerHTML=

    "<br><b>Cliente:</b> "+cliente+
    "<br><b>Cuota mensual:</b> $"+cuota.toFixed(2)+
    "<br><b>Total pagado:</b> $"+total.toFixed(2)+
    "<br><b>Intereses:</b> $"+intereses.toFixed(2);

}

//========================================
// TABLA FRANCESA
//========================================

function tablaFrancesa(){

    let monto = parseFloat(document.getElementById("montoCredito").value);
    let tasa = parseFloat(document.getElementById("tasaCredito").value);
    let meses = parseInt(document.getElementById("mesesCredito").value);

    if(isNaN(monto) || isNaN(tasa) || isNaN(meses)){
        alert("Primero simule el crédito.");
        return;
    }

    let tabla=document.getElementById("tablaFrancesa");
    tabla.innerHTML="";

    let i=tasa/100/12;

    let cuota=
    monto*(i*Math.pow(1+i,meses))
    /(Math.pow(1+i,meses)-1);

    let saldo=monto;

    for(let c=1;c<=meses;c++){

        let interes=saldo*i;

        let capital=cuota-interes;

        saldo-=capital;

        if(saldo<0){
            saldo=0;
        }

        tabla.innerHTML+=`

        <tr>

        <td>${c}</td>

        <td>$${cuota.toFixed(2)}</td>

        <td>$${capital.toFixed(2)}</td>

        <td>$${interes.toFixed(2)}</td>

        <td>$${saldo.toFixed(2)}</td>

        </tr>

        `;

    }

}

//========================================
// TABLA ALEMANA
//========================================

function tablaAlemana(){

    let monto=parseFloat(document.getElementById("montoCredito").value);

    let tasa=parseFloat(document.getElementById("tasaCredito").value);

    let meses=parseInt(document.getElementById("mesesCredito").value);

    if(isNaN(monto)||isNaN(tasa)||isNaN(meses)){
        alert("Primero simule el crédito.");
        return;
    }

    let tabla=document.getElementById("tablaAlemana");

    tabla.innerHTML="";

    let saldo=monto;

    let capital=monto/meses;

    let interesMensual=tasa/100/12;

    for(let i=1;i<=meses;i++){

        let interes=saldo*interesMensual;

        let cuota=capital+interes;

        saldo-=capital;

        if(saldo<0){
            saldo=0;
        }

        tabla.innerHTML+=`

        <tr>

        <td>${i}</td>

        <td>$${cuota.toFixed(2)}</td>

        <td>$${capital.toFixed(2)}</td>

        <td>$${interes.toFixed(2)}</td>

        <td>$${saldo.toFixed(2)}</td>

        </tr>

        `;

    }

}

//========================================
// REGISTRO DE PAGOS
//========================================

function registrarPago(){

    let cliente=document.getElementById("clientePago").value;

    let valor=parseFloat(document.getElementById("valorPago").value);

    if(cliente=="" || isNaN(valor)){
        alert("Ingrese los datos.");
        return;
    }

    pagos.push({

        cliente,
        valor

    });

    mostrarPagos();

}

function mostrarPagos(){

    let tabla=document.getElementById("tablaPagos");

    tabla.innerHTML="";

    let total=0;

    for(let pago of pagos){

        total+=pago.valor;

        tabla.innerHTML+=`

        <tr>

        <td>${pago.cliente}</td>

        <td>$${pago.valor.toFixed(2)}</td>

        </tr>

        `;

    }

    tabla.innerHTML+=`

    <tr style="background:#dbeafe;font-weight:bold;">

    <td>TOTAL PAGADO</td>

    <td>$${total.toFixed(2)}</td>

    </tr>

    `;

}

//========================================
// COSTOS Y PRESUPUESTOS
//========================================

let costosFijos = [];
let costosVariables = [];
let ingredientes = [];

//------------------------------
// COSTOS FIJOS
//------------------------------

function agregarCostoFijo(){
    let nombre = document.getElementById("nombreCF").value.trim();
    let valor = parseFloat(document.getElementById("valorCF").value);
    if(nombre=="" || isNaN(valor) || valor<=0){
        alert("Complete correctamente el costo fijo.");
        return;
    }
    costosFijos.push({nombre, valor});
    mostrarCostosFijos();
    document.getElementById("nombreCF").value="";
    document.getElementById("valorCF").value="";
}

function mostrarCostosFijos(){
    let tabla = document.getElementById("tablaCF");
    tabla.innerHTML = "";
    let total = 0;
    for(let c of costosFijos){
        total += c.valor;
        tabla.innerHTML += `<tr><td>${c.nombre}</td><td>$${c.valor.toFixed(2)}</td></tr>`;
    }
    tabla.innerHTML += `<tr style="background:#dbeafe;font-weight:bold;"><td>TOTAL COSTOS FIJOS</td><td>$${total.toFixed(2)}</td></tr>`;
}

//------------------------------
// COSTOS VARIABLES
//------------------------------

function agregarCostoVariable(){
    let nombre = document.getElementById("nombreCV").value.trim();
    let valor = parseFloat(document.getElementById("valorCV").value);
    if(nombre=="" || isNaN(valor) || valor<=0){
        alert("Complete correctamente el costo variable.");
        return;
    }
    costosVariables.push({nombre, valor});
    mostrarCostosVariables();
    document.getElementById("nombreCV").value="";
    document.getElementById("valorCV").value="";
}

function mostrarCostosVariables(){
    let tabla = document.getElementById("tablaCV");
    tabla.innerHTML = "";
    let total = 0;
    for(let c of costosVariables){
        total += c.valor;
        tabla.innerHTML += `<tr><td>${c.nombre}</td><td>$${c.valor.toFixed(2)}</td></tr>`;
    }
    tabla.innerHTML += `<tr style="background:#dbeafe;font-weight:bold;"><td>TOTAL COSTOS VARIABLES (unitario)</td><td>$${total.toFixed(2)}</td></tr>`;
}

//------------------------------
// PUNTO DE EQUILIBRIO
//------------------------------

function calcularPuntoEquilibrio(){
    let cfTotal = costosFijos.reduce((s,c) => s + c.valor, 0);
    let cvUnitario = costosVariables.reduce((s,c) => s + c.valor, 0);
    let precio = parseFloat(document.getElementById("precioVenta").value);

    if(cfTotal===0 && cvUnitario===0){
        alert("Agregue al menos un costo fijo o variable.");
        return;
    }
    if(isNaN(precio) || precio<=0){
        alert("Ingrese un precio de venta válido.");
        return;
    }
    if(cvUnitario >= precio){
        alert("El precio debe ser mayor al costo variable unitario.");
        return;
    }

    let margenContribucion = precio - cvUnitario;
    let puntoEquilibrio = cfTotal / margenContribucion;
    let ingresoEquilibrio = puntoEquilibrio * precio;

    document.getElementById("resultadoCostos").innerHTML =
        `<b>Costos Fijos Totales:</b> $${cfTotal.toFixed(2)}<br>
         <b>Costo Variable Unitario:</b> $${cvUnitario.toFixed(2)}<br>
         <b>Margen de Contribución:</b> $${margenContribucion.toFixed(2)} (${(margenContribucion/precio*100).toFixed(2)}%)<br>
         <b>Punto de Equilibrio:</b> ${Math.ceil(puntoEquilibrio)} unidades<br>
         <b>Ingreso en Punto de Equilibrio:</b> $${ingresoEquilibrio.toFixed(2)}`;
}

//------------------------------
// COSTEO DE RECETAS
//------------------------------

function agregarIngrediente(){
    let nombre = document.getElementById("nombreIng").value.trim();
    let cantidad = parseFloat(document.getElementById("cantIng").value);
    let costo = parseFloat(document.getElementById("costoIng").value);
    if(nombre=="" || isNaN(cantidad) || isNaN(costo) || cantidad<=0 || costo<=0){
        alert("Complete todos los datos del ingrediente.");
        return;
    }
    ingredientes.push({nombre, cantidad, costo});
    mostrarIngredientes();
    document.getElementById("nombreIng").value="";
    document.getElementById("cantIng").value="";
    document.getElementById("costoIng").value="";
}

function mostrarIngredientes(){
    let tabla = document.getElementById("tablaIngredientes");
    tabla.innerHTML = "";
    let total = 0;
    for(let ing of ingredientes){
        let subtotal = ing.cantidad * ing.costo;
        total += subtotal;
        tabla.innerHTML += `<tr><td>${ing.nombre}</td><td>${ing.cantidad}</td><td>$${ing.costo.toFixed(2)}</td><td>$${subtotal.toFixed(2)}</td></tr>`;
    }
    tabla.innerHTML += `<tr style="background:#dbeafe;font-weight:bold;"><td colspan="3">COSTO TOTAL DE LA RECETA</td><td>$${total.toFixed(2)}</td></tr>`;
}

function calcularPrecioReceta(){
    let totalCosto = ingredientes.reduce((s, ing) => s + (ing.cantidad * ing.costo), 0);
    let margen = parseFloat(document.getElementById("margenGanancia").value);
    if(totalCosto===0){
        alert("Agregue ingredientes primero.");
        return;
    }
    if(isNaN(margen) || margen<=0 || margen>=100){
        alert("Ingrese un margen de ganancia válido (1-99).");
        return;
    }
    let precioVenta = totalCosto / (1 - margen/100);
    let ganancia = precioVenta - totalCosto;
    document.getElementById("resultadoReceta").innerHTML =
        `<b>Costo de la Receta:</b> $${totalCosto.toFixed(2)}<br>
         <b>Margen de Ganancia:</b> ${margen}%<br>
         <b>Precio de Venta Sugerido:</b> $${precioVenta.toFixed(2)}<br>
         <b>Ganancia:</b> $${ganancia.toFixed(2)}`;
}

//========================================
// LIMPIAR FORMULARIOS
//========================================

function limpiarFormulario(){

    let cajas=document.querySelectorAll("input");

    for(let caja of cajas){

        caja.value="";

    }

}