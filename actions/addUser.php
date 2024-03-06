<?php
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
var_dump($_POST);
require_once '../Class/Connection.php';
$con = new Connection();
$query = "INSERT INTO Forms (FIO, address, phone, email) VALUES ('{$obj['FIO']}', '{$obj['address']}', '{$obj['phone']}', '{$obj['email']}')";
$res = mysqli_query($con->link(), $query);
