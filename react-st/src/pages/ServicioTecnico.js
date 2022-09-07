import "../App.css";
import React, { useState, useContext } from "react";
import SideButton from "../components/SideButton";
import TableService from "../components/TableService";
import FromCrud from "../components/FormCrud";
import LoginContext from "../context/LoginContext";
import ActionServiceContext from "../context/ActionServiceContext";
import ServiceOrderContext from "../context/ServiceOrderContext";
import ContextMenu from "../components/ContextMenu";
import ReportModal from "../context/ReportModal";

const initialData = {
  documento: "",
  fecha: "",
  cliente: "",
  producto: "",
  comentario: "",
};

const ServicioTecnico = () => {
  const { logging } = useContext(LoginContext);
  const { setOrders } = useContext(ServiceOrderContext);
  const { setAction } = useContext(ActionServiceContext);
  const { setActiveModal } = useContext(ReportModal);

  // const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState(false);

  const [dataToChange, setDataToChange] = useState(initialData);

  const handleClickAgregar = () => {
    setDataToChange(initialData);
    setAction({
      name: "Agregar",
      method: "post",
    });
    setActiveModal(true);
  };

  const handleTableDataChange = async (value, method) => {
    try {
      let data = await value;
      method === "post"
        ? setOrders((oldData) => oldData.concat(data))
        : console.log("put"); // verificar el metodo de agregar cuando ya este disponible
    } catch (err) {
      console.log(err);
    }
  };

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
          <h2>{filter ? "Ordenes Cerradas" : "Ordenes Activas"}</h2>
          <TableService filter={filter} />
        </div>
      </section>

      <FromCrud
        dataToChange={dataToChange}
        setDataToChange={setDataToChange}
        handleTableDataChange={handleTableDataChange}
      />
      <ContextMenu />
    </>
  );
};

export default ServicioTecnico;
