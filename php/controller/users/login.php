<?php
session_start();
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// include database and object file
include '../../config/database.php';
include '../../model/user.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare product object
$user = new User($db);

$data = json_decode(file_get_contents("php://input"), true);

$user->username = $data["username"];
$user->password = $data["password"];

$user->login();

$token = md5(rand(1000,9999));
$_SESSION["sessiontoken"] = $token; 

if($user->user_id) {
    $user_array = array(
        "id" => $user->user_id,
        "username" => $user->user_name,
        "first_name" => $user->user_first_name,
        "last_name" => $user->user_last_name,
        "useremail" => $user->user_email,
        "group" => $user->user_group,
        "sessiontoken" => $_SESSION["sessiontoken"]
    );

   echo json_encode(
    array($user_array)
   );
}
else {
    echo json_encode(
        array(
            "errorcode" => $user->password,
            "message" => "We cannot find an account with that username and password",
        )
    );
}
?>