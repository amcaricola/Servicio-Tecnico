import React from "react";

const CompartirServicioTecnico = ({ order }) => {
  const {
    clienteFactura,
    comentario,
    conclusion,
    docID,
    itemEntrada,
    numeroEntrada,
    numeroFactura,
    fechaEntrada,
    // cerrado,
    estado,
    // fechaFactura,
    fechaOT,
    fechaSalida,
    numeroOT,
    numeroSalida,
    // tallerSalida,
    // _id,
  } = order;

  const printEstado = {
    CERRADO: "Orden se encuentra Cerrada",
    ENTREGAR: "Entrega de informacion final a Cliente",
    ANALISIS: "Articulo en revision por Servicio tecnico",
    PREPARACION: "Articulo en preparacion para revision",
    RECIBIDO: "Articulo recibido por bodega para revision",
    SOLICITUD: "Articulo en solicitud de servicio tecnico",
  };

  const printConclusion = {
    REPARACION: "Reparacion de producto",
    CAMBIO: "Cambio de nuevo producto",
    // eslint-disable-next-line
    ["NOTA CREDITO"]: "Nota de credito a cliente",
    RECHAZADO: "Grarantia rechazada por servicio tecnico",
  };

  return (
    <div id="compartir-hoja">
      {console.log(order)}
      <h1>REPORTE DE SERVICIO TECNICO - SLM</h1>

      <div>
        <h3>DATOS GENERALES</h3>
        <table>
          <tbody>
            <tr>
              <th>ORDEN DE COMPRA</th>
              <td>{docID}</td>
            </tr>
            <tr>
              <th>CLIENTE</th>
              <td>{clienteFactura}</td>
            </tr>
            <tr>
              <th>FACTURA</th>
              <td>{numeroFactura}</td>
            </tr>
            <tr>
              <th>PRODUCTO</th>
              <td>{itemEntrada}</td>
            </tr>
            <tr>
              <th>GUIA DE INGRESO</th>
              <td>{numeroEntrada}</td>
            </tr>
            <tr>
              <th>FECHA DE INGRESO</th>
              <td>{fechaEntrada}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="compartir-comentario">
        <h3>COMENTARIO</h3>
        <div id="compartir-comentario-box">
          <p>{comentario}</p>
        </div>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>ESTADO ACTUAL</th>
              <th>CONCLUSION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{printEstado[estado]}</td>
              <td>{printConclusion[conclusion]}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />
      <div id="compartir-interno">
        <h3>USO INTERNO</h3>
        <div>
          <p>GS</p>
          <div className="compartir-check">
            {numeroSalida !== "" && <p className="compartir-interno-p">X</p>}
          </div>
          <div className="compartir-line">
            <p className="compartir-interno-p">{numeroSalida}</p>{" "}
          </div>
          <p>FECHA</p>
          <div className="compartir-line">
            <p className="compartir-interno-p">{fechaSalida}</p>{" "}
          </div>
        </div>

        <div>
          <p>OT</p>
          <div className="compartir-check">
            {numeroOT !== "" && <p className="compartir-interno-p">X</p>}
          </div>
          <div className="compartir-line">
            <p className="compartir-interno-p">{numeroOT}</p>{" "}
          </div>
          <p>FECHA</p>
          <div className="compartir-line">
            <p className="compartir-interno-p">{fechaOT}</p>{" "}
          </div>
        </div>

        <div>
          <p>FP</p>
          <div className="compartir-check" />
          <div className="compartir-line" />
          <p>FECHA</p>
          <div className="compartir-line" />
        </div>
      </div>
      <hr />

      <div id="compartir-firma">
        <div>
          <div className="compartir-firma-inline">
            <div className="compartir-check" />
            <p>ENTREGA DE PRODUCTO A BODEGA</p>
          </div>
          <div className="compartir-firma-inline">
            <div className="compartir-check" />
            <p>ENTREGA DE PRODUCTO A CLIENTE</p>
          </div>
        </div>
        <div>
          <div className="compartir-line" />
          <p>FIRMA Y RUT CLIENTE</p>
        </div>
      </div>
    </div>
  );
};

export default CompartirServicioTecnico;
