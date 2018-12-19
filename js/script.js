window.onload = function () {
  let sections = document.getElementsByClassName("section");
  for (let i = 0; i < sections.length; i++) {
    let section = sections.item(i);
    let left = section.children[0];
    let right = section.children[1];

    // Use sticky to get the images to stay centered
    if (right.clientHeight > window.innerHeight) {
      let img = section.children[0].children[0];
      let offset = window.innerHeight/2 - img.clientHeight/2 + "px";

      section.children[0].style.position = "sticky";
      left.style["padding-top"] = offset;
      left.style["padding-bottom"] = offset;
      left.style["margin-bottom"] = "auto";
      section.children[0].style.top = 0;
    }
  }
};
