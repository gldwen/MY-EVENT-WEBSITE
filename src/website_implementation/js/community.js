document.getElementById("btn").onclick=function(){send()};
        function send(){
            var g=new Date();
            var value= document.getElementById("typing").value;
            var p= document.createElement("p");
            p.innerHTML="user:"+value+'<hr>'+g.toUTCString();
            document.getElementById("commend").prepend(p);
        }