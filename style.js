const kast = document.getElementById("kast");
const terning1 = document.getElementById("terning1").querySelector("img");
const terning2 = document.getElementById("terning2").querySelector("img");
let sendVidere = document.getElementById("send__videre");
let terningContainer = document.getElementById("terning__container");
let loeft = document.getElementById("loeft");
let baeger = document.getElementById("baeger");
let nytSpil = document.getElementById("nyt__spil");
let derover = document.getElementById("derover");
let taelClicks = 0;
/* False fra start */
sendVidere.disabled = true;
loeft.style.visibility = 'hidden';
nytSpil.style.display = 'none';
derover.style.display = 'none';




/*===== Rulning af terninger =====*/
kast.onclick = () => {
    rulterninger()
}


sendVidere.onclick = () => {
    skjul()
    loeft.style.display = 'block';
    derover.disabled = true;
}

function skjul() {
    kast.disabled = false;
    sendVidere.style.display = 'none';
    loeft.style.visibility = 'visible';
    terningContainer.style.visibility = 'hidden';
    loeft.disabled = false;
    derover.style.display = 'block';
}

loeft.onclick = function loeftCup() {
    terningContainer.style.visibility = 'visible';
    kast.style.display = 'none';
    loeft.disabled = true;
    nytSpil.style.display = 'block';
    derover.disabled = true;
}

nytSpil.onclick = function reset() {
    kast.style.display = 'block';
    sendVidere.style.display = 'block';
    sendVidere.disabled = true;
    nytSpil.style.display = 'none';
    loeft.style.visibility = 'hidden';
    taelClicks = 0;
    derover.style.display = 'none';
}


derover.onclick = function videre() {
    rulterninger()
    skjul()
    loeft.style.display = 'block';
    loeft.style.visibility = 'visible';
    derover.disabled = true;
}


function rulterninger() {
    taelClicks++;

    if (taelClicks >= 2) {
        derover.style.display = 'block';
        loeft.style.display = 'none';
    } else {
      
    }

    let terningEt = Math.floor(Math.random() * 6);

    if (terningEt == 0) {
        terning1.src = "./terninger/dice-one.svg";
    } else if (terningEt == 1) {
        terning1.src = "./terninger/dice-two.svg";
    } else if (terningEt == 2) {
        terning1.src = "./terninger/dice-three.svg";
    } else if (terningEt == 3) {
        terning1.src = "./terninger/dice-four.svg";
    } else if (terningEt == 4) {
        terning1.src = "./terninger/dice-five.svg";
    } else if (terningEt == 5) {
        terning1.src = "./terninger/dice-six.svg";
    }

    let terningTo = Math.floor(Math.random() * 6);

    if (terningTo == 0) {
        terning2.src = "./terninger/dice-one.svg";
    } else if (terningTo == 1) {
        terning2.src = "./terninger/dice-two.svg";
    } else if (terningTo == 2) {
        terning2.src = "./terninger/dice-three.svg";
    } else if (terningTo == 3) {
        terning2.src = "./terninger/dice-four.svg";
    } else if (terningTo == 4) {
        terning2.src = "./terninger/dice-five.svg";
    } else if (terningTo == 5) {
        terning2.src = "./terninger/dice-six.svg";
    }


    loeft.style.visibility = 'hidden';
    terningContainer.style.visibility = 'visible';
    kast.disabled = true;
    sendVidere.disabled = false;
    sendVidere.style.display = 'block';
    derover.disabled = false;
}

setInterval(() => {
    let terningTo = (Math.random() * 7);
    if (terningTo >= 6) {
        console.log(terningTo)
    } 
}, 10);