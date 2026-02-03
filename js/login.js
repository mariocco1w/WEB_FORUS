const aliasCorrecto ="pulguita";
const input = document.getElementById("alias");
const button = document.getElementById("login-btn");
const message = document.getElementById("login-message");

button.addEventListener("click", intentarLogin);
 
input.addEventListener("Keydown", e => {
    if(e.key === "Enter"){
        button.click();
    }
});

function intentarLogin(){
    const valor = input.value.trim().toLowerCase();
    if(valor === aliasCorrecto.toLowerCase()){
        console.log("login correcto, entrando ... ");
        window.location.assign("home.html");
    }else{
        console.log("Alias incorrecto",valor);
        message.textContent("Este sitio no esta echo para cualquier persona ... ");
        input.value = "";
    }
}