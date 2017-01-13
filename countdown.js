var countdownGenerator = function (x) {
  /* your code here */
  var output = ['T-minus', 'Blast Off!', 'Rockets alreadygone, bub!'];
  var count = x + 1;

  return function () {
    count -= 1;

    if (count > 0) {
      return console.log(output[0] + ' ' + count + '...');
    }
    //can start with 0 to make sure you are not assigning
    if (count === 0) {
      return console.log(output[1]);
    }
    return console.log(output[2]);
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!