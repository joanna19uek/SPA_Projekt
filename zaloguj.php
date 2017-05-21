<?php
    $dane = json_decode(file_get_contents("php://input"));
    //$u = $dane->user;
    //$p = $dane->pass;

    //echo $u;

    mysql_connect("sbazy.uek.krakow.pl", "s187772", "xZL2WCBM", "s187772");

    $zapytanie = "SELECT * FROM users WHERE email='".$dane->user."'";
    echo ($zapytanie);
/*
    $query = mysql_query("SELECT * FROM users WHERE email = '$dane->user'");
    $rows = mysql_num_rows($query);

    if($rows == 1) {
        $row = mysql_fetch_array($query, MYSQL_ASSOC);
        $email = $row["email"];
        $password = $row["password"];
        if($dane->user == $password) {
            echo "true";
        } else {
            echo "false";
        }
    } else {
        echo "false2";
    }
   */ 
?>