function AdicionarImagem(){
    let inputFoto = document.querySelector('#input-foto');
    let sucessoFoto = document.querySelector('.sucesso-foto');

    const [file] = inputFoto.files
    if (file) {
       sucessoFoto.style.display = 'block'; 
    }
}