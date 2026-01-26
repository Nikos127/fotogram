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

function nextFoto(index, length) {
    if (index >= length - 1) {
        index = 0;
        respOverlay(index);
    }
    else {
        index++;
        respOverlay(index);
    }

    setTimeout(function () {
        document.querySelector('.overlayArrows img:last-child').focus();
    }, 50);
}

function prewFoto(index, length) {
    if (index <= 0) {
        index = length - 1;
        respOverlay(index);
    }
    else {
        index--;
        respOverlay(index);
    }

    setTimeout(function () {
        document.querySelector('.overlayArrows img:first-child').focus();
    }, 50);
}

function respOverlay(index) {
    document.getElementById('respImage').classList.add('overlay');
    document.getElementById('cloudy').classList.add('cloudy');
    document.getElementById('overflow').classList.add('overlay');
    event.stopPropagation();

    let photoTabs = document.querySelectorAll('main button');
    for (let i = 0; i < photoTabs.length; i++) {
        photoTabs[i].tabIndex = -1;
    }

    let overlayRef = document.getElementById('respImage');
    overlayRef.innerHTML = "";
    let length = fotos.length;
    currentFoto = index;
    overlayRef.innerHTML = getOverlayContent(index, length);
}



function getOverlayContent(index, length) {
    return `<div class="overlayHeader">
                <h2>
                    ${fotoTitles[index]}
                </h2>
                <div class="overlayClose">
                    <img aria-label="Schließen" aria-describedby="Schließt das Overlay" onclick="overlayClose()" onkeydown="if(event.key==='Enter') overlayClose()" src="./img/Close icon.png" alt="" tabindex="0"></img>
                </div>
            </div>
            <div class="overlayPhoto">
                <img src="${fotos[index]}" alt=""></img>
            </div>
            <div class="overlayArrows">
                <img onclick="prewFoto(${index},${length})" onkeydown="if(event.key==='Enter') prewFoto(${index},${length})" src="./img/Button left.png" alt="arrowPointLeft" tabindex="0">
                <p class="counter">${index + 1}/${length}</p>
                <img onclick="nextFoto(${index},${length})" onkeydown="if(event.key==='Enter') nextFoto(${index},${length})" src="./img/Button right.png" alt="arrowPointRight" tabindex="0">
        </div>`
}

function overlayClose() {
    document.getElementById('respImage').classList.remove('overlay');
    document.getElementById('cloudy').classList.remove('cloudy');
    document.getElementById('overflow').classList.remove('overlay');

    let photoTabs = document.querySelectorAll('main button');
    for (let i = 0; i < photoTabs.length; i++) {
        photoTabs[i].tabIndex = 0;
    }
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