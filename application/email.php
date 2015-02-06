<?php

  if (isset($_REQUEST['email']))  {
  //Email information
  $admin_email = "gmllaia@gmail.com";
  $email = $_REQUEST['email'];
  $name = $_REQUEST['name'];
  $message = $_REQUEST['message'];
  
  //send email
  mail($admin_email, $name, $message, "From:" . $email);
  
  echo "Obrigado por entrar em contato!";

  }

?>