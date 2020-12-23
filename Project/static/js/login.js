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
    document.getElementById("user").addEventListener("change", function(){
        UserValidate()
    })
    document.getElementById("password").addEventListener("change", function(){
        PasswordValidate()
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
