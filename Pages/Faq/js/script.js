window.onload = function(){
    $.ajax({
        type: "GET",
        url: "./php/faq.php",             
        dataType: "html",                   
        success: function(response){                    
            $("#perguntas").html(response); 
        }
    });
}