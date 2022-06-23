import {orders} from "./getTabla.js"


let d = document


export default function rightClick (contexMenu){
    
    let $contexMenu = d.querySelector(contexMenu)

    d.addEventListener("contextmenu", e => {
        e.preventDefault()


        if (e.target.matches("td")){
            let id = e.target.dataset.id
            let otAsignada = orders[id]
            d.querySelector("#liID").textContent = `Documento seleccionado: # ${otAsignada.docID}`
            d.querySelector("#liID").dataset.id = id;
            $contexMenu.style.visibility = "visible"
            $contexMenu.style.top = `${e.clientY}px `
            $contexMenu.style.left = `${e.clientX}px `
        }
    })
    
    d.addEventListener("click", e => {
        if (!e.target.matches(`${contexMenu} div` )){
            $contexMenu.style.visibility = "hidden"
        }


        if (e.target.matches(`${contexMenu} .selector`)){
            

            switch (e.target.dataset.action){
                case "factura":
                    break;
                case "entrada":
                    break;
                case "salida":
                    break;
                case "taller":
                    break;
                case "conclucion":
                    break;

            }
            
            $contexMenu.style.visibility = "hidden"
        }

        
    })



}