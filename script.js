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
// SERVICIOS TRIBUTARIOS
//========================================

let productosFactura = [];

function agregarProductoFactura(){
    let nombre = document.getElementById("prodNombre").value.trim();
    let precio = parseFloat(document.getElementById("prodPrecio").value);
    let cant = parseInt(document.getElementById("prodCant").value);
    let iva = parseInt(document.getElementById("prodIva").value);
    if(nombre=="" || isNaN(precio) || isNaN(cant) || cant<1){
        alert("Complete los datos del producto.");
        return;
    }
    productosFactura.push({nombre, precio, cant, iva});
    mostrarProductos();
    document.getElementById("prodNombre").value="";
    document.getElementById("prodPrecio").value="";
    document.getElementById("prodCant").value="1";
}

function mostrarProductos(){
    let tabla = document.getElementById("tablaProductos");
    tabla.innerHTML = "";
    for(let p of productosFactura){
        let subtotal = p.precio * p.cant;
        tabla.innerHTML += `<tr><td>${p.nombre}</td><td>$${p.precio.toFixed(2)}</td><td>${p.cant}</td><td>${p.iva}%</td><td>$${subtotal.toFixed(2)}</td></tr>`;
    }
}

function calcularFactura(){
    if(productosFactura.length===0){
        alert("Agregue productos primero.");
        return;
    }
    let subtotal12 = 0, subtotal0 = 0;
    for(let p of productosFactura){
        let base = p.precio * p.cant;
        if(p.iva===12) subtotal12 += base;
        else subtotal0 += base;
    }
    let iva = subtotal12 * 0.12;
    let total = subtotal12 + subtotal0 + iva;
    document.getElementById("resultadoFactura").innerHTML =
        `<b>Subtotal 12%:</b> $${subtotal12.toFixed(2)}<br>
         <b>Subtotal 0%:</b> $${subtotal0.toFixed(2)}<br>
         <b>IVA (12%):</b> $${iva.toFixed(2)}<br>
         <b>TOTAL FACTURA:</b> $${total.toFixed(2)}`;
}

function calcularDeclaracionSRI(){
    let base12 = parseFloat(document.getElementById("base12").value) || 0;
    let base0 = parseFloat(document.getElementById("base0").value) || 0;
    let ivaCobrado = parseFloat(document.getElementById("ivaCobrado").value) || 0;
    let ivaPagado = parseFloat(document.getElementById("ivaPagado").value) || 0;
    let ivaGenerado = base12 * 0.12;
    let ivaAPagar = ivaGenerado - ivaPagado;
    if(ivaAPagar < 0) ivaAPagar = 0;
    document.getElementById("resultadoSRI").innerHTML =
        `<b>Total ventas:</b> $${(base12+base0).toFixed(2)} (12%: $${base12.toFixed(2)} | 0%: $${base0.toFixed(2)})<br>
         <b>IVA generado:</b> $${ivaGenerado.toFixed(2)}<br>
         <b>Crédito fiscal (IVA compras):</b> $${ivaPagado.toFixed(2)}<br>
         <b>IVA a pagar al SRI:</b> $${ivaAPagar.toFixed(2)}<br>
         <hr style="margin:8px 0;">
         <i>Formulario 104 — Declaración mensual de IVA</i>`;
}

//========================================
// SISTEMAS DE VENTAS
//========================================

let carritoPOS = [];

function agregarAlCarrito(){
    let producto = document.getElementById("posProducto").value.trim();
    let precio = parseFloat(document.getElementById("posPrecio").value);
    let cant = parseInt(document.getElementById("posCant").value);
    if(producto=="" || isNaN(precio) || isNaN(cant) || cant<1){
        alert("Complete los datos del producto.");
        return;
    }
    carritoPOS.push({producto, precio, cant});
    mostrarCarrito();
    document.getElementById("posProducto").value="";
    document.getElementById("posPrecio").value="";
    document.getElementById("posCant").value="1";
}

function mostrarCarrito(){
    let tabla = document.getElementById("tablaCarrito");
    tabla.innerHTML = "";
    let total = 0;
    for(let item of carritoPOS){
        let subtotal = item.precio * item.cant;
        total += subtotal;
        tabla.innerHTML += `<tr><td>${item.producto}</td><td>$${item.precio.toFixed(2)}</td><td>${item.cant}</td><td>$${subtotal.toFixed(2)}</td></tr>`;
    }
    tabla.innerHTML += `<tr style="background:#dbeafe;font-weight:bold;"><td colspan="3">TOTAL</td><td>$${total.toFixed(2)}</td></tr>`;
}

