<?php
error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
header("Access-Control-Allow-Methods:*");

$db_conn= mysqli_connect("sql101.infinityfree.com", "if0_36481024", "IZv5NK948l7Px", "if0_36481024_bigbull");

if($db_conn===false){

die("ERROR: Could Not Connect".mysqli_connect_error());

}

$method =$_SERVER['REQUEST_METHOD'];

//echo "test".$method; die;


switch($method)
{

case "GET":
$alluser =mysqli_query($db_conn, "SELECT * FROM users WHERE username='Shivam'"); 

if(mysqli_num_rows($alluser) > 0){
     while($row=mysqli_fetch_array($alluser))
     {
        $json_array["userdata"]=array("id"=>$row['id'],"username"=>$row['username'],"balance"=>$row['balance'],"profit"=>$row['profit'],"date"=>$row['date'],"reffer"=>$row['refferal']);
     }
   echo json_encode($json_array["userdata"]);
   return;    
}else{
    echo json_encode(["result"=>"Please check the data"]);
  return;
}
break;
 
} 
?>
