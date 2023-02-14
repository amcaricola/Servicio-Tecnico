import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import CompartirServicioTecnico from "../components/CompartirServicioTecnico";
import Loader from "../components/Loader";
import { httpFetch } from "../helper/httpFetch";
import ServiceOrderModel from "../helper/ServiceOrderModel";
import { URLservice, URLgrabado } from "../helper/URL";
import Home from "./Home";

const initialSelectedOrder = {
  check: false,
  order: null,
};

const Compartir = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[2];
  const [selectecOrder, setSelectedOrder] = useState(initialSelectedOrder);
  const [loader, setLoader] = useState(false);

  const ordersToUse = {
    ServicioTecnico: URLservice,
    ServicioGrabado: URLgrabado,
  };

  useEffect(() => {
    const handleMount = async () => {
      setLoader(true);
      try {
        const info = await httpFetch.get(`${ordersToUse[path]}/${id}`);

        const order = new ServiceOrderModel(info);
        if (!order.hasOwnProperty("_id")) {
          throw new Error("not found");
        }

        setSelectedOrder({
          check: true,
          order: order,
        });
      } catch {
        setSelectedOrder({
          check: true,
          order: null,
        });
      } finally {
        setLoader(false);
      }
    };

    handleMount();

    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      <Loader isActive={loader} />

      {selectecOrder.order && (
        <CompartirServicioTecnico order={selectecOrder.order} />
      )}

      {selectecOrder.check && !selectecOrder.order && (
        <Home
          word="Error 404"
          word2="UPS! Parece que la orden que buscas no existe..."
        />
      )}
    </>
  );
};

export default Compartir;
