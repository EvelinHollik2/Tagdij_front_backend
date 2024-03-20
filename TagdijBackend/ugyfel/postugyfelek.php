<?php

//echo 'POST';
//$azon = $_POST["azon"];
$nev = $_POST["nev"];
$szulev = $_POST["szulev"];
$irszam = $_POST["irszam"];
$orsz = $_POST["orsz"];
require_once './databaseconnect.php';
$sql = "INSERT INTO ugyfel(azon, nev, szulev, irszam, orsz) VALUES (NULL,?,?,?,?)";
$stmt = $connection->prepare($sql);
$stmt->bind_param('siis', $nev, $szulev, $irszam, $orsz);
if ($stmt->execute()) {
    http_response_code(201);
    $errorJson=array("message" => 'Sikeresen hozzáadva');
} else {
    http_response_code(404);
    $errorJson=array("error_message" => 'Nem sikerült hozzáadni');
}