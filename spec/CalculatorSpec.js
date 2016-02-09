/**
 * Created by robert.passmore on 2016/02/09.
 */
describe('Calculator Test Suite', function () {
    var calc;

    beforeEach(function () {
       calc = new Calculator();
    });

    it('should have a method called Add', function () {
       expect(calc.add()).toBeDefined();
    });

    it('should take an empty string and return 0', function () {
        expect(calc.add('')).toBe(0);
    });


});