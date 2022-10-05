function estado(item) {
  if (item.cerrado) {
    return "CERRADO";
  }
  if (item.factura) {
    return "EN BODEGA";
  }
  if (item.notaVenta) {
    return "EN TALLER";
  }
}

class PrintOrderModel {
  constructor({
    id,
    _id,
    notaVenta,
    tallerSalida,
    numeroSalida,
    fechaSalida,
    producto,
    cantidad,
    comentario,
    factura,
    cerrado,
  }) {
    this._id = _id || id;
    this.notaVenta = notaVenta;
    this.tallerSalida = tallerSalida;
    this.numeroSalida = numeroSalida;
    this.fechaSalida = fechaSalida;
    this.producto = producto;
    this.cantidad = cantidad;
    this.comentario = comentario;
    this.cerrado = cerrado;
    this.factura = factura;
    this.estado = estado(this);
  }
}

export default PrintOrderModel;
