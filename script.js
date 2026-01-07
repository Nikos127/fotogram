let fotoTitles = [
    blue - 115762_1280,
    blue - cave - 590336_1280,
    chair - 2736513_1280,
    greece - 6821802_1280,
    island - 203153_1280,
    mykonos - 5181484_1280,
    rhodes - 2088130_1280,
    santorin - 1700274_1280,
    santorin - 1788606_1280,
    santorini - 169239_1280,
    santorini - 86815_1280,
    zakynthos - 1583095_1280,
]

function resp_overlay(event) {
    document.getElementById('resp_image').classList.add('overlay');
    document.getElementById('cloudy').classList.add('cloudy');
    event.stopPropagation();

    for (i = 0; i < fotoTitles.length; i++) {
        document.getElementById('resp_image').innerHTML = ${fotoTitles[i]}
    }
}

function overlay_close(event) {
    document.getElementById('resp_image').classList.remove('overlay');
    document.getElementById('cloudy').classList.remove('cloudy');
    event.stopPropagation();
}
