/* Typewriting Effect */
var i = 0;
var txt = '   Hello world! My name is Richard and I am a chemistry graduate with a Masters degree from the University of Warwick. I have an interest in coding and I love to learn and develop new skills. Here you can find my projects that I have been using to develop my coding skills. These projects range from web design and development, to games made using various game engines. Scroll down to see more...';
var speed = 15;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter();

/* Collapsible Table */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("collapseactive");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}