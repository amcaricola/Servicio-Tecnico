import React, { useState, useEffect } from 'react';

export default function TableData () {

    const [table , setTable] = useState([])

    useEffect(()=>{

        const getTable = async () => {

            try{
                let data = await fetch("https://api.amcaricola.com/sertec-slm/db.json")
                let info = await data.json()

                let arr = []
                info.forEach(line => {  

                    line.estado = "Estado"

                    arr.push(line)
                })

                setTable(arr)

            }catch{ }
        }
        getTable()


    },[])


    return (
        <>
            <table>

                <thead>
                    <tr>
                        <th>Doc ID</th>
                        <th>Producto</th>
                        <th>Factura</th>
                        <th>Cliente</th>
                        <th>Guia de Entrada</th>
                        <th>Guia de Salida</th>
                        <th>Taller de Servicio</th>
                        <th>Orden de Trabajo</th>
                        <th>Conclusion</th>
                        <th>Estado</th>
                    </tr>                    
                </thead>

                <tbody>
                        {table.map(({
                            _id, 
                            docID,
                            itemEntrada,
                            numeroFactura,
                            clienteFactura,
                            numeroEntrada,
                            numeroSalida,
                            tallerSalida,
                            numeroOT,
                            conclusion,
                            estado
                        }) => {

                            

                            return (
                                <tr key={_id} id={_id} >
                                    <td >{docID}</td>
                                    <td >{itemEntrada}</td>
                                    <td >{numeroFactura}</td>
                                    <td >{clienteFactura}</td>
                                    <td >{numeroEntrada}</td>
                                    <td >{numeroSalida}</td>
                                    <td >{tallerSalida}</td>
                                    <td >{numeroOT}</td>
                                    <td >{conclusion}</td>
                                    <td >{estado}</td>
                                </tr>
                            )
                        })}
                </tbody>

            </table>
        </>
    )




}