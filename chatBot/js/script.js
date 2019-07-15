$(document).ready(function(){
    $("#msgInp").keypress(function(event){
        if(event.keyCode==13){
            $("#sbBtn").click();
        }
    });

    //Convo 1
        $("<div class='botMsg'><span>"+"I am Panda, your name?"+"</span></div>").appendTo(".chatArea");

        $("#sbBtn").click(function(){
            let name = $("#msgInp").val();
            $("<div class='userMsg'><span>"+name+"</span></div>").appendTo(".chatArea");
            $("#msgInp").val("");
            setTimeout(function(){
            $("<div class='botMsg'><span>"+"Hi "+name+", nice to meet you"+"</span></div>").appendTo(".chatArea");
            setTimeout(function(){
                $("<div class='botMsg'><span>"+"How may i help you?"+"</span></div>").appendTo(".chatArea");
            },500);
        },500);
    });
    //Convo 2
});