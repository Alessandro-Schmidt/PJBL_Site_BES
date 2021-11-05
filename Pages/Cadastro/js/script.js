function AdicionarImagem(){
    let inputFoto = $('#input-foto');
    let sucessoFoto = $('.sucesso-foto');

    const [file] = inputFoto.files
    if (file) {
       sucessoFoto.style.display = 'block'; 
    }
}

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