function finalizarVenta(){
    if(carritoPOS.length===0){
        alert("El carrito está vacío.");
        return;
    }
    let total = carritoPOS.reduce((s,item) => s + item.precio*item.cant, 0);
    document.getElementById("resultadoPOS").innerHTML =
        `<b>VENTA REGISTRADA</b><br>
         Productos: ${carritoPOS.length}<br>
         Total: $${total.toFixed(2)}<br>
         <span style="color:green;">✓ Pago procesado</span>`;
    carritoPOS = [];
    mostrarCarrito();
}

function limpiarCarrito(){
    carritoPOS = [];
    mostrarCarrito();
    document.getElementById("resultadoPOS").innerHTML = "";
}

function generarFacturaElectronica(){
    let ruc = document.getElementById("facRuc").value.trim();
    let razon = document.getElementById("facRazon").value.trim();
    let dir = document.getElementById("facDir").value.trim();
    let desc = document.getElementById("facDesc").value.trim();
    let cant = parseInt(document.getElementById("facCant").value);
    let precio = parseFloat(document.getElementById("facPrecio").value);
    let iva = parseInt(document.getElementById("facIva").value);
    if(!ruc || !razon || !desc || isNaN(cant) || isNaN(precio)){
        alert("Complete todos los datos de la factura.");
        return;
    }
    let subtotal = cant * precio;
    let valorIVA = iva===12 ? subtotal*0.12 : 0;
    let total = subtotal + valorIVA;
    let fecha = new Date().toLocaleDateString("es-EC");
    let secuencial = String(Math.floor(Math.random()*900000)+100000);
    document.getElementById("resultadoFacturaElectronica").innerHTML =
        `<b>COMPROBANTE ELECTRÓNICO</b><br>
         <hr>
         <b>RUC:</b> ${ruc}<br>
         <b>Razón Social:</b> ${razon}<br>
         <b>Dirección:</b> ${dir}<br>
         <hr>
         <b>Factura #</b> 001-001-${secuencial}<br>
         <b>Fecha:</b> ${fecha}<br>
         <hr>
         <b>Descripción:</b> ${desc}<br>
         <b>Cantidad:</b> ${cant}<br>
         <b>Precio Unit.:</b> $${precio.toFixed(2)}<br>
         <b>Subtotal:</b> $${subtotal.toFixed(2)}<br>
         <b>IVA (${iva}%):</b> $${valorIVA.toFixed(2)}<br>
         <b>TOTAL:</b> $${total.toFixed(2)}<br>
         <hr>
         <span style="color:green;">✓ Autorizado SRI — Ambiente de pruebas</span>`;
}

//========================================
// ESTADÍSTICA Y ANÁLISIS
//========================================

function calcularEstadistica(){
    let texto = document.getElementById("datosEstadistica").value.trim();
    if(texto==""){
        alert("Ingrese los datos separados por coma.");
        return;
    }
    let datos = texto.split(",").map(Number).filter(n => !isNaN(n));
    if(datos.length===0){
        alert("Ingrese al menos un número válido.");
        return;
    }
    datos.sort((a,b)=>a-b);
    let suma = datos.reduce((s,n)=>s+n,0);
    let media = suma / datos.length;
    let mediana;
    if(datos.length % 2 === 0){
        mediana = (datos[datos.length/2-1] + datos[datos.length/2]) / 2;
    } else {
        mediana = datos[Math.floor(datos.length/2)];
    }
    let freq = {};
    for(let n of datos){
        freq[n] = (freq[n]||0) + 1;
    }
    let maxFreq = Math.max(...Object.values(freq));
    let modas = Object.keys(freq).filter(k => freq[k]===maxFreq).map(Number);
    let modaStr = modas.length===datos.length ? "No hay moda (todos únicos)" : modas.join(", ");
    let rango = datos[datos.length-1] - datos[0];
    document.getElementById("resultadoEstadistica").innerHTML =
        `<b>Datos:</b> ${datos.join(", ")}<br>
         <b>Total:</b> ${datos.length} valores<br>
         <b>Media (Promedio):</b> ${media.toFixed(2)}<br>
         <b>Mediana:</b> ${mediana.toFixed(2)}<br>
         <b>Moda:</b> ${modaStr}<br>
         <b>Mínimo:</b> ${datos[0]}<br>
         <b>Máximo:</b> ${datos[datos.length-1]}<br>
         <b>Rango:</b> ${rango.toFixed(2)}`;
}

