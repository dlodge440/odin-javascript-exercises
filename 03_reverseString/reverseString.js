const reverseString = function(inputString) {

    //Check if input is a string
    if (typeof inputString != 'string'){return "ERROR"};

    //Convert to array, reverse order and reconvert to string
    const inputArray = inputString.split("");
    const reversedArray = inputArray.reverse();
    const reversedString = reversedArray.join(""); 
    console.log(reversedString);
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
