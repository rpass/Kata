/**
 * Created by robert.passmore on 2016/02/08.
 */
//Create a simple String calculator with a method int Add(string numbers)
//The method can take 0, 1 or 2 numbers, and will return their sum
// (for an empty string it will return 0) for example “” or “1” or “1,2”

describe("addition", function () {
    var calc;

    beforeEach(function () {
        calc = new Calculator();
    });

    it('should return 0 if given an empty string as input', function () {
        var sum = calc.add('');
        expect(sum).toEqual(0);
    });

    it('should return the input if only one argument is given', function () {
        var sum = calc.add('3');
        expect(sum).toEqual('3');
    });

    it('should return the sum of each input if two inputs are given delimited by comma', function () {
        var sum = calc.add('3,4');
        expect(sum).toEqual('7');
    });

    it('should return the sum of each input if two inputs are given delimited by newline', function () {
        var sum = calc.add('3\n4');
        expect(sum).toEqual('7');
    });

    it('should return the sum of inputs for any number of inputs delimited by comma', function () {
        var sum = calc.add('3,3,3');
        var sum2 = calc.add('5,7,3,5');
        expect(sum).toEqual('9');
        expect(sum2).toEqual('20');
    });

    it('should return the sum of inputs for any number of inputs delimited by newline', function () {
        var sum = calc.add('3\n3\n3');
        expect(sum).toEqual('9');

        var sum2 = calc.add('5\n7\n3\n5');
        expect(sum2).toEqual('20');
    });

    it('should return the sum of inputs for any number of inputs seperated by a custom delimeter', function () {
        var sum = calc.add('//;\n3;3;3');
        expect(sum).toEqual('9');

        var sum2 = calc.add('//-\n5-7-3-5');
        expect(sum2).toEqual('20');
    });


});