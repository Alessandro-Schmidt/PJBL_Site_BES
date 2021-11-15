var array_comunicacao = [['PUCPR', '08/11/2021', 'Educação do Futuro', 'educacao_futuro.png', 'Essa é a oportunidade de nos contar quais são as novas lentes para a educação superior, diante de todas as transformações que a educação, o mercado e o mundo têm passado. Contamos com a sua participação e aguardamos suas percepções e respostas! Acesse: <a href="https://www.questionpro.com/a/TakeSurvey?tt=y2FJmkecPag%3D">pucpr.app/futuro_da_educação</a>'], ['Departamento de internacionalização', '05/11/2021', 'International week', 'internacinalizacao.png', 'Participe da International Week e saiba todas as ações que a PUCPR International tem para oferecer para você. A programação está imperdível, com lives e oficinas perfeitas para quem quer começar agora a internacionalizar a carreira!'],['Departamento de internacionalização', '04/11/2021', 'I-Cup Gincana!', 'igincana.png', 'Você já pensou em ter uma experiência Internacional imersiva? Aproveite para aprender e concorrer a prêmios!']]


window.onload = function(){
    CriarCards();
}

function CriarCards(){
    for (var i=0; i<array_comunicacao.length; i++){
        var conteudo = ""; 
        conteudo+='<div class="card_pergunta">';
        conteudo+='<div class="responsavel_comunicacao">';
        conteudo+='<p><strong>'+array_comunicacao[i][0]+'</strong> - '+array_comunicacao[i][1]+'</p>';
        conteudo+='</div>';
        conteudo+='<div class="title_card_comunicacao">';
        conteudo+='<p><strong>'+array_comunicacao[i][2]+'</strong></p>';
        conteudo+='</div>';
        conteudo+='<div class="imagem_comunicacao">';
        conteudo+='<img src="../../img/comunicacao_institucional/'+array_comunicacao[i][3]+'">';
        conteudo+='</div>';
        conteudo+='<div class="descricao_comunicacao">'+array_comunicacao[i][4]+'';
        conteudo+='<p>';
        conteudo+='</p>';
        conteudo+='</div>';
        conteudo+='</div>';


        document.getElementById("mensagens_institucionais").innerHTML+=conteudo; 
    }
}


                    
                        
                    
                    
                        
                    
                        
                    
                    
                        
                        
                    
                