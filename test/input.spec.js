// Feladat Feladat 0364
// https://szit.hu/doku.php?id=oktatas:programozas:feladatok:altalanos#feladat_0364

/*
* File: input.spec.js
* Author: Király Péter
* Copyright: 2023, Király Péter
* Group: Szoft-1-2-E
* Date: 2023-06-06
* Github: https://github.com/KiralyPeter/SW_teszteles_Dolgozat-3.git
* Licenc: GNU GPL
*/


describe('Input tesztelése', ()=> { //x-el ki lehet zárni a tesztet..
    it('Szám', ()=> {
        let actual = checkInput(30);
        expect(actual).toBe(true);
    });
    it('Nem szám', ()=> {
        let actual = checkInput('aaa');
        expect(actual).toBe(false);
    });
    it('0 input', ()=> {
        let actual = checkInput(0);
        expect(actual).toBe(false);
    });
    it('-5', ()=> {
        let actual = checkInput(-5);
        expect(actual).toBe(false);
    });
});