<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// include database and object files
include '../../config/database.php';
include '../../model/devices.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare location object
$device = new Device($db);
 
// get id of location to be edited
$data = json_decode(file_get_contents("php://input"), true);
 
// set ID property of location to be edited
$device->id = $data["id"];
 
// set location property values
$device->name = $data["name"];
$device->description = $data["description"];
$device->supplier_id =  $data["supplier_id"];
 
// update the location
if($device->update()) {
    echo '{';
        echo '"message": "Device was updated."';
    echo '}';
}// if unable to update the device, tell the user
else {
    $error_arr["error"] = array("errorcode" => 500,"message" => "Unable to update the device");
    echo json_encode($error_arr["error"]);
}
?>