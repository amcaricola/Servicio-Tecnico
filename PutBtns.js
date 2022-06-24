import { orders } from "./getTabla.js";


let d = document;

export default function putButtons (blackscreen, modal) {
    
    let $bs = d.querySelector(blackscreen) 

    d.addEventListener("click", e => {

        if (e.target.matches(modal.add)){

            // let date =  d.querySelector(modal.docDate).value

            // if (!/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(date)) {
            //     return alert("la fecha no es valida!")
            // }

            switch(e.target.dataset.action){
                case "Factura": 

                
        
                    break;
        
                case "Guia Entrada": 
                

        
                    break;
        
                case "Guia Salida": 
        

        
                    break;
        
                case "OT Taller": 

        
                    break;
            }


            $bs.classList.toggle("modalActive")
        }

    })

}
