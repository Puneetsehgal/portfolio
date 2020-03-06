<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object file
include '../../config/database.php';
include '../../model/devices.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare product object
$device = new Device($db);

// get location id
$data = json_decode(file_get_contents("php://input"), true);

// set location id to be deleted
$device->id = $data["id"];


// delete the organization
if($device->delete()) {
    echo json_encode(
        array("message" => "Device has been deleted")
    );
} // if unable to delete the device
else {
    $error_arr["error"] = array("errorcode" => 500,"message" => "Unable to delete the device.");
    echo json_encode($error_arr["error"]);
}
?>