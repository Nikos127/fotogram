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
    resp_overlay(event, index);
}

function resp_overlay(event, index) {
    document.getElementById('resp_image').classList.add('overlay');
    document.getElementById('cloudy').classList.add('cloudy');
    event.stopPropagation();

    let overlayRef = document.getElementById('resp_image');
    overlayRef.innerHTML = "";
    let i = index;
    let l = length.fotos;

    overlayRef.innerHTML = getOverlayContent(i, fotoTitles, fotos);
}

function getOverlayContent(i) {
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
            <div class="overlayArows">
                <img src="./img/Button left.png" alt="arrow_point_left">
                <p id="counter">${[i + 1]}/</p>
                <img src="./img/Button right.png" alt="arrow_point_right">
            </div>
        </div>`
}

function overlay_close(event) {
    document.getElementById('resp_image').classList.remove('overlay');
    document.getElementById('cloudy').classList.remove('cloudy');
    event.stopPropagation();
}