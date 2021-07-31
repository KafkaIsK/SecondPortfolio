/* Typewriting Effect */
var i = 0;
var txt = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione inventore possimus veritatis delectus voluptatem nemo laudantium quidem molestiae illum harum deleniti, praesentium facilis dolore? Consequuntur, tempore. Tempore est dolorem optio?';
var speed = 20;

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