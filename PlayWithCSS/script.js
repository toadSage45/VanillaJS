const slider1 = document.getElementById("slider");
const blur1 = document.getElementById("blur");
const colorPicker1 = document.getElementById("colorPicker");



const imgContainer = document.getElementsByClassName("imgContainer")[0];
const img = document.getElementById("image");


slider1.addEventListener("input",function(){
 imgContainer.style.padding = `${this.value}px`;
})


colorPicker1.addEventListener("input", function() {
    imgContainer.style.backgroundColor = this.value;
});

blur1.addEventListener("input",function()
{
    img.style.filter = `blur(${this.value/10}px)`
})