function removeFromClass(e, n) {
  var j, a1, a2;
  a1 = e.className.split(" ");
  a2 = n.split(" ");
  for (j = 0; j < a2.length; j++) {
    while (a1.indexOf(a2[j]) > -1) {
      a1.splice(a1.indexOf(a2[j]), 1);     
    }
  }
  e.className = a1.join(" ");
}


function addToClass(e, n) {
  var j, a1, a2;
  a1 = e.className.split(" ");
  a2 = n.split(" ");
  for (j = 0; j < a2.length; j++) {
    if (a1.indexOf(a2[j]) == -1) {e.className += " " + a2[j];}
  }
}


filterSelection("all")
function filterSelection(e) {
  var y, j;
  y = document.getElementsByClassName("column");
  if (e == "all") e = "";
  for (j = 0; j < y.length; j++) {
    removeFromClass(y[j], "show");
    if (y[j].className.indexOf(e) > -1) addToClass(y[j], "show");
  }
}