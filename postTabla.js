
export default async function postItem(ot){

    try{

        let imprimir = await fetch("https://sertecslm.herokuapp.com/api/orders", {
            method:"POST",
            headers:{
                "Content-type" : "application/json; charset=utf-8"
            },
            body: JSON.stringify({

                    docID: ot.docID, 
                    
                    
                    numeroFactura: ot.numeroFactura,
                    
                    clienteFactura: ot.clienteFactura,
                    
                    fechaFactura: ot.fechaFactura,
                    
                
                    numeroEntrada: "",
                    
                    fechaEntrada: "",
                    
                    itemEntrada: ot.itemEntrada,
                    
                
                   numeroSalida: "",
                    
                    fechaSalida: "",
                    
                    tallerSalida: "",
                    
                
                    numeroOT: "",
                    
                    fechaOT: "",
                    
                
                    conclusion:"",
                
                    comentario: ot.comentario

            })
        })

    }catch(err){
        let message = err.statusText  || "Ocurrio un Error"
        console.log( "beforebegin", `<p><b> Error: ${err.status}: ${message} </b></p>`)
    }

}