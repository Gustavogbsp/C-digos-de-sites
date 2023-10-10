<?php
require "conta.php";
require "cliente.php";

$conta = new Conta("017230","Fulano de Tal","053");
$cliente = new Cliente("00786","Ciclano de Tal","097.345.278-89","michaeljackson@gmail.com",$conta);


echo "---------------------".PHP_EOL;
echo $cliente->exibirConta()->exibirCode();
