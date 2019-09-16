<?php
    if(isset($_POST['email']) && isset($_POST['message']) && isset($_POST['name'])){
        header("Data-Type:application/json");
        $headers =  'MIME-Version: 1.0' . "\r\n"; 
        $headers .= 'From: <'.$_POST['email'].'>' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 
        @$bol = mail("djordje.nikolic.135.17@ict.edu.rs" , "Contact message" , $_POST['message'] ,$headers);
        if($bol){
        echo json_encode(array('status' => 1));
        }
        else{
            echo json_encode(array('status' => 1));
        }
    }
?>