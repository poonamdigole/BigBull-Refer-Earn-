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

 
 // $level1='663b1995665ed';






switch ("$method") {

  case "GET":
 
    $alluser = mysqli_query($db_conn, "SELECT * FROM users WHERE user_id='663673f2176ff'");

    
    if (mysqli_num_rows($alluser) > 0) {
      while ($row = mysqli_fetch_array($alluser)) {
        $json_array["userdata"][]= array("id" => $row['id'], "user_id"=>$row['user_id'], "username" => $row['username'], "balance" => $row['balance'], "profit" => $row['profit'], "date" => $row['date'], "reffer" => $row['refferal']);
      }
  $info=$json_array["userdata"];
   
    $refferid= $info[0]['user_id'];
   
     $reffer =  mysqli_query($db_conn, "SELECT * FROM users WHERE refferal='$refferid'");
      if (mysqli_num_rows($reffer) > 0) {
        while($row = mysqli_fetch_array($reffer)) {
          $json_array["userdata"][]= array("id" => $row['id'], "user_id"=>$row['user_id'], "username" => $row['username'], "date" => $row['date'],"plan"=>$row['plan']);
     
        }
      echo json_encode( $json_array["userdata"]);
      return;
    }else{
     $data= $json_array["userdata"];
        echo json_encode($data);
         return;
    }
  }else {
     echo json_encode(["result" => "Please check the data"]);
      return;
    }
    
    break;

  case "POST":
 
    $userpostdata = json_decode(file_get_contents("php://input"));
     //print_r($userpostdata); die;
    $user_id=uniqid();
    $username = $userpostdata->username;
    $email = $userpostdata->email;
    $mobile = $userpostdata->mobile;
    $address = $userpostdata->address;
    $plan = $userpostdata->palns;
    $profit = '00000';
    $balance = $userpostdata->balance +$profit;
    $refferal = $userpostdata->refferal;
    $password = $userpostdata->password;
    $bonus = (25*($balance-$profit))/100;
    $result1 = mysqli_query($db_conn,"INSERT INTO `users`(`user_id`,`username`, `mobile`, `email`, `address`, `plan`, `balance`, `profit`, `refferal`, `password`) VALUES('$user_id','$username', '$mobile', '$email','$address','$plan','$balance',$profit,'$refferal',' $password')")or die('username in not available');
    $result2 = mysqli_query($db_conn,"UPDATE `users` SET profit=profit+$bonus ,balance=balance+$bonus WHERE user_id='$refferal'" )or die();



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



    $bonus=(10/count($arr)-1)*$balance/100;
do{
    $user =mysqli_query($db_conn, "SELECT refferal ,profit,balance FROM users WHERE user_id='$refferal'")or die();
    if (mysqli_num_rows($user) > 0) {
      // $level1='663b1995665ed';
      while ($sequence = mysqli_fetch_array($user)) {
        $refferal=$sequence['refferal'];
       $prof= $sequence['profit'];
       $bal=$sequence['balance'];
    $result3 = mysqli_query($db_conn,"UPDATE `users` SET profit= $prof+$bonus ,balance=$bal+$bonus WHERE user_id='$refferal'" )or die();
  
  }
    }
  }while($result3);

    if ($result2) {
      echo json_encode(["success" => "User Added Successfully"]);
      return;

    } else {

      echo json_encode(["success" => "Please Check the User Data!"]);

      return;

    }
    break;
   
}

?>
 