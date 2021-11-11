function MostrarSenha(e){
    let input = document.querySelector('#senha');

    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        e.classList.remove('fa-eye');
        e.classList.add('fa-eye-slash');
    } else {
        input.setAttribute('type', 'password');
        e.classList.remove('fa-eye-slash');
        e.classList.add('fa-eye');
    }
}

function MostrarConfirmacaoSenha(e){
    let input = document.querySelector('#confirmacaoSenha');

    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        e.classList.remove('fa-eye');
        e.classList.add('fa-eye-slash');
    } else {
        input.setAttribute('type', 'password');
        e.classList.remove('fa-eye-slash');
        e.classList.add('fa-eye');
    }
}

function ValidarEmail(email){
        let padraoEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        return padraoEmail.test(email); 
}

function VerificarSenhas(senha, senhaConfirmacao){
    if (senha == senhaConfirmacao && senha.length >= 8 && senhaConfirmacao.length >= 8) {
        return true;
    }else{
        alert("Suas senhas não correspondem ou possuem menos de 8 dígitos")
        return false;
    }
}

function VerificarTipoAcesso(tipoAcesso, codigoValidacao){
    if (tipoAcesso == 1 && codigoValidacao == '111111') {
        return true;
    }else if (tipoAcesso == 2 && codigoValidacao == '222222') {
        return true;
    }else if (tipoAcesso == 3 && codigoValidacao == '333333') {
        return true;
    }else if (tipoAcesso == 4 && codigoValidacao == '444444') {
        return true;
    }else{
        alert('O seu tipo de acesso não corresponde com o seu PIN');
        return false;
    }
}

function CadastrarUsuario(event){
    let tipo_acesso = $('.tipo').val(); 
    let nome = $('#nome').val();
    let email = $('#email').val();
    let senha = $('#senha').val();
    let confirmacaoSenha = $('#confirmacaoSenha').val();
    let codigoValidacao = $('#codigoValidacao').val();

    if (VerificarTipoAcesso(tipo_acesso, codigoValidacao) && VerificarSenhas(senha, confirmacaoSenha) && ValidarEmail(email) ) {
        $.ajax({
			type: "POST",
			dataType:"json",
			url: './php/cadastro_usuario.php',
			async: false,
			data: {
				tipo_acesso: tipo_acesso,
                nome: nome,
                email: email,
                senha: senha,
			},
			success: function(result){
                alert(result);
			}, 
		})
    }
    

}

