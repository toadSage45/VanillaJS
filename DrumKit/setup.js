const keys= document.querySelectorAll(".play");
var q = new Audio('audio/boom.wav');
var w = new Audio('audio/clap.wav');
var e = new Audio('audio/hihat.wav');
var r = new Audio('audio/kick.wav');
var t = new Audio('audio/openhat.wav');
var y = new Audio('audio/ride.wav');
var u = new Audio('audio/snare.wav');
keys.forEach(key => {
    key.addEventListener('click',function() {
        var keyPressed = this.textContent;
        playing(keyPressed)
    })
})

document.addEventListener('keydown',function(event){
    playing(event.key);
})

function playing(keyPressed)
{
    keyPressed = keyPressed.toLowerCase();
   switch(keyPressed)
   {
    case 'q':
        q.play();
    case 'w':
        w.play();
    case 'e':
        e.play();
    case 'r':
        r.play();
    case 't':
        t.play();
    case 'y':
        y.play();
    case 'u':
        u.play();
    default:
       q.play();

    
   }
}