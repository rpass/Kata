/**
 * Created by robert.passmore on 2016/02/09.
 */
describe('Calculator Test Suite', function () {
    var calc;
    var sum;

    beforeEach(function () {
        calc = new Calculator();
        sum = 0;
    });

    it('should have a method called Add', function () {
        expect(calc.add).toBeDefined();
    });

    it('should take an empty string and return 0', function () {
        expect(calc.add('')).toBe(0);
    });

    it('should take a single integer input and return it', function () {
        sum = calc.add('1');
        expect(sum).toEqual(1);
    });

    it('should take two comma delimited integers and return their sum', function () {
        sum = calc.add('1,2');
        expect(sum).toEqual(3);
    });

    it('should take more than two comma delimited integers and return their sum',
        function () {
            sum = calc.add('1,2,3');
            expect(sum).toEqual(6);
        });

    it('should take two new line delimited integers and return their sum', function () {
        sum = calc.add('1\n2');
        expect(sum).toEqual(3);
    });

    it('should take more than three comma delimited integers and return their sum',
        function () {
            sum = calc.add('1,2,3,4');
            expect(sum).toEqual(10);
        });

    it('should take more than three new line delimited integers and return their sum',
        function () {
            sum = calc.add('1\n2\n3\n4');
            expect(sum).toEqual(10);
        });

    it('should take more than three \'new line\' or comma delimited integers and return their sum',
        function () {
            sum = calc.add('1\n2,3\n4');
            expect(sum).toEqual(10);
        });

    describe('Extract Delimiter function test suite', function () {

    });
});