function calcularPorcentaje(){
    let valor = parseFloat(document.getElementById("porcValor").value);
    let total = parseFloat(document.getElementById("porcTotal").value);
    if(isNaN(valor) || isNaN(total) || total===0){
        alert("Ingrese valores válidos (total distinto de 0).");
        return;
    }
    let pct = (valor / total) * 100;
    document.getElementById("resultadoPorcentaje").innerHTML =
        `<b>${valor}</b> es el <b>${pct.toFixed(2)}%</b> de <b>${total}</b>`;
}

function aplicarPorcentaje(){
    let base = parseFloat(document.getElementById("porcBase").value);
    let pct = parseFloat(document.getElementById("porcPct").value);
    if(isNaN(base) || isNaN(pct)){
        alert("Ingrese valores válidos.");
        return;
    }
    let resultado = base * (1 + pct/100);
    document.getElementById("resultadoPorcentaje").innerHTML =
        `<b>${base}</b> + <b>${pct}%</b> = <b>${resultado.toFixed(2)}</b> (incremento)<br>
         <b>${base}</b> - <b>${pct}%</b> = <b>${(base * (1 - pct/100)).toFixed(2)}</b> (descuento)`;
}

function analizarTendencia(){
    let texto = document.getElementById("datosTendencia").value.trim();
    if(texto==""){
        alert("Ingrese los datos separados por coma.");
        return;
    }
    let datos = texto.split(",").map(Number).filter(n => !isNaN(n));
    if(datos.length<2){
        alert("Ingrese al menos 2 valores.");
        return;
    }
    let n = datos.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
    for(let i=0; i<n; i++){
        sumX += i+1;
        sumY += datos[i];
        sumXY += (i+1) * datos[i];
        sumX2 += (i+1)*(i+1);
    }
    let pendiente = (n*sumXY - sumX*sumY) / (n*sumX2 - sumX*sumX);
    let interseccion = (sumY - pendiente*sumX) / n;
    let prox = interseccion + pendiente*(n+1);
    let direccion = pendiente>0 ? "creciente ↗" : pendiente<0 ? "decreciente ↘" : "estable →";
    document.getElementById("resultadoTendencia").innerHTML =
        `<b>Tendencia:</b> ${direccion}<br>
         <b>Pendiente:</b> ${pendiente.toFixed(4)} (cambio por período)<br>
         <b>Ecuación:</b> y = ${pendiente.toFixed(4)}x + ${interseccion.toFixed(4)}<br>
         <b>Datos:</b> ${datos.join(", ")}<br>
         <b>Proyección próximo período:</b> ${prox.toFixed(2)}`;
}

function detectarAnomalias(){
    let texto = document.getElementById("datosAnomalia").value.trim();
    if(texto==""){
        alert("Ingrese los datos separados por coma.");
        return;
    }
    let datos = texto.split(",").map(Number).filter(n => !isNaN(n));
    if(datos.length<3){
        alert("Ingrese al menos 3 valores.");
        return;
    }
    let media = datos.reduce((s,n)=>s+n,0) / datos.length;
    let varianza = datos.reduce((s,n)=>s+(n-media)**2,0) / datos.length;
    let desviacion = Math.sqrt(varianza);
    let anomalias = [];
    for(let n of datos){
        let z = (n - media) / desviacion;
        if(Math.abs(z) > 2) anomalias.push({valor: n, z: z.toFixed(2)});
    }
    document.getElementById("resultadoAnomalia").innerHTML =
        `<b>Media:</b> ${media.toFixed(2)}<br>
         <b>Desviación estándar:</b> ${desviacion.toFixed(2)}<br>
         <b>Total datos:</b> ${datos.length}<br>
         ${anomalias.length===0
             ? '<span style="color:green;">✓ No se detectaron anomalías significativas (|z| ≤ 2)</span>'
             : `<span style="color:#b71c1c;">⚠ Se detectaron ${anomalias.length} anomalía(s):</span><br>
                ${anomalias.map(a => `${a.valor} (z = ${a.z})`).join("<br>")}`}`;
}

//========================================
// BUSINESS INTELLIGENCE
//========================================

