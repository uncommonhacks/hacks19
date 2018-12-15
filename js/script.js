let displayAnswer = function(e) {
  let next = e.nextElementSibling;
  if (next.style.display == "block") {
    next.style.display = "none";
  }
  else {
    next.style.display = "block";
  }
};
