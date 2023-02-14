import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

import ContextMenu from "../components/ContextMenu";
import FromCrudPrint from "../components/FromCrudPrint";
import Loader from "../components/Loader";
import SideButton from "../components/SideButton";
import TablePrint from "../components/TablePrints";
import GlobalContex from "../context/GlobalContex";
import PrintOrderModel from "../helper/PrintOrderModel";

const ServicioGrabados = () => {
  const [filter, setFilter] = useState(false);

  const {
    logging,
    setModal,
    setAction,
    action,
    handleSingleOrder,
    printOrders,
    setPrintOrders,
  } = useContext(GlobalContex);

  useEffect(() => {
    setFilter(false);
    setAction({
      title: "grabado",
      name: "",
      method: "",
    });
    handleSingleOrder({});
    // eslint-disable-next-line
  }, []);

  const handleClickAgregar = () => {
    setAction(function (old) {
      return { ...old, ...{ name: "postGrabado", method: "post" } };
    });
    handleSingleOrder({}, "post");
    setModal(true);
  };
  // const handleTableDataChange = async (value) => {
  //   try {
  //     let data = await value;
  //     if (action.method === "post") {
  //       const PrintUpdateData = new PrintOrderModel(data);
  //       setPrintOrders((oldData) => oldData.concat(PrintUpdateData));
  //     }

  //     if (action.method === "put") {
  //       const PrintUpdateData = new PrintOrderModel(data);
  //       const newData = printOrders.map((el) =>
  //         el._id === PrintUpdateData._id ? PrintUpdateData : el
  //       );
  //       setPrintOrders(newData);
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
            title={!filter ? "Grabados Concluidos" : "Grabados Activos"}
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
            <h2>{filter ? "Grabados Concluidos" : "Grabados Activos"}</h2>
          </div>
          <TablePrint filter={filter} />
        </div>
      </section>

      <FromCrudPrint
      // handleTableDataChange={handleTableDataChange}
      />
      <ContextMenu />
      <Loader />
    </>
  );
};

export default ServicioGrabados;
