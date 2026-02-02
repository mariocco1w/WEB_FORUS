const aliasCorrecto ="Pulguita";
const input = document.getElementary("alias");
const button = document.getElementById("login-btn");
const message = document.getElementById("login-message");

button.addEventListener("click",() => {
    const valor = input.vallue.trim();

    if(valor === aliasCorrecto){
        window.location.href= "home.html";
    }else{
        message.textContent ="ACCESO DENEGADO, ESTE LUGAR ES PARA ALGUIEN ESPECIAL";
        input.vallue="";
    }
});

input.addEventListener("Keydown", e => {
    if(e.key === "Enter"){
        button.click();
    }
});