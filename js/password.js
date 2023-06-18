function show_password(){

    var senha = document.getElementById("i_senha");
    var confirmaSenha = document.getElementById("i_confirmaSenha");

    if(senha.type === "password"){
        senha.type = "text";
    }else{
        senha.type = "password";
    }

    if(confirmaSenha.type === "password"){
        confirmaSenha.type = "text";
    }else{
        confirmaSenha.type = "password";
    }

}