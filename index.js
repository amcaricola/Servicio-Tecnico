import addBtn from "./addBtn.js"
import {traerDatos, orders} from "./getTabla.js"
import tablaReporte from "./reporteTabla.js"
import rightClick from "./rightClick.js"



// Declaraciones de variables principales

let d = document



// CARGA DE OTRAS FUNCIONES NECESARIAS


d.addEventListener("DOMContentLoaded", e =>{
     
    traerDatos("table","crud-template")
    
    addBtn("#addBtn", ".blackscreen",{
        close: ".closeModal",
        title: "#modalTitle",
        idOT: "#modalID",
        docTitle : "#documentTitle",
        docNumber: "#numeroDoc",
        docDate: "#fechaDoc",
        docClient: "#clienteDoc",
        product: "#itemEntrada",
        comment: "#comentario",
        add:".accionModal"
    })

    rightClick(".contexMenu")
    
    tablaReporte(".whitescreen",{
        close: ".closeWS",
        title: "#titleReporte",
        itemEntrada: ".productoReporte",

        numeroFactura: ".idFacReporte",
        clienteFactura: ".sujetoFacReporte",
        fechaFactura: ".fechaFacReporte",

        numeroEntrada: ".idGeReporte",
        clienteEntrada: ".sujetoGeReporte",
        fechaEntrada: ".fechaGeReporte",

        numeroSalida: ".idGsReporte",
        tallerSalida: ".sujetoGsReporte",
        fechaSalida: ".fechaGsReporte",

        numeroOT: ".idOtReporte",
        tallerOT: ".sujetoOtReporte",
        fechaOT: ".fechaOtReporte",

        conclusion: ".conclucionReporte",
        estado: ".estadoReporte",
        comentario: ".comReporte"
    })

})




