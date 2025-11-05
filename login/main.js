if (!localStorage.getItem("User")) {
    localStorage.setItem("User", "Artur")
    localStorage.setItem("Senha", "12345678")
}

function login(){
    const user = document.getElementById('usuario').value
    const senha = document.getElementById('senha').value
    if(user.trim() === "" || senha.trim() === ""){
        window.alert("Usuário ou Senha vazios")
    }
    else if(
        (user == localStorage.getItem("User")) && (senha == localStorage.getItem("Senha")) 
    ){
        window.location.href = "cliente.html"
        window.alert("Bem vindo!")
    }
    else{
        alert("Usuario ou Senha errada")
    }
}

function registrar(){   
    const user = document.getElementById('novo_user').value
    const senha = document.getElementById('nova_senha').value
    if(user.trim() === "" || senha.trim() === ""){
        window.alert("Usuário ou Senha vazios")
    }
    else{
        localStorage.setItem("User",user)
    localStorage.setItem("Senha",senha)
    window.alert("Registro feito com sucesso") }  
}