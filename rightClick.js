import {orders} from "./getTabla.js"

let w = window
let d = document


export default function rightClick (contexMenu){
    
    let $contexMenu = d.querySelector(contexMenu)
    
    d.addEventListener("contextmenu", e => {
        e.preventDefault()
        
        
        if (e.target.matches("td")){
            let id = e.target.dataset.id
            let otAsignada = orders[id]

            d.querySelector("#liID").textContent = `Documento seleccionado: # ${otAsignada.docID}`
            let $cm = d.querySelectorAll(".selector")
            $cm.forEach(e => {e.dataset.id = id;})


            $contexMenu.style.visibility = "visible"
            
            let wHeight = w.innerHeight
            
            if (e.clientY > (wHeight * 0.65)){

                $contexMenu.style.top = null
                $contexMenu.style.left = `${e.clientX}px `
                $contexMenu.style.bottom = `${wHeight - e.clientY}px`
                
            }else{
                $contexMenu.style.bottom = null
                $contexMenu.style.top = `${e.clientY}px `
                $contexMenu.style.left = `${e.clientX}px `


            }

        }
    })
    
    d.addEventListener("click", e => {
        if (!e.target.matches(`${contexMenu} div` )){
            $contexMenu.style.visibility = "hidden"
        }


        

        
    })



}