<?php
require "./php/conectar.php";
require "./php/jogo.php";
require "./php/repositoriojogo.php";

$codigo = $_POST['txtCodigo'];
$nomejogo =  $_POST['txtNomeJogo'];
$valorjogo = $_POST['txtValorJogo'];
$memoriajogo = $_POST['txtMemoriaJogo'];
$tipojogo = $_POST['txtTipoJogo'];

$NovoJogo = new Jogo($codigo,$nomejogo,$valorjogo,$memoriajogo,$tipojogo);

(new RepositorioJogo())->cadastrar($banco,$NovoJogo);

header("location: listar.php"); // Redireciona para a página principal depois que cadastra

?>