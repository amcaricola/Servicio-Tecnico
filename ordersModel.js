export default class Orders{
    constructor(ot){

            this._id = ot._id || "" ,

            this.docID= ot.docID, 
            
            
            this.numeroFactura = ot.numeroFactura,
            
            this.clienteFactura = ot.clienteFactura,
            
            this.fechaFactura = ot.fechaFactura,
            
        
            this.numeroEntrada = ot.numeroEntrada || "",
            
            this.fechaEntrada = ot.fechaEntrada || "",
            
            this.itemEntrada = ot.itemEntrada,
            
        
            this.numeroSalida = ot.numeroSalida || "",
            
            this.fechaSalida = ot.fechaSalida ||  "",
            
            this.tallerSalida = ot.tallerSalida || "",
            
        
            this.numeroOT = ot.numeroOT || "",
            
            this.fechaOT = ot.fechaOT || "",
            
        
            this.conclusion = ot.conclusion || "",
        
            this.comentario= ot.comentario

    }
}