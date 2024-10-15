let datosJson; //variable que almacenara los datos provenientes del json
//funcion con la cual se va a optener los datos del json
fetch('resumen.json')
.then(respuesta => respuesta.json())
.then((salida) => {
    datosJson = salida;

    //a los elementos del documento les brindo la siguiente informacion
    document.getElementById('nombreBanco').textContent = datosJson.banco;
    document.getElementById('sucursalBanco').textContent = datosJson.sucursal;
    document.getElementById('nombreCliente').textContent = datosJson.titular;
    document.getElementById('numCuenta').textContent = "Nro Cuenta: " + datosJson.nro_cuenta;
    document.getElementById('dolares').textContent = datosJson.saldo[0].monto  + " " + datosJson.saldo[0].moneda;//ojo primero accedo a la pocision en que se encuentra el objeto y una vez adentro pues con el .propiedad accedo a lo que necesito..
    document.getElementById('euros').textContent = datosJson.saldo[1].monto + " " + datosJson.saldo[1].moneda;
    document.getElementById('numCbu').textContent = "CBU: " + datosJson.cbu;
    document.getElementById('fecha') .textContent = "Abierta: " + datosJson.abierto;

})
.catch(function(error){
    console.log(error); //en caso de que algo suceda el error se imprime en consola
})