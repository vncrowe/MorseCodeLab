var askForPhrase = prompt("Please enter a phrase to be translated into morse code:");
var askForPhraseArray = askForPhrase.toLowerCase().split('');
var convertedPhrase = " ";

var morseCodeAlphabet = {
"a": "._ ",
"b": "_... ",
"c": "_._. ",
"d": "_.. ",
"e": ". ",
"f": ".._. ",
"g": "__. ",
"h": ".... ",
"i": ".. ",
"j": ".___ ",
"k": "_._ ",
"l": "._.. ",
"m": "__ ",
"n": "_. ",
"o": "___ ",
"p": ".__. ",
"q": "__._ ",
"r": "._. ",
"s": "... ",
"t": "_ ",
"u": ".._ ",
"v": "..._ ",
"w": ".__ ",
"x": "_.._ ",
"y": "_.__ ",
"z": "__.. ",
"0": "_____ ",
"1": ".____ ",
"2": "..___ ",
"3": "...__ ",
"4": "...._ ",
"5": "..... ",
"6": "_.... ",
"7": "__... ",
"8": "___.. ",
"9": "____. ",
" ": "|",
}

for (i = 0; i < askForPhraseArray.length; i++){
	var userAnswer = askForPhraseArray[i];
	convertedPhrase += morseCodeAlphabet[userAnswer];
}
document.getElementById('result').innerHTML = convertedPhrase;

	

