for(let i=1; i<=7; i++){
    let UsuarioQuemiraLaPagina= prompt('Ingrese su nombre');
    alert('Usuario: '+UsuarioQuemiraLaPagina+" - Perona nro "+i);
}
alert('Al terminar el mes se cierra el conteo s')
console.log('CantidadDeUsuarios')
let total=0
for(let i=1; i<=10; ++i){
    let precio = parseFloat(prompt('Ingrese el precio del producto (0 para salir) '+i));
    if (precio==0){
        break;
    }
    let precioConIva=precio*1.21;
    alert('El precio con iva $'+precioConIva)
    sumarMonto(precioConIva)
console.log('PrecioConIva')
}

function sumarMonto(monto){
    total+=monto;
    alert ('Llevas gastado $'+total)

     
   
    
}    
     
    function restarIva(precio){
        let precioConIva = precio * 1.21;
        console.log(precioConIva);} 
    
    function aplicarIva(precio){
        let precioConIva = precio * 1.21;
        console.log(precioConIva);
        return precioConIva;}
    
    let precioFinal=parseFloat(prompt('Ingrese el monto final de su compra'))
    let modoPago = prompt('Ingrese su modo de pago Efectivo, Debito, Credito, Fin de la compra Salir');
    
    while(modoPago!='4'){
        if(modoPago=='1'){
        let precioConIva = aplicarIva(precioFinal)
            alert('Paga en efectivo');
            alert('Precio con iva es'+ precioConIva)
        
        }
    
        if (modoPago=='2'){
        let devolverIva= restarIva(precioFinal);
            alert('Paga con debito')
            alert('Precio sin iva es - precioConIva')
        }
        
        if(modoPago=='3'){
        let aplicarRecargo= multiplicarRecargo + dividirRecargo + recargo(precioFinal);
            let multiplicarRecargo= precio * 15
            let dividirRecargo=PrecioRecargo /100
            let recargo= (PrecioRecargo + precioFinal)
            alert('Paga con credito')
            alert('multiplicaRecargo + dividirRecargo + recargo')
        } 
           
        if (modoPago=='4'){
            alert('Fin de compra pulse s rara salir')
            alert('Pulse s para salir')
        }   
    }