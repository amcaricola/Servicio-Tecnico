class ServiceOrder {
  constructor({
    _id,
    docID,
    numeroFactura,
    clienteFactura,
    fechaFactura,
    numeroEntrada,
    fechaEntrada,
    itemEntrada,
    numeroSalida,
    fechaSalida,
    tallerSalida,
    numeroOT,
    fechaOT,
    conclusion,
    comentario,
    cerrado,
  }) {
    this._id = _id;
    this.docID = docID;
    this.numeroFactura = numeroFactura;
    this.clienteFactura = clienteFactura;
    this.fechaFactura = fechaFactura;
    this.numeroEntrada = numeroEntrada;
    this.fechaEntrada = fechaEntrada;
    this.itemEntrada = itemEntrada;
    this.numeroSalida = numeroSalida;
    this.fechaSalida = fechaSalida;
    this.tallerSalida = tallerSalida;
    this.numeroOT = numeroOT;
    this.fechaOT = fechaOT;
    this.conclusion = conclusion;
    this.comentario = comentario;
    this.cerrado = cerrado;
  }
}

export default ServiceOrder;
