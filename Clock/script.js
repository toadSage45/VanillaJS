let angles = 0;
let anglem = 0;
let angleh = 0;


function updateMin()
{
    anglem+=6/60;
    const minHand = document.getElementsByClassName("minutes");
    minHand[0].style.transform = `rotate(${anglem}deg)`
}

function updateHour()
{
    angleh+=30/3600;
    const hourHand = document.getElementsByClassName("hours");
    hourHand[0].style.transform = `rotate(${angleh}deg)`
}
function clockCheck() {
    const date =new Date();

    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hr = date.getHours();
    angles = sec*6+90;
    anglem = min*6+90;
    angleh = hr*30+90;

    updateHour();
    updateMin();
    updateSeconds();
}
setInterval(updateHour,1000);
setInterval(updateMin,1000);
setInterval(updateSeconds,1000);

function updateSeconds()
{
    angles+=6;
    const secondHand = document.getElementsByClassName("seconds");
    secondHand[0].style.transform = `rotate(${angles}deg)`;
    
}

clockCheck();