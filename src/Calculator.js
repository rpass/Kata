/**
 * Created by robert.passmore on 2016/02/09.
 */
var Calculator;
Calculator = function () {

    var standardDelimiters = /[,]|[\n]/;

    //todo create tests for extractDelimiters
    //todo refactor extractDelimeters
    //todo find out how to test a "private" method of a javascript function
    var extractDelimiters = function(input){
        var customDelimiter = input.substr(0,input.indexOf('\n')).match(/\/\/(.*)\n/);
        var delimiter = standardDelimiters;
        if(customDelimiter.length > 1){
            delimiter = customDelimiter;
        } else {
            delimiter = standardDelimiters;
        }
        return delimiter;
    };

    //todo test extractOperands
    var extractOperands = function (input, delimeterRE) {
        var operands = [];
        var inputs = input.split(delimeterRE);
        inputs.forEach(function (x) {
            operands.push(parseInt(x));
        });
        return operands;
    };

    //todo test reduce Inputs
    var reduceInputsToSum = function(input){
        return extractOperands(input, standardDelimiters).reduce(function (prev, curr) {
            return prev + curr;
        }, 0);
    };

    //todo test add
    this.add = function (input) {
        var sum = 0;
        if (input !== '') {
            sum = reduceInputsToSum(input);
            return sum;
        } else {
            return 0;
        }
    };
};