import { putItems } from "./CRUD.js";
import { orders } from "./getTabla.js";


let d = document;

export default function putButtons (blackscreen, modal) {
    
    let $bs = d.querySelector(blackscreen) 
    
    d.addEventListener("click", e => {
        
        if (e.target.matches(modal.add) && e.target.dataset.action != "agregar"){
            
            let id = d.querySelector(modal.title).dataset.id
            
            if (checkDate(modal)){return alert("La fecha no es valida!")}
            
            putNewInfo(id, e.target.dataset.action,modal)
                
            $bs.classList.toggle("modalActive")

            // console.log(orders[id])

            
            putItems(orders[id])

            alert("La orden fue Actualizada!")

            location.reload()


        }

    })

}


function putNewInfo (id,action,modal) {

    let docNum = d.querySelector(modal.docNumber).value
    let docDat = d.querySelector(modal.docDate).value
    let docCli = d.querySelector(modal.docClient).value
    let docProd = d.querySelector(modal.product).value
    let docComment = d.querySelector(modal.comment).value 

    switch(action){
        case "Factura":

            orders[id].numeroFactura = docNum
            orders[id].fechaFactura = docDat
            orders[id].clienteFactura = docCli
            orders[id].itemEntrada = docProd


            break;

        case "Guia Entrada":    
        
            orders[id].numeroEntrada = docNum
            orders[id].fechaEntrada = docDat
            orders[id].clienteFactura = docCli



            break;

        case "Guia Salida": 



            orders[id].numeroSalida = docNum
            orders[id].fechaSalida = docDat
            orders[id].tallerSalida = docCli

        break;

        case "OT Taller": 

            orders[id].numeroOT = docNum
            orders[id].fechaOT = docDat
            orders[id].tallerSalida = docCli

        break;

            
        case "conclusion":

            let radioform = d.getElementsByName("conclusion")

            radioform.forEach(e =>{
                if (e.checked === true) orders[id].conclusion = e.defaultValue
            })

        break;
        }
    
    orders[id].comentario = docComment

}

function checkDate(modal){

    let date =  d.querySelector(modal.docDate).value
    if (!/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(date)) { return true }
}

