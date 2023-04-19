<?php
if(isset($_POST['submit'])) {
    $to = "ryandelros@outlook.com"; // replace with your email address
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = "From: ".$name." <".$email.">";
    mail($to, $subject, $message, $headers);
    echo "Thank you for your message!";
}
?>
