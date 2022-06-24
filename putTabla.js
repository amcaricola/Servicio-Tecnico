import { orders } from "./getTabla.js";

let d = document

export default function updateModal(contexMenu,blackscreen, modal){

    let $contexMenu = d.querySelector(contexMenu)


    d.addEventListener("click", e => {
        
        if (e.target.matches(`${contexMenu} .selector`)){
            
            let id = e.target.dataset.id 
            let otAsignada = orders[id]

            switch (e.target.dataset.contexm){   
                case "factura":

                    updateView(blackscreen,modal,id,otAsignada,"Factura",true)

                    break;
                case "entrada":
                    updateView(blackscreen,modal,id,otAsignada,"Guia Entrada")

                    break;
                case "salida":
                    updateView(blackscreen,modal,id,otAsignada,"Guia Salida")
                    break;
                case "taller":
                    updateView(blackscreen,modal,id,otAsignada,"OT Taller")
                    break;
                case "conclucion":

                    break;

            }
            
            $contexMenu.style.visibility = "hidden"
        }
    })

}


function updateView(blackscreen,modal,id,otAsignada,proceso,producto = false){

    d.querySelector(blackscreen).classList.toggle("modalActive")
    let item =  d.querySelectorAll(".itemEntradam")

    if (producto){
       item.forEach(e => {e.style.visibility = "visible"})

    }else{
       item.forEach(e => {e.style.visibility = "hidden"})
    }

    let docnumber, docDate,docClient

    switch(proceso){
        case "Factura": 

        docnumber = otAsignada.numeroFactura
        docDate = otAsignada.fechaFactura
        docClient = otAsignada.clienteFactura

            break;

        case "Guia Entrada": 
        
        docnumber = otAsignada.numeroEntrada
        docDate = otAsignada.fechaEntrada
        docClient = otAsignada.clienteFactura

            break;

        case "Guia Salida": 

        docnumber = otAsignada.numeroSalida
        docDate = otAsignada.fechaSalida
        docClient = otAsignada.tallerSalida

            break;

        case "OT Taller": 

        docnumber = otAsignada.numeroOT
        docDate = otAsignada.fechaOT
        docClient = otAsignada.tallerSalida

            break;
    }

    d.querySelector(modal.product).value = otAsignada.itemEntrada  
    
    d.querySelector(modal.title).textContent = "Actualizar"
    d.querySelector(modal.title).dataset.id = id
    d.querySelector(modal.docTitle).textContent = proceso

    
    d.querySelector(modal.idOT).textContent = `${otAsignada.docID}`
    
    d.querySelector(modal.docNumber).value = docnumber
    d.querySelector(modal.docDate).value = docDate
    d.querySelector(modal.docClient).value = docClient
    
    
    d.querySelector(modal.comment).value = otAsignada.comentario  
    d.querySelector(modal.add).textContent = "Actualizar" 
    d.querySelector(modal.add).dataset.action = proceso

}