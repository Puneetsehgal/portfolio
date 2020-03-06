<?php include 'view/head.html';?>
<body ng-app="myApp">
 <?php include 'view/header.html';?>
 <div class="page-wrapper" ng-controller="MainController">
    <?php include 'view/home.html';?>
     <?php include 'view/about.html';?>
     <?php include 'view/work.html';?>
      <?php include 'view/contact.html';?>
     </div>
<?php include 'view/footer.php';?>
<?php include 'view/script.html';?>
  </body>
</html>

  <?php
    $message='<html><body>';
    $message .= '<div style="background:#161616; padding:10px; margin-bottom:10px;">';
    $message .='<img src="http://www.puneetsehgal.com/_assets/images/logo-small.png">';
    $message .= '</div>';
    $message .= '<table rules="all" style="border: none;" cellpadding="10">';
    $message .= "<tr style='border: none;'><td style='border: none;'><strong>Name:</strong> </td><td style='border: none;'>" . strip_tags($_POST['name']) . "</td></tr>";
    $message .= "<tr style='border: none;'><td style='border: none;'><strong>Email:</strong> </td><td style='border: none;'>" . strip_tags($_POST['email']) . "</td></tr>";
    $message .= "<tr style='border: none;'><td style='border: none;'><strong>Message:</strong> </td><td style='border: none;'>" .strip_tags($_POST['message']) . "</td></tr>";
    $message .= "</table>";
    $message .= "</body></html>";
    $from = 'From: Puneet Sehgal <puneetsehgal88@gmail.com>';
    $to = 'puneetsehgal88@gmail.com';
    $subject = 'Inquiry puneetsehgal.com';
    $headers = "From: Puneet Sehgal <" .$to. ">\r\n";
    			$headers .= "Reply-To: ".$_POST['email'] . "\r\n";
    			$headers .= "MIME-Version: 1.0\r\n";
    			$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

        if ($_POST['submit']) {
    if ($_POST['name'] != '' && $_POST['email'] != '' && $_POST['message']!= '') {
            if (mail($to, $subject, $message, $headers)) {
	        echo '<script> alert ("Your message has been sent!"); </script>';
	    } else {
	        echo '<script> alert ("Something went wrong, go back and try again!"); </script>';
	    }
    } else {
        echo '<script> alert ("You need to fill in all required fields!"); </script>';
    }
}

?>