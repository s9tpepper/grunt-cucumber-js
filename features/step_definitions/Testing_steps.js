function Testing_steps() {
  var firstNumber;
  var secondNumber;
  var sum = 0;

  this.Given(/^I have the number (\d+) and (\d+)$/, function(arg1, arg2, callback) {
    firstNumber = parseInt(arg1);
    secondNumber = parseInt(arg2);
    callback();
  });

  this.When(/^I add them together$/, function(callback) {
    sum = firstNumber + secondNumber;
    callback();
  });

  this.Then(/^I should have (\d+)$/, function(arg1, callback) {
    var expectedSum = parseInt(arg1);
    if (expectedSum !== sum) {
      throw new Error('It doesn\'t add up! ' + arg1 + ' !== ' + sum);
    }
    callback();
  });

};

module.exports = Testing_steps;
