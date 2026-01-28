function getGalleryContent(index) {
    return `<button aria-label="Foto öffnen" aria-describedby="Öffnet selektiertes Foto" onclick="photosFiltered(${index})" onkeydown="if(event.key==='Enter') photosFiltered(${index})"
    tabindex="0">
    <img src="${photos[index]}" alt="${photoTitles[index]}"></img>
</button>`
}

function getOverlayContent(index, length) {
    return `<div class="overlayHeader">
                <h2>
                    ${photoTitles[index]}
                </h2>
                <div class="overlayClose">
                    <img aria-label="Schließen" aria-describedby="Schließt das Overlay" onclick="overlayClose()" onkeydown="if(event.key==='Enter') overlayClose()" src="./img/Close icon.png" alt="" tabindex="0"></img>
                </div>
            </div>
            <div class="overlayPhoto">
                <img src="${photos[index]}" alt=""></img>
            </div>
            <div class="overlayArrows">
                <img onclick="prevPhoto(${index},${length})" onkeydown="if(event.key==='Enter') prevPhoto(${index},${length})" src="./img/Button left.png" alt="arrowPointLeft" tabindex="0">
                <p class="counter">${index + 1}/${length}</p>
                <img onclick="nextPhoto(${index},${length})" onkeydown="if(event.key==='Enter') nextPhoto(${index},${length})" src="./img/Button right.png" alt="arrowPointRight" tabindex="0">
        </div>`
}