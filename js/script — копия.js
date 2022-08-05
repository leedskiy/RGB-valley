const elem = document.documentElement;
const toolsTitle = document.querySelector('.tools__title');
const listColor1Layer = document.querySelector('.list__color1layer');
const listcolor1 = document.querySelector('.list__color1');
const inputColor1ByID = document.getElementById("inputColor1");
const offers = document.querySelectorAll('.offers');
const offersItems = document.querySelectorAll('.offers__item');
const offers1White = document.querySelector('.offers1__white');
const offers1Black = document.querySelector('.offers1__black');
const offers1Neon = document.querySelector('.offers1__neon');
const offers1Rainbow = document.querySelector('.offers1__rainbow');
const offers1Random = document.querySelector('.offers1__random');
const listColor2Layer = document.querySelector('.list__color2layer');
const listcolor2 = document.querySelector('.list__color2');
const inputColor2ByID = document.getElementById("inputColor2");
const offers2Black = document.querySelector('.offers2__black');
const offers2White = document.querySelector('.offers2__white');
const offers2Random = document.querySelector('.offers2__random');
const tools3 = document.querySelectorAll('.tools3');
const canvasTitle = document.querySelector('.canvas__title');
const canvasSize = document.querySelector('.canvas__size');
const canvasRange = document.querySelector('.canvas__range');
const canvasGrid = document.querySelector('.canvas__grid');

let size = 17;
let dcolor = 'rgb(0, 0, 0)';
let bgcolor = 'rgb(255, 255, 255)';
let dcolorMode = 'color';

toolsTitle.addEventListener('click', () => {
    offers.forEach((offer) => {
        offer.classList.toggle('offers-nonactive');
    });
});

canvasTitle.addEventListener('click', () => {
    canvasGrid.classList.toggle('canvas__grid-active');
});

let mouseDown = false;

document.addEventListener('mousedown', () => {
    mouseDown = true;
});

document.addEventListener('mouseup', () => {
    mouseDown = false;
});

let selectedCanvasElements;

function changeBordersAndCorners(size, bgcolor) {
    if (size === 1) {
        selectedCanvasElements[size * size - 1].style.cssText = `
            border-right: 0;
            border-bottom: 0;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            background-color: ${bgcolor};
        `;
    }
    else {
        for (let i = size - 1; i < size * size - 1;) {
            selectedCanvasElements[i].style.cssText = `
                border-right: 0;
                background-color: ${bgcolor};
            `;
            i += size;
        }

        for (let i = size * size - size; i < size * size; ++i) {
            if (selectedCanvasElements[i] === selectedCanvasElements[size * size - size]) {
                selectedCanvasElements[size * size - size].style.cssText = `
                    border-bottom: 0;
                    border-bottom-left-radius: 4px;
                    background-color: ${bgcolor};
                `;
            }
            else if (selectedCanvasElements[i] === selectedCanvasElements[size * size - 1]) {
                selectedCanvasElements[size * size - 1].style.cssText = `
                    border-right: 0;
                    border-bottom: 0;
                    border-bottom-right-radius: 4px;
                    background-color: ${bgcolor};
                `;
            }
            else {
                selectedCanvasElements[i].style.cssText = `
                    border-bottom: 0;
                    background-color: ${bgcolor};
                `;
            }
        }
    }
}

function changeGrid(size) {
    canvasGrid.style.cssText = `
        grid-template-columns: repeat(${size}, 1fr);
        grid-template-rows: repeat(${size}, 1fr);
    `;
}

let blueInNeon = true;
let rainbowColor = 1;
let randomColor1;
let randomColor2;
let randomNumber1;
let randomNumber2;
let randomNumber3;
let randomNumber4;
let randomNumber5;
let randomNumber6;

