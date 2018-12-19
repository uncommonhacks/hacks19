let updateSticky = function () {
  if (window.innerWidth < 951) {
    let lefts = document.querySelectorAll(".left");

    for (let i = 0; i < lefts.length; i++) {
      let left = lefts[i];

      // TODO match the styles applied in responsive mode
      left.style.position = "relative";
      left.style["padding-top"] = 0;
      left.style["padding-bottom"] = 0;
      left.style["margin-bottom"] = 0;
      left.style.top = "auto";
    }

    return;
  }

  let sections = document.getElementsByClassName("section");
  for (let i = 0; i < sections.length; i++) {
    let section = sections.item(i);
    let left = section.children[0];
    let right = section.children[1];

    // Use sticky to get the images to stay centered
    if (right.clientHeight > window.innerHeight) {
      let img = section.children[0].children[0];
      let offset = window.innerHeight/2 - img.clientHeight/2 + "px";

      left.style.position = "sticky";
      left.style.position = "-webkit-sticky";
      left.style["padding-top"] = offset;
      left.style["padding-bottom"] = offset;
      left.style["margin-bottom"] = "auto";
      left.style.top = 0;
    }
  }
};

window.onload = function () { updateSticky(); };
window.onresize = function () { updateSticky(); };
