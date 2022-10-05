import { httpFetch } from "./httpFetch";
import { URLservice, URLgrabado } from "./URL";

const getOrders = async (setOrders, OrderModel, title) => {
  let URL;
  if (title === "servicio") URL = URLservice;
  if (title === "grabado") URL = URLgrabado;

  try {
    let getOrder = await httpFetch.get(URL);

    let data = [];

    data = getOrder.map((el) => {
      return new OrderModel(el);
    });

    setOrders(data);
  } catch (err) {
    alert("Error al conectarse a la base de datos!");
    console.log(err);
  }
};

export default getOrders;
