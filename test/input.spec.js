
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