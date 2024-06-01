<?php
session_start();

error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
header("Access-Control-Allow-Methods:*");

$db_conn = mysqli_connect("localhost", "root", "", "bigbull");

if ($db_conn === false) {

  die("ERROR: Could Not Connect" . mysqli_connect_error());

}
require('vendor/autoload.php');
use Razorpay\Api\Api;

$api_key = 'rzp_test_yWMvyDcDnYXnV6';
$api_secret = 'KJ6GvUpZwxLX4N71xHgMgIPs';

$api = new Api($api_key, $api_secret);
//var_dump($_SESSION); // Output the session data to see what's inside

 $method = $_SERVER['REQUEST_METHOD'];

 


switch ("$method") {
 

  case "POST":
 
    $userpostdata = json_decode(file_get_contents("php://input"));
     //print_r($userpostdata); die;
    $user_id=uniqid();
    $username = $userpostdata->username;
    $email = $userpostdata->email;
    $mobile = $userpostdata->mobile;
    $plan = $userpostdata->palns;
    $profit = '00000';
    $balance = $userpostdata->balance;
    $refferal = $userpostdata->refferal;
    $password = md5($userpostdata->password);
    $order_id = $userpostdata->razorpay_order_id;
    $payment_id = $userpostdata->razorpay_payment_id;
    $signature = $userpostdata->razorpay_signature;


    $generated_signature = hash_hmac('sha256', $order_id . "|" . $payment_id, $api_secret);

if ($generated_signature === $signature) {

    $bonus = (25*($balance))/100;
    $result1 = mysqli_query($db_conn,"INSERT INTO `users`(`user_id`,`username`, `mobile`, `email`, `plan`, `balance`, `profit`, `refferal`, `password`,`payment`) VALUES('$user_id','$username', '$mobile', '$email','$plan','$balance',$profit,'$refferal','$password','$payment_id')");
    $result2 = mysqli_query($db_conn,"UPDATE `users` SET profit=profit+$bonus ,balance=balance+$bonus WHERE user_id='$refferal'" )or die();
    if( $refferal==""){
      $result3 = mysqli_query($db_conn,"INSERT INTO `compony`(`user_id`,`invest`, `cmpprofit`) VALUES('$user_id','$balance','$balance')")or die();
     }else{
      $result3 = mysqli_query($db_conn,"INSERT INTO `compony`(`user_id`,`invest`, `cmpprofit`) VALUES('$user_id','$balance',(65*($balance))/100)")or die();
    
     }

  

  if ($result1) {
    if($result2){
      $refferId=$refferal;
      $arr=[];
       while($refferId){
        $user = mysqli_query($db_conn, "SELECT refferal FROM users WHERE user_id='$refferId'")or die();
       if (mysqli_num_rows($user) > 0) {
        // $level1='663b1995665ed';
        while ($row = mysqli_fetch_array($user)) {
          // var_dump($row['refferal']);
         $json_array["users"][]= $row['refferal'];
        $refferId=$row['refferal'];
        }
        $arr= $json_array["users"];
       }
      } 
      
        if(count($arr)>1){
          $first=(10*$balance)/100;
          $bonus=floor($first/(count($arr)-1));
          
          for($i=0;$i<count($arr);$i++){
            $result3 = mysqli_query($db_conn,"UPDATE `users` SET profit= profit+$bonus ,balance=balance+$bonus WHERE user_id='$arr[$i]'" )or die();
          }
       }
    }
    try {
      echo json_encode([
          'success' => true,
          'message' => "User Added Successfully"
      ]);
  } catch (Exception $e) {
      echo json_encode([
          'success' => false,
          'message' => $e->getMessage()."Enter correct detils"
      ]);
  }
  } else {
    echo json_encode([    'success' => false,
    'message' => $e->getMessage()."signup failed"]);
  }
} else {
  // Payment verification failed
  echo json_encode([
      'success' => false,
      'message' => "Payment verification failed"
  ]);
}

  break;
    default: ;
   
}


?>