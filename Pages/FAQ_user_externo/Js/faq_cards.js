var array_perguntas_respostas = [["O curso te prepara para o quê?", "O profissional formado no curso de Engenharia de Software na PUCPR está apto a gerenciar projetos e equipes de alta performance em TI, com habilidade para promover mudanças nas organizações por meio da utilização de modelos e normas nacionais e internacionais de qualidade e produtividade."], ["Qual o papel do Engenheiro de Software?", "Engenheiros de Software com uma formação sólida, são determinantes para conceber soluções, gerir equipes e otimizar recursos, gerando propostas inovadoras para um cenário em constante evolução."],["E o mercado para Engenharia de Software","O mercado para profissionais da área da computação está mais quente do que nunca. Segundo pesquisas, existem 14 vagas para cada profissionais."], ["E a internacionalização?", "O mercado de tecnologia não possui barreiras. Não há necessidade de revalidação do diploma, e, caso desejado, é possível trabalhar no Brasil recebendo em moeda estrangeira."]]

window.onload = function(){
    fLocalCriaCards();
}

function fLocalCriaCards(){
    for (var i=0; i<array_filmes.length; i++){
        var conteudo = ""; 
        conteudo+='<div class="container_FAQ">';
        conteudo+='<div class="card_pergunta">';
        conteudo+='<div class="title_pergunta">';
        conteudo+='<p>'+array_perguntas_respostas[i][0]+'</p>';
        conteudo+='</div>';
        conteudo+='<div class="resposta_pergunta">';
        conteudo+='<p>'+array_perguntas_respostas[i][1]+'</p>';
        conteudo+='</div>';
        conteudo+='</div>';
        conteudo+='</div>';
        document.getElementById("perguntas").innerHTML+=conteudo; 
    }
}