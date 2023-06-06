// Feladat Feladat 0364
// https://szit.hu/doku.php?id=oktatas:programozas:feladatok:altalanos#feladat_0364

/*
* File: calc.spec.js
* Author: Király Péter
* Copyright: 2023, Király Péter
* Group: Szoft-1-2-E
* Date: 2023-06-06
* Github: https://github.com/KiralyPeter/SW_teszteles_Dolgozat-3.git
* Licenc: GNU GPL
*/

describe('Számítás tesztelése', ()=> {
    it('Normál teszt 1, Magasság: 2m, Szélesség: 5m, Hossz: 25m', ()=> {
        let actual = calcVolume(2, 5, 25);
        let expected= 237.5;
        expect(actual).toBeCloseTo(expected, 0.9); // 0.9 = megengedett eltérés
    });
    it('Normál teszt 2: Magasság: 4m, Szélesség: 20m, Hossz: 50m', ()=> {
        let actual = calcVolume(4, 20, 50);
        let expected= 3900;
        expect(actual).toBeCloseTo(expected, 0.9); // 0.9 = megengedett eltérés
    });
    it('Szélső érték 1: Magasság: 1m, Szélesség: 1m, Hossz: 1m', ()=> {
        let actual = calcVolume(1, 1, 1);
        let expected= 0.9;
        expect(actual).toBeCloseTo(expected, 0.9); // 0.9 = megengedett eltérés
    });
    it('Szélső érték 2: Magasság: 100m, Szélesség: 200m, Hossz: 500m', ()=> {
        let actual = calcVolume(100, 200, 500);
        let expected= 9990000;
        expect(actual).toBeCloseTo(expected, 0.9); // 0.9 = megengedett eltérés
    });
});