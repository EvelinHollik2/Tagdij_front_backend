 <?php
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
//fogadja az url kéréseket és megválaszolja azokat
//GET http://localhost/TagdijBackend/index.php?ugyfel -> minden ügyfél megjelenik
//GET http://localhost/TagdijBackend/index.php?ugyfel/{id} -> adott id-s ügyfél megjelenik
//POST http://localhost/TagdijBackend/index.php?ugyfel -> létrehoz ügyfelet
//PUT http://localhost/TagdijBackend/index.php?ugyfel/{id} -> id változtatás
//DELETE http://localhost/TagdijBackend/index.php?ugyfel/{id} -> ügyfél törlése

//var_dump($_SERVER['REQUEST_METHOD']);
//var_dump('QUERY_STRING');
    $keresSzoveg = explode('/', $_SERVER['QUERY_STRING']); //szét darabolja a nagyobb karakterláncot
    if ($keresSzoveg[0] === 'ugyfel') {
        require_once 'ugyfel/index.php';
    } else {
        http_response_code(405);
        //Hibaüzenet küldése JSON formátumban
        $errorJson=array("error_message" => 'Nincs ilyen api');
        return json_encode($errorJson);
    }
