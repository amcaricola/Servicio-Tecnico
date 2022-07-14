import React, { useEffect, useState } from 'react';
import "../App.css"

export default function FromCrud ({isActive, clickClose , action}) {
    
let [modal, setModal] = useState(isActive)

useEffect(()=>{setModal(isActive)}, [isActive])


    return(
        <>
            <div className={modal ? "blackscreen modalActive" : "blackscreen"}>
                <div className='modal'>

                <button onClick={clickClose} className="closeModal x-buttonModal">X</button>

                    <h2>titulo</h2>

                    <div>
                        <h5>Orden de trabajo: # </h5>
                    </div>

                    <h3>documento title</h3>

                    <label htmlFor="numeroDoc">Numero de documento:</label>
                    <input type="text" id="numeroDoc" placeholder="Numero de Documento" autoComplete="disable"/>

                    <label htmlFor="fechaDoc">Fecha del documento:</label>
                    <input type="text" id="fechaDoc" placeholder="dd/mm/yyyy" autoComplete="disable"/>

                    <label htmlFor="clienteDoc" >Cliente del documento:</label>
                    <input type="text" id="clienteDoc"  placeholder="cliente del documento" autoComplete="disable"/>

                    <label htmlFor="itemEntrada" >Codigo del Producto:</label>
                    <input type="text" id="itemEntrada"  placeholder="Producto" autoComplete="disable"/>

                    <form className="conclum">  
                        <div>
                            <input type="radio" id="concluReparacion" value="REPARACION" name="conclusion"/>
                            <label htmlFor="concluReparacion" >Reparacion por Taller</label>
                        </div> 

                        <div>
                            <input type="radio" id="concluCambio" value="CAMBIO" name="conclusion"/>
                            <label htmlFor="concluCambio" >Cambio nuevo producto</label>
                        </div>

                        <div>
                            <input type="radio" id="concluNotacredito" value="NOTA CREDITO" name="conclusion"/>
                            <label htmlFor="concluNotacredito" >Nota de credito a Cliente</label>
                        </div>

                    </form>

                    <p>Comentario:</p>
                    <textarea name="comentario" id="comentario" cols="30" rows="10"></textarea>
                    <div className="btnsm">
                        <button onClick={clickClose} className="closeModal">Cerrar</button>
                        <button className="accionModal" onClick={() =>{ 
                            clickClose() 
                            console.log(action)
                        }}>Agregar</button>
                    </div>

                </div>
            </div>
        </>
    )
}