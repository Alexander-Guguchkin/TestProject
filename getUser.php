<?php
require_once 'Connection.php';
$con = new Connection();
$query = 'SELECT * FROM Forms';
$res = mysqli_query($con->link(), $query);
$data = [];
while ($row = mysqli_fetch_assoc($res)) {
    $data[] = $row;
}
$json_data = json_encode($data);
echo($json_data);
