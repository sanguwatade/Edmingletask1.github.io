var VideoPlayer = document.getElementById("videoPlayer");
var MyVideo = document.getElementById("myVideo");


function closeVideo(){
    VideoPlayer.style.display = "none";
   
    
}

function playVideo(file){
    if(MyVideo == 0)
        {
            document.write("no Video! please add Some Videos")
        }
    else{
    MyVideo.src = file;
    VideoPlayer.style.display = "block";
    }
}