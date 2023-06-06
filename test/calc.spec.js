

describe('Számítás tesztelése', ()=> {
    it('Normál1, Magasság: 2m, Szélesség: 5m, Hossz: 25m', ()=> {
        let actual = calcVolume(2, 5, 25);
        let expected= 237.5;
        expect(actual).toBeCloseTo(expected, 0.9); // 0.9 = megengedett eltérés
    });
    it('Normál2: Magasság: 4m, Szélesség: 20m, Hossz: 50m', ()=> {
        let actual = calcVolume(4, 20, 50);
        let expected= 3900;
        expect(actual).toBeCloseTo(expected, 0.9); // 0.9 = megengedett eltérés
    });
    xit('Szélső1: t: 1, m: 1.72: i: 0.33', ()=> {
        let actual = calcVolume(1, 1.72);
        let expected= 0.33;
        expect(actual).toBeCloseTo(expected, 0.9); // 0.9 = megengedett eltérés
    });
    xit('Szélső2: t: 1, m: 1: i: 1', ()=> {
        let actual = calcVolume(1, 1);
        let expected= 1;
        expect(actual).toBeCloseTo(expected, 0.9); // 0.9 = megengedett eltérés
    });
});