<?php
require_once '../Class/Connection.php';
$con = new Connection();
$query = 'SELECT * FROM News';
$res = mysqli_query($con->link(), $query);
$data = [];
while ($row = mysqli_fetch_assoc($res)) {
    $data[] = $row;
}
$json_data = json_encode($data);
echo($json_data);
