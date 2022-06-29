import { orders } from "./getTabla.js";

let d = document

export default function updateModal(contexMenu,blackscreen, modal){

    let $contexMenu = d.querySelector(contexMenu)


    d.addEventListener("click", e => {
        
        if (e.target.matches(`${contexMenu} .selector`)){
            
            let id = e.target.dataset.id 
            let otAsignada = orders[id]

            // SOLO ASIGNA LOS VALORES EN LA TABLA DE BLACKSCREEN
            switch (e.target.dataset.contexm){   
                case "factura":
                    updateView(blackscreen,modal,id,otAsignada,"Factura","todo")
                    break;

                case "entrada":
                    updateView(blackscreen,modal,id,otAsignada,"Guia Entrada","noProducto")
                    break;

                case "salida":
                    updateView(blackscreen,modal,id,otAsignada,"Guia Salida","noProducto")
                    break;

                case "taller":
                    updateView(blackscreen,modal,id,otAsignada,"OT Taller","noProducto")
                    break;

                case "conclucion":
                    updateView(blackscreen,modal,id,otAsignada,"conclusion","nada")
                    break;

            }
            
            $contexMenu.style.visibility = "hidden"
            $contexMenu.querySelector(".selector").style.visibility = "hidden"
            
        }
    })

}


function updateView(blackscreen,modal,id,otAsignada,proceso,visible){

    d.querySelector(blackscreen).classList.toggle("modalActive")

    let idoc =  d.querySelectorAll(".numeroDocm")
    let idate =  d.querySelectorAll(".fechaDocm")
    let icli =  d.querySelectorAll(".clienteDocm")
    let item =  d.querySelectorAll(".itemEntradam")
    let iconclu = d.querySelectorAll(".conclum")

    switch(visible){
        case "todo" : 

            idoc.forEach(e => {e.style.visibility = "visible"})
            idate.forEach(e => {e.style.visibility = "visible"})
            icli.forEach(e => {e.style.visibility = "visible"})
            item.forEach(e => {e.style.visibility = "visible"})
            iconclu.forEach(e => {e.style.visibility = "hidden"})
            
        break;
        
        case "noProducto":
            
            idoc.forEach(e => {e.style.visibility = "visible"})
            idate.forEach(e => {e.style.visibility = "visible"})
            icli.forEach(e => {e.style.visibility = "visible"})
            
            item.forEach(e => {e.style.visibility = "hidden"})
            iconclu.forEach(e => {e.style.visibility = "hidden"})

            
        break;
            
        case "nada":
            idoc.forEach(e => {e.style.visibility = "hidden"})
            idate.forEach(e => {e.style.visibility = "hidden"})
            icli.forEach(e => {e.style.visibility = "hidden"})
            item.forEach(e => {e.style.visibility = "hidden"})
            
            iconclu.forEach(e => {e.style.visibility = "visible"})
                
        break;
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

        case "conclusion": 

            docnumber = otAsignada.numeroFactura
            docDate = otAsignada.fechaFactura
            docClient = otAsignada.clienteFactura
    
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