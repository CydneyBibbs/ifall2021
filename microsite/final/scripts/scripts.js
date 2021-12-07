function myFunction() {
    var x = document.getElementById("mainnav");
    if (x.className === "main-nav") {
      x.className += " responsive";
    } else {
      x.className = "mainnav";
    }
  }