function actualizarDashboard(){
    let ventas = parseFloat(document.getElementById("dashInVentas").value) || 0;
    let gastos = parseFloat(document.getElementById("dashInGastos").value) || 0;
    let utilidad = ventas - gastos;
    let margen = ventas>0 ? (utilidad/ventas)*100 : 0;
    document.getElementById("dashVentas").textContent = "$" + ventas.toFixed(2);
    document.getElementById("dashGastos").textContent = "$" + gastos.toFixed(2);
    document.getElementById("dashUtilidad").textContent = "$" + utilidad.toFixed(2);
    document.getElementById("dashMargen").textContent = margen.toFixed(1) + "%";
}

function analizarVentas(){
    let texto = document.getElementById("ventasSemanales").value.trim();
    if(texto==""){
        alert("Ingrese las ventas diarias separadas por coma.");
        return;
    }
    let datos = texto.split(",").map(Number).filter(n => !isNaN(n));
    if(datos.length===0){
        alert("Ingrese valores válidos.");
        return;
    }
    let total = datos.reduce((s,n)=>s+n,0);
    let promedio = total / datos.length;
    let max = Math.max(...datos);
    let min = Math.min(...datos);
    let dias = ["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"];
    let detalle = datos.map((v,i) =>
        `${dias[i]||"Día"+(i+1)}: $${v.toFixed(2)}`
    ).join(" | ");
    document.getElementById("resultadoVentas").innerHTML =
        `<b>Resumen Semanal</b><br>
         ${detalle}<br>
         <b>Total:</b> $${total.toFixed(2)}<br>
         <b>Promedio diario:</b> $${promedio.toFixed(2)}<br>
         <b>Mejor día:</b> $${max.toFixed(2)}<br>
         <b>Peor día:</b> $${min.toFixed(2)}`;
}

function evaluarAlerta(){
    let valor = parseFloat(document.getElementById("alertaValor").value);
    let meta = parseFloat(document.getElementById("alertaMeta").value);
    if(isNaN(valor) || isNaN(meta) || meta<=0){
        alert("Ingrese valores válidos.");
        return;
    }
    let pct = (valor/meta)*100;
    let color, icono, msg;
    if(pct >= 100){
        color = "green"; icono = "✓"; msg = "META ALCANZADA";
    } else if(pct >= 80){
        color = "#ff8f00"; icono = "⚠"; msg = "PRÓXIMO A LA META";
    } else if(pct >= 50){
        color = "#e65100"; icono = "⚡"; msg = "MITAD DE LA META";
    } else {
        color = "#b71c1c"; icono = "✗"; msg = "DEBAJO DE LA META — REVISAR";
    }
    document.getElementById("resultadoAlerta").innerHTML =
        `<b style="color:${color};font-size:22px;">${icono} ${msg}</b><br>
         Valor actual: $${valor.toFixed(2)}<br>
         Meta: $${meta.toFixed(2)}<br>
         Cumplimiento: ${pct.toFixed(1)}%`;
}

function analizarConsumo(){
    let texto = document.getElementById("consumoDatos").value.trim();
    if(texto==""){
        alert("Ingrese los datos de consumo.");
        return;
    }
    let lineas = texto.split("\n").filter(l => l.trim());
    let categorias = [];
    let total = 0;
    for(let linea of lineas){
        let partes = linea.split(",").map(s => s.trim());
        if(partes.length>=2){
            let nombre = partes[0];
            let valor = parseFloat(partes[1]);
            if(!isNaN(valor)){
                categorias.push({nombre, valor});
                total += valor;
            }
        }
    }
    if(categorias.length===0){
        alert("No se pudieron leer los datos. Use formato: Nombre,Valor");
        return;
    }
    let html = `<b>Distribución de Gastos</b><br><table style="width:100%;margin-top:10px;"><thead><tr><th>Categoría</th><th>Valor</th><th>%</th></tr></thead><tbody>`;
    for(let c of categorias.sort((a,b)=>b.valor-a.valor)){
        let pct = (c.valor/total)*100;
        html += `<tr><td>${c.nombre}</td><td>$${c.valor.toFixed(2)}</td><td>${pct.toFixed(1)}%</td></tr>`;
    }
    html += `<tr style="background:#dbeafe;font-weight:bold;"><td>TOTAL</td><td>$${total.toFixed(2)}</td><td>100%</td></tr></tbody></table>`;
    document.getElementById("resultadoConsumo").innerHTML = html;
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