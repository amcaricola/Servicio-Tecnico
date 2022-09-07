import React, { useState } from "react";
import { useEffect } from "react";
import { httpFetch } from "../helper/httpFetch";
import ServiceOrderModel from "../helper/ServiceOrder";
import { URL } from "../helper/URL";

const ServiceOrder = React.createContext({});

const ServiceOrderContext = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let getOrder = await httpFetch.get(URL);

        let data = [];

        data = getOrder.map((el) => {
          return new ServiceOrderModel(el);
        });

        setOrders(data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [setOrders]);

  return (
    <ServiceOrder.Provider value={{ orders, setOrders }}>
      {children}
    </ServiceOrder.Provider>
  );
};

export default ServiceOrder;
export { ServiceOrderContext };
