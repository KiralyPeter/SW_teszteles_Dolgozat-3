const doc = {
    heightInput: document.querySelector('#height'),
    widthInput: document.querySelector('#width'),
    lengthInput: document.querySelector('#length'),
    volumeInput: document.querySelector('#volume'),
    calcButton: document.querySelector('#calcButton')
};

const state = {
    index: 0
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
    let weight = doc.widthInput.value;
    let length = doc.lengthInput.value;
    state.index = calcVolume(height, weight, length);
    doc.volumeInput.value = state.index;
}

// ezt is tesztelni kell...
function calcVolume(height, weight, length){
    return (height-0.1) * weight * length; // -0.1 = -10cm a magasságból
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