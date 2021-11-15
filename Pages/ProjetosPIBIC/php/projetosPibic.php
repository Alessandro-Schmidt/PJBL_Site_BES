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

    $search = mysqli_query($conn, "SELECT * FROM  pibic");

    while($data = mysqli_fetch_row($search)){   
    
    echo '<div class="col-md-12">';
    echo '<div class="card fadeIn">';
    echo '<div class="col-md-12" id="header-card">';
    echo '<i class="fa fa-user-circle" aria-hidden="true"></i>';
    echo '<h3>'.$data[2].'</h3>';
    echo '</div>';
    echo '<div class="col-md-12" id="body-card">';
    echo '<h4>'.$data[1].'</h4>';
    echo '<p>'.$data[5].'</p>';
    echo '</div>';
    echo '<div class="status">';
    echo '<div class="col-md-6 status-card" id="status-duracao">';
    echo '<h6>Duração (meses)</h6>';
    echo '<h2>'.$data[3].'</h2>';
    echo '</div>';
    echo '<div class="col-md-6 status-card" id="status-tipo">';
    echo '<h6>Status</h6>';
    if ($data[4] == 1) {
        echo '<h3 id="tipo">Voluntário</h3>';
    }else{
        echo '<h3 id="tipo">Bolsista</h3>';
    }
    echo '</div>';
    echo '</div>';
    echo '</div>';
    echo '</div>';
    echo '<hr/>';
    
    }

    //Encerra a conexão
    mysqli_close($conn);

?>