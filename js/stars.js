$(function(){
    var screenHeight = screen.height;
    var screenWidth = screen.width;
    var smallStar = 350;
    var mediumStar = 200;
    var largeStar = 75;
    var small = document.getElementById("stars-small");//.getElementsByClassName("starfield small starfield__stars");
    var medium = document.getElementById("stars-medium");//.getElementsByClassName("starfield medium starfield__stars");
    var large = document.getElementById("stars-large");//.getElementsByClassName("starfield large starfield__stars");

    var atrib = ""
    for(var i = 0; i < smallStar; i++){
        atrib += (Math.floor(Math.random() * screenWidth) + 1) + "px " + (Math.floor(Math.random() * screenHeight) + 1) + "px #FFF, ";
        if(i+1 == smallStar){
            atrib += (Math.floor(Math.random() * screenWidth) + 1) + "px " + (Math.floor(Math.random() * screenHeight) + 1) + "px #FFF";
        }
    }
    small.style['-webkit-box-shadow'] = atrib;

    var atrib = ""
    for(var i = 0; i < mediumStar; i++){
        atrib += (Math.floor(Math.random() * screenWidth) + 1) + "px " + (Math.floor(Math.random() * screenHeight) + 1) + "px #FFF, ";
        if(i+1 == mediumStar){
            atrib += (Math.floor(Math.random() * screenWidth) + 1) + "px " + (Math.floor(Math.random() * screenHeight) + 1) + "px #FFF";
        }
    }
    medium.style["boxShadow"] = atrib;

    var atrib = ""
    for(var i = 0; i < largeStar; i++){
        atrib += (Math.floor(Math.random() * screenWidth) + 1) + "px " + (Math.floor(Math.random() * screenHeight) + 1) + "px #FFF, ";
        if(i+1 == largeStar){
            atrib += (Math.floor(Math.random() * screenWidth) + 1) + "px " + (Math.floor(Math.random() * screenHeight) + 1) + "px #FFF";
        }
    }
    large.style.boxShadow = atrib;
});
