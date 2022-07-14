import {estado, orders} from "./getTabla.js"



let d = document

export default function tablaReporte (idWhitescreen, reporte) {

    let $contexMenu = d.querySelector(".contexMenu")
    let $ws = d.querySelector(idWhitescreen)

    d.addEventListener("click", e => {

        if (e.target.matches(`#liID`)){
            
            $ws.classList.toggle("wsActive")
            
            let id = parseInt(e.target.dataset.id)
            let otAsignada = orders[id]

            d.querySelector(reporte.title).textContent = `Reporte Completo de la orden: #${id +1}`
            d.querySelector(reporte.itemEntrada).textContent =  otAsignada.itemEntrada
            
            d.querySelector(reporte.numeroFactura).textContent = otAsignada.numeroFactura
            d.querySelector(reporte.clienteFactura).textContent = otAsignada.clienteFactura
            d.querySelector(reporte.fechaFactura).textContent = otAsignada.fechaFactura

            d.querySelector(reporte.numeroEntrada).textContent = otAsignada.numeroEntrada
            d.querySelector(reporte.clienteEntrada).textContent = otAsignada.clienteFactura
            d.querySelector(reporte.fechaEntrada).textContent = otAsignada.fechaEntrada

            d.querySelector(reporte.numeroSalida).textContent = otAsignada.numeroSalida
            d.querySelector(reporte.tallerSalida).textContent = otAsignada.tallerSalida
            d.querySelector(reporte.fechaSalida).textContent = otAsignada.fechaSalida

            d.querySelector(reporte.numeroOT).textContent = otAsignada.numeroOT
            d.querySelector(reporte.tallerOT).textContent = otAsignada.tallerSalida
            d.querySelector(reporte.fechaOT).textContent = otAsignada.fechaOT

            d.querySelector(reporte.conclusion).textContent = otAsignada.conclusion
            d.querySelector(reporte.estado).textContent = estado(otAsignada)
            d.querySelector(reporte.comentario).textContent = otAsignada.comentario


            $contexMenu.style.visibility = "hidden"

        }

        if (e.target.matches(reporte.close)) $ws.classList.toggle("wsActive")

    })
     

}