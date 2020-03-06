<?php
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

// get location id
$data = json_decode(file_get_contents("php://input"), true);

// set location id to be deleted
$user->id = $data["id"];


// delete the user
if($user->delete()) {
    echo json_encode(
        array("message" => "User has been deleted")
    );
} // if unable to delete the user
else {
    $error_arr["error"] = array("errorcode" => 500,"message" => "Unable to delete the user.");
    echo json_encode($error_arr["error"]);
}
?>