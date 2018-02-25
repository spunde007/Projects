var index = 0;
show();

function show() {
    var j;
    var slide = document.getElementsByClassName("slides");
    var dot = document.getElementsByClassName("dot");
    for (j = 0; j < slide.length; j++) {
       slide[j].style.display = "none";  
    }
    index++;
    if (index > slide.length) {index = 1}    
    for (j = 0; j < dot.length; j++) {
        dot[j].className = dot[j].className.replace(" active", "");
    }
    slide[index-1].style.display = "block";  
    dot[index-1].className += " active";
    setTimeout(show, 1500);
}