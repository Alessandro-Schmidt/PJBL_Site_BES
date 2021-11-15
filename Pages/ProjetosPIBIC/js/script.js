window.onload = function(){
    $.ajax({
        type: "GET",
        url: "./php/projetosPibic.php",             
        dataType: "html",                   
        success: function(response){                    
            $("#projetos").html(response); 
        }
    });
}