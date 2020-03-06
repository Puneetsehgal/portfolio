<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object file
include '../../config/database.php';
include '../../model/organization.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare product object
$organization = new Organization($db);

// get location id
$data = json_decode(file_get_contents("php://input"), true);

// set location id to be deleted
$organization->id = $data["id"];


// delete the organization
if($organization->delete()) {
    echo json_encode(
        array("message" => "Organization has been deleted")
    );
} // if unable to delete the organization
else {
    $error_arr["error"] = array("errorcode" => 500,"message" => "Unable to delete the organization.");
    echo json_encode($error_arr["error"]);
}
?>