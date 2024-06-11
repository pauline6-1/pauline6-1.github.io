let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "bebe soleil.jpg") {
    myImage.setAttribute("src", "tortue.jpg");
  } else {
    myImage.setAttribute("src", "bebe soleil.jpg");
  }
});
