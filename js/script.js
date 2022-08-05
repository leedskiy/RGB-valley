const elem = document.documentElement;
const logoCls1 = document.querySelectorAll('.cls-1');
const logoCls2 = document.querySelectorAll('.cls-2');
const logoCls3 = document.querySelectorAll('.cls-3');
const logoCls4 = document.querySelectorAll('.cls-4');
const tools = document.querySelector('.tools');
const toolsTitle = document.querySelector('.tools__title');
const toolsSeparator = document.querySelector('.tools__separator');
const toolsList = document.querySelector('.tools__list');
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
const pencilCls11 = document.querySelector('.cls-11');
const pencilCls12 = document.querySelectorAll('.cls-12');
const eraserCls21 = document.querySelector('.cls-21');
const eraserCls22 = document.querySelector('.cls-22');
const lighterCls31 = document.querySelectorAll('.cls-31');
const lighterCls32 = document.querySelector('.cls-32');
const tools3 = document.querySelectorAll('.tools3');
const canvas = document.querySelector('.canvas');
const canvasTitle = document.querySelector('.canvas__title');
const canvasSize = document.querySelector('.canvas__size');
const canvasRange = document.querySelector('.canvas__range');
const canvasSeparator = document.querySelector('.canvas__separator');
const canvasGrid = document.querySelector('.canvas__grid');
const footerAuthor = document.querySelector('.footer__author');

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
            if (selectedCanvasElements[i] ===
                selectedCanvasElements[size * size - size]) {
                selectedCanvasElements[size * size - size].style.cssText = `
                    border-bottom: 0;
                    border-bottom-left-radius: 4px;
                    background-color: ${bgcolor};
                `;
            }
            else if (selectedCanvasElements[i] ===
                selectedCanvasElements[size * size - 1]) {
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
let randomNumber1;
let randomNumber2;
let randomNumber3;

function randomizeColor() {
    randomNumber1 = Math.floor(Math.random() * 255);
    randomNumber2 = Math.floor(Math.random() * 255);
    randomNumber3 = Math.floor(Math.random() * 255);
    randomColor1 = `rgb(${randomNumber1}, 
                    ${randomNumber2}, 
                    ${randomNumber3})`;
}

let randomOfColor1;
let randomOfColor2;

function randomizeRandomOffers() {
    randomOfColor1 = `rgb(${Math.floor(Math.random() * 255)}, 
                      ${Math.floor(Math.random() * 255)}, 
                      ${Math.floor(Math.random() * 255)})`;
    randomOfColor2 = `rgb(${Math.floor(Math.random() * 255)}, 
                      ${Math.floor(Math.random() * 255)}, 
                      ${Math.floor(Math.random() * 255)})`;

    offers1Random.style.cssText = `
        background-color: rgb(225, 6, 0);
        background-image: linear-gradient(
            90deg,
            ${randomOfColor1},
            ${randomOfColor2}
        );
    `
    randomOfColor1 = `rgb(${Math.floor(Math.random() * 255)}, 
                      ${Math.floor(Math.random() * 255)}, 
                      ${Math.floor(Math.random() * 255)})`;
    randomOfColor2 = `rgb(${Math.floor(Math.random() * 255)}, 
                      ${Math.floor(Math.random() * 255)}, 
                      ${Math.floor(Math.random() * 255)})`;

    offers2Random.style.cssText = `
        background-color: rgb(225, 6, 0);
        background-image: linear-gradient(
            90deg,
            ${randomOfColor1},
            ${randomOfColor2}
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
            giveDcolorNewValue('rgb(251, 72, 196)');
            selectedCanvasElement.style.cssText = `
                background-color: rgb(77, 77, 255);
            `;
            inputColor1ByID.value = '#fb48c4';
            changeColor('rgb(251, 72, 196)', bgcolor);
            blueInNeon = false;
        }
        else if (blueInNeon === false) {
            giveDcolorNewValue('rgb(77,77,255)');
            selectedCanvasElement.style.cssText = `
                background-color: rgb(251, 72, 196);
            `;
            inputColor1ByID.value = '#4d4dff';
            changeColor('rgb(77,77,255)', bgcolor);
            blueInNeon = true;
        }
    }
    else if (dcolorMode === 'rainbow') {
        if (rainbowColor === 1) {
            giveDcolorNewValue('rgb(255, 130, 0)');
            selectedCanvasElement.style.cssText = `
                background-color: rgb(225, 6, 0);
            `;
            inputColor1ByID.value = '#ff8200';
            changeColor('rgb(255, 130, 0)', bgcolor);
            ++rainbowColor;
        }
        else if (rainbowColor === 2) {
            giveDcolorNewValue('rgb(255, 233, 0)');
            selectedCanvasElement.style.cssText = `
                background-color: rgb(255, 130, 0);
            `;
            inputColor1ByID.value = '#ffe900';
            changeColor('rgb(255, 233, 0)', bgcolor);
            ++rainbowColor;
        }
        else if (rainbowColor === 3) {
            giveDcolorNewValue('rgb(8, 255, 8)');
            selectedCanvasElement.style.cssText = `
                background-color: rgb(255, 233, 0);
            `;
            inputColor1ByID.value = '#08ff08';
            changeColor('rgb(8, 255, 8)', bgcolor);
            ++rainbowColor;
        }
        else if (rainbowColor === 4) {
            giveDcolorNewValue('rgb(0, 138, 216)');
            selectedCanvasElement.style.cssText = `
                background-color: rgb(8, 255, 8);
            `;
            inputColor1ByID.value = '#008ad8';
            changeColor('rgb(0, 138, 216)', bgcolor);
            ++rainbowColor;
        }
        else if (rainbowColor === 5) {
            giveDcolorNewValue('rgb(0, 47, 108)');
            selectedCanvasElement.style.cssText = `
                background-color: rgb(0, 138, 216);
            `;
            inputColor1ByID.value = '#002f6c';
            changeColor('rgb(0, 47, 108)', bgcolor);
            ++rainbowColor;
        }
        else if (rainbowColor === 6) {
            giveDcolorNewValue('rgb(166, 81, 126)');
            selectedCanvasElement.style.cssText = `
                background-color: rgb(0, 47, 108);
            `;
            inputColor1ByID.value = '#a6517e';
            changeColor('rgb(166, 81, 126)', bgcolor);
            ++rainbowColor;
        }
        else if (rainbowColor === 7) {
            giveDcolorNewValue('rgb(225, 6, 0)');
            selectedCanvasElement.style.cssText = `
                background-color: rgb(166, 81, 126);
            `;
            inputColor1ByID.value = '#e10600';
            changeColor('rgb(225, 6, 0)', bgcolor);
            rainbowColor = 1;
        }
    }
    else if (dcolorMode === 'random') {
        giveDcolorNewValue(`${randomColor1}`);
        selectedCanvasElement.style.cssText = `
                background-color: ${randomColor1};
        `;
        randomizeColor();
        inputColor1ByID.value = `${rgbToHex(randomNumber1, randomNumber2,
            randomNumber3)}`;
        changeColor(randomColor1, bgcolor);
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
    selectedCanvasElements.forEach((selectedCanvasElement) => {
        selectedCanvasElement.addEventListener('touchstart', () => {
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

const styleInHtml = document.createElement('style');
toolsList.append(styleInHtml);

function changeColor(newDcolor, newBgcolor) {
    logoCls1.forEach((lgCls1) => {
        lgCls1.style.cssText = `
            stroke: ${newBgcolor};
            fill: ${newDcolor};
        `;
    })

    logoCls2.forEach((lgCls2) => {
        lgCls2.style.cssText = `
            stroke: ${newDcolor};
            fill: ${newBgcolor};
        `;
    })

    logoCls3.forEach((lgCls3) => {
        lgCls3.style.cssText = `
            fill: ${newBgcolor};
        `;
    })

    logoCls4.forEach((lgCls4) => {
        lgCls4.style.cssText = `
            stroke: ${newDcolor};
        `;
    })

    tools.style.cssText = `
        border: 3px solid ${newBgcolor};
        box-shadow: 0 0 7px ${newDcolor};
    `;

    toolsTitle.style.cssText = `
        color: ${newBgcolor};
    `;

    toolsSeparator.style.cssText = `
        background-color: ${newBgcolor};
    `;

    styleInHtml.innerHTML = `
        /* color */

        input[type="color"].list__color1::-webkit-color-swatch {
            border: 3px solid ${newBgcolor};
            box-shadow: 0 0 5px ${newDcolor};
        }

        input[type="color"].list__color1::-webkit-color-swatch:hover {
            box-shadow: 0 0 7px ${newDcolor};
        }

        input[type="color"].list__color2::-webkit-color-swatch {
            border: 3px solid ${newDcolor};
            box-shadow: 0 0 5px ${newBgcolor};
        }

        input[type="color"].list__color2::-webkit-color-swatch:hover {
            box-shadow: 0 0 7px ${newBgcolor};
        }

        /* range */

        /* range track */

        input[type="range"]::-webkit-slider-runnable-track {
            background: ${newBgcolor};
            border: 3px solid ${newDcolor};
            box-shadow: 0 0 5px ${newBgcolor};
        }
          
        input[type="range"]::-webkit-slider-runnable-track:hover {
            box-shadow: 0 0 7px ${newBgcolor};
        }
          
        input[type="range"]:focus::-webkit-slider-runnable-track {
            background: ${newBgcolor};
        }
          
        input[type="range"]::-moz-range-track {
            background: ${newBgcolor};
            border: 3px solid ${newDcolor};
            box-shadow: 0 0 5px ${newBgcolor};
        }
          
        input[type="range"]::-moz-range-track:hover {
            box-shadow: 0 0 7px ${newBgcolor};
        }
          
        input[type="range"]::-ms-track {
            background: ${newBgcolor};
            border: 3px solid ${newDcolor};
            box-shadow: 0 0 5px ${newBgcolor};
        }
          
          input[type="range"]::-ms-track:hover {
            box-shadow: 0 0 7px ${newBgcolor};
        }
          
        input[type="range"]::-ms-fill-lower {
            background: ${newBgcolor};
            border: 3px solid ${newDcolor};
            box-shadow: 0 0 5px ${newBgcolor};
        }
          
        input[type="range"]::-ms-fill-lower:hover {
            box-shadow: 0 0 7px ${newBgcolor};
        }
          
        input[type="range"]:focus::-ms-fill-lower {
            background: ${newBgcolor};
        }
          
        input[type="range"]::-ms-fill-upper {
            background: ${newBgcolor};
            border: 3px solid ${newDcolor};
            box-shadow: 0 0 5px ${newBgcolor};
        }
          
        input[type="range"]::-ms-fill-upper:hover {
            box-shadow: 0 0 7px ${newBgcolor};
        }
          
        input[type="range"]:focus::-ms-fill-upper {
            background: ${newBgcolor};
        }
          
        /* range thumb */

        input[type="range"]::-webkit-slider-thumb {
            border: 3px solid ${newBgcolor};
            background: ${newDcolor};
            box-shadow: 0 0 5px ${newDcolor};
        }
          
        input[type="range"]::-webkit-slider-thumb:hover {
            box-shadow: 0 0 7px ${newDcolor};
        }
          
        input[type="range"]::-moz-range-thumb {
            border: 3px solid ${newBgcolor};
            background: ${newDcolor};
            box-shadow: 0 0 5px ${newDcolor};
        }
          
        input[type="range"]::-moz-range-thumb:hover {
            box-shadow: 0 0 7px ${newDcolor};
        }
          
        input[type="range"]::-ms-thumb {
            border: 3px solid ${newBgcolor};
            background: ${newDcolor};
            box-shadow: 0 0 5px ${newDcolor};
        }
          
        input[type="range"]::-ms-thumb:hover {
            box-shadow: 0 0 7px ${newDcolor};
        }

        .canvas__grid-active:hover .canvas__element{
            border-right: 3px solid ${newDcolor};
            border-bottom: 3px solid ${newDcolor};
        }

        .footer__text a {
            color: ${newBgcolor};
        }

        .footer__text:before {
            background-color: ${newBgcolor};
        }

        .footer__text:after {
            background-color: ${newDcolor};
        }
    `;

    pencilCls11.style.cssText = `
        fill: ${newBgcolor};
        stroke: ${newDcolor};
    `;

    pencilCls12.forEach((pclCls12) => {
        pclCls12.style.cssText = `
            fill: ${newDcolor};
            stroke: ${newBgcolor};
        `;
    })

    eraserCls21.style.cssText = `
        fill: ${newBgcolor};
        stroke: ${newDcolor};
    `;

    eraserCls22.style.cssText = `
        fill: ${newDcolor};
        stroke: ${newBgcolor};
    `;

    lighterCls31.forEach((pclCls12) => {
        pclCls12.style.cssText = `
            fill: ${newDcolor};
            stroke: ${newBgcolor};
        `;
    })

    lighterCls32.style.cssText = `
        fill: ${newBgcolor};
        stroke: ${newDcolor};
    `;
    canvas.style.cssText = `
        border: 3px solid ${newDcolor};
        box-shadow: 0 0 7px ${newBgcolor};
    `;

    canvasTitle.style.cssText = `
        color: ${newDcolor};
    `;

    canvasSize.style.cssText = `
        color: ${newDcolor};
    `;

    canvasSeparator.style.cssText = `
        background-color: ${newDcolor};
    `;

    footerAuthor.style.cssText = `
        color: ${newDcolor};
    `;
}

function activatecolors() {
    listcolor1.addEventListener('input', () => {
        if ((tools3[0].classList.contains('tools3-active'))) {
            giveDcolorNewValue(listcolor1.value);
        }
        dcolorMode = 'color';
        changeActiveTool('pencil');
        changeColor(listcolor1.value, listcolor2.value);
        if (!(canvasGrid.classList.contains('canvas__grid-active'))) {
            canvasGrid.classList.add('canvas__grid-active');
        }
    });
    listcolor1.addEventListener('click', () => {
        if ((tools3[0].classList.contains('tools3-active'))) {
            giveDcolorNewValue(listcolor1.value);
        }
        dcolorMode = 'color';
        changeActiveTool('pencil');
        changeColor(listcolor1.value, listcolor2.value);
        if (!(canvasGrid.classList.contains('canvas__grid-active'))) {
            canvasGrid.classList.add('canvas__grid-active');
        }
    });
    listcolor2.addEventListener('input', () => {
        if ((tools3[1].classList.contains('tools3-active'))) {
            giveDcolorNewValue(listcolor2.value);
        }
        giveBgcolorNewValue(listcolor2.value);
        changeBgcolor(listcolor2.value);
        changeColor(listcolor1.value, listcolor2.value);
    });
    listcolor2.addEventListener('click', () => {
        if ((tools3[1].classList.contains('tools3-active'))) {
            giveDcolorNewValue(listcolor2.value);
        }
        giveBgcolorNewValue(listcolor2.value);
        changeBgcolor(listcolor2.value);
        changeColor(listcolor1.value, listcolor2.value);
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

let bgColorRandomNumber1;
let bgColorRandomNumber2;
let bgColorRandomNumber3;

function pickOfferedColor(offer) {
    if (offer === 0) {
        giveDcolorNewValue('rgb(255, 255, 255)');
        inputColor1ByID.value = '#ffffff';
        dcolorMode = 'white';
        changeActiveTool('pencil');
        changeColor('rgb(255, 255, 255)', bgcolor);
        if (!(canvasGrid.classList.contains('canvas__grid-active'))) {
            canvasGrid.classList.add('canvas__grid-active');
        }
    }
    else if (offer === 1) {
        giveDcolorNewValue('rgb(0, 0, 0)');
        inputColor1ByID.value = '#000000';
        dcolorMode = 'black';
        changeActiveTool('pencil');
        changeColor('rgb(0, 0, 0)', bgcolor);
        if (!(canvasGrid.classList.contains('canvas__grid-active'))) {
            canvasGrid.classList.add('canvas__grid-active');
        }
    }
    else if (offer === 2) {
        giveDcolorNewValue('rgb(77,77,255)');
        inputColor1ByID.value = '#4d4dff';
        blueInNeon = true;
        dcolorMode = 'neon';
        changeActiveTool('pencil');
        changeColor('rgb(77,77,255)', bgcolor);
        if (canvasGrid.classList.contains('canvas__grid-active')) {
            canvasGrid.classList.remove('canvas__grid-active');
        }
    }
    else if (offer === 3) {
        giveDcolorNewValue('rgb(225, 6, 0)');
        inputColor1ByID.value = '#e10600';
        rainbowColor = 1;
        dcolorMode = 'rainbow';
        changeActiveTool('pencil');
        changeColor('rgb(225, 6, 0)', bgcolor);
        if (canvasGrid.classList.contains('canvas__grid-active')) {
            canvasGrid.classList.remove('canvas__grid-active');
        }
    }
    else if (offer === 4) {
        randomizeRandomOffers();
        dcolorMode = 'random';
        changeActiveTool('pencil');
        randomizeColor();
        giveDcolorNewValue(`${randomColor1}`);
        inputColor1ByID.value = `${rgbToHex(randomNumber1, randomNumber2,
            randomNumber3)}`;
        changeColor(randomColor1, bgcolor);
        if (canvasGrid.classList.contains('canvas__grid-active')) {
            canvasGrid.classList.remove('canvas__grid-active');
        }
    }
    else if (offer === 5) {
        giveBgcolorNewValue('rgb(0, 0, 0)');
        changeBgcolor('rgb(0, 0, 0)');
        inputColor2ByID.value = '#000000';
        if ((tools3[1].classList.contains('tools3-active'))) {
            giveDcolorNewValue('rgb(0, 0, 0)');
        }
        changeColor(dcolor, bgcolor);
    }
    else if (offer === 6) {
        giveBgcolorNewValue('rgb(255, 255, 255)');
        changeBgcolor('rgb(255, 255, 255)');
        inputColor2ByID.value = '#ffffff';
        if ((tools3[1].classList.contains('tools3-active'))) {
            giveDcolorNewValue('rgb(255, 255, 255)');
        }
        changeColor(dcolor, bgcolor);
    }
    else if (offer === 7) {
        bgColorRandomNumber1 = Math.floor(Math.random() * 255);
        bgColorRandomNumber2 = Math.floor(Math.random() * 255);
        bgColorRandomNumber3 = Math.floor(Math.random() * 255);
        randomizeRandomOffers();
        giveBgcolorNewValue(`rgb(${bgColorRandomNumber1}, 
                            ${bgColorRandomNumber2}, 
                            ${bgColorRandomNumber3})`);
        changeBgcolor(`rgb(${bgColorRandomNumber1}, 
                       ${bgColorRandomNumber2}, 
                       ${bgColorRandomNumber3})`);
        inputColor2ByID.value = `${rgbToHex(bgColorRandomNumber1,
            bgColorRandomNumber2, bgColorRandomNumber3)}`;
        changeColor(dcolor, bgcolor);
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
    changeColor();
}