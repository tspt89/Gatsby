<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$EmailTo = "yogo0607@gmail.com";
$Subject = "New Message Received";

// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Last: ";
$Body .= $last;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Cel: ";
$Body .= $cel;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success){
    echo "success";
}else{
    echo "invalid";
}

?>