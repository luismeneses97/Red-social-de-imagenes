var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


window.onload = function(){ 
    return changes()
}

function validate(){
   return MailValidate()
}

function changes(){
    document.getElementById("mail").addEventListener("change", function(){
        MailValidate()
    })
}

function MailValidate() {
    var mail = document.getElementById('mail');
    var emailError = document.getElementById('mailerror');

    if (mail.value.trim().length == 0){
        emailError.removeAttribute("hidden");
        emailError.innerHTML = "Debes ingresar un correo";
        return false;
    }else if  (!exp.test(mail.value)) {
        emailError.removeAttribute("hidden");
        emailError.innerHTML = "Correo invalido";
        return false;
        }
        else{
        emailError.setAttribute("hidden","true");
    }
}
