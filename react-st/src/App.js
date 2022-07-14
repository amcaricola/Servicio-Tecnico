import "./App.css";
import React, { useState} from 'react';
import Session from "./components/logging";
import Addbtn from "./components/addBtn";
import FromCrud from "./components/formCrud";
import TableData from "./components/tableData";
import useAction from "./components/useAction";


export default function App() {

  const [ logging, setLogging ] = useState(false);
  const [ modal, setModal ] = useState(false)

  let loggingIn = () => setLogging(true);

  let loggingOut = () => setLogging(false);

  let activeModal = () => {
    (modal)
    ? setModal(false)
    : setModal(true)
  }

  // let actionMethod = (accion) => { useAction(accion)}
  
 
  return (
    <div className="App">

      <div className="header">
        <h1>Servicio tecnico</h1>
        <Session logging={logging} In={loggingIn} Out={loggingOut}/>
      </div>

      <section className="section">

        <div className="aside">
          <Addbtn click={activeModal} logging={logging} />
        </div>

        <div className="content">
          <TableData/>
        </div>

      </section>

      <FromCrud isActive={modal} clickClose={activeModal} action={actionMethod}/>

    </div>
  );
}

