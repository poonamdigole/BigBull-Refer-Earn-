<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
header("Access-Control-Allow-Methods:*");

$db_conn = mysqli_connect("localhost", "root", "", "bigbull");

if ($db_conn === false) {

  die("ERROR: Could Not Connect" . mysqli_connect_error());

}

$method = $_SERVER['REQUEST_METHOD'];

switch ("$method") {

    case "POST":
        $userpostdata = json_decode(file_get_contents("php://input"));
      //  print_r ($userpostdata->email);
        $email = $userpostdata->email;
        $password = md5($userpostdata->password);
 $user = mysqli_query($db_conn, "SELECT email,user_id,username,role FROM users WHERE email='$email' AND password ='$password'");
 if(mysqli_num_rows($user)>0){
    while($row=mysqli_fetch_array($user)){ 
       $client=$row['user_id'];
    //    $_SESSION['invester'] = $client;
    try {
        echo json_encode([
            'success' => true,
            'data' => $row,
            'message' => 'Successfully logged in user redirecting.....'
        ]);
    } catch (Exception $e) {
        echo json_encode([
            'success' => false,
            'message' => $e->getMessage()."Enter correct detils"
        ]);
    }
    }
   
}else{
        echo json_encode([
            'success' => false,
            'message' => 'Login failed, please enter correct detils.'
        ]);
        exit;
    }


}
?>