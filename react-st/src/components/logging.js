import React, {} from "react";
import "../App.css";

export let sessionValue = true

export default function Session({logging, In , Out}) {
  
  const loggingIn = () => {
    let password = document.querySelector("#logging-pass")
    if (password.value === "1234") {
      password.style.visibility = "hidden"
      password.value = ""
      In() 
    
    } else{
      alert("la Contraseña es incorrecta")
    } 
    
  }


  const loggingOut = () => {
      let password = document.querySelector("#logging-pass")
      password.style.visibility = "visible"
      Out()
  }

  return(
      <> 
        <div>
          {logging
            ? <h3 onClick={loggingOut}>LogOut</h3>
            : <h3 onClick={loggingIn}>LogIn</h3>}
  
            <input id="logging-pass" type="password" placeholder="ingresar como Maestro"/>
        </div>
      </>
    )
}