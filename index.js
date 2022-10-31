// code your solution here
function saturdayFun(input = "roller-skate") {
    return `This Saturday, I want to ${input}!`;
}

function mondayWork(input = "go to the office") {
    return `This Monday, I will ${input}.`;
}

function wrapAdjective(flair = "*") {
    const innerFunction = function(parameter = "special") {
        return `You are ${flair}${parameter}${flair}!`
    }
    return innerFunction;
}