/**
 * Created by robert.passmore on 2016/02/08.
 */
var Calculator = function () {
    var self = this;

    var findDelimiter = function(str){
        var delimiter;

        if (str.substr(0,2) === '//'){
            delimiter = str.substr(2, str.indexOf('\n') - 2);
        } else {
            delimiter = /[,]|[\n]/
        }
        return delimiter;
    }

    var hasCustomDelimiter = function(str){
        if(findDelimiter(str) !== /[,]|[\n]/){
            return true;
        } else {
            return false;
        }
    }

    self.add = function (input) {
        if(input === ''){
            return 0;
        } else {
            var delimiter = findDelimiter(input);
            var inputs;

            if(hasCustomDelimiter(input)){
                inputs = input.split(delimiter);
            } else {
                inputs = input.substr(input.indexOf('\n') + 1, input.length).split(delimiter);
                console.log(inputs);
            }

            if (inputs.length === 1){
                return inputs[0];
            } else if (inputs.length > 1){

                inputs = inputs.map(function(x){ return parseInt(x)});
                var sum = inputs.reduce(function(prev, curr){return prev + curr});

                return '' + sum;
            }
        }
    }
};