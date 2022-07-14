import {orders} from "./getTabla.js"
import Orders from "./ordersModel.js"
import {postItem} from "./CRUD.js"


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

            d.querySelector(modal.title).textContent = "Agregar orden de trabajo"
            
            let item =  d.querySelectorAll(".itemEntradam")
            item.forEach(e => {e.style.visibility = "visible"})


            d.querySelector(modal.idOT).textContent = `${orders.length +1}`
            d.querySelector(modal.docNumber).value = ""
            d.querySelector(modal.docDate).value = ""
            d.querySelector(modal.docClient).value = ""
            d.querySelector(modal.product).value = ""
            d.querySelector(modal.comment).value = ""    
            d.querySelector(modal.add).textContent = "Agregar" 
            d.querySelector(modal.add).dataset.action = "agregar" 
        }


        // BOTON DE "AGREGAR" EN MODAL
        if (e.target.matches(modal.add)){
            if(e.target.dataset.action == "agregar"){

                let date =  d.querySelector(modal.docDate).value

                if (!/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(date)) {
                    return alert("La fecha no es valida!")
                }
                
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

                
                d.querySelector(blackscreen).classList.toggle("modalActive")
                
                postItem(orders[id])
    
                
            }

        }



    })


}