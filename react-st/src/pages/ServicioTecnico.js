import "../App.css";
import React, { useState, useContext, useEffect } from "react";
import SideButton from "../components/SideButton";
import TableService from "../components/TableService";
import FromCrudServices from "../components/FromCrudServices";
import GlobalContex from "../context/GlobalContex";
import ContextMenu from "../components/ContextMenu";
import ServiceOrderModel from "../helper/ServiceOrderModel";
import Loader from "../components/Loader";

const ServicioTecnico = () => {
  const [filter, setFilter] = useState(false);

  const {
    logging,
    setModal,
    setAction,
    action,
    handleSingleOrder,
    setServiceOrders,
    serviceOrders,
  } = useContext(GlobalContex);

  useEffect(() => {
    setFilter(false);
    setAction({
      title: "servicio",
      name: "",
      method: "",
    });
    handleSingleOrder({});
    // eslint-disable-next-line
  }, []);

  const handleClickAgregar = () => {
    setAction(function (old) {
      return { ...old, ...{ name: "postFactura", method: "post" } };
    });
    handleSingleOrder({}, "post");
    setModal(true);
  };

  // const handleTableDataChange = async (value) => {
  //   try {
  //     let data = await value;
  //     if (action.method === "post") {
  //       const serviceUpdateData = new ServiceOrderModel(data);
  //       setServiceOrders((oldData) => oldData.concat(serviceUpdateData));
  //     }

  //     if (action.method === "put") {
  //       const serviceUpdateData = new ServiceOrderModel(data);
  //       const newData = serviceOrders.map((el) =>
  //         el._id === serviceUpdateData._id ? serviceUpdateData : el
  //       );
  //       setServiceOrders(newData);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <section className="section">
        <div className="aside">
          <SideButton
            title={!filter ? "Ordenes Cerradas" : "Ordenes Activas"}
            click={() => (!filter ? setFilter(true) : setFilter(false))} // funcion de cambio de la tabla
            visibility={true}
          />
          <SideButton
            title="Agregar Orden"
            click={handleClickAgregar}
            visibility={logging}
          />
        </div>

        <div className="content">
          <div className="content-header">
            <h2>{filter ? "Ordenes Cerradas" : "Ordenes Activas"}</h2>
          </div>
          <TableService filter={filter} />
        </div>
      </section>

      <FromCrudServices
      // handleTableDataChange={handleTableDataChange}
      />
      <ContextMenu />
      <Loader />
    </>
  );
};

export default ServicioTecnico;
