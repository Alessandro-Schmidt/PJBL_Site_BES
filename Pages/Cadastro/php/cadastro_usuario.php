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

    //Variaveis
    $tipo_acesso = $_POST['tipo_acesso']; 
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $search = mysqli_query($conn, "SELECT * FROM usuarios WHERE email = '$email'"); 
    
    //Verifica no banco de dados se o usuário já existe
    if(@mysqli_num_rows($search) > 0){
        echo json_encode("Este usuário já tem um cadastro realizado.");
    }else{
        mysqli_query($conn, "INSERT INTO usuarios (nome, email, senha, tipo_acesso) VALUES ('{$nome}', '{$email}', '{$hash_password}', '{$tipo_acesso}');");
        echo json_encode("Cadastro realizado com sucesso");
    }

    //Encerra a conexão
    mysqli_close($conn);

?>