console.log("page loaded...");

var myVideo = document.getElementById("whaleVideo");

function playPause() { 
    if (myVideo.paused) 
        myVideo.play(); 
    else 
        myVideo.pause(); 
} 

function playVideo(element){
    myVideo.play();
}

function pauseVideo(element){
    myVideo.pause();
}