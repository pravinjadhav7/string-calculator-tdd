describe('String Calculator', function () {
    var calc;

    beforeEach(function () {
        calc = new StringCalculator();
    });

    it('handles empty addition', function () {
        expect(calc.add('')).toEqual(0);
    });

    it('handles unary addition', function () {
        expect(calc.add('133')).toEqual(133);
        expect(calc.add('1')).toEqual(1);
        expect(calc.add('-41')).toEqual(-41);
    });

    it('handles binary addition', function () {
        expect(calc.add('133,36')).toEqual(169);
        expect(calc.add('1,2')).toEqual(3);
        expect(calc.add('-41,50')).toEqual(9);
    });
});