import React from 'react';

export default function Addbtn ({click, logging}) {


    

    return (
    <>
        <button onClick={click} style={logging ? {visibility: "visible"} :{visibility: "hidden"}}>Agregar nueva Orden</button>
    </>
    )
    
}
