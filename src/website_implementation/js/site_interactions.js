window.onload = function(){
    //add src to music lable
    document.querySelector(".audio").src = "media/music1.mp3";
    //get the name of music
    document.querySelector(".musicname").innerHTML ="music1";
    //how many songs
    var musicList = [
        "media/music1.mp3",
        "media/music2.mp3",
        "media/music3.mp3",
        "media/music4.mp3",
        "media/music5.mp3",
    ];
    var titleList = [
        "music1",
        "music2",
        "music3",
        "music4",
        "music5",
    ];
    //initial
    var num = 0;
    //add src for music lable
    document.querySelector(".audio").src = musicList[num];
    //add title for music play bar
    document.querySelector(".musicname").innerHTML = titleList[num];


    //Selector encapsulation and reuse
    function fn(name){
        return document.querySelector(name);
    }
    //add src for music lable
    fn(".audio").src = musicList[num];
    //add title for music play bar
    fn(".musicname").innerHTML = titleList[num];

    var audio = fn(".audio")
    //make play by click button
    fn(".play").onclick = function(){
        if(audio.paused){ // determine if audio is playing music
            audio.play();
        }
    }
    //pause by click
    fn(".pause").onclick = function(){
        if(audio.played){ // determine if is playing
            audio.pause();
        }
    }

    //last song by click
    fn(".prev").onclick = function(){   
        num--;
        //check if first song
        if(num < 0){
            num = musicList.length - 1;
        }
        fn(".audio").src = musicList[num];
        fn(".musicname").innerHTML = titleList[num];
    }

    //next song by click
    fn(".next").onclick = function(){   
        num++;
        //check if last song
        if(num == musicList.length){
            num = 0;
        }
        fn(".audio").src = musicList[num];
        fn(".musicname").innerHTML = titleList[num];
    }

    //set volume
    var volume = fn(".volume");
    volume.onchange = function(){
        audio.volume = volume.value
    }

}


const postCoummunityEventMethod = 'POST';

var formdata = new FormData();
formdata.append()


document.getElementById("btn").onclick=function(){send()};
function send(){
    var g=new Date();
    var value= document.getElementById("typing").value;
    var p= document.createElement("p");
    p.innerHTML='<hr>'+value+'<br>'+g.toUTCString();
    document.getElementById("commend").prepend(p); 
}
