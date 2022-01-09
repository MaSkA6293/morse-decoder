const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decodeElement(match) {
  if (match === "10") {
    return ".";
  } else {
    return "-";
  }
}

function decode(expr) {
  const result = expr.split("**********").map((el) => {
    let arrOfCoddedLetter = el.match(/(\d{10})/g);
    let coddedLetterWithoutZero = arrOfCoddedLetter.map((el) => {
      return el.replace(/(^0+)/, "");
    });
    let arrOfMorseSymbols = coddedLetterWithoutZero.map((el) => {
      return el.replace(/(\d{2})/g, decodeElement);
    });
    return arrOfMorseSymbols
      .reduce((acc, curr) => {
        return (acc = [...acc, MORSE_TABLE[curr]]);
      }, [])
      .join("");
  });
  return result.join(" ");
}

module.exports = {
  decode,
};
