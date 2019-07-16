$(document).ready(function(){
    $("#msgInp").keypress(function(event){
        if(event.keyCode==13){
            $("#sbBtn").click();
        }
    });

    //Convo 1
        $("#sbBtn").click(function(){
            let userMsg = $("#msgInp").val();
            let userMsgData = new FormData();
            userMsgData.append("userMsg",userMsg);
            addMessage(userMsgData);
            function addMessage(userMsgData){
                $.ajax({
                    type: 'POST',
                    url:  './php/userMessage.php',
                    data: userMsgData,
                    contentType: false,       // The content type used when sending data to the server.
                    cache: false,             // To unable request pages to be cached
                    processData:false,
                    success:function(data)
                    {
                        if(data=="ok"){
                            console.log("message sent to userResponse.json");
                            $("#msgInp").val("");    
                        }
                        else{
                            console.log(data);
                        }
                    }
                });
            }
            // userChatInput = [];
            // function userMsgArray(){
            //     userChatInput.push($("#msgInp").val());
            //     $("#msgInp").val("");
            // }
            // userMsgArray();
            // console.log(userChatInput);
    });
    //Convo 2
    $.ajax({
        type: "GET",
        url: "botResponse.json",
        dataType: "json",
        cache: false,             // To unable request pages to be cached
        processData:false,      
        contentType: false,     // The content type used when sending data to the server
        success: function(data) {
            let Greetings = data[0].greet;
            let Questions = data[0].question;
            let randomGreet = Greetings[Math.floor(Math.random()*Greetings.length)];
            let randonQuestion = Questions[Math.floor(Math.random()*Questions.length)];
            $("<div class='botMsg'><span>"+randomGreet+"</span></div>").appendTo(".chatArea");
            //$("<div class='botMsg'><span>"+randonQuestion+"</span></div>").appendTo(".chatArea");
        }
    });
});