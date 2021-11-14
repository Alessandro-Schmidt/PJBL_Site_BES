var array_comunicacao = []


window.onload = function(){
    fLocalCriaCards();
}

function fLocalCriaCards(){
    for (var i=0; i<array_comunicacao.length; i++){
        var conteudo = ""; 
        conteudo+='<div class="card_pergunta">';
        conteudo+='<div class="responsavel_comunicacao">';
        conteudo+='<p><strong>PUCPR</strong> - 08/11/2021</p>';
        conteudo+='</div>';
        conteudo+='<div class="title_card_comunicacao">';
        conteudo+='<p><strong>Educação do futuro</strong></p>';
        conteudo+='</div>';
        conteudo+='<div class="imagem_comunicacao">';
        conteudo+='<img src="../../img/comunicacao_institucional/educacao_futuro.png">';
        conteudo+='</div>';
        conteudo+='<div class="descricao_comunicacao">';
        conteudo+='<p>Essa é a oportunidade de nos contar quais são as novas lentes para a educação superior, diante de todas as transformações que a educação, o mercado e o mundo têm passado. Contamos com a sua participação e aguardamos suas percepções e respostas! Acesse: <a href="https://www.questionpro.com/a/TakeSurvey?tt=y2FJmkecPag%3D">pucpr.app/futuro_da_educação</a>';
        conteudo+='</p>';
        conteudo+='</div>';
        conteudo+='</div>';


        document.getElementById("mensagens_institucionais").innerHTML+=conteudo; 
    }
}


                    
                        
                    
                    
                        
                    
                        
                    
                    
                        
                        
                    
                