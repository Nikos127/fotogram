let photoTitles = [
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

let photos = [
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

let currentPhoto = 0;

function photosFiltered(index) {
    respOverlay(index);
}

function nextPhoto(index, length) {
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

function prevPhoto(index, length) {
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
    let length = photos.length;
    currentPhoto = index;
    overlayRef.innerHTML = getOverlayContent(index, length);
}

function init() {
    let galleryRef = document.getElementById('imageGallery');
    galleryRef.innerHTML = "";
    for (let index = 0; index < photos.length; index++) {
        galleryRef.innerHTML += getGalleryContent(index);
    }
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
        prevPhoto(currentPhoto, photos.length);
    }
    else if
        (x.key === 'ArrowRight') {
        nextPhoto(currentPhoto, photos.length);
    }
})