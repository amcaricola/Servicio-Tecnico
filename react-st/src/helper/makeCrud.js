import { httpFetch } from "./httpFetch";
import PrintOrderModel from "./PrintOrderModel";
import ServiceOrderModel from "./ServiceOrderModel";
import { URLservice, URLgrabado } from "./URL";

const checkProcess = (actionTitle) => {
  // console.log(actionTitle);
  if (actionTitle === "grabado") {
    return {
      URL: URLgrabado,
      modelOrder: PrintOrderModel,
    };
  }
  if (actionTitle === "servicio") {
    return {
      URL: URLservice,
      modelOrder: ServiceOrderModel,
    };
  }
};

const makeCrud = async (form, action, singleOrder) => {
  let { URL, modelOrder } = checkProcess(action.title);

  const orderToWork = new modelOrder(singleOrder);

  let usedURL = singleOrder._id ? `${URL}/${singleOrder._id}` : URL;

  //CRUD DE SERVICIO

  if (action.name === "postFactura" || action.name === "updateFactura") {
    orderToWork.numeroFactura = form.documentoID;
    orderToWork.clienteFactura = form.sujeto;
    orderToWork.fechaFactura = form.fecha;
    orderToWork.itemEntrada = form.producto;
  }

  if (action.name === "updateEntrada") {
    orderToWork.numeroEntrada = form.documentoID;
    orderToWork.clienteFactura = form.sujeto;
    orderToWork.fechaEntrada = form.fecha;
    orderToWork.itemEntrada = form.producto;
  }

  if (action.name === "updateSalida") {
    orderToWork.numeroSalida = form.documentoID;
    orderToWork.tallerSalida = form.sujeto;
    orderToWork.fechaSalida = form.fecha;
    orderToWork.itemEntrada = form.producto;
  }

  if (action.name === "updateTaller") {
    orderToWork.numeroOT = form.documentoID;
    orderToWork.tallerSalida = form.sujeto;
    orderToWork.fechaOT = form.fecha;
    orderToWork.itemEntrada = form.producto;
  }

  if (action.name === "updateConclusion") {
    orderToWork.conclusion = form.conclusion;
  }

  // CRUD GRABADOS
  if (action.name === "postGrabado") {
    orderToWork.notaVenta = form.notaVenta;
    orderToWork.tallerSalida = form.tallerSalida;
    orderToWork.numeroSalida = form.numeroSalida;
    orderToWork.fechaSalida = form.fechaSalida;
    orderToWork.producto = form.producto;
    orderToWork.cantidad = form.cantidad;
    orderToWork.comentario = form.comentario;
  }

  if (action.name === "putGrabado") {
    orderToWork.notaVenta = form.notaVenta;
    orderToWork.tallerSalida = form.tallerSalida;
    orderToWork.numeroSalida = form.numeroSalida;
    orderToWork.fechaSalida = form.fechaSalida;
    orderToWork.producto = form.producto;
    orderToWork.cantidad = form.cantidad;
    orderToWork.comentario = form.comentario;
    orderToWork.factura = form.factura;
  }

  // CRUD ADICIONAL PARA AMBOS SERVICIOS

  if (!singleOrder.cerrado) {
    if (action.name === "updateCierre" || action.name === "cierreGrabado") {
      orderToWork.cerrado = true;
    } else {
      orderToWork.cerrado = false;
    }
  }
  orderToWork.comentario = form.comentario;

  //fetch function
  const newData = await httpFetch[action.method](usedURL, orderToWork);
  // console.log(newData);
  if (newData.acknowledged) {
    return orderToWork;
  }
  return newData;
};

export default makeCrud;
