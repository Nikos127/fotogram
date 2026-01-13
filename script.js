let fotoTitles = [
    "blue - cave - 590336_1280",
    "chair - 2736513_1280",
    "greece - 6821802_1280",
    "island - 203153_1280",
    "blue - 115762_1280",
    "mykonos - 5181484_1280",
    "rhodes - 2088130_1280",
    "santorin - 1700274_1280",
    "santorin - 1788606_1280",
    "santorini - 169239_1280",
    "santorini - 86815_1280",
    "zakynthos - 1583095_1280"
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
function fotosFiltered(index) {
    window.scrollTo(0, 0);
    resp_overlay(index);
}

function nextFoto(i, l) {
    if (i >= l - 1) {
        i = 0;
        resp_overlay(i);
    }
    else {
        i++;
        resp_overlay(i);
    }
}

function prewFoto(i, l) {
    if (i <= 0) {
        i = 11;
        resp_overlay(i);
    }
    else {
        i--;
        resp_overlay(i);
    }
}

function resp_overlay(index) {
    document.getElementById('resp_image').classList.add('overlay');
    document.getElementById('cloudy').classList.add('cloudy');
    event.stopPropagation();

    let overlayRef = document.getElementById('resp_image');
    overlayRef.innerHTML = "";
    let i = index;
    let l = fotos.length;
    overlayRef.innerHTML = getOverlayContent(i, l);
}

function getOverlayContent(i, l) {
    return `<div>
            <div class="overlayHeader">
                <h2>
                    ${fotoTitles[i]}
                </h2>
                <div class="overlayClose">
                    <img onclick="overlay_close()" src="./img/Close icon.png" alt=""></img>
                </div>
            </div>
            <div>
                <img src="${fotos[i]}" alt=""></img>
            </div>
            <div class="overlayArrows">
                <img onclick="prewFoto(${[i]},${[l]})" src="./img/Button left.png" alt="arrow_point_left">
                <p class="counter">${[i + 1]}/${[l]}</p>
                <img onclick="nextFoto(${[i]},${[l]})" src="./img/Button right.png" alt="arrow_point_right">
            </div>
        </div>`
}

function overlay_close() {
    document.getElementById('resp_image').classList.remove('overlay');
    document.getElementById('cloudy').classList.remove('cloudy');
}