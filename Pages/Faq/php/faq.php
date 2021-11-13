<?php 

    $host = "localhost";
    $db   = "bes";
    $user = "root";
    $pass = "";

    // Inicia a conexão com o banco de dados
    $conn = mysqli_connect($host, $user, $pass, $db);

    // Verifica a conexão
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $search = mysqli_query($conn, "SELECT * FROM  perguntas_frequentes");

    while($data = mysqli_fetch_row($search)){   
    
    echo '<div class="row">';
    echo '<div class="col-md-12">';
    echo '<div class="card">';
    echo '<div class="card-body">';
    echo '<h5 class="card-title">'. $data[1]. '</h5>';
    echo '<p class="response">'.$data[2].'</p>';
    echo '</div>';
    echo '</div>';
    echo '</div>';
    echo '</div>';
    
    }

    //Encerra a conexão
    mysqli_close($conn);

?>