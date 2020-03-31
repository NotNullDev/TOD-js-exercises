const repeatString = function(wordToRepeat, numberOfRepeats) {

if(numberOfRepeats < 0){
    return "ERROR"
}else if(numberOfRepeats == 0){
    return "";
}

const newWordArray = [];
for(let i = 0; i < numberOfRepeats; i++){
 newWordArray.push(wordToRepeat);
}

return newWordArray.join("");
}
module.exports = repeatString;
