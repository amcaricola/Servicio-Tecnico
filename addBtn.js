import {orders} from "./getTabla.js"
import Orders from "./ordersModel.js"
import postItem from "./postTabla.js"
import updateTabla from "./UpdateTabla.js"

let d = document


export default function addBtn(idBtn, blackscreen, modal){


    d.addEventListener("click", e => {

        // CIERRE DEL MODAL

        if (e.target.matches(modal.close)){
  
            d.querySelector(blackscreen).classList.toggle("modalActive")
        }


        // BOTON DE "AGREGAR ORDEN DE TRABAJO"

        if (e.target.matches(idBtn)){

            d.querySelector(blackscreen).classList.toggle("modalActive")
            
            d.querySelector(".itemEntrada").style.visibility = "visible"
            d.querySelector(modal.idOT).textContent = `${orders.length +1}`
            d.querySelector(modal.docNumber).value = ""
            d.querySelector(modal.docDate).value = ""
            d.querySelector(modal.docClient).value = ""
            d.querySelector(modal.product).value = ""
            d.querySelector(modal.comment).value = ""    
            d.querySelector(modal.add).dataset.action == "agregar" 
        }


        // BOTON DE "AGREGAR" EN MODAL
        if (e.target.matches(modal.add)){
            if(e.target.dataset.action == "agregar"){
                
                let id = orders.length
    
                orders.push(new Orders({
    
                        docID: id +1 ,
                        numeroFactura: d.querySelector(modal.docNumber).value,
                        clienteFactura: d.querySelector(modal.docClient).value,
                        fechaFactura: d.querySelector(modal.docDate).value,
                        itemEntrada: d.querySelector(modal.product).value,
                        comentario: d.querySelector(modal.comment).value 
    
                }))
                
                console.log(orders[id])
                
                


                updateTabla(orders[id])


                // postItem(orders[id])
    
    
                d.querySelector(blackscreen).classList.toggle("modalActive")
                alert("La ORDEN DE TRABAJO fue creada satisfactoraimente!")
    
    
                // location.reload()
                
            }

        }



    })


}