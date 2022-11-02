function estado(item) {
  if (item.cerrado) {
    return "CERRADO";
  }
  if (item.conclusion) {
    return "ENTREGAR";
  }
  if (item.numeroOT) {
    return "ANALISIS";
  }
  if (item.numeroSalida) {
    return "PREPARACION";
  }
  if (item.numeroEntrada) {
    return "RECIBIDO";
  }
  if (item.numeroFactura) {
    return "SOLICITUD";
  }
}

class ServiceOrderModel {
  constructor({
    id,
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
    this._id = _id || id;
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
    this.estado = estado(this);
  }
}

export default ServiceOrderModel;
