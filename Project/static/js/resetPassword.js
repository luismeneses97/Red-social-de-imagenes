window.onload = function(){ 
    changes()
}

function inactiveSubmit(){
    document.getElementById('submitBtn').disabled=true;
}
function activeSubmit(){
    document.getElementById('submitBtn').disabled=false;
}

function changes(){
    document.getElementById("password").addEventListener("change", function(){
        PasswordValidate()
    })
    document.getElementById("confirm").addEventListener("change", function(){
        ConfirmValidate()
    })
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