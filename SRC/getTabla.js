import Orders from "./ordersModel.js"

let d = document,
 orders = []

export function estado(item){

    if(item.conclusion) {return "Cerrada"}
    if(item.numeroOT) {return "Analisis"}
    if(item.numeroSalida) {return "Preparacion"}
    if(item.numeroEntrada) {return "recibido"}
    if(item.numeroFactura) {return "solicitud"}
}


export async function traerDatos (tabla, template) {

    let $tabla = d.getElementById(tabla)
    let $fragment = d.createDocumentFragment()
    let $template = document.getElementById(template).content


    try{
        let peticion = await fetch("https://sertecslm.herokuapp.com/api/orders")

        let informacion = await peticion.json(); 

        
        let index = 0;
        
        for (let i of informacion){
            
            orders.push(new Orders(i)) 
            

            
            $template.querySelector(".docID").textContent = i.docID
            $template.querySelector(".itemEntrada").textContent = i.itemEntrada
            $template.querySelector(".numeroFactura").textContent = i.numeroFactura
            $template.querySelector(".clienteFactura").textContent = i.clienteFactura
            $template.querySelector(".numeroEntrada").textContent = i.numeroEntrada
            $template.querySelector(".numeroSalida").textContent = i.numeroSalida
            $template.querySelector(".tallerSalida").textContent = i.tallerSalida
            $template.querySelector(".numeroOT").textContent = i.numeroOT
            $template.querySelector(".conclusion").textContent = i.conclusion
            $template.querySelector(".estado").textContent = estado(i)

            $template.querySelector(".docID").dataset.id = index
            $template.querySelector(".itemEntrada").dataset.id = index
            $template.querySelector(".numeroFactura").dataset.id = index
            $template.querySelector(".clienteFactura").dataset.id = index
            $template.querySelector(".numeroEntrada").dataset.id = index
            $template.querySelector(".numeroSalida").dataset.id = index
            $template.querySelector(".tallerSalida").dataset.id = index
            $template.querySelector(".numeroOT").dataset.id = index
            $template.querySelector(".conclusion").dataset.id = index
            $template.querySelector(".estado").dataset.id = index
            
            index ++
            
            let $clone  = d.importNode($template,true)
            $fragment.appendChild($clone)
            
        }   
        $tabla.querySelector("tbody").appendChild($fragment)
        
        console.log (orders)
        
    }catch(err){
        let message = err.statusText  || "Ocurrio un Error"
        console.log( "beforebegin", `<p><b> Error: ${err.status}: ${message} </b></p>`)
    }
}

export {orders}


