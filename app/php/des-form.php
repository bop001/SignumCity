<?php

    $recepient = "sashaburlachenko@gmail.com";
    $sitename = "signumcity.dev-team.su";

    $email = trim($_POST['email']);

    $message = "Email: $email\n";
    $pagetitle = "JOIN the Wait List";
    mail($recepient, $pagetitle, $message);