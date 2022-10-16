function displayTime(){
    var dateTime = new Date()
    var hrs = dateTime.getHours()
    var min = dateTime.getMinutes()
    var sec = dateTime.getSeconds()
    var timezone = document.getElementById("Time-Zone")

    

    if( hrs => 12){
         timezone.innerHTML = "PM"
    }else{
        timezone.innerHTML = "AM"
    }

    if(hrs > 12){
        hrs = hrs - 12
    }

    document.getElementById("hours").innerHTML = hrs
    document.getElementById("Mins").innerHTML = min
    document.getElementById("secs").innerHTML = sec
}
setInterval(displayTime, 1000);

function settime(){

    var wakeup = innerHTML = ""
    var lunch = innerHTML = ""
    var dinner = innerHTML = ""
    var nap = innerHTML = ""


    if(wakeup = "5PM - 7PM"){
        document.getElementById("image-left-snd-cont3").style.backgroundImage="url(./image/lunch_image.png)"
        document.getElementById("left-snd-cont2").innerHTML = "Let have a Tea."
    } else if(lunch = "12AM - 2PM"){
        document.getElementById("image-left-snd-cont3").style.backgroundImage="url(./image/Component 31 – 1.png)"
        document.getElementById("left-snd-cont2").innerHTML = "Let Have Lunch."
    }else if(dinner = "12AM - 2PM"){
        document.getElementById("image-left-snd-cont3").style.backgroundImage="url(./image/Component 311@2x.png)"
        document.getElementById("left-snd-cont2").innerHTML = "Let have Dinner."
    }else if(nap = "12PM - 2PM"){
        document.getElementById("image-left-snd-cont3").style.backgroundImage="url(./image/Component 32 – 1.png)"
        document.getElementById("left-snd-cont2").innerHTML = "Go to bed."
    }
};