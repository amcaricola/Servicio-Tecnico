import ServiceOrder from "../helper/ServiceOrder";
import { httpFetch } from "./httpFetch";
import { URL } from "./URL";

const makeServiceCrud = (dataToChange, action, orders) => {
  let newOrder;

  if (action.name === "Agregar" && action.title === "Factura") {
    newOrder = new ServiceOrder({
      _id: crypto.randomUUID(), // NOTA -- ESTE ID LO GENERA EL SERVIDOR _id !!
      docID: orders.length + 1,
      numeroFactura: dataToChange.documento,
      clienteFactura: dataToChange.cliente,
      fechaFactura: dataToChange.fecha,
      numeroEntrada: "",
      fechaEntrada: "",
      itemEntrada: dataToChange.producto,
      numeroSalida: "",
      fechaSalida: "",
      tallerSalida: "",
      numeroOT: "",
      fechaOT: "",
      conclusion: "",
      comentario: dataToChange.comentario,
      cerrado: false,
    });

    const SingleOrder = httpFetch[action.method](URL, newOrder);
    return SingleOrder;
  }
};

export default makeServiceCrud;
