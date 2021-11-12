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

    $email = $_POST["email"];
    $senha = $_POST["senha"];


    $search = mysqli_query($conn, "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'"); 
    
    //Verifica no banco de dados se o usuário existe
    if(@mysqli_num_rows($search) == 1){
        //Usuário existe
        $tipo_usuario = mysqli_query($conn, "SELECT tipo_acesso FROM usuarios WHERE email = '$email' AND senha = '$senha'");
        $nome_usuario = mysqli_query($conn, "SELECT tipo_acesso FROM usuarios WHERE email = '$email'");
        $usuario = array("acesso" => true, "nome" => $nome_usuario, "tipo" => $tipo_usuario);
        echo json_encode($usuario);
    }else{
        //Usuário não existe
        echo json_encode(false);
    }



?>