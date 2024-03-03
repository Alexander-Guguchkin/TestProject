<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$json = file_get_contents('php://input');
$obj = json_decode($json, true);
require_once 'Connection.php';
$con = new Connection();
$query = "INSERT INTO Forms (FIO, address, phone, email) VALUES ('{$obj['FIO']}', '{$obj['address']}', '{$obj['phone']}', '{$obj['email']}')";
$res = mysqli_query($con->link(), $query);
