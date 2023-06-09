// Feladat Feladat 0364
// https://szit.hu/doku.php?id=oktatas:programozas:feladatok:altalanos#feladat_0364

/*
* File: app.js
* Author: Király Péter
* Copyright: 2023, Király Péter
* Group: Szoft-1-2-E
* Date: 2023-06-06
* Github: https://github.com/KiralyPeter/SW_teszteles_Dolgozat-3.git
* Licenc: GNU GPL
*/

const doc = {
    heightInput: document.querySelector('#height'),
    widthInput: document.querySelector('#width'),
    lengthInput: document.querySelector('#length'),
    volumeInput: document.querySelector('#volume'),
    calcButton: document.querySelector('#calcButton')
};

const state = {
    volume: 0
};

window.addEventListener('load', ()=> { // = 'onload' az esemény..
    init();
});

function init(){
        if(doc.calcButton){ // if-be tettük, mert a Jasmine reklamálna miatta...
            doc.calcButton.addEventListener('click', ()=>{
                //console.log('működik');
                startCalc();
        });
        }
    
        // checkInput(30);
}

function startCalc(){
    let height = doc.heightInput.value;
    let width = doc.widthInput.value;
    let length = doc.lengthInput.value;
    console.log("Magasság 0-nál nagyobb szám: ", checkInput(height));
    console.log("Szélesség 0-nál nagyobb szám: ", checkInput(width));
    console.log("Hosszúság 0-nál nagyobb szám: ", checkInput(length));
    if (checkInput(height) && checkInput(width) && checkInput(length)){
        state.volume = calcVolume(height, width, length);
        doc.volumeInput.value = state.volume;
    } else {
        doc.volumeInput.value = "Hiba, csak 0-nál nagyobb számokat lehet beírni!"
    }
}

// ezt is tesztelni kell...
function calcVolume(height, width, length){
    return (height-0.1) * width * length; // -0.1 = -10cm a magasságból
}

// ezt is tesztelni kell...
function checkInput(input){
    let inputStr = String(input);
    let inputNum = Number(input);
    if(inputStr.match(/^[0-9.]+$/)) { // regex = számokkal kezdődik, és pontot is tartalmazhat, BOOLEAN értéket ad vissza a .match        
        if(inputNum >0) {
            return true;
        } else {
        return false;
        }  
    } else {
        return false;
    }
}