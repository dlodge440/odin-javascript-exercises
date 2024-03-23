const repeatString = function(str, nums) {
    if (nums<0) {return "ERROR"};
    let finalString = "";
    for (let i = 0; i<nums; i++ ){
        finalString = finalString.concat(str);
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
