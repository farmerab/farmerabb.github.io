let SecondHeading = document.querySelector('h2')

function askInspiration() {
    const myInspiration = prompt("What inspires you?");
    if (!myInspiration) {
        askInspiration();
    } else {
        localStorage.setItem('Inspiration is everywhere, the sun, the moon, and', myInspiration);
        myHeading.textContent = `Inspiration is everywhere, the sun, the moon, and ${myInspiration}`;
    }
}

if (!localStorage.getItem("Inspiration is everywhere, the sun, the moon, and")) {
    askInspiration();
} else {
    const storedInspo = localStorage.getItem("Inspiration is everywhere, the sun, the moon, and");
    myHeading.textContent = `Inspiration is everywhere, the sun, the moon, and ${storedInspo}`;
}

askInspiration()