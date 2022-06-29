
let d = document

let logged = false

export function logging( btnlogging ,loggingScreen, password , checkAdmin, buttonClose, buttonADD){

    d.addEventListener("click" , e => {

        if (e.target.matches(btnlogging)){
            d.querySelector(loggingScreen).classList.toggle("loggingScreenOn")
        }

        if (e.target.matches(buttonClose)){
            d.querySelector(loggingScreen).classList.toggle("loggingScreenOn")  
        }

        if (e.target.matches(checkAdmin)){

            let pass = d.querySelector(password).value

            if (pass == "1234") {
                
                logged = true
    
                if (logged){
                    d.querySelector(loggingScreen).classList.toggle("loggingScreenOn")  
                    d.querySelector(btnlogging).style.visibility = "hidden"
                    d.querySelector(buttonADD).style.visibility = "visible"
                    return 
                    
                }
            }

            alert("Contraseña incorrecta!")
            
        }

    })

}


export { logged }