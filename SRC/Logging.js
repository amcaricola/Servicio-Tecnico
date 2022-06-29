
let d = document

function checktime () {

    let LastLoggedTime = localStorage.getItem("logged") || 0,   
        newLoggedTime = new Date().getTime(),
        checkLoggingTime =  parseInt(newLoggedTime) - parseInt(LastLoggedTime)

        console.log(checkLoggingTime)

    if (checkLoggingTime <= 300000){
        return true
    }else{
        return false
    }

}

let logged = checktime()

export function logging( btnlogging ,loggingScreen, password , checkAdmin, buttonClose, buttonADD){
    
    if (logged){
        d.querySelector(btnlogging).style.display = "none"
        d.querySelector(buttonADD).style.display = "block"
        return
    }

    d.addEventListener("click" , e => {

        if (e.target.matches(btnlogging)){
            d.querySelector(loggingScreen).classList.toggle("loggingScreenOn")
        }

        if (e.target.matches(buttonClose)){
            d.querySelector(loggingScreen).classList.toggle("loggingScreenOn")  
        }

        if (e.target.matches(checkAdmin)){

            let pass = d.querySelector(password).value

            if (pass == "slm2022") {
                
                logged = true
    
                if (logged){
                    d.querySelector(loggingScreen).classList.toggle("loggingScreenOn")  
                    d.querySelector(btnlogging).style.display = "none"
                    d.querySelector(buttonADD).style.display = "block"
                    let actualTimeLogged = new Date().getTime()
                    localStorage.setItem("logged", actualTimeLogged)
                    return 
                    
                }
            }

            alert("Contraseña incorrecta!")
            
        }

    })

}


export { logged }