function randomizeColor() {
    randomNumber1 = Math.floor(Math.random() * 255);
    randomNumber2 = Math.floor(Math.random() * 255);
    randomNumber3 = Math.floor(Math.random() * 255);
    randomNumber4 = Math.floor(Math.random() * 255);
    randomNumber5 = Math.floor(Math.random() * 255);
    randomNumber6 = Math.floor(Math.random() * 255);
    randomColor1 = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
    randomColor2 = `rgb(${randomNumber4}, ${randomNumber5}, ${randomNumber6})`;
}

function randomizeRandomOffers() {
    randomizeColor();

    offers1Random.style.cssText = `
        background-color: rgb(225, 6, 0);
        background-image: linear-gradient(
            90deg,
            ${randomColor1},
            ${randomColor2}
        );
    `
    randomizeColor();

    offers2Random.style.cssText = `
        background-color: rgb(225, 6, 0);
        background-image: linear-gradient(
            90deg,
            ${randomColor1},
            ${randomColor2}
        );
    `
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function changeDcolor(selectedCanvasElement) {
    if (dcolorMode === 'color') {
        selectedCanvasElement.style.cssText = `
            background-color:  ${dcolor};
        `;
    }
    else if (dcolorMode === 'white') {
        selectedCanvasElement.style.cssText = `
            background-color:  rgb(255, 255, 255);
        `;
    }
    else if (dcolorMode === 'black') {
        selectedCanvasElement.style.cssText = `
            background-color:  rgb(0, 0, 0);
        `;
    }
    else if (dcolorMode === 'neon') {
        if (blueInNeon === true) {
            selectedCanvasElement.style.cssText = `
                background-color: rgb(77, 77, 255);
            `;
            inputColor1ByID.value = '#fb48c4';
            blueInNeon = false;
        }
        else if (blueInNeon === false) {
            selectedCanvasElement.style.cssText = `
                background-color: rgb(251, 72, 196);
            `;
            inputColor1ByID.value = '#4d4dff';
            blueInNeon = true;
        }
    }
    else if (dcolorMode === 'rainbow') {
        if (rainbowColor === 1) {
            selectedCanvasElement.style.cssText = `
                background-color: rgb(225, 6, 0);
            `;
            inputColor1ByID.value = '#ff8200';
            ++rainbowColor;
        }
        else if (rainbowColor === 2) {
            selectedCanvasElement.style.cssText = `
                background-color: rgb(255, 130, 0);
            `;
            inputColor1ByID.value = '#ffe900';
            ++rainbowColor;
        }
        else if (rainbowColor === 3) {
            selectedCanvasElement.style.cssText = `
                background-color: rgb(255, 233, 0);
            `;
            inputColor1ByID.value = '#08ff08';
            ++rainbowColor;
        }
        else if (rainbowColor === 4) {
            selectedCanvasElement.style.cssText = `
                background-color: rgb(8, 255, 8);
            `;
            inputColor1ByID.value = '#008ad8';
            ++rainbowColor;
        }
        else if (rainbowColor === 5) {
            selectedCanvasElement.style.cssText = `
                background-color: rgb(0, 138, 216);
            `;
            inputColor1ByID.value = '#002f6c';
            ++rainbowColor;
        }
        else if (rainbowColor === 6) {
            selectedCanvasElement.style.cssText = `
                background-color: rgb(0, 47, 108);
            `;
            inputColor1ByID.value = '#a6517e';
            ++rainbowColor;
        }
        else if (rainbowColor === 7) {
            selectedCanvasElement.style.cssText = `
                background-color: rgb(166, 81, 126);
            `;
            inputColor1ByID.value = '#e10600';
            rainbowColor = 1;
        }
    }
    else if (dcolorMode === 'random') {
        selectedCanvasElement.style.cssText = `
                background-color: ${randomColor1};
        `;
        randomizeColor();
        inputColor1ByID.value = `${rgbToHex(randomNumber1, randomNumber2, randomNumber3)}`;
    }
}

function changeBgcolor(newBgcolor) {
    selectedCanvasElements.forEach((selectedCanvasElement) => {
        selectedCanvasElement.style.cssText = `
            background-color:  ${newBgcolor};
        `;
    });
    changeBordersAndCorners(size, bgcolor);
}

function giveEventListenrsToCanvas() {
    selectedCanvasElements.forEach((selectedCanvasElement) => {
        selectedCanvasElement.addEventListener('mouseover', () => {
            if (!mouseDown) { return }
            changeDcolor(selectedCanvasElement);
        });
    });
    selectedCanvasElements.forEach((selectedCanvasElement) => {
        selectedCanvasElement.addEventListener('mousedown', () => {
            changeDcolor(selectedCanvasElement);
        });
    });
}

function giveSizeNewValue(newSize) {
    size = Math.floor(newSize);
}

function giveDcolorNewValue(newDcolor) {
    dcolor = newDcolor;
}

function giveBgcolorNewValue(newBgcolor) {
    bgcolor = newBgcolor;
}

function activatecolors() {
    listcolor1.addEventListener('input', () => {
        if ((tools3[0].classList.contains('tools3-active'))) {
            giveDcolorNewValue(listcolor1.value);
        }
        dcolorMode = 'color';
        changeActiveTool('pencil');
    });
    listcolor1.addEventListener('click', () => {
        if ((tools3[0].classList.contains('tools3-active'))) {
            giveDcolorNewValue(listcolor1.value);
        }
        dcolorMode = 'color';
        changeActiveTool('pencil');
    });
    listcolor2.addEventListener('input', () => {
        if ((tools3[1].classList.contains('tools3-active'))) {
            giveDcolorNewValue(listcolor2.value);
        }
        giveBgcolorNewValue(listcolor2.value);
        changeBgcolor(listcolor2.value);
    });
    listcolor2.addEventListener('click', () => {
        if ((tools3[1].classList.contains('tools3-active'))) {
            giveDcolorNewValue(listcolor2.value);
        }
        giveBgcolorNewValue(listcolor2.value);
        changeBgcolor(listcolor2.value);
    });
}

function changeMode(mode) {
    if ((tools3[0].classList.contains('tools3-active')) ||
        (tools3[1].classList.contains('tools3-active'))) {
        if (mode === 'pencil') {
            giveDcolorNewValue(listcolor1.value);
        }
        else if (mode === 'eraser') {
            giveDcolorNewValue(bgcolor);
            dcolorMode = 'color';
        }
        else if (mode === 'lighter') {
            changeBgcolor(bgcolor);
        }
    }
}

function changeActiveTool(toolName) {
    if (toolName === 'pencil') {
        tools3[0].classList.add('tools3-active');
        if (tools3[1].classList.contains('tools3-active')) {
            tools3[1].classList.remove('tools3-active');
        }
        changeMode(toolName);
    }
    else if (toolName === 'eraser') {
        tools3[1].classList.add('tools3-active');
        if (tools3[0].classList.contains('tools3-active')) {
            tools3[0].classList.remove('tools3-active');
        }
        changeMode(toolName);
    }
    else if (toolName === 'lighter') {
        changeMode(toolName);
    }
}

function activateKeyboardButtons() {
    document.addEventListener('keydown', (e) => {
        if (e.code === 'KeyD') {
            changeActiveTool('pencil');
        }
        if (e.code === 'KeyE') {
            changeActiveTool('eraser');
        } if (e.code === 'KeyL') {
            changeActiveTool('lighter');
        }
    }, false);
}

function activate2Tools3() {
    tools3[0].addEventListener('click', () => {
        changeActiveTool('pencil');
    });
    tools3[1].addEventListener('click', () => {
        changeActiveTool('eraser');
    });
    tools3[2].addEventListener('click', () => {
        changeActiveTool('lighter');
    });

    activateKeyboardButtons();
}

function pickOfferedColor(offer) {
    if (offer === 0) {
        dcolorMode = 'white';
        changeActiveTool('pencil');
        inputColor1ByID.value = '#ffffff';
    }
    else if (offer === 1) {
        dcolorMode = 'black';
        changeActiveTool('pencil');
        inputColor1ByID.value = '#000000';
    }
    else if (offer === 2) {
        blueInNeon = true;
        dcolorMode = 'neon';
        changeActiveTool('pencil');
        inputColor1ByID.value = '#4d4dff';
    }
    else if (offer === 3) {
        rainbowColor = 1;
        dcolorMode = 'rainbow';
        changeActiveTool('pencil');
        inputColor1ByID.value = '#e10600';
    }
    else if (offer === 4) {
        randomizeRandomOffers();
        dcolorMode = 'random';
        changeActiveTool('pencil');
        randomizeColor();
        inputColor1ByID.value = `${rgbToHex(randomNumber1, randomNumber2, randomNumber3)}`;
    }
    else if (offer === 5) {
        giveBgcolorNewValue('rgb(0, 0, 0)');
        changeBgcolor('rgb(0, 0, 0)');
        inputColor2ByID.value = '#000000';
        if ((tools3[1].classList.contains('tools3-active'))) {
            giveDcolorNewValue('rgb(0, 0, 0)');
        }
    }
    else if (offer === 6) {
        giveBgcolorNewValue('rgb(255, 255, 255)');
        changeBgcolor('rgb(255, 255, 255)');
        inputColor2ByID.value = '#ffffff';
        if ((tools3[1].classList.contains('tools3-active'))) {
            giveDcolorNewValue('rgb(255, 255, 255)');
        }
    }
    else if (offer === 7) {
        randomizeRandomOffers();
        randomizeColor();
        giveBgcolorNewValue(`rgb(${randomNumber4}, ${randomNumber5}, ${randomNumber6})`);
        changeBgcolor(`rgb(${randomNumber4}, ${randomNumber5}, ${randomNumber6})`);
        inputColor2ByID.value = `${rgbToHex(randomNumber4, randomNumber5, randomNumber6)}`;
        if ((tools3[1].classList.contains('tools3-active'))) {
            giveDcolorNewValue(`rgb(${randomNumber4}, ${randomNumber5}, ${randomNumber6})`);
        }
        randomizeColor();
        inputColor1ByID.value = `${rgbToHex(randomNumber1, randomNumber2, randomNumber3)}`;
    }
}

for (let i = 0; i < offersItems.length; ++i) {
    offersItems[i].addEventListener('click', () => {
        pickOfferedColor(i);
    })
}

function changeCanvasSize(size) {
    canvasSize.innerHTML = `${size} x ${size}`;
}

function createGrid(size, bgcolor) {
    for (let i = 0; i < size; ++i) {
        for (let j = 0; j < size; ++j) {
            const canvasElement = document.createElement('div');
            canvasElement.classList.add('canvas__element');

            canvasElement.addEventListener('dragstart', (e) => {
                e.preventDefault()
            })
            canvasElement.addEventListener('drop', (e) => {
                e.preventDefault()
            })

            canvasGrid.append(canvasElement);
        }
    }

    selectedCanvasElements = document.querySelectorAll('.canvas__element');

    changeGrid(size);
    changeCanvasSize(size);
    changeBgcolor(bgcolor);
    giveEventListenrsToCanvas();
}

function clearCanvasGrid() {
    canvasGrid.innerHTML = ``;
}

function updateGrid(size) {
    clearCanvasGrid(size);
    createGrid(size, bgcolor);
}

canvasRange.addEventListener('change', (event) => {
    giveSizeNewValue(event.target.value);
    updateGrid(Math.floor(size));
})

canvasRange.addEventListener('mousemove', (event) => {
    changeCanvasSize(Math.floor(event.target.value));
})

window.onload = () => {
    updateGrid(size);
    activatecolors();
    activate2Tools3();
    randomizeRandomOffers();
}