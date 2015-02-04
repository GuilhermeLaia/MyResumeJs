<?php
//if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {
  
  //Email information
  $admin_email = "gmllaia@gmail.com";
  $email = $_REQUEST['email'];
  $name = $_REQUEST['name'];
  $message = $_REQUEST['message'];
  
  //send email
  mail($admin_email, "$name", $message, "From:" . $email);
  
  //Email response
  echo "Thank you for contacting us!";
  }

?>