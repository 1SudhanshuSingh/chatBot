<?php
    $message_data = file_get_contents('../userResponse.json');
    $array_data = json_decode($message_data, true);
    $extra = array(
        'userAnswers' => $_POST['userMsg']
    );
     $array_data[] = $extra;
     $final_data = json_encode($array_data);
     if(file_put_contents('../userResponse.json', $final_data)){
        echo "ok";
     }
?>