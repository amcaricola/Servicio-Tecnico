
export async function postItem(ot){

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

        alert("La ORDEN DE TRABAJO fue creada satisfactoraimente!")

        location.reload()

    }catch(err){
        let message = err.statusText  || "Ocurrio un Error"
        console.log( "beforebegin", `<p><b> Error: ${err.status}: ${message} </b></p>`)
    }

}


export async function putItems(ot){

    let id = ot._id

    try{

        let imprimir = await fetch(`https://sertecslm.herokuapp.com/api/orders/${id}`, {
            method:"PUT",
            headers:{
                "Content-type" : "application/json; charset=utf-8"
            },
            body: JSON.stringify({

                    docID: ot.docID, 
                    
                    
                    numeroFactura: ot.numeroFactura,
                    
                    clienteFactura: ot.clienteFactura,
                    
                    fechaFactura: ot.fechaFactura,
                    
                
                    numeroEntrada: ot.numeroEntrada,
                    
                    fechaEntrada: ot.fechaEntrada,
                    
                    itemEntrada: ot.itemEntrada,
                    
                
                   numeroSalida: ot.numeroSalida,
                    
                    fechaSalida: ot.fechaSalida,
                    
                    tallerSalida: ot.tallerSalida,
                    
                
                    numeroOT: ot.numeroOT,
                    
                    fechaOT: ot.fechaOT,
                    
                
                    conclusion: ot.conclusion,
                
                    comentario: ot.comentario

            })
        })

        alert("La orden fue Actualizada!")

        location.reload()

    }catch(err){
        let message = err.statusText  || "Ocurrio un Error"
        console.log( "beforebegin", `<p><b> Error: ${err.status}: ${message} </b></p>`)
    }




} 
