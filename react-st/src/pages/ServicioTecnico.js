import "../App.css";
import React, { useState } from "react";
import SideButton from "../components/SideButton";
import TableService from "../components/TableService";
import FromCrud from "../components/FormCrud";
import { useEffect } from "react";
import { httpFetch } from "../helper/httpFetch";
import LoginContext from "../context/LoginContext";
import { useContext } from "react";

let url = "https://api.amcaricola.com/sertec-slm/db.json";

const initialAction = {
  name: "",
  title: "",
  method: "",
};

const initialData = {
  documento: "",
  fecha: "",
  cliente: "",
  producto: "",
  comentario: "",
};

const ServicioTecnico = () => {
  const { logging } = useContext(LoginContext);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [crudAction, setCrudAction] = useState(initialAction);
  const [dataToChange, setDataToChange] = useState(initialData);

  useEffect(() => {
    const getData = async () => {
      try {
        let data = await httpFetch.get(url);
        setTableData(data);
      } catch {}
    };

    getData();
  }, []);

  const handleTableDataChange = (value) => {
    setTableData((oldValue) => [...oldValue, value]);
  };

  return (
    <>
      <section className="section">
        <div className="aside">
          <SideButton
            title={!filter ? "Ver OT Cerradas" : "ver OT Activas"}
            click={() => (!filter ? setFilter(true) : setFilter(false))} // funcion de cambio de la tabla
            visibility={true}
            modal={modal}
            setCrudAction={setCrudAction}
          />
          <SideButton
            title="Agregar Orden"
            click={() => {
              setDataToChange(initialData);
              setModal(true);
            }}
            visibility={logging}
          />
        </div>

        <div className="content">
          <TableService filter={filter} data={tableData} />
        </div>
      </section>

      <FromCrud
        modal={modal}
        setModal={setModal}
        action={crudAction}
        dataToChange={dataToChange}
        setDataToChange={setDataToChange}
        tableData={tableData}
        handleTableDataChange={handleTableDataChange}
      />
    </>
  );
};

export default ServicioTecnico;
