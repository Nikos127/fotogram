let fotoTitles = [
    "Blue Cave Serenity",
    "Sunlit Seaside Chair",
    "Essence of Greece",
    "Island Escape",
    "Blue Door in the Sunlight",
    "Magic of Mykonos",
    "Rhodes Coastal Charm",
    "Santorini Dream Coast",
    "Santorini Sunset Blues",
    "Santorini Cliffside Dawn",
    "Aegean Archway View",
    "Stone Windmill Above the Aegean"
]

let fotos = [
    "./img/blue-cave-590336_1280.jpg",
    "./img/chair-2736513_1280.jpg",
    "./img/greece-6821802_1280.jpg",
    "./img/island-203153_1280.jpg",
    "./img/blue-115762_1280.jpg",
    "./img/mykonos-5181484_1280.jpg",
    "./img/rhodes-2088130_1280.jpg",
    "./img/santorin-1700274_1280.jpg",
    "./img/santorin-1788606_1280.jpg",
    "./img/santorini-169239_1280.jpg",
    "./img/santorini-86815_1280.jpg",
    "./img/zakynthos-1583095_1280.jpg"
]

let currentFoto = 0;

function fotosFiltered(index) {
    respOverlay(index);
}

function nextFoto(i, l) {
    if (i >= l - 1) {
        i = 0;
        respOverlay(i);
    }
    else {
        i++;
        respOverlay(i);
    }
}

function prewFoto(i, l) {
    if (i <= 0) {
        i = 11;
        respOverlay(i);
    }
    else {
        i--;
        respOverlay(i);
    }
}

function respOverlay(index) {
    document.getElementById('respImage').classList.add('overlay');
    document.getElementById('cloudy').classList.add('cloudy');
    document.getElementById('overflow').classList.add('overlay');
    event.stopPropagation();


    let overlayRef = document.getElementById('respImage');
    overlayRef.innerHTML = "";
    let i = index;
    let l = fotos.length;
    currentFoto = index;
    overlayRef.innerHTML = getOverlayContent(i, l);
}



function getOverlayContent(i, l) {
    return `<div>
            <div class="overlayHeader">
                <h2>
                    ${fotoTitles[i]}
                </h2>
                <div class="overlayClose">
                    <img onclick="overlayClose()" src="./img/Close icon.png" alt=""></img>
                </div>
            </div>
            <div>
                <img src="${fotos[i]}" alt=""></img>
            </div>
            <div class="overlayArrows">
                <img onclick="prewFoto(${[i]},${[l]})" src="./img/Button left.png" alt="arrowPointLeft">
                <p class="counter">${[i + 1]}/${[l]}</p>
                <img onclick="nextFoto(${[i]},${[l]})" src="./img/Button right.png" alt="arrowPointRight">
            </div>
        </div>`
}

function overlayClose() {
    document.getElementById('respImage').classList.remove('overlay');
    document.getElementById('cloudy').classList.remove('cloudy');
    document.getElementById('overflow').classList.remove('overlay');
}

document.addEventListener('keydown', function (x) {
    if (x.key === 'Escape') {
        overlayClose();
    }
    else if
        (x.key === 'ArrowLeft') {
        prewFoto(currentFoto, fotos.length);
    }
    else if
        (x.key === 'ArrowRight') {
        nextFoto(currentFoto, fotos.length);
    }
})