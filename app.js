console.log("Waiting for order, SIR!");
function opening(){
    const menu = document.getElementById("burger");
    const mobilemenu = document.getElementById("mobmenu");
    menu.classList.toggle("open");
    console.log("AYe, sir!");
    if(menu.classList.contains("open")) {
        mobilemenu.style.animation="menuanimation 800ms ease-in-out 0s forwards";

    }
    else{
        mobilemenu.style.animation="menuanimationback 900ms ease-in-out 0s forwards"
    }
}