var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function inactiveSubmit(){
    document.getElementById('submitBtn').disabled=true;
}
function activeSubmit(){
    document.getElementById('submitBtn').disabled=false;
}

window.onload = function(){ 
    changes()
}

function changes(){
    document.getElementById("user").addEventListener("change", function(){
        return UserValidate()
    })
    document.getElementById("mail").addEventListener("change", function(){
       return MailValidate()
    })
    document.getElementById("password").addEventListener("change", function(){
        return PasswordValidate()
    })
    document.getElementById("confirm").addEventListener("change", function(){
        return ConfirmValidate()
    })
}

function UserValidate(e) {
    var user = document.getElementById('user');
    var userError = document.getElementById('usererror');

    if (user.value.trim().length == 0) {
        userError.removeAttribute("hidden");
        userError.innerHTML = "Debes ingresar un usuario";
        inactiveSubmit()
    }else if(user.value.trim().length < 5){
        userError.removeAttribute("hidden");
        userError.innerHTML = "Tu usuario debe tener al menos 5 caracteres";
        inactiveSubmit()
    }else if(user.value.trim().length > 15){
        userError.removeAttribute("hidden");
        userError.innerHTML = "Tu usuario debe tener maximo 15 caracteres";
        inactiveSubmit()
    }else{
        userError.setAttribute("hidden","true");
        activeSubmit()
    }
    return false;
}

function MailValidate() {
    var mail = document.getElementById('mail');
    var emailError = document.getElementById('mailerror');

    if (mail.value.trim().length == 0){
        emailError.removeAttribute("hidden");
        emailError.innerHTML = "Debes ingresar un correo";
        inactiveSubmit()
    }else if  (!exp.test(mail.value)) {
        emailError.removeAttribute("hidden");
        emailError.innerHTML = "Correo invalido";
        inactiveSubmit()
    }else{
        emailError.setAttribute("hidden","true");
        activeSubmit()
    }
    return false;
}

function PasswordValidate() {
    var password = document.getElementById('password');
    var passwordError = document.getElementById('passworderror');
    if (password.value.trim().length < 7 ) {
        passwordError.removeAttribute("hidden");
        passwordError.innerHTML = "La contraseña debe tener al menos 7 caracteres";
        inactiveSubmit()
    }else if (password.value.trim().length > 15 ) {
        passwordError.removeAttribute("hidden");
        passwordError.innerHTML = "La contraseña debe tener maximo 15 caracteres";
        inactiveSubmit()
    }else{
        passwordError.setAttribute("hidden","true");
        activeSubmit()
    }
    return false;
}

function ConfirmValidate() {
    var password = document.getElementById('password');
    var confirm = document.getElementById('confirm');
    var confirmError = document.getElementById('confirmerror');

    if (password.value.trim() != confirm.value.trim()) {
        confirmError.removeAttribute("hidden");
        confirmError.innerHTML = "No coincide con contraseña";
        inactiveSubmit()
    }else{
        confirmError.setAttribute("hidden","true");
        activeSubmit()
    }
    return false;
}


