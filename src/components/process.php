<?php
$name = $_POST["name"];
$last= $_POST["last"];
$email = $_POST["email"];
$cel= $_POST["cel"];

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
    // Set a 200 (okay) response code.
    http_response_code(200);
    echo "Thank You! Your message has been sent.";
}else{
    // Set a 500 (internal server error) response code.
    http_response_code(500);
    echo "Oops! Something went wrong and we couldn\"t send your message.";
}

?>