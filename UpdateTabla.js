


let d = document

export default function updateTabla(i, dataset = null){

    let $tabla = d.getElementById("table")
    let $template = document.getElementById("crud-template").content
    
    if (dataset) {
        //UPDATEAR EL QUE TIENE DATA SET CORRESPONDIENTE

    }else{
        // AGREGAR LAST 
        let index = i.docID -1
        
        $template.querySelector(".docID").textContent = i.docID
        $template.querySelector(".itemEntrada").textContent = i.itemEntrada
        $template.querySelector(".numeroFactura").textContent = i.numeroFactura
        $template.querySelector(".clienteFactura").textContent = i.clienteFactura
        $template.querySelector(".numeroEntrada").textContent = i.numeroEntrada
        $template.querySelector(".numeroSalida").textContent = i.numeroSalida
        $template.querySelector(".tallerSalida").textContent = i.tallerSalida
        $template.querySelector(".numeroOT").textContent = i.numeroOT
        $template.querySelector(".conclusion").textContent = i.conclusion
        $template.querySelector(".estado").textContent = i.estado
        
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
        
        let $clone  = d.importNode($template,true)
        $tabla.querySelector("tbody").appendChild($clone)
    }
    
    
    
}