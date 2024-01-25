const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let SecondHeading = document.querySelector('h2')

function setUserName() {
    const myName = prompt("What inspires you?");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      SecondHeading.textContent = `Inspiration is everywhere. Look to the sun, the moon, and ${myName}.`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    SecondHeading.textContent = `Inspiration is everywhere. Look to the sun, the moon, and ${storedName}.`;
}

function bows() {
  var pic;
  document.getElementById("me").src = "images/me-w-bows.JPG";
}

myButton.onclick = () => {
  bows(); 
};
