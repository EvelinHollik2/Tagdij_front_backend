<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        require_once 'ugyfel/getugyfelek.php';
        break;
    case 'POST':
        require_once 'ugyfel/postugyfelek.php';
        break;
    case 'DELETE':
        require_once 'ugyfel/deleteugyfelek.php';
        break;
    case 'PUT':
        require_once 'ugyfel/putugyfelek.php';
        break;
    default:
        break;
}