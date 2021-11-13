function Acessar(){
    let email = $("#email").val();
    let senha = $("#senha").val();

    $.ajax({
        type: "POST",
        dataType:"json",
        url: './php/login.php',
        async: false,
        data: {
            email: email,
            senha: senha,
        },
        success: function(result){            
            if (result["acesso"]) {
                window.location.href = "../Dashboard/index.html";
            }else{
                alert("Usuário não cadastrado!")
            }
        }, 
    })

}