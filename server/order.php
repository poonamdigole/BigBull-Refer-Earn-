<?php
require('vendor/autoload.php'); // Ensure this path is correct based on your project structure
require('./config.php'); // Include your database connection file

$userpostdata = json_decode(file_get_contents("php://input"));
//print_r($userpostdata->balance); die;
$amount=$userpostdata->balance;
use Razorpay\Api\Api;

$api_key = 'rzp_test_yWMvyDcDnYXnV6';
$api_secret = 'KJ6GvUpZwxLX4N71xHgMgIPs';

$api = new Api($api_key, $api_secret);

$orderData = [
    'receipt'         => uniqid(),
    'amount'          => $amount * 100, // amount in paise
    'currency'        => 'INR',
    'payment_capture' => 1 // auto capture
];

try {
    $razorpayOrder = $api->order->create($orderData);

     // Return the full response from Razorpay
     echo json_encode($razorpayOrder->toArray());
    } catch (Exception $e) {
        // Return error response
        echo json_encode([
            'success' => false,
            'message' => $e->getMessage()
        ]);
    }
    ?>
